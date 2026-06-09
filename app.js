// MAS291 Hub - Core Application Logic

// App State
const state = {
  exams: [],
  chapters: [],
  currentView: 'dashboard',
  history: [],
  activeExam: null,
  qbank: {
    search: '',
    chapter: 'all',
    type: 'all'
  }
};

// Customize marked renderer to handle Mermaid code blocks
if (typeof marked !== 'undefined') {
  const renderer = new marked.Renderer();
  const defaultCodeRenderer = renderer.code.bind(renderer);
  renderer.code = function(code, lang, escaped) {
    if (lang === 'mermaid') {
      // Decode HTML entities (like &quot; or &gt;) so mermaid gets valid syntax
      const unescapedCode = code
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
      return `<div class="mermaid">${unescapedCode}</div>`;
    }
    return defaultCodeRenderer(code, lang, escaped);
  };
  marked.use({ renderer });
}

// MathJax trigger helper
function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    // MathJax v3 typeset
    window.MathJax.typesetPromise().catch((err) => console.log('MathJax typesetting error:', err));
  }
}

// Obsidian Callout Blockquote Preprocessor
function preprocessMarkdown(md) {
  const lines = md.split('\n');
  let result = [];
  let inCallout = false;
  let calloutType = '';
  let calloutTitle = '';
  let calloutContent = [];

  const iconMap = {
    book: '<i class="fa-solid fa-book-open"></i>',
    example: '<i class="fa-solid fa-lightbulb"></i>',
    formula: '<i class="fa-solid fa-square-root-variable"></i>',
    math: '<i class="fa-solid fa-calculator"></i>',
    info: '<i class="fa-solid fa-circle-info"></i>',
    insight: '<i class="fa-solid fa-brain"></i>'
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Match Obsidian callout: "> [!type] Title"
    const match = line.match(/^>\s*\[!([^\]]+)\]\s*(.*)/);
    
    if (match) {
      if (inCallout) {
        // Flush previous callout
        result.push(renderCalloutHtml(calloutType, calloutTitle, calloutContent.join('\n'), iconMap));
        calloutContent = [];
      }
      inCallout = true;
      calloutType = match[1].toLowerCase();
      calloutTitle = match[2].trim();
    } else if (inCallout && line.startsWith('>')) {
      // Extract content from quote line
      calloutContent.push(line.substring(1).trim());
    } else {
      if (inCallout) {
        // End of callout block
        result.push(renderCalloutHtml(calloutType, calloutTitle, calloutContent.join('\n'), iconMap));
        inCallout = false;
        calloutContent = [];
      }
      result.push(line);
    }
  }
  
  if (inCallout) {
    result.push(renderCalloutHtml(calloutType, calloutTitle, calloutContent.join('\n'), iconMap));
  }
  
  return result.join('\n');
}

function renderCalloutHtml(type, title, content, iconMap) {
  // Convert markdown to HTML via marked
  const parsedContent = typeof marked !== 'undefined' ? marked.parse(content) : content;
  const icon = iconMap[type] || '<i class="fa-solid fa-note-sticky"></i>';
  const displayTitle = title || type.toUpperCase();
  
  return `<div class="callout callout-${type}">
    <div class="callout-title">${icon} <span>${displayTitle}</span></div>
    <div class="callout-body">${parsedContent}</div>
  </div>`;
}

// Navigation between views
function switchView(viewId) {
  state.currentView = viewId;
  
  // Hide all sections, show active
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  
  const activeSection = document.getElementById(`view-${viewId}`);
  if (activeSection) {
    activeSection.classList.add('active');
  }
  
  // Update sidebar active menu
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-view') === viewId) {
      item.classList.add('active');
    }
  });

  // Handle specific view entries
  if (viewId !== 'exam-testing' && state.activeExam && state.activeExam.timerInterval) {
    // Stop exam timer if leaving exam screen
    clearInterval(state.activeExam.timerInterval);
  }

  if (viewId === 'dashboard') {
    updateDashboard();
  } else if (viewId === 'exams-select') {
    renderExamsList();
  } else if (viewId === 'question-bank') {
    renderQuestionBank();
  } else if (viewId === 'study-center') {
    typesetMath();
  }

  // Scroll main panel to top
  document.querySelector('.main-content').scrollTop = 0;
}

// Load stats and progress from LocalStorage
function loadHistory() {
  state.history = JSON.parse(localStorage.getItem('mas291_history') || '[]');
  updateDashboard();
  updateSidebarProgress();
}

function updateSidebarProgress() {
  const completedExams = new Set(state.history.filter(h => h.examId !== 'custom').map(h => h.examId));
  document.getElementById('sidebar-completed-count').innerText = `${completedExams.size}/3 đề`;
  
  const progressPercent = (completedExams.size / 3) * 100;
  document.getElementById('sidebar-progress-fill').style.width = `${progressPercent}%`;
  
  // Calc average score
  if (state.history.length > 0) {
    const sum = state.history.reduce((acc, h) => acc + h.score, 0);
    const avg = sum / state.history.length;
    document.getElementById('sidebar-avg-score').innerText = `${avg.toFixed(1)}/10`;
  } else {
    document.getElementById('sidebar-avg-score').innerText = `0.0/10`;
  }
}

function updateDashboard() {
  document.getElementById('dash-completed-tests').innerText = state.history.length;
  
  if (state.history.length > 0) {
    const scoreSum = state.history.reduce((acc, h) => acc + h.score, 0);
    const avgScore = scoreSum / state.history.length;
    document.getElementById('dash-avg-score').innerText = avgScore.toFixed(1);
    
    const correctSum = state.history.reduce((acc, h) => acc + h.correctCount, 0);
    const totalQSum = state.history.reduce((acc, h) => acc + h.totalQuestions, 0);
    const accuracy = (correctSum / totalQSum) * 100;
    document.getElementById('dash-accuracy').innerText = `${Math.round(accuracy)}%`;
  } else {
    document.getElementById('dash-avg-score').innerText = '0.0';
    document.getElementById('dash-accuracy').innerText = '0%';
  }
}

// Render exams list selection screen
function renderExamsList() {
  const container = document.getElementById('exams-container');
  container.innerHTML = '';
  
  state.exams.forEach(exam => {
    const historyEntry = state.history.find(h => h.examId === exam.exam_id);
    const scoreText = historyEntry ? `<div class="exam-detail-row text-emerald"><i class="fa-solid fa-award"></i> Điểm cao nhất: <strong>${historyEntry.score.toFixed(1)}/10</strong></div>` : '';
    
    const card = document.createElement('div');
    card.className = 'exam-select-card';
    card.innerHTML = `
      <div>
        <span class="badge badge-indigo">Đề ${exam.exam_id}</span>
        <h3 class="mt-2">${exam.title}</h3>
      </div>
      <div class="exam-details-list">
        <div class="exam-detail-row"><i class="fa-solid fa-list-check"></i> Số câu hỏi: <strong>50 câu</strong></div>
        <div class="exam-detail-row"><i class="fa-solid fa-hourglass-half"></i> Thời gian: <strong>90 phút</strong></div>
        <div class="exam-detail-row"><i class="fa-solid fa-language"></i> Ngôn ngữ: <strong>Tiếng Anh</strong></div>
        ${scoreText}
      </div>
      <button class="btn btn-primary mt-2" onclick="startExam(${exam.exam_id})">
        <i class="fa-solid fa-play"></i> Bắt đầu thi thử
      </button>
    `;
    container.appendChild(card);
  });
}

// EXAM LOGIC

function startExam(examId) {
  let examTitle = '';
  let questions = [];
  let durationSeconds = 90 * 60; // 90 mins default

  if (examId === 'custom') {
    examTitle = 'Đề luyện tập tự do';
    questions = generateCustomQuestions();
    if (questions.length === 0) {
      alert('Không tìm thấy câu hỏi phù hợp với bộ lọc đã chọn!');
      return;
    }
    const timeLimitInput = parseInt(document.getElementById('custom-time-limit').value);
    durationSeconds = timeLimitInput > 0 ? timeLimitInput * 60 : 0;
  } else {
    const exam = state.exams.find(e => e.exam_id === examId);
    if (!exam) return;
    examTitle = exam.title;
    questions = JSON.parse(JSON.stringify(exam.questions)); // Deep copy
  }

  // Setup active exam state
  state.activeExam = {
    examId: examId,
    title: examTitle,
    questions: questions,
    answers: {},
    flagged: new Set(),
    currentIndex: 0,
    timeLeft: durationSeconds,
    startTime: Date.now(),
    timerInterval: null
  };

  // Configure UI
  document.getElementById('exam-current-title').innerText = examTitle;
  
  // Setup navigation grid
  const gridContainer = document.getElementById('exam-nav-grid');
  gridContainer.innerHTML = '';
  state.activeExam.questions.forEach((_, idx) => {
    const btn = document.createElement('button');
    btn.className = 'nav-grid-btn';
    btn.id = `nav-grid-btn-${idx}`;
    btn.innerText = idx + 1;
    btn.onclick = () => jumpToQuestion(idx);
    gridContainer.appendChild(btn);
  });

  // Start Timer
  const timerBox = document.getElementById('exam-timer-box');
  const timerClock = document.getElementById('exam-timer-clock');
  
  if (durationSeconds > 0) {
    timerBox.style.display = 'flex';
    timerClock.innerText = formatTime(durationSeconds);
    
    state.activeExam.timerInterval = setInterval(() => {
      state.activeExam.timeLeft--;
      timerClock.innerText = formatTime(state.activeExam.timeLeft);
      
      if (state.activeExam.timeLeft <= 0) {
        clearInterval(state.activeExam.timerInterval);
        alert('Hết giờ làm bài! Hệ thống tự động nộp bài.');
        processExamSubmission();
      }
    }, 1000);
  } else {
    // Untimed
    timerBox.style.display = 'none';
  }

  jumpToQuestion(0);
  switchView('exam-testing');
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function jumpToQuestion(index) {
  if (index < 0 || index >= state.activeExam.questions.length) return;
  
  // Save previous index class updates
  const prevIndex = state.activeExam.currentIndex;
  updateGridBtnClass(prevIndex);
  
  state.activeExam.currentIndex = index;
  renderActiveQuestion();
}

function updateGridBtnClass(idx) {
  const btn = document.getElementById(`nav-grid-btn-${idx}`);
  if (!btn) return;
  
  btn.className = 'nav-grid-btn';
  
  if (state.activeExam.currentIndex === idx) {
    btn.classList.add('current');
  }
  
  const qId = state.activeExam.questions[idx].id;
  if (state.activeExam.answers[qId]) {
    btn.classList.add('answered');
  }
  
  if (state.activeExam.flagged.has(qId)) {
    btn.classList.add('flagged');
  }
}

function renderActiveQuestion() {
  const index = state.activeExam.currentIndex;
  const question = state.activeExam.questions[index];
  const qId = question.id;
  
  // Render question text
  document.getElementById('exam-current-num-display').innerText = index + 1;
  document.getElementById('exam-q-chapter').innerText = question.chapter;
  document.getElementById('exam-q-type').innerText = question.type;
  
  // Compile markdown inside question text if any, keeping MathJax code block untouched
  document.getElementById('exam-question-text').innerHTML = question.question_text
    .replace(/\n/g, '<br>'); // preserve linebreaks in simple format
  
  // Render options A, B, C, D
  const optionsContainer = document.getElementById('exam-options-container');
  optionsContainer.innerHTML = '';
  
  const selectedAnswer = state.activeExam.answers[qId];
  
  Object.entries(question.options).forEach(([letter, text]) => {
    const card = document.createElement('div');
    card.className = `option-card ${selectedAnswer === letter ? 'selected' : ''}`;
    card.onclick = () => selectAnswer(letter);
    
    card.innerHTML = `
      <div class="option-letter">${letter}</div>
      <div class="option-text">${text}</div>
    `;
    optionsContainer.appendChild(card);
  });
  
  // Flag button state
  const flagBtn = document.getElementById('btn-flag-question');
  const flagIcon = document.getElementById('flag-icon');
  if (state.activeExam.flagged.has(qId)) {
    flagBtn.className = 'btn btn-warning';
    flagIcon.className = 'fa-solid fa-flag';
    flagBtn.querySelector('span').innerText = 'Bỏ đánh dấu';
  } else {
    flagBtn.className = 'btn btn-outline';
    flagIcon.className = 'fa-regular fa-flag';
    flagBtn.querySelector('span').innerText = 'Đánh dấu câu này';
  }
  
  // Update class of current grid btn
  updateGridBtnClass(index);
  
  // Setup next/prev button disability
  document.getElementById('btn-prev-question').disabled = index === 0;
  document.getElementById('btn-next-question').disabled = index === state.activeExam.questions.length - 1;
  
  // Render Math equations
  typesetMath();
}

function selectAnswer(letter) {
  const index = state.activeExam.currentIndex;
  const qId = state.activeExam.questions[index].id;
  
  state.activeExam.answers[qId] = letter;
  
  // Re-render to show selection styling
  renderActiveQuestion();
}

function toggleFlagActiveQuestion() {
  const index = state.activeExam.currentIndex;
  const qId = state.activeExam.questions[index].id;
  
  if (state.activeExam.flagged.has(qId)) {
    state.activeExam.flagged.delete(qId);
  } else {
    state.activeExam.flagged.add(qId);
  }
  
  renderActiveQuestion();
}

function processExamSubmission() {
  clearInterval(state.activeExam.timerInterval);
  
  const questions = state.activeExam.questions;
  const answers = state.activeExam.answers;
  
  let correctCount = 0;
  questions.forEach(q => {
    if (answers[q.id] === q.correct_answer) {
      correctCount++;
    }
  });
  
  const totalQuestions = questions.length;
  const score = (correctCount / totalQuestions) * 10;
  const accuracy = (correctCount / totalQuestions) * 100;
  
  const timeLimit = state.activeExam.timeLeft;
  const totalTime = parseInt(document.getElementById('custom-time-limit').value || 90) * 60;
  const timeSpentSeconds = totalTime - timeLimit;
  
  // Save to history
  const historyEntry = {
    examId: state.activeExam.examId,
    title: state.activeExam.title,
    score: score,
    correctCount: correctCount,
    totalQuestions: totalQuestions,
    accuracy: accuracy,
    timeSpentSeconds: timeSpentSeconds,
    timestamp: Date.now(),
    answers: { ...answers }, // Clone
    questions: questions // Store questions configuration for review mode
  };
  
  state.history.unshift(historyEntry); // Put at top
  localStorage.setItem('mas291_history', JSON.stringify(state.history));
  
  // Load Results page
  renderScorecard(historyEntry);
}

function renderScorecard(entry) {
  document.getElementById('result-score-value').innerText = entry.score.toFixed(1);
  document.getElementById('result-correct-count').innerText = `${entry.correctCount}/${entry.totalQuestions}`;
  
  // Format time spent
  const minutes = Math.floor(entry.timeSpentSeconds / 60);
  const seconds = entry.timeSpentSeconds % 60;
  document.getElementById('result-time-spent').innerText = `${minutes} phút ${seconds} giây`;
  document.getElementById('result-accuracy-percent').innerText = `${Math.round(entry.accuracy)}%`;
  
  // Rating badges
  const ratingBadge = document.getElementById('result-grade-badge');
  if (entry.score >= 8.5) {
    ratingBadge.innerText = 'Xuất Sắc';
    ratingBadge.className = 'badge badge-emerald';
  } else if (entry.score >= 7.0) {
    ratingBadge.innerText = 'Khá';
    ratingBadge.className = 'badge badge-cyan';
  } else if (entry.score >= 5.0) {
    ratingBadge.innerText = 'Đạt (Trung Bình)';
    ratingBadge.className = 'badge badge-indigo';
  } else {
    ratingBadge.innerText = 'Không Đạt';
    ratingBadge.className = 'badge badge-pink';
  }

  // Calculate chapter breakdown
  const performances = {};
  entry.questions.forEach(q => {
    // extract "Chapter X"
    const match = q.chapter.match(/Chapter\s*\d+/i);
    const chKey = match ? match[0] : 'Tổng Hợp';
    
    if (!performances[chKey]) {
      performances[chKey] = { correct: 0, total: 0, fullName: q.chapter };
    }
    performances[chKey].total++;
    if (entry.answers[q.id] === q.correct_answer) {
      performances[chKey].correct++;
    }
  });

  const perfContainer = document.getElementById('result-chapter-performances');
  perfContainer.innerHTML = '';
  
  Object.entries(performances).forEach(([chKey, val]) => {
    const percent = (val.correct / val.total) * 100;
    const row = document.createElement('div');
    row.className = 'chapter-perf-row';
    
    // determine color based on success
    let barColor = 'var(--color-danger)';
    if (percent >= 80) barColor = 'var(--color-emerald)';
    else if (percent >= 50) barColor = 'var(--color-cyan)';
    
    row.innerHTML = `
      <div class="chapter-perf-info">
        <span class="chapter-perf-name">${val.fullName}</span>
        <span>${val.correct}/${val.total} đúng (${Math.round(percent)}%)</span>
      </div>
      <div class="chapter-perf-bar-outer">
        <div class="chapter-perf-bar-inner" style="width: ${percent}%; background-color: ${barColor}"></div>
      </div>
    `;
    perfContainer.appendChild(row);
  });

  switchView('scorecard');
}

// Detailed answers review mode
function enterReviewMode() {
  const latestEntry = state.history[0]; // Retrieve latest finished test
  if (!latestEntry) return;

  document.getElementById('review-exam-title').innerText = `Chi tiết đáp án - ${latestEntry.title}`;
  
  const container = document.getElementById('review-questions-container');
  container.innerHTML = '';

  latestEntry.questions.forEach((q, idx) => {
    const card = document.createElement('div');
    const uAnswer = latestEntry.answers[q.id];
    const isCorrect = uAnswer === q.correct_answer;
    
    card.className = `review-q-card ${isCorrect ? 'correct-card' : (uAnswer ? 'incorrect-card' : 'unanswered-card')}`;
    
    // Header
    const statusText = isCorrect 
      ? '<span class="text-emerald"><i class="fa-solid fa-circle-check"></i> Chính xác</span>' 
      : (uAnswer 
        ? `<span class="text-danger"><i class="fa-solid fa-circle-xmark"></i> Sai (Lựa chọn của bạn: ${uAnswer})</span>` 
        : '<span class="text-muted"><i class="fa-solid fa-circle-question"></i> Chưa làm</span>');
        
    const headerHtml = `
      <div class="review-q-header">
        <span class="question-number">Câu ${idx + 1} | ${q.chapter}</span>
        ${statusText}
      </div>
    `;

    // Options mapping
    let optionsHtml = '';
    Object.entries(q.options).forEach(([letter, text]) => {
      let optClass = '';
      if (letter === q.correct_answer) {
        optClass = 'correct-opt';
      } else if (uAnswer === letter && !isCorrect) {
        optClass = 'incorrect-choice-opt';
      }

      optionsHtml += `
        <div class="review-option-card ${optClass}">
          <div class="option-letter">${letter}</div>
          <div class="option-text">${text}</div>
          ${letter === q.correct_answer ? '<i class="fa-solid fa-circle-check review-badge-icon correct-icon"></i>' : ''}
          ${uAnswer === letter && !isCorrect ? '<i class="fa-solid fa-circle-xmark review-badge-icon incorrect-icon"></i>' : ''}
        </div>
      `;
    });

    card.innerHTML = `
      ${headerHtml}
      <div class="question-body tex2jax_process">${q.question_text.replace(/\n/g, '<br>')}</div>
      <div class="options-container">${optionsHtml}</div>
    `;
    
    container.appendChild(card);
  });

  switchView('review-mode');
  typesetMath();
}

// CUSTOM QUIZ LOGIC

function renderCustomQuizConfig() {
  const container = document.getElementById('custom-chapters-select');
  container.innerHTML = '';
  
  // Extract unique chapters
  const allChaptersSet = new Set();
  state.exams.forEach(exam => {
    exam.questions.forEach(q => {
      allChaptersSet.add(q.chapter);
    });
  });
  
  const sortedChapters = Array.from(allChaptersSet).sort();
  
  sortedChapters.forEach((chName, idx) => {
    const label = document.createElement('label');
    label.className = 'chapter-checkbox-label';
    label.innerHTML = `
      <input type="checkbox" name="custom-chapters" value="${chName}" checked>
      <span>${chName}</span>
    `;
    container.appendChild(label);
  });
}

function generateCustomQuestions() {
  // Get checked chapters
  const checkboxes = document.querySelectorAll('input[name="custom-chapters"]:checked');
  const selectedChapters = Array.from(checkboxes).map(cb => cb.value);
  
  const qType = document.getElementById('custom-q-type').value;
  const qCount = parseInt(document.getElementById('custom-q-count').value);
  
  // Filter questions pool
  let pool = [];
  state.exams.forEach(exam => {
    exam.questions.forEach(q => {
      // Check chapter matches
      const chMatches = selectedChapters.includes(q.chapter);
      // Check type matches
      const typeMatches = qType === 'all' || q.type.toLowerCase().includes(qType.toLowerCase());
      
      if (chMatches && typeMatches) {
        pool.push(q);
      }
    });
  });
  
  // Shuffle pool
  pool.sort(() => Math.random() - 0.5);
  
  // Take requested count
  return pool.slice(0, qCount);
}

// STUDY CENTER LOGIC

function renderStudyCenterNav() {
  const container = document.getElementById('study-chapters-nav');
  container.innerHTML = '';
  
  state.chapters.forEach(ch => {
    const btn = document.createElement('button');
    btn.className = 'study-chapter-btn';
    btn.id = `study-ch-btn-${ch.id}`;
    btn.onclick = () => loadChapter(ch.id);
    
    let sub = `Chương ${ch.chapter_num}`;
    if (ch.chapter_num === 0) sub = 'Mở Đầu';
    else if (ch.chapter_num === 12) sub = 'Công Thức';
    else if (ch.chapter_num === 13) sub = 'Chiến Thuật';
    
    btn.innerHTML = `
      <span class="ch-num">${sub}</span>
      <span class="ch-title">${ch.title}</span>
    `;
    container.appendChild(btn);
  });
  
  // Load introduction on start
  if (state.chapters.length > 0) {
    loadChapter(state.chapters[0].id);
  }
}

function loadChapter(chapterId) {
  const chapter = state.chapters.find(ch => ch.id === chapterId);
  if (!chapter) return;
  
  // Highlight active button
  document.querySelectorAll('.study-chapter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(`study-ch-btn-${chapterId}`);
  if (activeBtn) activeBtn.classList.add('active');
  
  // Render content
  const notesBody = document.getElementById('study-notes-body');
  
  // Convert markdown to HTML using marked
  let processedMarkdown = preprocessMarkdown(chapter.content);
  
  // Parse markdown
  notesBody.innerHTML = typeof marked !== 'undefined' ? marked.parse(processedMarkdown) : processedMarkdown;
  
  // scroll body of study-content-panel back to top
  document.querySelector('.study-content-panel').scrollTop = 0;
  
  // Typeset Math formulas
  typesetMath();
  
  // Render Mermaid diagrams
  if (window.mermaid) {
    try {
      window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    } catch (e) {
      console.error("Mermaid initialization failed:", e);
    }
  } else {
    // Retry in 150ms in case the library is still loading
    setTimeout(() => {
      if (window.mermaid) {
        try {
          window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
        } catch (e) {
          console.error("Mermaid retry initialization failed:", e);
        }
      }
    }, 150);
  }
}

// QUESTION BANK BROWSER LOGIC

function renderQuestionBank() {
  const searchInput = document.getElementById('qbank-search-input').value.toLowerCase().trim();
  const filterCh = document.getElementById('qbank-filter-chapter').value;
  const filterType = document.getElementById('qbank-filter-type').value;
  
  const container = document.getElementById('qbank-questions-container');
  container.innerHTML = '';
  
  let matches = [];
  let count = 0;
  
  state.exams.forEach(exam => {
    exam.questions.forEach(q => {
      // Filter by chapter
      if (filterCh !== 'all' && !q.chapter.toLowerCase().includes(filterCh.toLowerCase())) return;
      
      // Filter by type
      if (filterType !== 'all' && !q.type.toLowerCase().includes(filterType.toLowerCase())) return;
      
      // Filter by search text
      if (searchInput !== '') {
        const textMatch = q.question_text.toLowerCase().includes(searchInput);
        const optionsMatch = Object.values(q.options).some(opt => opt.toLowerCase().includes(searchInput));
        const chapterMatch = q.chapter.toLowerCase().includes(searchInput);
        if (!textMatch && !optionsMatch && !chapterMatch) return;
      }
      
      matches.push(q);
    });
  });
  
  document.getElementById('qbank-matches-count').innerText = matches.length;
  
  if (matches.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-magnifying-glass-minus"></i>
        <p>Không tìm thấy câu hỏi phù hợp!</p>
      </div>
    `;
    return;
  }
  
  // Paginate or limit render to 40 questions first to avoid browser lag, loading more on scroll or button
  const renderLimit = Math.min(matches.length, 30);
  
  for (let i = 0; i < renderLimit; i++) {
    const q = matches[i];
    const card = document.createElement('div');
    card.className = 'qbank-item';
    card.id = `qbank-item-${q.id}`;
    
    let optionsHtml = '';
    Object.entries(q.options).forEach(([letter, text]) => {
      optionsHtml += `
        <div class="qbank-choice-row">
          <strong>${letter}.</strong>
          <span>${text}</span>
        </div>
      `;
    });
    
    card.innerHTML = `
      <div class="qbank-item-header">
        <span class="qbank-q-num">${q.chapter}</span>
        <div class="qbank-meta-tags">
          <span class="badge badge-indigo">${q.type}</span>
        </div>
      </div>
      <div class="qbank-q-text tex2jax_process">${q.question_text.replace(/\n/g, '<br>')}</div>
      <div class="qbank-choices">${optionsHtml}</div>
      <div class="qbank-reveal-container">
        <button class="btn btn-secondary btn-xs qbank-reveal-btn" onclick="toggleQBankAnswer('${q.id}')">
          <i class="fa-solid fa-eye"></i> Hiện đáp án
        </button>
        <div class="qbank-answer-box mt-2" id="qbank-ans-box-${q.id}" style="display: none">
          <i class="fa-solid fa-square-check"></i> Đáp án đúng: <strong>${q.correct_answer}</strong>
        </div>
      </div>
    `;
    container.appendChild(card);
  }
  
  if (matches.length > renderLimit) {
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = 'btn btn-outline btn-full-width';
    loadMoreBtn.innerText = `Tải thêm ${matches.length - renderLimit} câu hỏi nữa`;
    loadMoreBtn.onclick = () => {
      loadMoreBtn.remove();
      // Render remaining
      for (let i = renderLimit; i < matches.length; i++) {
        const q = matches[i];
        const card = document.createElement('div');
        card.className = 'qbank-item';
        card.id = `qbank-item-${q.id}`;
        
        let optionsHtml = '';
        Object.entries(q.options).forEach(([letter, text]) => {
          optionsHtml += `
            <div class="qbank-choice-row">
              <strong>${letter}.</strong>
              <span>${text}</span>
            </div>
          `;
        });
        
        card.innerHTML = `
          <div class="qbank-item-header">
            <span class="qbank-q-num">${q.chapter}</span>
            <div class="qbank-meta-tags">
              <span class="badge badge-indigo">${q.type}</span>
            </div>
          </div>
          <div class="qbank-q-text tex2jax_process">${q.question_text.replace(/\n/g, '<br>')}</div>
          <div class="qbank-choices">${optionsHtml}</div>
          <div class="qbank-reveal-container">
            <button class="btn btn-secondary btn-xs qbank-reveal-btn" onclick="toggleQBankAnswer('${q.id}')">
              <i class="fa-solid fa-eye"></i> Hiện đáp án
            </button>
            <div class="qbank-answer-box mt-2" id="qbank-ans-box-${q.id}" style="display: none">
              <i class="fa-solid fa-square-check"></i> Đáp án đúng: <strong>${q.correct_answer}</strong>
            </div>
          </div>
        `;
        container.appendChild(card);
      }
      typesetMath();
    };
    container.appendChild(loadMoreBtn);
  }

  typesetMath();
}

function toggleQBankAnswer(qId) {
  const ansBox = document.getElementById(`qbank-ans-box-${qId}`);
  const btn = document.querySelector(`#qbank-item-${qId} .qbank-reveal-btn`);
  
  if (ansBox.style.display === 'none') {
    ansBox.style.display = 'flex';
    btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Ẩn đáp án';
  } else {
    ansBox.style.display = 'none';
    btn.innerHTML = '<i class="fa-solid fa-eye"></i> Hiện đáp án';
  }
}

// SETUP EVENTS & INITIALIZATION

function initializeApp() {
  const overlay = document.getElementById('loading-overlay');
  overlay.classList.add('active');
  
  try {
    // Read from data.js global variables directly (No CORS fetch needed)
    state.exams = examsData;
    state.chapters = chaptersData;
    
    // Load history and setup view
    loadHistory();
    renderExamsList();
    renderCustomQuizConfig();
    renderStudyCenterNav();
    
    overlay.classList.remove('active');
    switchView('dashboard');
  } catch (error) {
    console.error('Initialization failed:', error);
    document.getElementById('loading-message').innerHTML = `
      <span style="color: var(--color-danger)">Lỗi tải dữ liệu!</span><br>
      <small style="font-size: 0.8rem">Vui lòng kiểm tra file data.js.</small>
    `;
  }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar navigation click
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = item.getAttribute('data-view');
      switchView(viewId);
    });
  });

  // Dashboard buttons
  document.getElementById('btn-dash-exam-1').addEventListener('click', () => startExam(1));
  document.getElementById('btn-dash-exam-2').addEventListener('click', () => startExam(2));
  document.getElementById('btn-dash-study').addEventListener('click', () => switchView('study-center'));
  document.getElementById('btn-dash-read-strategy').addEventListener('click', () => {
    switchView('study-center');
    // Load MAS291_Chien_Thuoc_On_Luyen chapter
    loadChapter('mas291_chien_thuoc_on_luyen');
  });

  // Exam navigation buttons
  document.getElementById('btn-prev-question').addEventListener('click', () => {
    jumpToQuestion(state.activeExam.currentIndex - 1);
  });
  document.getElementById('btn-next-question').addEventListener('click', () => {
    jumpToQuestion(state.activeExam.currentIndex + 1);
  });
  document.getElementById('btn-flag-question').addEventListener('click', toggleFlagActiveQuestion);
  document.getElementById('btn-submit-exam').addEventListener('click', () => {
    // Check unanswered questions
    const unansweredCount = state.activeExam.questions.length - Object.keys(state.activeExam.answers).length;
    let confirmMsg = 'Bạn chắc chắn muốn nộp bài thi?';
    if (unansweredCount > 0) {
      confirmMsg = `Bạn còn ${unansweredCount} câu chưa trả lời. Bạn vẫn muốn nộp bài chứ?`;
    }
    if (confirm(confirmMsg)) {
      processExamSubmission();
    }
  });

  // Custom Quiz Configuration events
  document.getElementById('btn-select-all-chapters').addEventListener('click', () => {
    document.querySelectorAll('input[name="custom-chapters"]').forEach(cb => cb.checked = true);
  });
  document.getElementById('btn-deselect-all-chapters').addEventListener('click', () => {
    document.querySelectorAll('input[name="custom-chapters"]').forEach(cb => cb.checked = false);
  });
  document.getElementById('btn-start-custom-quiz').addEventListener('click', () => {
    startExam('custom');
  });

  // Scorecard actions
  document.getElementById('btn-go-review-mode').addEventListener('click', enterReviewMode);
  document.getElementById('btn-back-to-dashboard').addEventListener('click', () => switchView('dashboard'));
  document.getElementById('btn-review-back-to-scorecard').addEventListener('click', () => {
    renderScorecard(state.history[0]);
  });

  // Question bank search and filter events
  document.getElementById('qbank-search-input').addEventListener('input', renderQuestionBank);
  document.getElementById('qbank-filter-chapter').addEventListener('change', renderQuestionBank);
  document.getElementById('qbank-filter-type').addEventListener('change', renderQuestionBank);

  // Initialize!
  initializeApp();
});
