// MAS291 Local Quiz Data

const examsData = [
  {
    "exam_id": 291,
    "title": "MAS291 Practice Exam 1",
    "questions": [
      {
        "id": "exam_291_q_1",
        "q_num": 1,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Theory",
        "question_text": "If two events $A$ and $B$ are mutually exclusive, which of the following must be true?",
        "options": {
          "A": "$P(A \\cap B) = 0$",
          "B": "$P(A \\cup B) = 1$",
          "C": "$P(A) + P(B) = 1$",
          "D": "$P(A | B) = P(A)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_2",
        "q_num": 2,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Application",
        "question_text": "For any two events $A$ and $B$, if $P(A) = 0.4$, $P(B) = 0.5$, and $P(A \\cap B) = 0.1$, find $P(A \\cup B)$.",
        "options": {
          "A": "0.9",
          "B": "0.8",
          "C": "0.7",
          "D": "0.3"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_3",
        "q_num": 3,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Application",
        "question_text": "If $P(A) = 0.6$, $P(B) = 0.3$, and $A$ and $B$ are independent events, what is $P(A \\cap B)$?",
        "options": {
          "A": "0.9",
          "B": "0.3",
          "C": "0.18",
          "D": "0.5"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_4",
        "q_num": 4,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Application",
        "question_text": "Suppose $P(A) = 0.5$ and $P(B | A) = 0.4$. What is the probability of the intersection $P(A \\cap B)$?",
        "options": {
          "A": "0.9",
          "B": "0.2",
          "C": "0.8",
          "D": "0.1"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_5",
        "q_num": 5,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Application",
        "question_text": "Let $A$ and $B$ be two events. If $P(A) = 0.3$, $P(B) = 0.4$, and $P(A | B) = 0.5$, find the conditional probability $P(B | A)$.",
        "options": {
          "A": "0.67",
          "B": "0.50",
          "C": "0.33",
          "D": "0.60"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_6",
        "q_num": 6,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Bayes' Theorem Application",
        "question_text": "A factory has two machines producing light bulbs. Machine 1 produces 60% of the bulbs, with a 2% defect rate. Machine 2 produces 40% of the bulbs, with a 3% defect rate. If a randomly chosen bulb is defective, what is the probability it was produced by Machine 1?",
        "options": {
          "A": "0.600",
          "B": "0.500",
          "C": "0.400",
          "D": "0.480"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_7",
        "q_num": 7,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Theory",
        "question_text": "Which of the following is NOT a property of a discrete Probability Mass Function (PMF) $f(x)$?",
        "options": {
          "A": "$f(x) \\ge 0$ for all $x$",
          "B": "$\\sum_{x} f(x) = 1$",
          "C": "$f(x) \\le 1$ for all $x$",
          "D": "$f(x) = F'(x)$ where $F(x)$ is the cumulative distribution function"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_8",
        "q_num": 8,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Expectation Application",
        "question_text": "Let $X$ be a discrete random variable with PMF $f(1) = 0.2$, $f(2) = 0.5$, $f(3) = 0.3$. Find the expected value $E(X)$.",
        "options": {
          "A": "2.0",
          "B": "2.1",
          "C": "2.5",
          "D": "1.8"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_9",
        "q_num": 9,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Variance Application",
        "question_text": "If $E(X) = 5$ and $E(X^2) = 29$, find the variance $V(X)$ of the random variable $X$.",
        "options": {
          "A": "24",
          "B": "4",
          "C": "9",
          "D": "3"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_10",
        "q_num": 10,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Theory",
        "question_text": "A coin is tossed 10 times. Let $X$ be the number of heads. What is the probability distribution of $X$?",
        "options": {
          "A": "Poisson distribution",
          "B": "Geometric distribution",
          "C": "Binomial distribution",
          "D": "Hypergeometric distribution"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_11",
        "q_num": 11,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Binomial Application",
        "question_text": "A marksman has an 80% chance of hitting a target on each shot. If he shoots 5 times independently, what is the probability that he hits the target exactly 4 times?",
        "options": {
          "A": "0.4096",
          "B": "0.3277",
          "C": "0.0819",
          "D": "0.2048"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_12",
        "q_num": 12,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Geometric Expectation Application",
        "question_text": "In a geometric distribution with success probability $p = 0.25$, what is the expected number of trials until the first success?",
        "options": {
          "A": "4",
          "B": "3",
          "C": "2",
          "D": "5"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_13",
        "q_num": 13,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Poisson Application",
        "question_text": "Suppose that the number of customer arrivals at a bank counter follows a Poisson distribution with an average of 4 customers per hour. Find the probability of exactly 2 arrivals in a given hour.",
        "options": {
          "A": "$8e^{-4}$",
          "B": "$16e^{-4}$",
          "C": "$4e^{-4}$",
          "D": "$2e^{-4}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_14",
        "q_num": 14,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Theory",
        "question_text": "If $X$ is a continuous random variable with Cumulative Distribution Function $F(x)$, then for any real number $c$, the probability $P(X = c)$ is always:",
        "options": {
          "A": "1",
          "B": "0",
          "C": "$F(c)$",
          "D": "$f(c)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_15",
        "q_num": 15,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Uniform Application",
        "question_text": "A continuous random variable $X$ is uniformly distributed over the interval $[2, 10]$. Find the probability $P(4 \\le X \\le 8)$.",
        "options": {
          "A": "0.5",
          "B": "0.4",
          "C": "0.6",
          "D": "0.3"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_16",
        "q_num": 16,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Standardization Theory",
        "question_text": "If $X \\sim N(\\mu, \\sigma^2)$, which of the following standardizes $X$ to a standard normal variable $Z \\sim N(0, 1)$?",
        "options": {
          "A": "$Z = \\frac{X + \\mu}{\\sigma}$",
          "B": "$Z = \\frac{X - \\mu}{\\sigma}$",
          "C": "$Z = \\frac{X - \\mu}{\\sigma^2}$",
          "D": "$Z = \\frac{X - \\sigma}{\\mu}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_17",
        "q_num": 17,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Normal Application",
        "question_text": "Suppose $X \\sim N(100, 15^2)$. Find the value of $P(X \\le 130)$ using the standard normal distribution CDF $\\Phi(z)$ (where $\\Phi(2) = 0.9772$, $\\Phi(1.5) = 0.9332$).",
        "options": {
          "A": "0.9772",
          "B": "0.9332",
          "C": "0.0228",
          "D": "0.8413"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_18",
        "q_num": 18,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Exponential Application",
        "question_text": "The lifetime of an electronic component follows an exponential distribution with rate parameter $\\lambda = 0.2$ per year. What is the expected lifetime of this component?",
        "options": {
          "A": "0.2 years",
          "B": "5 years",
          "C": "2 years",
          "D": "10 years"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_19",
        "q_num": 19,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Theory",
        "question_text": "For an exponential distribution $X \\sim Exp(\\lambda)$, what is the cumulative distribution function $F(x)$ for $x \\ge 0$?",
        "options": {
          "A": "$e^{-\\lambda x}$",
          "B": "$1 - e^{-\\lambda x}$",
          "C": "$\\lambda e^{-\\lambda x}$",
          "D": "$1 - \\lambda e^{-\\lambda x}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_20",
        "q_num": 20,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Theory",
        "question_text": "Under what condition is it appropriate to use the Normal approximation to the Binomial distribution $X \\sim Bin(n, p)$?",
        "options": {
          "A": "$n > 30$",
          "B": "$np > 5$ and $n(1-p) > 5$",
          "C": "$p < 0.1$ and $n \\ge 100$",
          "D": "$np < 5$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_21",
        "q_num": 21,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Theory",
        "question_text": "Which measure of central tendency is most affected by extreme outliers in a dataset?",
        "options": {
          "A": "Median",
          "B": "Mode",
          "C": "Mean",
          "D": "Interquartile Range (IQR)"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_22",
        "q_num": 22,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Application",
        "question_text": "Calculate the sample variance ($s^2$) of the following sample dataset: $\\{3, 6, 9\\}$.",
        "options": {
          "A": "9",
          "B": "6",
          "C": "3",
          "D": "4.5"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_23",
        "q_num": 23,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Theory",
        "question_text": "In a box plot, the line inside the box represents which statistical measure?",
        "options": {
          "A": "Mean",
          "B": "Median",
          "C": "Mode",
          "D": "Range"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_24",
        "q_num": 24,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Outliers Application",
        "question_text": "If a dataset has $Q_1 = 20$ and $Q_3 = 35$, any data point greater than which value is classified as an outlier using the 1.5 IQR rule?",
        "options": {
          "A": "50",
          "B": "57.5",
          "C": "42.5",
          "D": "60"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_25",
        "q_num": 25,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Theory",
        "question_text": "A point estimator $\\hat{\\theta}$ is said to be an unbiased estimator of a parameter $\\theta$ if:",
        "options": {
          "A": "$V(\\hat{\\theta}) = 0$",
          "B": "$E(\\hat{\\theta}) = \\theta$",
          "C": "$\\hat{\\theta} = \\theta$ for all samples",
          "D": "$E(\\hat{\\theta}) = 0$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_26",
        "q_num": 26,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Theory",
        "question_text": "The standard deviation of a point estimator is commonly referred to as its:",
        "options": {
          "A": "Variance",
          "B": "Bias",
          "C": "Standard Error",
          "D": "Confidence Coefficient"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_27",
        "q_num": 27,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Theory",
        "question_text": "According to the Central Limit Theorem (CLT), the sampling distribution of the sample mean $\\bar{X}$ will be approximately normal if the sample size $n$ satisfies:",
        "options": {
          "A": "$n \\ge 10$",
          "B": "$n \\ge 30$",
          "C": "$n \\le 30$",
          "D": "The population is symmetric and $n \\ge 5$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_28",
        "q_num": 28,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "CLT Application",
        "question_text": "Suppose a population has mean $\\mu = 50$ and standard deviation $\\sigma = 10$. If we draw a random sample of size $n = 100$, what are the mean and standard error of the sample mean $\\bar{X}$?",
        "options": {
          "A": "Mean = 50, SE = 10",
          "B": "Mean = 50, SE = 1",
          "C": "Mean = 5, SE = 1",
          "D": "Mean = 50, SE = 0.1"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_29",
        "q_num": 29,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Theory",
        "question_text": "What happens to the width of a confidence interval for a population mean as the confidence level increases (holding other factors constant)?",
        "options": {
          "A": "The width decreases",
          "B": "The width increases",
          "C": "The width remains the same",
          "D": "The width becomes zero"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_30",
        "q_num": 30,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Theory",
        "question_text": "Which critical value should be used to construct a 95% confidence interval for the population mean when the population variance is known?",
        "options": {
          "A": "$z_{0.025} = 1.96$",
          "B": "$z_{0.05} = 1.645$",
          "C": "$t_{0.025, n-1}$",
          "D": "$z_{0.01} = 2.33$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_31",
        "q_num": 31,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Z-Interval Application",
        "question_text": "A sample of size $n = 25$ is drawn from a normal population with standard deviation $\\sigma = 5$. The sample mean is $\\bar{x} = 20$. Calculate the 95% confidence interval for the population mean $\\mu$ (using $z_{0.025} = 1.96$).",
        "options": {
          "A": "$[18.04, 21.96]$",
          "B": "$[19.02, 20.98]$",
          "C": "$[17.50, 22.50]$",
          "D": "$[15.00, 25.00]$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_32",
        "q_num": 32,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Theory",
        "question_text": "Under what condition should the $t$-distribution be used instead of the standard normal $z$-distribution for constructing a confidence interval for the population mean $\\mu$?",
        "options": {
          "A": "When the population is skewed and sample size is small",
          "B": "When the population variance $\\sigma^2$ is unknown and the population is normal",
          "C": "When the sample size is larger than 100",
          "D": "When the population variance $\\sigma^2$ is known"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_33",
        "q_num": 33,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Proportion Application",
        "question_text": "A random sample of size $n = 100$ has a sample proportion $\\hat{p} = 0.4$. Find the standard error of the sample proportion $SE(\\hat{p})$.",
        "options": {
          "A": "0.049",
          "B": "0.0024",
          "C": "0.49",
          "D": "0.24"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_34",
        "q_num": 34,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Sample Size Application",
        "question_text": "We want to estimate the population mean with a margin of error $E = 2$ at a 95% confidence level ($z_{0.025} = 1.96$). If the population standard deviation is $\\sigma = 10$, what is the minimum required sample size $n$?",
        "options": {
          "A": "96",
          "B": "97",
          "C": "100",
          "D": "25"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_35",
        "q_num": 35,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "A Type I error in hypothesis testing occurs when we:",
        "options": {
          "A": "Fail to reject a false null hypothesis",
          "B": "Reject a true null hypothesis",
          "C": "Reject a false alternative hypothesis",
          "D": "Accept a true alternative hypothesis"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_36",
        "q_num": 36,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "The significance level $\\alpha$ of a hypothesis test is the probability of committing which type of error?",
        "options": {
          "A": "Type I error",
          "B": "Type II error",
          "C": "Sampling error",
          "D": "Non-sampling error"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_37",
        "q_num": 37,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "t-Test Application",
        "question_text": "We are testing $H_0: \\mu = 50$ against $H_1: \\mu > 50$. A sample of size $n = 25$ yields a sample mean $\\bar{x} = 53$ and a sample standard deviation $s = 5$. Calculate the value of the $t$-test statistic $T_0$.",
        "options": {
          "A": "1.5",
          "B": "3.0",
          "C": "6.0",
          "D": "1.2"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_38",
        "q_num": 38,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "If the p-value of a hypothesis test is 0.02, and we test at the significance level $\\alpha = 0.05$, what is our decision?",
        "options": {
          "A": "Reject the null hypothesis $H_0$",
          "B": "Fail to reject the null hypothesis $H_0$",
          "C": "Reject the alternative hypothesis $H_1$",
          "D": "Conclude that the test is invalid"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_39",
        "q_num": 39,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "For a two-tailed $Z$-test for the population mean at significance level $\\alpha = 0.05$, the rejection region is defined by which of the following criteria?",
        "options": {
          "A": "$Z_0 > 1.96$",
          "B": "$Z_0 < -1.96$",
          "C": "$|Z_0| > 1.96$",
          "D": "$|Z_0| > 1.645$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_40",
        "q_num": 40,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "A researcher wishes to test if the proportion of defective components is less than 5%. The correct null and alternative hypotheses are:",
        "options": {
          "A": "$H_0: p = 0.05$ vs $H_1: p > 0.05$",
          "B": "$H_0: p = 0.05$ vs $H_1: p < 0.05$",
          "C": "$H_0: p \\ne 0.05$ vs $H_1: p = 0.05$",
          "D": "$H_0: p < 0.05$ vs $H_1: p = 0.05$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_41",
        "q_num": 41,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Pooled Variance Application",
        "question_text": "In comparing two independent population means under the assumption of equal variances ($\\sigma_1^2 = \\sigma_2^2$), we calculate a pooled sample variance $S_p^2$. If $n_1 = 10, s_1^2 = 4$ and $n_2 = 15, s_2^2 = 9$, find the pooled variance $S_p^2$.",
        "options": {
          "A": "6.50",
          "B": "7.04",
          "C": "8.00",
          "D": "5.50"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_42",
        "q_num": 42,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "What is the degrees of freedom for the pooled $t$-test when comparing two independent population means with sample sizes $n_1$ and $n_2$?",
        "options": {
          "A": "$n_1 + n_2 - 1$",
          "B": "$n_1 + n_2 - 2$",
          "C": "$n_1 + n_2$",
          "D": "$\\min(n_1 - 1, n_2 - 1)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_43",
        "q_num": 43,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "When analyzing the difference between two population means using paired samples (dependent samples), we compute the differences $d_i = x_{1i} - x_{2i}$. The test reduces to a single-sample test on the mean of these differences $\\mu_d$. What test statistic is used?",
        "options": {
          "A": "Two-sample independent $Z$-statistic",
          "B": "Paired $t$-statistic",
          "C": "F-statistic",
          "D": "Chi-square statistic"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_44",
        "q_num": 44,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "We are comparing two independent proportions $p_1$ and $p_2$. Under the null hypothesis $H_0: p_1 = p_2$, the pooled proportion estimator $\\hat{p}$ is calculated as:",
        "options": {
          "A": "$\\frac{\\hat{p}_1 + \\hat{p}_2}{2}$",
          "B": "$\\frac{X_1 + X_2}{n_1 + n_2}$",
          "C": "$\\hat{p}_1 \\times \\hat{p}_2$",
          "D": "$\\frac{X_1}{n_1} + \\frac{X_2}{n_2}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_45",
        "q_num": 45,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "z-Test Application",
        "question_text": "If we wish to test $H_0: \\mu_1 - \\mu_2 = 0$ against $H_1: \\mu_1 - \\mu_2 \\ne 0$ with known population variances $\\sigma_1^2 = 9, \\sigma_2^2 = 16$. Given sample sizes $n_1 = 36, n_2 = 64$ and sample means $\\bar{x}_1 = 20, \\bar{x}_2 = 18$. Find the test statistic $Z_0$.",
        "options": {
          "A": "2.83",
          "B": "4.00",
          "C": "2.00",
          "D": "1.41"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_46",
        "q_num": 46,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Theory",
        "question_text": "In the simple linear regression model $Y = \\beta_0 + \\beta_1 x + \\epsilon$, the term $\\epsilon$ represents:",
        "options": {
          "A": "The slope coefficient",
          "B": "The intercept",
          "C": "The random error term",
          "D": "The predicted value"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_47",
        "q_num": 47,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Slope Application",
        "question_text": "Given the summary statistics: $S_{xx} = 40$ and $S_{xy} = 60$. Find the least-squares estimate of the slope $\\hat{\\beta}_1$.",
        "options": {
          "A": "0.67",
          "B": "1.50",
          "C": "2.40",
          "D": "1.00"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_48",
        "q_num": 48,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Intercept Application",
        "question_text": "If the estimated regression line is $\\hat{y} = 10 + 2.5x$ and the mean of the independent variable is $\\bar{x} = 4$, what is the mean of the dependent variable $\\bar{y}$?",
        "options": {
          "A": "20",
          "B": "10",
          "C": "14",
          "D": "30"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_49",
        "q_num": 49,
        "chapter": "Chapter 11: Linear Regression",
        "type": "R-Square Application",
        "question_text": "The coefficient of determination $R^2$ represents the proportion of variation in $Y$ that is explained by the regression model. If the correlation coefficient is $r = -0.8$, what is $R^2$?",
        "options": {
          "A": "-0.64",
          "B": "0.64",
          "C": "0.80",
          "D": "0.16"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_50",
        "q_num": 50,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Theory",
        "question_text": "Which of the following value of correlation coefficient $r$ indicates the strongest linear relationship between two variables?",
        "options": {
          "A": "0.75",
          "B": "-0.90",
          "C": "0.00",
          "D": "0.85"
        },
        "correct_answer": ""
      }
    ]
  },
  {
    "exam_id": 291,
    "title": "MAS291 Practice Exam 2",
    "questions": [
      {
        "id": "exam_291_q_1",
        "q_num": 1,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Theory",
        "question_text": "The set of all possible outcomes of a random experiment is called the:",
        "options": {
          "A": "Event space",
          "B": "Sample space",
          "C": "Outcome space",
          "D": "Probability space"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_2",
        "q_num": 2,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Theory",
        "question_text": "Two events $A$ and $B$ are independent if and only if:",
        "options": {
          "A": "$P(A \\cap B) = 0$",
          "B": "$P(A | B) = P(A)$",
          "C": "$P(A \\cup B) = P(A) + P(B)$",
          "D": "$P(A) + P(B) = 1$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_3",
        "q_num": 3,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Application",
        "question_text": "If $P(A) = 0.7$ and $P(B) = 0.5$, and $A$ and $B$ are independent, what is the probability $P(A \\cup B)$?",
        "options": {
          "A": "1.2",
          "B": "0.85",
          "C": "0.35",
          "D": "0.20"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_4",
        "q_num": 4,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Application",
        "question_text": "If $P(A) = 0.35$, $P(B) = 0.45$, and $P(A \\cup B) = 0.65$, find the probability of the intersection $P(A \\cap B)$.",
        "options": {
          "A": "0.15",
          "B": "0.80",
          "C": "0.20",
          "D": "0.30"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_5",
        "q_num": 5,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Multiplication Rule Application",
        "question_text": "A drawer contains 6 black socks and 4 white socks. If two socks are selected at random without replacement, what is the probability that both socks are white?",
        "options": {
          "A": "0.16",
          "B": "0.133",
          "C": "0.267",
          "D": "0.12"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_6",
        "q_num": 6,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Bayes' Theorem Application",
        "question_text": "In a town, 3% of the people have a certain disease. A test for the disease is 90% accurate for those who have it (true positive), and has a 5% false positive rate. If a person tests positive, what is the probability they actually have the disease?",
        "options": {
          "A": "0.358",
          "B": "0.900",
          "C": "0.030",
          "D": "0.375"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_7",
        "q_num": 7,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Theory",
        "question_text": "The Cumulative Distribution Function $F(x)$ of a discrete random variable $X$ is defined as:",
        "options": {
          "A": "$F(x) = P(X = x)$",
          "B": "$F(x) = P(X \\le x)$",
          "C": "$F(x) = P(X \\ge x)$",
          "D": "$F(x) = \\sum_{t > x} f(t)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_8",
        "q_num": 8,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Variance properties Application",
        "question_text": "If a discrete random variable $X$ has variance $V(X) = 4$, what is the variance of the transformed variable $Y = -3X + 5$?",
        "options": {
          "A": "-7",
          "B": "17",
          "C": "36",
          "D": "12"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_9",
        "q_num": 9,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Binomial Expectation Application",
        "question_text": "A production line has a 5% defect rate. If a batch of 20 items is randomly selected, what is the expected number of defective items in the batch?",
        "options": {
          "A": "1",
          "B": "5",
          "C": "0.05",
          "D": "2"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_10",
        "q_num": 10,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Theory",
        "question_text": "Which discrete probability distribution is appropriate when sampling without replacement from a finite population containing two types of items?",
        "options": {
          "A": "Binomial distribution",
          "B": "Poisson distribution",
          "C": "Hypergeometric distribution",
          "D": "Geometric distribution"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_11",
        "q_num": 11,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Hypergeometric Application",
        "question_text": "A bag contains 7 red balls and 3 blue balls. If we select 4 balls at random without replacement, what is the probability of getting exactly 3 red balls?",
        "options": {
          "A": "0.50",
          "B": "0.35",
          "C": "0.21",
          "D": "0.42"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_12",
        "q_num": 12,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Poisson Application",
        "question_text": "A Poisson process has a rate of $\\lambda = 2$ events per minute. What is the probability of observing exactly 3 events in a 2-minute interval?",
        "options": {
          "A": "$8e^{-4}/3$",
          "B": "$32e^{-4}/3$",
          "C": "$4e^{-2}/3$",
          "D": "$16e^{-4}/3$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_13",
        "q_num": 13,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Negative Binomial Expectation",
        "question_text": "Let $X \\sim NB(r, p)$ be a negative binomial random variable representing the number of trials until the $r$-th success. If $r = 3$ and $p = 0.5$, find $E(X)$.",
        "options": {
          "A": "6",
          "B": "1.5",
          "C": "3",
          "D": "12"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_14",
        "q_num": 14,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Theory",
        "question_text": "For a continuous random variable $X$ with Probability Density Function $f(x)$, which of the following is true?",
        "options": {
          "A": "$f(x)$ can never exceed 1",
          "B": "$P(a \\le X \\le b) = \\int_a^b f(x) dx$",
          "C": "$f(x) = P(X = x)$",
          "D": "$\\int_{-\\infty}^{\\infty} f(x) dx$ can be greater than 1"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_15",
        "q_num": 15,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Uniform Variance Application",
        "question_text": "Let $X \\sim Uniform[1, 5]$. What is the variance $V(X)$ of this continuous uniform distribution?",
        "options": {
          "A": "1.33",
          "B": "2.00",
          "C": "0.67",
          "D": "1.67"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_16",
        "q_num": 16,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Standard Normal Theory",
        "question_text": "If $Z$ is a standard normal random variable, what is $P(Z > 0)$?",
        "options": {
          "A": "1.0",
          "B": "0.5",
          "C": "0.25",
          "D": "0.0"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_17",
        "q_num": 17,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Normal Application",
        "question_text": "Suppose $X \\sim N(50, 4^2)$. Find the value of $P(42 \\le X \\le 58)$ using standard normal distribution values ($\\Phi(2) = 0.9772$, $\\Phi(-2) = 0.0228$).",
        "options": {
          "A": "0.9544",
          "B": "0.9772",
          "C": "0.9974",
          "D": "0.6826"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_18",
        "q_num": 18,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Exponential Theory",
        "question_text": "The time between successive arrivals at a service desk follows an exponential distribution with mean 10 minutes. What is the rate parameter $\\lambda$?",
        "options": {
          "A": "10",
          "B": "0.1",
          "C": "1",
          "D": "0.01"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_19",
        "q_num": 19,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Exponential Application",
        "question_text": "Suppose $X \\sim Exp(0.5)$. Find the probability $P(X > 4)$.",
        "options": {
          "A": "$e^{-2}$",
          "B": "$1 - e^{-2}$",
          "C": "$0.5e^{-2}$",
          "D": "$e^{-0.5}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_20",
        "q_num": 20,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Continuity Correction Theory",
        "question_text": "When approximating a Binomial distribution $X \\sim Bin(n, p)$ using a Normal distribution, the continuity correction adjusts $P(X \\ge 15)$ to which continuous probability?",
        "options": {
          "A": "$P(Y \\ge 15.5)$",
          "B": "$P(Y \\ge 14.5)$",
          "C": "$P(Y > 15)$",
          "D": "$P(Y \\le 14.5)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_21",
        "q_num": 21,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Theory",
        "question_text": "The sample standard deviation of a dataset is defined as the:",
        "options": {
          "A": "Average distance from the mean",
          "B": "Square root of the sample variance",
          "C": "Range divided by 4",
          "D": "Square of the sample variance"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_22",
        "q_num": 22,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Application",
        "question_text": "Find the median of the following sample data: $\\{12, 15, 8, 20, 14\\}$.",
        "options": {
          "A": "15",
          "B": "14",
          "C": "13.8",
          "D": "12"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_23",
        "q_num": 23,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Theory",
        "question_text": "In a stem-and-leaf display, if the stem unit is 10 and leaf unit is 1, the entry 5 | 2 represents which value?",
        "options": {
          "A": "5.2",
          "B": "52",
          "C": "0.52",
          "D": "502"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_24",
        "q_num": 24,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Application",
        "question_text": "If a sample has variance $s^2 = 25$, what is its sample standard deviation $s$?",
        "options": {
          "A": "625",
          "B": "5",
          "C": "12.5",
          "D": "50"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_25",
        "q_num": 25,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Theory",
        "question_text": "An estimator $\\hat{\\theta}_1$ is said to be more efficient than $\\hat{\\theta}_2$ if both are unbiased and:",
        "options": {
          "A": "$E(\\hat{\\theta}_1) > E(\\hat{\\theta}_2)$",
          "B": "$V(\\hat{\\theta}_1) < V(\\hat{\\theta}_2)$",
          "C": "$V(\\hat{\\theta}_1) > V(\\hat{\\theta}_2)$",
          "D": "$E(\\hat{\\theta}_1) < E(\\hat{\\theta}_2)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_26",
        "q_num": 26,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "CLT Application",
        "question_text": "According to the Central Limit Theorem, if we draw samples of size $n = 36$ from a population with mean $\\mu = 100$ and variance $\\sigma^2 = 144$, what is the sampling distribution of the sample mean $\\bar{X}$?",
        "options": {
          "A": "$\\bar{X} \\sim N(100, 144)$",
          "B": "$\\bar{X} \\sim N(100, 4)$",
          "C": "$\\bar{X} \\sim t(35)$",
          "D": "$\\bar{X} \\sim N(100, 2)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_27",
        "q_num": 27,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Theory",
        "question_text": "The sample mean $\\bar{X}$ is a point estimator for the population mean $\\mu$. The bias of $\\bar{X}$ is:",
        "options": {
          "A": "$\\sigma / \\sqrt{n}$",
          "B": "0",
          "C": "$\\mu$",
          "D": "$\\sigma^2$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_28",
        "q_num": 28,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Theory",
        "question_text": "If the sample size $n$ increases, what happens to the standard error of the sample mean?",
        "options": {
          "A": "It increases",
          "B": "It decreases",
          "C": "It remains unchanged",
          "D": "It becomes equal to the variance"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_29",
        "q_num": 29,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Theory",
        "question_text": "A 95% confidence interval for a population mean is calculated as $[45, 55]$. This means that:",
        "options": {
          "A": "There is a 95% probability that the population mean lies between 45 and 55",
          "B": "In repeated sampling, 95% of the constructed confidence intervals will contain the true population mean",
          "C": "95% of the data points in the sample lie between 45 and 55",
          "D": "The sample mean is exactly 50 with 95% probability"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_30",
        "q_num": 30,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "t-critical value Theory",
        "question_text": "For a sample size of $n = 16$ from a normal population, which critical value should be used to construct a 90% confidence interval for the mean when the population variance is unknown?",
        "options": {
          "A": "$z_{0.05} = 1.645$",
          "B": "$t_{0.05, 15}$",
          "C": "$t_{0.10, 15}$",
          "D": "$t_{0.05, 16}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_31",
        "q_num": 31,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Proportion CI Application",
        "question_text": "A sample of 100 students shows that 30 of them study statistics. Construct a 95% confidence interval for the true proportion of students studying statistics (using $z_{0.025} = 1.96$).",
        "options": {
          "A": "$[0.21, 0.39]$",
          "B": "$[0.25, 0.35]$",
          "C": "$[0.18, 0.42]$",
          "D": "$[0.20, 0.40]$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_32",
        "q_num": 32,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Theory",
        "question_text": "A 99% confidence interval for the population mean $\\mu$ is constructed as $[10, 20]$. If we calculate a 95% confidence interval using the same sample data, the new interval will be:",
        "options": {
          "A": "Wider than $[10, 20]$",
          "B": "Narrower than $[10, 20]$",
          "C": "Identical to $[10, 20]$",
          "D": "Shifted to the right of $[10, 20]$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_33",
        "q_num": 33,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Sample Size Application",
        "question_text": "We wish to estimate the population mean with a margin of error $E = 1$ at a 99% confidence level ($z_{0.005} = 2.58$). If the population standard deviation is known to be $\\sigma = 5$, what is the required sample size?",
        "options": {
          "A": "166",
          "B": "167",
          "C": "100",
          "D": "25"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_34",
        "q_num": 34,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Theory",
        "question_text": "Which of the following is the correct formula for the margin of error $E$ in a Z-interval for the population mean?",
        "options": {
          "A": "$z_{\\alpha/2} \\frac{\\sigma}{n}$",
          "B": "$z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$",
          "C": "$t_{\\alpha/2, n-1} \\frac{s}{n}$",
          "D": "$z_{\\alpha} \\sigma$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_35",
        "q_num": 35,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "The null hypothesis ($H_0$) in a statistical test is the hypothesis that:",
        "options": {
          "A": "We wish to prove is true",
          "B": "Represents the status quo or no effect/difference",
          "C": "Asserts that there is a significant change",
          "D": "Is rejected only when the p-value is large"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_36",
        "q_num": 36,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "If we decrease the significance level $\\alpha$ of a test, what is the effect on the probability of a Type II error ($\\beta$)?",
        "options": {
          "A": "$\\beta$ decreases",
          "B": "$\\beta$ increases",
          "C": "$\\beta$ remains the same",
          "D": "$\\beta$ becomes zero"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_37",
        "q_num": 37,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Z-Test Application",
        "question_text": "A machine is designed to fill cereal boxes to a mean weight of 500g. A quality control inspector tests $H_0: \\mu = 500$ vs $H_1: \\mu \\ne 500$ using a sample of 100 boxes. The calculated $Z$-statistic is $Z_0 = -2.15$. What is the decision at $\\alpha = 0.05$ (critical value $z_{0.025} = 1.96$)?",
        "options": {
          "A": "Reject $H_0$",
          "B": "Fail to reject $H_0$",
          "C": "Accept $H_1$ as definitely true",
          "D": "The test is inconclusive"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_38",
        "q_num": 38,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "The p-value is defined as the probability, assuming the null hypothesis is true, of obtaining a test statistic value:",
        "options": {
          "A": "Equal to the critical value",
          "B": "At least as extreme as the one observed",
          "C": "Exactly equal to 0",
          "D": "Greater than the significance level $\\alpha$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_39",
        "q_num": 39,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "p-Value Application",
        "question_text": "Suppose we test $H_0: \\mu = 20$ vs $H_1: \\mu < 20$. If our test statistic is $Z_0 = -1.85$, find the p-value for this one-tailed test (using $\\Phi(-1.85) = 0.0322$).",
        "options": {
          "A": "0.0322",
          "B": "0.0644",
          "C": "0.9678",
          "D": "0.0500"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_40",
        "q_num": 40,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "In a $t$-test with sample size $n = 15$, the critical value for a upper-tailed test at $\\alpha = 0.05$ is:",
        "options": {
          "A": "$t_{0.05, 14}$",
          "B": "$t_{0.025, 14}$",
          "C": "$t_{0.05, 15}$",
          "D": "$z_{0.05}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_41",
        "q_num": 41,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "When performing a two-sample $t$-test with unequal variances ($\\sigma_1^2 \\ne \\sigma_2^2$), how is the degrees of freedom $v$ determined?",
        "options": {
          "A": "$n_1 + n_2 - 2$",
          "B": "Using Satterthwaite's approximation formula",
          "C": "$\\min(n_1, n_2) - 1$",
          "D": "$n_1 + n_2 - 1$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_42",
        "q_num": 42,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "We want to test if two teaching methods yield different mean exam scores. The scores of 10 students using Method A and 12 students using Method B are collected. Assuming the variances of the populations are equal, the degrees of freedom for the test statistic is:",
        "options": {
          "A": "20",
          "B": "21",
          "C": "22",
          "D": "19"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_43",
        "q_num": 43,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "A study is conducted to compare the blood pressure of 10 patients before and after taking a drug. What type of test is appropriate for this data?",
        "options": {
          "A": "Two-sample independent $Z$-test",
          "B": "Two-sample independent $t$-test",
          "C": "Paired $t$-test",
          "D": "Chi-square test of independence"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_44",
        "q_num": 44,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Pooled Proportion Application",
        "question_text": "In testing the equality of two proportions, $H_0: p_1 = p_2$. If $n_1 = 50, X_1 = 15$ and $n_2 = 50, X_2 = 25$, calculate the pooled proportion estimate $\\hat{p}$.",
        "options": {
          "A": "0.40",
          "B": "0.30",
          "C": "0.50",
          "D": "0.35"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_45",
        "q_num": 45,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "CI Interpretation",
        "question_text": "If the 95% confidence interval for the difference between two population means $\\mu_1 - \\mu_2$ is $[-3.5, -0.5]$, what does this imply at $\\alpha = 0.05$?",
        "options": {
          "A": "$\\mu_1$ is significantly larger than $\\mu_2$",
          "B": "$\\mu_2$ is significantly larger than $\\mu_1$",
          "C": "There is no significant difference between $\\mu_1$ and $\\mu_2$",
          "D": "We cannot reject $H_0: \\mu_1 = \\mu_2$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_46",
        "q_num": 46,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Theory",
        "question_text": "In linear regression, the line of best fit is determined by minimizing which of the following?",
        "options": {
          "A": "Sum of absolute errors",
          "B": "Sum of squared residuals (SSE)",
          "C": "Sum of independent variables",
          "D": "Mean of the errors"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_47",
        "q_num": 47,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Theory",
        "question_text": "If the correlation coefficient between two variables $X$ and $Y$ is $r = 0.0$, this indicates:",
        "options": {
          "A": "A strong positive linear relationship",
          "B": "A strong negative linear relationship",
          "C": "No linear relationship",
          "D": "No relationship of any kind"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_48",
        "q_num": 48,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Application",
        "question_text": "Given the regression equation $\\hat{y} = 15.2 - 0.85x$, what is the predicted value of $Y$ when $X = 10$?",
        "options": {
          "A": "15.2",
          "B": "6.7",
          "C": "23.7",
          "D": "8.5"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_49",
        "q_num": 49,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Theory",
        "question_text": "In simple linear regression, the test of significance for the slope $\\beta_1$ tests which of the following hypotheses?",
        "options": {
          "A": "$H_0: \\beta_1 = 1$",
          "B": "$H_0: \\beta_1 = 0$",
          "C": "$H_0: \\beta_0 = 0$",
          "D": "$H_0: r = 1$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_50",
        "q_num": 50,
        "chapter": "Chapter 11: Linear Regression",
        "type": "R-Square Application",
        "question_text": "A regression analysis has $S_{yy} = 200$ and $SSE = 50$. Calculate the coefficient of determination $R^2$.",
        "options": {
          "A": "0.25",
          "B": "0.75",
          "C": "0.50",
          "D": "0.80"
        },
        "correct_answer": ""
      }
    ]
  },
  {
    "exam_id": 291,
    "title": "MAS291 Practice Exam 3",
    "questions": [
      {
        "id": "exam_291_q_1",
        "q_num": 1,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Theory",
        "question_text": "Which of the following is a correct statement of the general addition rule for two events $A$ and $B$?",
        "options": {
          "A": "$P(A \\cup B) = P(A) + P(B)$",
          "B": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
          "C": "$P(A \\cup B) = P(A) \\times P(B)$",
          "D": "$P(A \\cup B) = P(A) + P(B) + P(A \\cap B)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_2",
        "q_num": 2,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Theory",
        "question_text": "An event $A$ is defined as a subset of:",
        "options": {
          "A": "The probability space",
          "B": "The sample space $S$",
          "C": "The outcome set",
          "D": "The random variable range"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_3",
        "q_num": 3,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Application",
        "question_text": "If $P(A) = 0.5$, $P(B) = 0.6$, and they are mutually exclusive, what is $P(A \\cap B)$?",
        "options": {
          "A": "1.1",
          "B": "0.3",
          "C": "0.0",
          "D": "0.1"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_4",
        "q_num": 4,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Independence Interpretation",
        "question_text": "Suppose $P(A) = 0.8$ and $P(B) = 0.5$. If $P(A \\cap B) = 0.4$, are $A$ and $B$ independent?",
        "options": {
          "A": "Yes, because $P(A \\cap B) = P(A)P(B)$",
          "B": "No, because $P(A \\cap B) \\ne 0$",
          "C": "Yes, because $P(A) + P(B) > 1$",
          "D": "No, because $P(A|B) \\ne P(A)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_5",
        "q_num": 5,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Multiplication Rule Application",
        "question_text": "A student takes a quiz with 2 multiple-choice questions. Each question has 4 options. If the student guesses randomly, what is the probability of getting both questions wrong?",
        "options": {
          "A": "9/16",
          "B": "1/16",
          "C": "3/8",
          "D": "1/2"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_6",
        "q_num": 6,
        "chapter": "Chapter 2: Probability Theory",
        "type": "Bayes' Theorem Application",
        "question_text": "A medical diagnostic test is 95% reliable when the disease is present. The disease occurs in 1% of the population. The false positive rate of the test is 5%. Given that a person tests positive, what is the probability that they actually have the disease?",
        "options": {
          "A": "0.950",
          "B": "0.010",
          "C": "0.161",
          "D": "0.500"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_7",
        "q_num": 7,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Theory",
        "question_text": "The expectation of a discrete random variable $X$ is also known as the population:",
        "options": {
          "A": "Variance",
          "B": "Standard deviation",
          "C": "Mean",
          "D": "Median"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_8",
        "q_num": 8,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Standard Deviation Application",
        "question_text": "If a discrete random variable $X$ has $E(X) = 2$ and $E(X^2) = 8$, find its standard deviation $\\sigma$.",
        "options": {
          "A": "4",
          "B": "2",
          "C": "6",
          "D": "1.41"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_9",
        "q_num": 9,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Binomial Application",
        "question_text": "Let $X \\sim Bin(8, 0.5)$. Find the expected value $E(X)$ and variance $V(X)$ of $X$.",
        "options": {
          "A": "$E(X) = 4, V(X) = 2$",
          "B": "$E(X) = 4, V(X) = 4$",
          "C": "$E(X) = 2, V(X) = 2$",
          "D": "$E(X) = 8, V(X) = 4$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_10",
        "q_num": 10,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Geometric Application",
        "question_text": "A student answers a series of independent multiple choice questions by random guessing, where success probability $p = 0.2$ on each question. What is the probability that the student's first correct answer occurs on the 4th question?",
        "options": {
          "A": "0.1024",
          "B": "0.0819",
          "C": "0.2000",
          "D": "0.4096"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_11",
        "q_num": 11,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Theory",
        "question_text": "Which discrete distribution model is characterized by having equal mean and variance?",
        "options": {
          "A": "Binomial distribution",
          "B": "Poisson distribution",
          "C": "Geometric distribution",
          "D": "Hypergeometric distribution"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_12",
        "q_num": 12,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Hypergeometric Application",
        "question_text": "A box contains 10 items, of which 3 are defective. If 3 items are chosen at random without replacement, find the probability that exactly 1 defective item is selected.",
        "options": {
          "A": "0.525",
          "B": "0.420",
          "C": "0.300",
          "D": "0.210"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_13",
        "q_num": 13,
        "chapter": "Chapter 3: Discrete Random Variables",
        "type": "Geometric Variance",
        "question_text": "If the probability of success is $p = 0.1$, what is the variance of a geometric random variable $X \\sim Geo(p)$?",
        "options": {
          "A": "90",
          "B": "10",
          "C": "9",
          "D": "0.9"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_14",
        "q_num": 14,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Theory",
        "question_text": "If $X$ is a continuous random variable, the function $f(x)$ is called the Probability Density Function (PDF) if it satisfies:",
        "options": {
          "A": "$f(x) \\ge 0$ and $\\int_{-\\infty}^{\\infty} f(x) dx = 1$",
          "B": "$f(x) \\le 1$ and $\\sum x f(x) = 1$",
          "C": "$f(x) \\ge 0$ and $\\sum f(x) = 1$",
          "D": "$f(x) = P(X \\le x)$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_15",
        "q_num": 15,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Uniform Application",
        "question_text": "Let $X \\sim Uniform[0, 12]$. Find the expected value $E(X)$.",
        "options": {
          "A": "6",
          "B": "12",
          "C": "4",
          "D": "3"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_16",
        "q_num": 16,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Standard Normal Application",
        "question_text": "For a standard normal random variable $Z$, find $P(Z < -1.96)$ using standard normal distribution properties (where $\\Phi(1.96) = 0.9750$).",
        "options": {
          "A": "0.050",
          "B": "0.025",
          "C": "0.975",
          "D": "0.010"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_17",
        "q_num": 17,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Normal Application",
        "question_text": "Let $X \\sim N(80, 5^2)$. Find the probability $P(X \\ge 85)$ using $\\Phi(1.0) = 0.8413$.",
        "options": {
          "A": "0.1587",
          "B": "0.8413",
          "C": "0.0500",
          "D": "0.3413"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_18",
        "q_num": 18,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Theory",
        "question_text": "The continuous probability distribution that possesses the 'memoryless property' is the:",
        "options": {
          "A": "Normal distribution",
          "B": "Uniform distribution",
          "C": "Exponential distribution",
          "D": "Weibull distribution"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_19",
        "q_num": 19,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Exponential Application",
        "question_text": "If the rate of service is $\\lambda = 3$ customers per hour, what is the probability that a service time exceeds 2 hours under an exponential model?",
        "options": {
          "A": "$e^{-6}$",
          "B": "$e^{-1.5}$",
          "C": "$1 - e^{-6}$",
          "D": "$3e^{-6}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_20",
        "q_num": 20,
        "chapter": "Chapter 4: Continuous Random Variables",
        "type": "Normal Approximation",
        "question_text": "When using the normal approximation to the Binomial distribution with parameters $n = 100$ and $p = 0.2$, the mean $\\mu$ and standard deviation $\\sigma$ of the approximating normal distribution are:",
        "options": {
          "A": "$\\mu = 20, \\sigma = 4$",
          "B": "$\\mu = 20, \\sigma = 16$",
          "C": "$\\mu = 20, \\sigma = 4.47$",
          "D": "$\\mu = 80, \\sigma = 4$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_21",
        "q_num": 21,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Theory",
        "question_text": "Which of the following is a measure of dispersion (spread) in descriptive statistics?",
        "options": {
          "A": "Mean",
          "B": "Median",
          "C": "Standard deviation",
          "D": "Mode"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_22",
        "q_num": 22,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Application",
        "question_text": "Given a sample dataset: $\\{5, 10, 15, 20\\}$. Find the sample mean $\\bar{x}$.",
        "options": {
          "A": "12.5",
          "B": "10",
          "C": "15",
          "D": "11.5"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_23",
        "q_num": 23,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Theory",
        "question_text": "The Interquartile Range (IQR) is calculated as:",
        "options": {
          "A": "$Q_3 - Q_1$",
          "B": "$Q_3 - Q_2$",
          "C": "$Q_2 - Q_1$",
          "D": "$Q_4 - Q_0$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_24",
        "q_num": 24,
        "chapter": "Chapter 6: Descriptive Statistics",
        "type": "Application",
        "question_text": "Find the sample variance of the dataset: $\\{1, 3, 5\\}$.",
        "options": {
          "A": "4",
          "B": "2",
          "C": "3",
          "D": "1.33"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_25",
        "q_num": 25,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Theory",
        "question_text": "The variance of the sample mean $\\bar{X}$ from a sample of size $n$ drawn from a population with variance $\\sigma^2$ is:",
        "options": {
          "A": "$\\sigma^2$",
          "B": "$\\sigma^2 / n$",
          "C": "$\\sigma / \\sqrt{n}$",
          "D": "$\\sigma^2 / \\sqrt{n}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_26",
        "q_num": 26,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Theory",
        "question_text": "According to the Central Limit Theorem, the shape of the sampling distribution of the sample mean becomes closer to a normal distribution as:",
        "options": {
          "A": "The population variance decreases",
          "B": "The sample size increases",
          "C": "The population mean increases",
          "D": "The number of samples decreases"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_27",
        "q_num": 27,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Theory",
        "question_text": "If we want to estimate the population proportion $p$ with an unbiased estimator, the standard choice is the sample proportion $\\hat{p} = X/n$. The expected value $E(\\hat{p})$ is equal to:",
        "options": {
          "A": "$p(1-p)/n$",
          "B": "$p$",
          "C": "$\\sqrt{p(1-p)/n}$",
          "D": "$np$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_28",
        "q_num": 28,
        "chapter": "Chapter 7: Point Estimation & CLT",
        "type": "Application",
        "question_text": "A random sample of size $n = 64$ is taken from a population with standard deviation $\\sigma = 16$. Find the standard error of the sample mean $SE(\\bar{X})$.",
        "options": {
          "A": "2.0",
          "B": "0.25",
          "C": "16.0",
          "D": "1.0"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_29",
        "q_num": 29,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Theory",
        "question_text": "If we want to decrease the margin of error of a confidence interval for the population mean, we should:",
        "options": {
          "A": "Decrease the sample size",
          "B": "Increase the sample size",
          "C": "Increase the confidence level",
          "D": "Increase the population standard deviation"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_30",
        "q_num": 30,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Theory",
        "question_text": "What is the critical value $z_{\\alpha/2}$ for a 99% confidence interval?",
        "options": {
          "A": "1.96",
          "B": "1.645",
          "C": "2.58",
          "D": "2.33"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_31",
        "q_num": 31,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "t-Interval Application",
        "question_text": "A sample of size $n = 9$ from a normal population yields sample mean $\\bar{x} = 50$ and sample standard deviation $s = 6$. Construct a 95% confidence interval for the population mean $\\mu$ using the $t$-distribution critical value $t_{0.025, 8} = 2.306$.",
        "options": {
          "A": "$[45.39, 54.61]$",
          "B": "$[46.08, 53.92]$",
          "C": "$[44.00, 56.00]$",
          "D": "$[48.00, 52.00]$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_32",
        "q_num": 32,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Conservative Sample Size",
        "question_text": "The margin of error for a 95% confidence interval of a population proportion is $E = 0.04$. If we do not have a preliminary estimate of $\\hat{p}$, what is the conservative minimum sample size $n$ required? (Use $z_{0.025} = 1.96$).",
        "options": {
          "A": "600",
          "B": "601",
          "C": "1000",
          "D": "400"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_33",
        "q_num": 33,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Application",
        "question_text": "A 95% confidence interval for the population mean is $[120, 130]$. What is the sample mean $\\bar{x}$ and the margin of error $E$?",
        "options": {
          "A": "$\\bar{x} = 125, E = 5$",
          "B": "$\\bar{x} = 125, E = 10$",
          "C": "$\\bar{x} = 120, E = 5$",
          "D": "$\\bar{x} = 130, E = 5$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_34",
        "q_num": 34,
        "chapter": "Chapter 8: Statistical Intervals",
        "type": "Theory",
        "question_text": "The standard error of the sample mean when the population standard deviation $\\sigma$ is unknown is estimated by:",
        "options": {
          "A": "$s / n$",
          "B": "$s / \\sqrt{n}$",
          "C": "$s^2 / n$",
          "D": "$s$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_35",
        "q_num": 35,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "The probability of committing a Type II error is denoted by:",
        "options": {
          "A": "$\\alpha$",
          "B": "$\\beta$",
          "C": "$1-\\alpha$",
          "D": "$1-\\beta$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_36",
        "q_num": 36,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "The power of a hypothesis test is defined as:",
        "options": {
          "A": "$\\alpha$",
          "B": "$\\beta$",
          "C": "$1-\\alpha$",
          "D": "$1-\\beta$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_37",
        "q_num": 37,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Z-Test Application",
        "question_text": "We are testing $H_0: \\mu = 100$ against $H_1: \\mu \\ne 100$. A sample of size $n = 64$ yields a sample mean $\\bar{x} = 104$ and a known population standard deviation $\\sigma = 16$. Calculate the value of the $Z$-test statistic $Z_0$.",
        "options": {
          "A": "2.0",
          "B": "4.0",
          "C": "1.0",
          "D": "0.25"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_38",
        "q_num": 38,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "In a hypothesis test, if the test statistic falls in the rejection region, our decision is to:",
        "options": {
          "A": "Reject the null hypothesis $H_0$",
          "B": "Fail to reject the null hypothesis $H_0$",
          "C": "Reject the alternative hypothesis $H_1$",
          "D": "Conclude that the sample size is too small"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_39",
        "q_num": 39,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "If we test a hypothesis at $\\alpha = 0.05$ and reject $H_0$, what will be our decision at $\\alpha = 0.10$ using the same data?",
        "options": {
          "A": "We will definitely reject $H_0$",
          "B": "We will definitely fail to reject $H_0$",
          "C": "We might reject or fail to reject $H_0$",
          "D": "The test cannot be performed"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_40",
        "q_num": 40,
        "chapter": "Chapter 9: Hypothesis Testing",
        "type": "Theory",
        "question_text": "For an upper-tailed $Z$-test for the population proportion at significance level $\\alpha = 0.05$, the null hypothesis is rejected if:",
        "options": {
          "A": "$Z_0 > 1.645$",
          "B": "$Z_0 < -1.645$",
          "C": "$|Z_0| > 1.96$",
          "D": "$Z_0 > 1.96$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_41",
        "q_num": 41,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "We compare two independent means. If population variances are unknown but assumed unequal ($\\sigma_1^2 \\ne \\sigma_2^2$), the test statistic $T_0^*$ is calculated as:",
        "options": {
          "A": "$\\frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$",
          "B": "$\\frac{\\bar{X}_1 - \\bar{X}_2}{S_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}}$",
          "C": "$\\frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\sigma_1^2 + \\sigma_2^2}}$",
          "D": "$\\frac{\\bar{X}_1 - \\bar{X}_2}{\\min(s_1, s_2)}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_42",
        "q_num": 42,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "A pooled $t$-test is conducted with $n_1 = 15$ and $n_2 = 15$. The critical value for a two-tailed test at $\\alpha = 0.05$ is:",
        "options": {
          "A": "$t_{0.025, 28}$",
          "B": "$t_{0.05, 28}$",
          "C": "$t_{0.025, 29}$",
          "D": "$z_{0.025}$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_43",
        "q_num": 43,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "In paired samples design, what is the degrees of freedom for the paired $t$-test if there are 20 pairs of observations?",
        "options": {
          "A": "38",
          "B": "19",
          "C": "20",
          "D": "39"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_44",
        "q_num": 44,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Proportion Test Application",
        "question_text": "We test $H_0: p_1 = p_2$ against $H_1: p_1 \\ne p_2$. If the test statistic is $Z_0 = 2.10$, and the significance level is $\\alpha = 0.05$ (critical value $z_{0.025} = 1.96$), what is our decision?",
        "options": {
          "A": "Reject $H_0$",
          "B": "Fail to reject $H_0$",
          "C": "Accept $H_0$ as definitely true",
          "D": "The test is invalid"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_45",
        "q_num": 45,
        "chapter": "Chapter 10: Two Samples Inference",
        "type": "Theory",
        "question_text": "Which of the following is an assumption required for the independent two-sample pooled $t$-test?",
        "options": {
          "A": "The samples are paired",
          "B": "The two populations are normally distributed and have equal variances",
          "C": "The sample sizes must be equal",
          "D": "The population standard deviations must be known"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_46",
        "q_num": 46,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Theory",
        "question_text": "In the regression equation $\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x$, the slope coefficient $\\hat{\\beta}_1$ represents:",
        "options": {
          "A": "The predicted value of $Y$ when $X = 0$",
          "B": "The change in the predicted value of $Y$ for a one-unit increase in $X$",
          "C": "The correlation between $X$ and $Y$",
          "D": "The proportion of explained variation in $Y$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_47",
        "q_num": 47,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Theory",
        "question_text": "If the slope coefficient is $\\hat{\\beta}_1 = -3.5$, this indicates:",
        "options": {
          "A": "A positive relationship between $X$ and $Y$",
          "B": "A negative relationship between $X$ and $Y$",
          "C": "No relationship between $X$ and $Y$",
          "D": "A weak relationship between $X$ and $Y$"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_48",
        "q_num": 48,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Correlation Coefficient Application",
        "question_text": "Given: $S_{xx} = 50, S_{yy} = 80$, and $S_{xy} = -40$. Find the sample correlation coefficient $r$.",
        "options": {
          "A": "-0.63",
          "B": "0.63",
          "C": "-0.80",
          "D": "0.50"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_49",
        "q_num": 49,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Theory",
        "question_text": "For a simple linear regression model with $n = 10$ data points, the test statistic for testing the significance of the slope follows a $t$-distribution with how many degrees of freedom?",
        "options": {
          "A": "9",
          "B": "8",
          "C": "10",
          "D": "7"
        },
        "correct_answer": ""
      },
      {
        "id": "exam_291_q_50",
        "q_num": 50,
        "chapter": "Chapter 11: Linear Regression",
        "type": "Theory",
        "question_text": "Which of the following is the formula for the sum of squared errors ($SSE$) in simple linear regression?",
        "options": {
          "A": "$S_{yy} - \\hat{\\beta}_1 S_{xy}$",
          "B": "$S_{yy} + \\hat{\\beta}_1 S_{xy}$",
          "C": "$S_{yy} - \\hat{\\beta}_0 S_{xy}$",
          "D": "$S_{xx} - \\hat{\\beta}_1 S_{xy}$"
        },
        "correct_answer": ""
      }
    ]
  }
];

const chaptersData = [
  {
    "id": "introduction",
    "title": "Giới thiệu môn học",
    "chapter_num": 0,
    "content": "# Bản đồ Nội dung môn học: Xác suất & Thống kê (MAS291 MOC)\n\nChào mừng bạn đến với góc học tập môn **Xác suất và Thống kê (MAS291)**. Bản đồ nội dung (Map of Content) này liên kết toàn bộ 9 chương học thuật và bảng tra cứu công thức nhanh.\n\n---\n\n## 🗺️ Lộ trình học tập (Course Roadmap)\n\n```mermaid\ngraph TD\n    A[Chương 2: Lý thuyết Xác suất] --> B[Chương 3: Biến ngẫu nhiên rời rạc]\n    B --> C[Chương 4: Biến ngẫu nhiên liên tục]\n    C --> D[Chương 6: Thống kê mô tả]\n    D --> E[Chương 7: Ước lượng điểm]\n    E --> F[Chương 8: Khoảng tin cậy mẫu đơn]\n    F --> G[Chương 9: Kiểm định giả thuyết mẫu đơn]\n    G --> H[Chương 10: Suy diễn hai mẫu]\n    H --> I[Chương 11: Hồi quy tuyến tính & Tương quan]\n```\n\n---\n\n## 📚 Danh sách các chương (Lecture Notes)\n\n### 🎲 Phần I: Lý thuyết Xác suất (Probability Theory)\n*   👉 **Chapter_02_Probability**: Không gian mẫu, biến cố, các quy tắc tính xác suất cơ bản, xác suất có điều kiện, công thức xác suất đầy đủ, và định lý Bayes.\n*   👉 **Chapter_03_Discrete_Random_Variables**: Biến ngẫu nhiên rời rạc, hàm khối xác suất (PMF), hàm tích lũy (CDF), kỳ vọng & phương sai, và các phân phối rời rạc mẫu (Uniform, Binomial, Geometric, Negative Binomial, Hypergeometric, Poisson).\n*   👉 **Chapter_04_Continuous_Random_Variables**: Biến ngẫu nhiên liên tục, hàm mật độ xác suất (PDF), hàm CDF, phân phối đều liên tục, phân phối chuẩn $N(\\mu, \\sigma^2)$, xấp xỉ chuẩn và phân phối mũ.\n\n### 📊 Phần II: Thống kê và Suy diễn (Statistical Inference)\n*   👉 **Chapter_06_Descriptive_Statistics**: Thống kê mô tả (Mean, Median, Mode, Range, Variance, SD, Quartiles), biểu đồ thân-lá, tần số, biểu đồ cột (Histogram), biểu đồ hộp (Box Plot), và biểu đồ thời gian.\n*   👉 **Chapter_07_Point_Estimation**: Ước lượng điểm tham số, phân phối mẫu, và Định lý giới hạn trung tâm (CLT).\n*   👉 **Chapter_08_Statistical_Intervals**: Khoảng tin cậy cho trung bình mẫu đơn (đã biết/chưa biết phương sai, mẫu lớn) và tỷ lệ mẫu lớn.\n*   👉 **Chapter_09_Hypothesis_Testing**: Kiểm định giả thuyết mẫu đơn (Z-test, t-test cho trung bình và tỷ lệ mẫu lớn), các loại sai lầm loại I & II, tính P-value.\n*   👉 **Chapter_10_Two_Samples_Inference**: So sánh hai trung bình mẫu độc lập (Z-test, t-test phương sai bằng/khác nhau) và so sánh hai tỷ lệ mẫu lớn.\n*   👉 **Chapter_11_Linear_Regression**: Hồi quy tuyến tính đơn (ước lượng hệ số dốc/chặn bằng phương pháp bình phương bé nhất) và hệ số tương quan mẫu $r$.\n\n---\n\n## ⚡ Tài nguyên ôn tập nhanh\n*   📝 **CheatSheet_MAS291_Formulas**: File tổng hợp toàn bộ định nghĩa lý thuyết và công thức toán học cần nhớ cho các kỳ thi.\n\n---\n\n## 📝 LUYỆN ĐỀ TRẮC NGHIỆM (Practice Exams)\nDưới đây là các bộ đề trắc nghiệm tổng hợp 50 câu hỏi bằng Tiếng Anh phủ rộng kiến thức của cả môn học:\n*   📝 **Đề Ôn Tập Trắc Nghiệm số 01** (50 Questions)\n*   📝 **Đề Ôn Tập Trắc Nghiệm số 02** (50 Questions)\n*   📝 **Đề Ôn Tập Trắc Nghiệm số 03** (50 Questions)"
  },
  {
    "id": "chapter_02_probability",
    "title": "Lý thuyết Xác suất (Probability)",
    "chapter_num": 2,
    "content": "# Chương 2: Lý thuyết Xác suất (Probability)\n\nChào mừng bạn đến với tài liệu học tập chương **Lý thuyết Xác suất**. Chương này cung cấp các nền tảng toán học quan trọng nhất để mô hình hóa các hiện tượng ngẫu nhiên, tính toán xác suất của các sự kiện và đưa ra quyết định dựa trên thông tin không chắc chắn.\n\n---\n\n## 1. Không gian mẫu và Biến cố (Sample Spaces and Events)\n\n> [!book] Phép thử ngẫu nhiên (Random Experiment)\n> Là một thử nghiệm hoặc quá trình mà kết quả của nó không thể dự đoán chính xác trước khi thực hiện, mặc dù nó được lặp đi lặp lại nhiều lần dưới cùng một điều kiện.\n> *   **Ví dụ**: Tung một đồng xu, gieo quân xúc xắc, hoặc đo thời gian hoạt động của một linh kiện điện tử.\n\n> [!book] Không gian mẫu (Sample Space - $S$)\n> Là tập hợp của tất cả các kết quả khả dĩ (có thể xảy ra) của một phép thử ngẫu nhiên. Ký hiệu là $S$.\n> *   **Ví dụ**: \n>     *   Gieo một xúc xắc 6 mặt: $S = \\{1, 2, 3, 4, 5, 6\\}$\n>     *   Tung một đồng xu: $S = \\{H, T\\}$ (với $H$ là Sấp và $T$ là Ngửa)\n\n> [!book] Biến cố (Event)\n> Là một tập con của không gian mẫu $S$.\n> *   **Ví dụ**: \n>     *   Gọi $E_1$ là biến cố \"kết quả gieo xúc xắc là số chẵn\": $E_1 = \\{2, 4, 6\\} \\subset S$.\n>     *   Gọi $E_2$ là biến cố \"kết quả gieo xúc xắc là số lẻ\": $E_2 = \\{1, 3, 5\\} \\subset S$.\n\n### Sơ đồ cây (Tree Diagrams)\nKhi một phép thử ngẫu nhiên gồm nhiều bước hoặc nhiều giai đoạn nối tiếp nhau, sơ đồ cây là một công cụ trực quan hiệu quả để xây dựng không gian mẫu.\n*   **Cách dựng**:\n    1.  Vẽ các nhánh từ điểm gốc biểu diễn các kết quả có thể xảy ra ở bước thứ nhất ($n_1$ nhánh).\n    2.  Từ đầu mỗi nhánh bước 1, vẽ tiếp các nhánh biểu diễn các kết quả khả dĩ của bước thứ hai ($n_2$ nhánh), và tiếp tục như vậy cho đến hết các bước.\n\n> [!example] Ví dụ 1.1 (Tung đồng xu và gieo xúc xắc)\n> Phép thử gồm: tung một đồng xu ($H$ hoặc $T$), sau đó gieo một xúc xắc 6 mặt ($1$ đến $6$).\n> *   **Bước 1 (Đồng xu)**: Có 2 nhánh ($H$, $T$).\n> *   **Bước 2 (Xúc xắc)**: Từ đầu mỗi nhánh $H$ và $T$ ta vẽ thêm 6 nhánh con tương ứng với $\\{1, 2, 3, 4, 5, 6\\}$.\n> *   **Kết quả không gian mẫu**: \n>     $$S = \\{H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6\\}$$\n\n> [!example] Ví dụ 1.2 (Hệ thống truyền thông số)\n> Ba tin nhắn truyền qua hệ thống. Mỗi tin nhắn được phân loại là truyền đúng hạn ($O$ - On time) hoặc trễ hạn ($L$ - Late).\n> *   **Không gian mẫu $S$** bao gồm các bộ ba kết quả có dạng:\n>     $$S = \\{OOO, OOL, OLO, OLL, LOO, LOL, LLO, LLL\\}$$\n\n### Các phép toán trên biến cố (Basic Set Operations)\nCho hai biến cố $E_1$ và $E_2$ trong cùng không gian mẫu $S$:\n1.  **Phép hợp (Union)**: Ký hiệu là $E_1 \\cup E_2$. Biến cố này xảy ra nếu kết quả phép thử thuộc $E_1$, thuộc $E_2$ hoặc thuộc cả hai.\n2.  **Phép giao (Intersection)**: Ký hiệu là $E_1 \\cap E_2$ (hoặc viết gọn là $E_1 E_2$). Biến cố này xảy ra khi và chỉ khi kết quả phép thử đồng thời thuộc cả $E_1$ và $E_2$.\n3.  **Phép bù (Complement)**: Ký hiệu là $E'$ (hoặc $E^c, \\bar{E}$). Biến cố bù của $E$ chứa tất cả các kết quả trong không gian mẫu $S$ nhưng không thuộc $E$. \n\n> [!math] Tính chất quan trọng của tập hợp (Important properties)\n> *   **Luật kết hợp (Associative Laws)**: \n>     *   $A \\cup (B \\cup C) = (A \\cup B) \\cup C$\n>     *   $A \\cap (B \\cap C) = (A \\cap B) \\cap C$\n> *   **Luật phân phối (Distributive Laws)**:\n>     *   $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$\n>     *   $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cap C)$\n> *   **Định lý De Morgan (De Morgan's Laws)**:\n>     *   $(A \\cup B)' = A' \\cap B'$\n>     *   $(A \\cap B)' = A' \\cup B'$\n> *   **Công thức phân rã**:\n>     *   $A = (A \\cap B) \\cup (A \\cap B')$ (Với $A \\cap B$ và $A \\cap B'$ là hai biến cố xung khắc)\n\n---\n\n## 2. Các định nghĩa về Xác suất (Interpretations of Probability)\n\nXác suất là một số thực nằm trong khoảng từ 0 đến 1 biểu thị khả năng xảy ra của một biến cố. Có 3 cách tiếp cận chính để xác định giá trị này:\n\n1.  **Xác suất cổ điển (a priori classical probability)**: \n    Dựa trên giả định rằng tất cả các kết quả trong không gian mẫu có khả năng xảy ra như nhau (đồng khả năng).\n    $$P(E) = \\frac{\\text{Số kết quả thuận lợi cho } E}{\\text{Tổng số kết quả trong } S} = \\frac{n(E)}{N}$$\n2.  **Xác suất thực nghiệm (empirical classical probability)**:\n    Xác định dựa trên số lần quan sát thực tế (tần suất xuất hiện) khi lặp lại phép thử rất nhiều lần.\n    $$P(E) = \\frac{\\text{Số lần biến cố } E \\text{ xảy ra}}{\\text{Tổng số lần thực hiện phép thử}}$$\n3.  **Xác suất chủ quan (subjective probability)**:\n    Là đánh giá mang tính cá nhân của một chuyên gia hay cá nhân dựa trên kinh nghiệm, ý kiến cá nhân và các thông tin thu thập được.\n\n> [!formula] Hệ tiên đề xác suất (Axioms of Probability)\n> Cho không gian mẫu $S$ và biến cố $E$ bất kỳ:\n> 1.  **Tiên đề 1**: Xác suất của không gian mẫu chắc chắn bằng 1:\n>     $$P(S) = 1$$\n> 2.  **Tiên đề 2**: Xác suất của một biến cố luôn không âm và không vượt quá 1:\n>     $$0 \\le P(E) \\le 1$$\n> 3.  **Tiên đề 3**: Nếu $E_1$ và $E_2$ xung khắc nhau ($E_1 \\cap E_2 = \\emptyset$):\n>     $$P(E_1 \\cup E_2) = P(E_1) + P(E_2)$$\n\n---\n\n## 3. Quy tắc cộng (Addition Rules)\n\n> [!formula] Quy tắc cộng đặc biệt (Special Addition Rule)\n> Nếu các biến cố $E_1, E_2, \\dots, E_k$ đôi một xung khắc ($E_i \\cap E_j = \\emptyset$ với mọi $i \\neq j$):\n> $$P(E_1 \\cup E_2 \\cup \\dots \\cup E_k) = \\sum_{i=1}^{k} P(E_i)$$\n\n> [!formula] Quy tắc cộng tổng quát (General Addition Rule)\n> *   **Trường hợp 2 biến cố bất kỳ**:\n>     $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n> *   **Trường hợp 3 biến cố bất kỳ**:\n>     $$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(B \\cap C) - P(C \\cap A) + P(A \\cap B \\cap C)$$\n\n---\n\n### Các ví dụ giải chi tiết (Quy tắc cộng)\n\n> [!example] Ví dụ 3.1 (Lựa chọn màu xe)\n> Xác suất một khách hàng mua xe ô tô mới chọn màu Xanh lá, Trắng, Đỏ, hoặc Xanh dương lần lượt là $0.09$, $0.15$, $0.21$, và $0.23$. Tìm xác suất khách hàng chọn một trong bốn màu này.\n>\n> **Lời giải:**\n> Vì mỗi chiếc xe chỉ có một màu sơn, các biến cố chọn màu Xanh lá ($G$), Trắng ($W$), Đỏ ($R$), và Xanh dương ($B$) là đôi một xung khắc. \n> Áp dụng quy tắc cộng đặc biệt:\n> $$P(G \\cup W \\cup R \\cup B) = P(G) + P(W) + P(R) + P(B) = 0.09 + 0.15 + 0.21 + 0.23 = 0.68$$\n\n> [!example] Ví dụ 3.2 (Số lượng xe thợ máy sửa chữa)\n> Xác suất một thợ máy bảo dưỡng $3, 4, 5, 6, 7$, hoặc $\\ge 8$ xe trong một ngày lần lượt là $0.12$, $0.19$, $0.28$, $0.24$, $0.10$, và $0.07$. Tìm xác suất thợ máy sửa **ít nhất** 5 xe vào ngày làm việc tiếp theo.\n>\n> **Lời giải:**\n> Biến cố \"sửa ít nhất 5 xe\" tương đương với việc sửa $5, 6, 7$, hoặc $\\ge 8$ xe. Các biến cố này xung khắc nhau.\n> $$P(\\text{Ít nhất 5 xe}) = P(5) + P(6) + P(7) + P(\\ge 8) = 0.28 + 0.24 + 0.10 + 0.07 = 0.69$$\n> *Cách 2 (Sử dụng biến cố bù)*:\n> $$P(\\text{Ít nhất 5 xe}) = 1 - P(\\text{Sửa dưới 5 xe}) = 1 - [P(3) + P(4)] = 1 - [0.12 + 0.19] = 1 - 0.31 = 0.69$$\n\n> [!example] Ví dụ 3.3 (Bảng phân phối mẫu sinh viên học Thống kê)\n> Cho số liệu khảo sát sinh viên như bảng sau:\n>\n> | Giới tính | Học Thống kê (Stats) | Không học Thống kê | Tổng |\n> | :--- | :---: | :---: | :---: |\n> | **Nam (Male)** | $84$ | $145$ | **$229$** |\n> | **Nữ (Female)** | $76$ | $134$ | **$210$** |\n> | **Tổng** | **$160$** | **$279$** | **$439$** |\n>\n> Tìm xác suất chọn ngẫu nhiên một người là Nam **hoặc** là sinh viên học Thống kê.\n>\n> **Lời giải:**\n> Đặt $M$: Biến cố chọn được sinh viên Nam; $T$: Biến cố chọn được sinh viên học Thống kê.\n> *   Tổng số sinh viên: $N = 439$.\n> *   Số sinh viên Nam: $n(M) = 229 \\Rightarrow P(M) = \\frac{229}{439}$.\n> *   Số sinh viên học Thống kê: $n(T) = 160 \\Rightarrow P(T) = \\frac{160}{439}$.\n> *   Số sinh viên vừa là Nam vừa học Thống kê: $n(M \\cap T) = 84 \\Rightarrow P(M \\cap T) = \\frac{84}{439}$.\n>\n> Áp dụng quy tắc cộng tổng quát:\n> $$P(M \\cup T) = P(M) + P(T) - P(M \\cap T) = \\frac{229}{439} + \\frac{160}{439} - \\frac{84}{439} = \\frac{305}{439} \\approx 0.6947$$\n\n---\n\n## 4. Xác suất có điều kiện (Conditional Probability)\n\nXác suất có điều kiện biểu diễn khả năng xảy ra của một biến cố khi đã biết một biến cố khác đã xảy ra.\n\n> [!book] Xác suất có điều kiện\n> Xác suất có điều kiện của biến cố $B$ khi biết biến cố $A$ đã xảy ra, ký hiệu là $P(B|A)$, được tính bằng công thức:\n> $$P(B|A) = \\frac{P(A \\cap B)}{P(A)} \\quad (\\text{với } P(A) > 0)$$\n> *Ý nghĩa trực quan*: Biến cố điều kiện $A$ đóng vai trò như một **không gian mẫu mới (thu hẹp)**.\n\n---\n\n### Các ví dụ giải chi tiết (Xác suất có điều kiện)\n\n> [!example] Ví dụ 4.1 (Khảo sát xe cũ)\n> Trong một bãi xe ô tô cũ, có $70\\%$ xe có điều hòa nhiệt độ (AC), $40\\%$ xe có đầu đĩa CD (CD), và $20\\%$ xe có cả hai. Tìm xác suất chọn được một xe có CD biết rằng xe đó có AC.\n>\n> **Lời giải:**\n> Đặt $A$: Xe có AC $\\Rightarrow P(A) = 0.70$.\n> Đặt $C$: Xe có đầu đĩa CD $\\Rightarrow P(C) = 0.40$.\n> Xác suất xe có cả hai: $P(A \\cap C) = 0.20$.\n>\n> Yêu cầu tính $P(C|A)$:\n> $$P(C|A) = \\frac{P(A \\cap C)}{P(A)} = \\frac{0.20}{0.70} = \\frac{2}{7} \\approx 0.2857$$\n\n> [!example] Ví dụ 4.2 (Chuyến bay đúng giờ)\n> Xác suất một chuyến bay khởi hành đúng giờ là $P(D) = 0.83$. Xác suất chuyến bay đến nơi đúng giờ là $P(A) = 0.82$. Xác suất chuyến bay khởi hành và đến nơi đúng giờ là $P(D \\cap A) = 0.78$.\n> a. Tìm xác suất máy bay đến nơi đúng giờ biết nó khởi hành đúng giờ ($P(A|D)$).\n> b. Tìm xác suất máy bay khởi hành đúng giờ biết nó đến nơi đúng giờ ($P(D|A)$).\n>\n> **Lời giải:**\n> a. Tính $P(A|D)$:\n> $$P(A|D) = \\frac{P(D \\cap A)}{P(D)} = \\frac{0.78}{0.83} \\approx 0.9398$$\n> b. Tính $P(D|A)$:\n> $$P(D|A) = \\frac{P(D \\cap A)}{P(A)} = \\frac{0.78}{0.82} \\approx 0.9512$$\n\n---\n\n## 5. Quy tắc nhân và Quy tắc Xác suất đầy đủ (Multiplication and Total Probability Rules)\n\n> [!formula] Quy tắc nhân xác suất (Multiplication Rule)\n> Từ định nghĩa xác suất có điều kiện, ta suy ra quy tắc nhân để tính xác suất đồng thời xảy ra của hai biến cố:\n> $$P(A \\cap B) = P(A) P(B|A) = P(B) P(A|B)$$\n> *   **Tổng quát cho $k$ biến cố**:\n>     $$P(A_1 \\cap A_2 \\cap \\dots \\cap A_k) = P(A_1) P(A_2 | A_1) P(A_3 | A_1 \\cap A_2) \\dots P(A_k | A_1 \\cap A_2 \\cap \\dots \\cap A_{k-1})$$\n\n> [!formula] Công thức Xác suất đầy đủ (Total Probability Rule)\n> Cho các biến cố $E_1, E_2, \\dots, E_k$ tạo thành một **phân hoạch** của không gian mẫu $S$ (nghĩa là chúng đôi một xung khắc và tổng hợp của chúng bằng $S$). Khi đó, với biến cố $B$ bất kỳ, ta có:\n> $$P(B) = \\sum_{i=1}^{k} P(E_i) P(B|E_i)$$\n> *   **Trường hợp đặc biệt với 2 biến cố $A$ và $A'$**:\n>     $$P(B) = P(A) P(B|A) + P(A') P(B|A')$$\n\n### 🗺️ Trực quan hóa công thức đầy đủ qua Sơ đồ phân hoạch\nDưới đây là cách trực quan hóa việc tính xác suất đầy đủ của biến cố $B$ bằng cách cộng các phần giao của nó với các biến cố phân hoạch $E_1, E_2, E_3$:\n\n```mermaid\ngraph LR\n    subgraph Không gian mẫu S\n        E1[Biến cố E1] -->|Giao| B1[\"B ∩ E1<br>p1 = P(E1)P(B|E1)\"]\n        E2[Biến cố E2] -->|Giao| B2[\"B ∩ E2<br>p2 = P(E2)P(B|E2)\"]\n        E3[Biến cố E3] -->|Giao| B3[\"B ∩ E3<br>p3 = P(E3)P(B|E3)\"]\n    end\n    B1 -->|Cộng lại| TotalB[\"Biến cố B<br>P(B) = p1 + p2 + p3\"]\n    B2 -->|Cộng lại| TotalB\n    B3 -->|Cộng lại| TotalB\n```\n\n---\n\n### Các ví dụ giải chi tiết (Quy tắc nhân & Xác suất đầy đủ)\n\n> [!example] Ví dụ 5.1 (Rút cầu chì từ hộp)\n> Một hộp chứa 20 cầu chì, trong đó có 5 cầu chì bị hỏng. Người ta lấy ngẫu nhiên lần lượt từng cầu chì ra khỏi hộp mà **không hoàn lại**. Tính xác suất để cả 2 cầu chì được chọn đều bị hỏng.\n>\n> **Lời giải:**\n> Đặt $A_1$: Cầu chì thứ nhất hỏng. $A_2$: Cầu chì thứ hai hỏng.\n> *   Lần rút thứ nhất: Hộp có 20 cầu chì, 5 hỏng $\\Rightarrow P(A_1) = \\frac{5}{20}$.\n> *   Lần rút thứ hai (khi quả thứ nhất hỏng đã lấy ra): Hộp còn 19 cầu chì, trong đó còn 4 hỏng $\\Rightarrow P(A_2|A_1) = \\frac{4}{19}$.\n>\n> Áp dụng quy tắc nhân xác suất:\n> $$P(A_1 \\cap A_2) = P(A_1) P(A_2|A_1) = \\frac{5}{20} \\times \\frac{4}{19} = \\frac{1}{19} \\approx 0.0526$$\n\n> [!example] Ví dụ 5.2 (Bóng trong hai túi)\n> Túi thứ nhất chứa 4 bóng trắng và 3 bóng đen. Túi thứ hai chứa 3 bóng trắng và 5 bóng đen. Lấy ngẫu nhiên 1 bóng từ túi thứ nhất bỏ vào túi thứ hai (không nhìn màu). Sau đó lấy ngẫu nhiên 1 bóng từ túi thứ hai. Tính xác suất bóng lấy ra từ túi thứ hai là bóng đen.\n>\n> **Lời giải:**\n> Đặt $W_1$: Bóng lấy từ túi 1 sang túi 2 là bóng trắng.\n> Đặt $B_1$: Bóng lấy từ túi 1 sang túi 2 là bóng đen.\n> Ta có: $P(W_1) = \\frac{4}{7}$, $P(B_1) = \\frac{3}{7}$. Hai biến cố này lập thành phân hoạch.\n>\n> Gọi $B_2$ là biến cố lấy được bóng đen từ túi thứ hai.\n> *   Nếu túi 1 chuyển sang bóng trắng ($W_1$ xảy ra): Túi 2 lúc này có $3+1 = 4$ trắng và 5 đen (tổng 9 bóng) $\\Rightarrow P(B_2|W_1) = \\frac{5}{9}$.\n> *   Nếu túi 1 chuyển sang bóng đen ($B_1$ xảy ra): Túi 2 lúc này có 3 trắng và $5+1 = 6$ đen (tổng 9 bóng) $\\Rightarrow P(B_2|B_1) = \\frac{6}{9}$.\n>\n> Áp dụng công thức xác suất đầy đủ:\n> $$P(B_2) = P(W_1) P(B_2|W_1) + P(B_1) P(B_2|B_1) = \\frac{4}{7} \\times \\frac{5}{9} + \\frac{3}{7} \\times \\frac{6}{9} = \\frac{20}{63} + \\frac{18}{63} = \\frac{38}{63} \\approx 0.6032$$\n\n---\n\n## 6. Tính độc lập (Independence)\n\n> [!book] Tính độc lập (Independence)\n> Hai biến cố được gọi là độc lập nếu việc xảy ra hay không xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia. Điều này tương đương với:\n> 1.  $P(A|B) = P(A)$\n> 2.  $P(B|A) = P(B)$\n> 3.  $P(A \\cap B) = P(A) P(B)$\n> *Hệ quả*: Nếu $A$ và $B$ độc lập thì các cặp $(A, B')$, $(A', B)$, $(A', B')$ cũng độc lập.\n\n> [!book] Độc lập của nhiều biến cố\n> Các biến cố $E_1, E_2, \\dots, E_n$ độc lập nếu xác suất giao của bất kỳ nhóm con nào cũng bằng tích các xác suất thành phần. Ví dụ với $A, B, C$ độc lập:\n> *   $P(A \\cap B) = P(A) P(B)$\n> *   $P(B \\cap C) = P(B) P(C)$\n> *   $P(C \\cap A) = P(C) P(A)$\n> *   $P(A \\cap B \\cap C) = P(A) P(B) P(C)$\n\n---\n\n### Ví dụ giải chi tiết (Tính độc lập)\n\n> [!example] Ví dụ 6.1 (Mạch điện hoạt động)\n> Cho mạch điện gồm các thiết bị lắp đặt như hình sơ đồ. Giả sử các thiết bị hoạt động độc lập với nhau.\n> *   Nhánh trên gồm 2 thiết bị mắc nối tiếp có xác suất hoạt động lần lượt là $0.90$ và $0.80$.\n> *   Nhánh dưới gồm thiết bị độc lập mắc song song với nhánh trên có xác suất hoạt động là $0.95$.\n> Tính xác suất mạch hoạt động (có dòng điện đi qua từ trái sang phải).\n>\n> **Lời giải:**\n> Mạch hoạt động khi nhánh trên hoạt động **hoặc** nhánh dưới hoạt động.\n> Gọi:\n> *   $A$: Thiết bị thứ nhất của nhánh trên hoạt động ($P(A) = 0.90$).\n> *   $B$: Thiết bị thứ hai của nhánh trên hoạt động ($P(B) = 0.80$).\n> *   $C$: Thiết bị nhánh dưới hoạt động ($P(C) = 0.95$).\n>\n> Nhánh trên hoạt động khi cả $A$ và $B$ đều hoạt động. Gọi biến cố này là $U = A \\cap B$. Do $A$ và $B$ hoạt động độc lập:\n> $$P(U) = P(A \\cap B) = P(A) P(B) = 0.90 \\times 0.80 = 0.72$$\n>\n> Mạch hoạt động ($M$) khi nhánh trên hoạt động hoặc nhánh dưới hoạt động ($M = U \\cup C$). Vì các thiết bị hoạt động độc lập, $U$ và $C$ độc lập.\n> Áp dụng quy tắc cộng tổng quát:\n> $$P(M) = P(U \\cup C) = P(U) + P(C) - P(U \\cap C)$$\n> Do tính độc lập: $P(U \\cap C) = P(U) P(C)$.\n> $$P(M) = 0.72 + 0.95 - (0.72 \\times 0.95) = 1.67 - 0.684 = 0.986$$\n>\n> *Cách khác dùng biến cố bù:*\n> Mạch ngừng hoạt động khi cả nhánh trên và nhánh dưới đều hỏng:\n> $$P(M') = P(U') P(C') = (1 - 0.72) \\times (1 - 0.95) = 0.28 \\times 0.05 = 0.014$$\n> $$\\Rightarrow P(M) = 1 - P(M') = 1 - 0.014 = 0.986$$\n\n---\n\n## 7. Định lý Bayes (Bayes' Theorem)\n\n> [!insight] 💡 Ẩn dụ thực tế giúp bạn hiểu Định lý Bayes\n> Hãy nghĩ về Định lý Bayes như một chiếc **\"Máy cập nhật thông tin\"**.\n> *   Bạn bắt đầu với một ước lượng ban đầu gọi là **Xác suất tiền nghiệm (Prior Probability - $P(E_i)$)**. (Ví dụ: Bạn nghĩ khả năng một email là spam là $20\\%$).\n> *   Sau đó bạn có thêm **bằng chứng mới** (Ví dụ: Email chứa từ \"Khuyến mãi\"). \n> *   Bạn biết khả năng từ này xuất hiện trong thư rác và thư thường là bao nhiêu.\n> *   Định lý Bayes giúp bạn cập nhật lại niềm tin của mình thành **Xác suất hậu nghiệm (Posterior Probability - $P(E_i|B)$)** (Ví dụ: Khả năng email chứa từ \"Khuyến mãi\" là spam thực tế đã tăng lên $85\\%$).\n> \n> Nó giống hệt cách một bác sĩ chẩn đoán bệnh: Tỷ lệ nhiễm bệnh trong cộng đồng là rất thấp ($P(\\text{Bệnh})$), nhưng nếu bệnh nhân xét nghiệm dương tính ($P(\\text{Dương tính} \\mid \\text{Bệnh})$), bác sĩ dùng Bayes để tính xác suất thực sự bệnh nhân mắc bệnh ($P(\\text{Bệnh} \\mid \\text{Dương tính})$).\n\n> [!formula] Định lý Bayes\n> Nếu $E_1, E_2, \\dots, E_k$ là một phân hoạch của không gian mẫu $S$ và $B$ là biến cố có xác suất $P(B) > 0$:\n> $$P(E_i | B) = \\frac{P(E_i \\cap B)}{P(B)} = \\frac{P(E_i) P(B|E_i)}{\\sum_{j=1}^{k} P(E_j) P(B|E_j)}$$\n> *   **Trường hợp đặc biệt (2 biến cố)**:\n>     $$P(A|B) = \\frac{P(A) P(B|A)}{P(A) P(B|A) + P(A') P(B|A')}$$\n\n---\n\n### Các ví dụ giải chi tiết (Định lý Bayes)\n\n> [!example] Ví dụ 7.1 (Kiểm định khí thải ô tô)\n> Tại một bang, quy định kiểm tra khí thải ô tô cho thấy $25\\%$ số xe lưu hành xả khí thải vượt mức cho phép. Thiết bị kiểm tra hoạt động có sai số:\n> *   Nếu xe thực sự vượt mức khí thải, máy báo lỗi (Fail) với xác suất $99\\%$.\n> *   Nếu xe đạt chuẩn khí thải, máy vẫn báo lỗi (Fail) với xác suất $17\\%$.\n> Một xe ngẫu nhiên được đưa đi kiểm tra và bị máy báo lỗi (Fail). Tính xác suất thực tế xe này xả khí thải vượt mức cho phép.\n>\n> **Lời giải:**\n> Đặt:\n> *   $D$: Xe xả khí thải vượt mức cho phép $\\Rightarrow P(D) = 0.25$.\n> *   $D'$: Xe đạt chuẩn khí thải $\\Rightarrow P(D') = 1 - 0.25 = 0.75$.\n> *   $F$: Máy báo lỗi (Fail).\n>\n> Theo giả thiết:\n> *   Xác suất máy báo lỗi khi xe vượt mức: $P(F|D) = 0.99$.\n> *   Xác suất máy báo lỗi khi xe đạt chuẩn: $P(F|D') = 0.17$.\n>\n> Cần tính xác suất xe vượt chuẩn biết nó bị báo lỗi, tức là $P(D|F)$.\n> Áp dụng định lý Bayes:\n> $$P(D|F) = \\frac{P(D) P(F|D)}{P(D) P(F|D) + P(D') P(F|D')}$$\n> $$P(D|F) = \\frac{0.25 \\times 0.99}{0.25 \\times 0.99 + 0.75 \\times 0.17} = \\frac{0.2475}{0.2475 + 0.1275} = \\frac{0.2475}{0.3750} = 0.66$$\n> *Kết luận*: Nếu xe bị báo lỗi khí thải, xác suất thực sự xe này vượt mức là $66\\%$.\n\n> [!example] Ví dụ 7.2 (Sản phẩm lỗi từ ba máy)\n> Trong một nhà máy lắp ráp, ba máy $B_1, B_2, B_3$ lần lượt sản xuất ra $30\\%$, $45\\%$, và $25\\%$ số lượng sản phẩm. Tỷ lệ phế phẩm (defective) của mỗi máy lần lượt là $2\\%$, $3\\%$, và $2\\%$.\n> a. Lấy ngẫu nhiên một sản phẩm, tính xác suất sản phẩm đó là phế phẩm ($P(D)$).\n> b. Nếu sản phẩm chọn ra là phế phẩm, tính xác suất sản phẩm đó do máy $B_3$ sản xuất ($P(B_3|D)$).\n>\n> **Lời giải:**\n> Tóm tắt thông tin:\n> *   $P(B_1) = 0.30$, $P(B_2) = 0.45$, $P(B_3) = 0.25$.\n> *   $P(D|B_1) = 0.02$, $P(D|B_2) = 0.03$, $P(D|B_3) = 0.02$.\n>\n> a. Tính xác suất phế phẩm chung bằng công thức Xác suất đầy đủ:\n> $$P(D) = P(B_1)P(D|B_1) + P(B_2)P(D|B_2) + P(B_3)P(D|B_3)$$\n> $$P(D) = (0.30 \\times 0.02) + (0.45 \\times 0.03) + (0.25 \\times 0.02) = 0.006 + 0.0135 + 0.005 = 0.0245 \\quad (2.45\\%)$$\n>\n> b. Nếu sản phẩm bị lỗi, tính xác suất do máy $B_3$ sản xuất:\n> $$P(B_3|D) = \\frac{P(B_3) P(D|B_3)}{P(D)} = \\frac{0.25 \\times 0.02}{0.0245} = \\frac{0.005}{0.0245} \\approx 0.2041 \\quad (20.41\\%)$$"
  },
  {
    "id": "chapter_03_discrete_random_variables",
    "title": "Biến ngẫu nhiên rời rạc và Phân phối Xác suất",
    "chapter_num": 3,
    "content": "# Chương 3: Biến ngẫu nhiên rời rạc và Phân phối Xác suất (Discrete Random Variables and Probability Distributions)\n\nChương này nghiên cứu về các đại lượng nhận các giá trị ngẫu nhiên rời rạc. Đây là nền tảng để mô hình hóa các đại lượng đếm được trong thực tế như số lượng sản phẩm lỗi, số cuộc gọi đến tổng đài, hay số lần tung đồng xu cho đến khi xuất hiện mặt ngửa.\n\n---\n\n## 1. Khái niệm Biến ngẫu nhiên (Random Variables)\n\n> [!book] Biến ngẫu nhiên (Random Variable - R.V.)\n> Là một hàm số gán một số thực cho mỗi kết quả trong không gian mẫu $S$ của một phép thử ngẫu nhiên.\n> *   **Ký hiệu**: Thường ký hiệu bằng chữ in hoa (ví dụ: $X, Y, Z$). Giá trị cụ thể mà biến ngẫu nhiên nhận sau khi thực hiện phép thử được ký hiệu bằng chữ thường tương ứng (ví dụ: $x, y, z$).\n\n### Phân loại\n1.  **Biến ngẫu nhiên rời rạc (Discrete R.V.)**: Là biến ngẫu nhiên có tập hợp các giá trị có thể nhận là hữu hạn hoặc vô hạn đếm được (ví dụ: $\\{0, 1, 2, \\dots\\}$).\n2.  **Biến ngẫu nhiên liên tục (Continuous R.V.)**: Là biến ngẫu nhiên có tập hợp các giá trị có thể nhận là một khoảng hoặc hệ thống các khoảng số thực (xem thêm Chương 4).\n\n> [!tip] Đối chiếu song song: Rời rạc vs Liên tục\n> Để giúp bạn hình dung sự khác biệt và tính đối xứng giữa hai loại biến ngẫu nhiên này, dưới đây là bảng so sánh các đặc trưng cốt lõi:\n> \n> | Đặc trưng | Biến ngẫu nhiên rời rạc (Discrete R.V.) | Biến ngẫu nhiên liên tục (Continuous R.V.) |\n> | :--- | :--- | :--- |\n> | **Giá trị khả dĩ** | Hữu hạn hoặc vô hạn đếm được ($x_1, x_2, \\dots$) | Vô hạn không đếm được (một hoặc nhiều khoảng số thực) |\n> | **Hàm xác suất** | Hàm khối xác suất (PMF): $f(x) = P(X = x)$ | Hàm mật độ xác suất (PDF): $f(x)$ |\n> | **Điều kiện hàm** | $f(x) \\ge 0$ và $\\sum_x f(x) = 1$ | $f(x) \\ge 0$ và $\\int_{-\\infty}^{\\infty} f(x) dx = 1$ |\n> | **Xác suất tích lũy (CDF)**| $F(x) = P(X \\le x) = \\sum_{t \\le x} f(t)$ | $F(x) = P(X \\le x) = \\int_{-\\infty}^{x} f(t) dt$ |\n> | **Kỳ vọng $E(X)$** | $\\mu = \\sum_x x \\cdot f(x)$ | $\\mu = \\int_{-\\infty}^{\\infty} x \\cdot f(x) dx$ |\n> | **Phương sai $V(X)$** | $\\sigma^2 = \\sum_x (x - \\mu)^2 f(x)$ | $\\sigma^2 = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 f(x) dx$ |\n\n---\n\n## 2. Hàm khối xác suất và Hàm phân phối tích lũy\n\n> [!book] Hàm khối xác suất (Probability Mass Function - PMF)\n> Đối với biến ngẫu nhiên rời rạc $X$, xác suất để nó nhận giá trị cụ thể $x$ được biểu diễn qua hàm khối xác suất $f(x)$ (hoặc $P(X = x)$).\n> Hàm $f(x)$ phải thỏa mãn các tính chất tiên đề sau:\n> 1.  $f(x_i) \\ge 0$ với mọi giá trị $x_i$.\n> 2.  Tổng xác suất của tất cả các giá trị khả dĩ phải bằng 1:\n>     $$\\sum_{i=1}^{n} f(x_i) = 1$$\n> 3.  $P(X = x_i) = f(x_i)$\n\n> [!example] Ví dụ 2.1 (Tung đồng xu 3 lần)\n> Gọi $X$ là số lần xuất hiện mặt Sấp (H) khi tung đồng xu cân đối 3 lần độc lập. \n> *   Không gian mẫu $S$ gồm $2^3 = 8$ phần tử đồng khả năng: $\\{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\\}$.\n> *   Giá trị của $X$ có thể nhận là $\\{0, 1, 2, 3\\}$.\n> *   Hàm khối xác suất ($PMF$) được xác định như sau:\n>     *   $P(X=0) = P(\\{TTT\\}) = 1/8$\n>     *   $P(X=1) = P(\\{HTT, THT, TTH\\}) = 3/8$\n>     *   $P(X=2) = P(\\{HHT, HTH, THH\\}) = 3/8$\n>     *   $P(X=3) = P(\\{HHH\\}) = 1/8$\n> *   Bảng phân phối xác suất của $X$:\n>\n>     | $x$ | $0$ | $1$ | $2$ | $3$ |\n>     | :--- | :---: | :---: | :---: | :---: |\n>     | **$f(x)$** | $1/8$ | $3/8$ | $3/8$ | $1/8$ |\n\n> [!book] Hàm phân phối tích lũy (Cumulative Distribution Function - CDF)\n> Hàm phân phối tích lũy của biến ngẫu nhiên rời rạc $X$, ký hiệu là $F(x)$, xác định xác suất để $X$ nhận giá trị nhỏ hơn hoặc bằng một số thực $x$:\n> $$F(x) = P(X \\le x) = \\sum_{x_i \\le x} f(x_i)$$\n> #### Tính chất của CDF:\n> 1.  $0 \\le F(x) \\le 1$\n> 2.  Nếu $x \\le y$ thì $F(x) \\le F(y)$ (Hàm không giảm).\n> 3.  Đồ thị $F(x)$ đối với biến rời rạc là đồ thị dạng bậc thang.\n\n---\n\n## 3. Kỳ vọng và Phương sai (Mean and Variance)\n\n> [!formula] Kỳ vọng (Mean / Expected Value)\n> Kỳ vọng của biến ngẫu nhiên rời rạc $X$, ký hiệu là $\\mu$ hoặc $E(X)$, là giá trị trung bình theo trọng số xác suất của tất cả các kết quả khả dĩ:\n> $$\\mu = E(X) = \\sum_{i} x_i f(x_i)$$\n\n> [!formula] Phương sai (Variance)\n> Phương sai, ký hiệu là $\\sigma^2$ hoặc $V(X)$, đo lường mức độ phân tán của các giá trị của biến ngẫu nhiên xung quanh kỳ vọng $\\mu$:\n> $$\\sigma^2 = V(X) = E[(X - \\mu)^2] = \\sum_{i} (x_i - \\mu)^2 f(x_i) = E(X^2) - [E(X)]^2$$\n> *   **Công thức tính nhanh phương sai**:\n>     $$V(X) = E(X^2) - [E(X)]^2$$\n>     Trong đó: $E(X^2) = \\sum_{i} x_i^2 f(x_i)$.\n\n> [!formula] Độ lệch chuẩn (Standard Deviation)\n> $$\\sigma = \\sqrt{V(X)}$$\n\n> [!formula] Kỳ vọng của một hàm số $h(X)$\n> Nếu $h(X)$ là một hàm của biến ngẫu nhiên rời rạc $X$:\n> $$E[h(X)] = \\sum_{i} h(x_i) f(x_i)$$\n> #### Các hệ quả tuyến tính quan trọng:\n> Với $a$ và $b$ là các hằng số:\n> *   **Kỳ vọng**: \n>     $$E(aX + b) = aE(X) + b$$\n> *   **Phương sai**: \n>     $$V(aX + b) = a^2 V(X)$$\n\n---\n\n### Các ví dụ giải chi tiết (Kỳ vọng & Phương sai)\n\n> [!example] Ví dụ 3.1 (Số lượng tin nhắn trong mạng máy tính)\n> Số lượng tin nhắn gửi đi mỗi giờ qua mạng máy tính ($X$) có bảng phân phối xác suất như sau:\n>\n> | $x$ | $10$ | $11$ | $12$ | $13$ | $14$ | $15$ |\n> | :--- | :---: | :---: | :---: | :---: | :---: | :---: |\n> | **$f(x)$** | $0.08$ | $0.15$ | $0.30$ | $0.20$ | $0.20$ | $0.07$ |\n>\n> Tính kỳ vọng và độ lệch chuẩn của số tin nhắn gửi mỗi giờ.\n>\n> **Lời giải:**\n> 1. Tính kỳ vọng $E(X)$:\n>    $$E(X) = (10 \\times 0.08) + (11 \\times 0.15) + (12 \\times 0.30) + (13 \\times 0.20) + (14 \\times 0.20) + (15 \\times 0.07) = 12.5$$\n> 2. Tính $E(X^2)$:\n>    $$E(X^2) = (100 \\times 0.08) + (121 \\times 0.15) + (144 \\times 0.30) + (169 \\times 0.20) + (196 \\times 0.20) + (225 \\times 0.07) = 158.1$$\n> 3. Tính phương sai $V(X)$:\n>    $$V(X) = E(X^2) - [E(X)]^2 = 158.1 - 12.5^2 = 158.1 - 156.25 = 1.85$$\n> 4. Tính độ lệch chuẩn $\\sigma$:\n>    $$\\sigma = \\sqrt{1.85} \\approx 1.3601$$\n\n> [!example] Ví dụ 3.2 (Hoa hồng của nhân viên bán thiết bị y tế)\n> Một nhân viên bán thiết bị y tế có 2 cuộc hẹn trong ngày. Kết quả hai cuộc hẹn độc lập với nhau.\n> *   Cuộc hẹn 1: Xác suất thành công là $70\\%$, nếu thành công nhận $1000$ USD hoa hồng.\n> *   Cuộc hẹn 2: Xác suất thành công là $40\\%$, nếu thành công nhận $1500$ USD hoa hồng.\n> Tính kỳ vọng số tiền hoa hồng nhân viên nhận được trong ngày.\n>\n> **Lời giải:**\n> Gọi $X_1$ là hoa hồng từ cuộc hẹn 1 $\\Rightarrow E(X_1) = 1000 \\times 0.70 = 700$ USD.\n> Gọi $X_2$ là hoa hồng từ cuộc hẹn 2 $\\Rightarrow E(X_2) = 1500 \\times 0.40 = 600$ USD.\n> Tổng hoa hồng nhận được là $Y = X_1 + X_2$.\n> Áp dụng tính chất tuyến tính của kỳ vọng:\n> $$E(Y) = E(X_1 + X_2) = E(X_1) + E(X_2) = 700 + 600 = 1300 \\text{ USD}$$\n\n---\n\n## 4. Các phân phối xác suất rời rạc thông dụng\n\n### 4.1. Phân phối Đều rời rạc (Discrete Uniform Distribution)\n\n> [!book] Phân phối Đều rời rạc\n> Một biến ngẫu nhiên rời rạc $X$ có phân phối đều rời rạc nếu mỗi giá trị trong miền giá trị $\\{x_1, x_2, \\dots, x_n\\}$ có khả năng xảy ra bằng nhau:\n> $$f(x_i) = \\frac{1}{n}$$\n> *   **Trường hợp đặc biệt (các số nguyên liên tiếp từ $a$ đến $b$)**:\n>     *   **Kỳ vọng**: $E(X) = \\frac{a + b}{2}$\n>     *   **Phương sai**: $V(X) = \\frac{(b - a + 1)^2 - 1}{12}$\n\n---\n\n### 4.2. Phân phối Nhị thức (Binomial Distribution)\n\n> [!book] Phân phối Nhị thức\n> Thực hiện $n$ phép thử Bernoulli độc lập có xác suất thành công $p$ không đổi. Biến ngẫu nhiên $X$ chỉ số lần thành công tuân theo phân phối nhị thức, ký hiệu $X \\sim Bin(n, p)$.\n> *   **Hàm khối xác suất (PMF)**:\n>     $$f(x) = C_n^x p^x (1-p)^{n-x} \\quad \\text{với } x = 0, 1, 2, \\dots, n$$\n> *   **Đặc trưng**:\n>     *   **Kỳ vọng**: $E(X) = np$\n>     *   **Phương sai**: $V(X) = np(1-p)$\n\n> [!example] Ví dụ 4.2 (Kiểm tra chất lượng nguồn nước)\n> Mỗi mẫu nước có xác suất $10\\%$ chứa chất gây ô nhiễm hữu cơ. Giả định các mẫu nước độc lập. Người ta lấy ngẫu nhiên 18 mẫu nước.\n> a. Tính xác suất để có đúng 2 mẫu chứa chất ô nhiễm.\n> b. Tính xác suất để có ít nhất 4 mẫu chứa chất ô nhiễm.\n>\n> **Lời giải:**\n> Gọi $X$ là số mẫu nước chứa chất ô nhiễm $\\Rightarrow X \\sim Bin(18, 0.1)$.\n> a. Tính $P(X = 2)$:\n> $$P(X = 2) = C_{18}^2 (0.1)^2 (0.9)^{16} = 153 \\times 0.01 \\times 0.1853 \\approx 0.2835$$\n> b. Tính $P(X \\ge 4)$:\n> $$P(X \\ge 4) = 1 - P(X \\le 3) = 1 - [P(X=0) + P(X=1) + P(X=2) + P(X=3)]$$\n> Tính tổng xác suất tích lũy thu được:\n> $$P(X \\ge 4) = 1 - [0.1501 + 0.3002 + 0.2835 + 0.1680] = 1 - 0.9018 = 0.0982$$\n\n---\n\n### 4.3. Phân phối Hình học (Geometric Distribution)\n\n> [!book] Phân phối Hình học\n> Thực hiện các phép thử Bernoulli độc lập liên tiếp với xác suất thành công $p$ cho đến khi xuất hiện **thành công đầu tiên** thì dừng lại. Biến ngẫu nhiên $X$ chỉ số lần phép thử thực hiện, ký hiệu $X \\sim Geo(p)$.\n> *   **Hàm khối xác suất (PMF)**:\n>     $$f(x) = (1-p)^{x-1} p \\quad \\text{với } x = 1, 2, 3, \\dots$$\n> *   **Đặc trưng**:\n>     *   **Kỳ vọng**: $E(X) = \\frac{1}{p}$\n>     *   **Phương sai**: $V(X) = \\frac{1-p}{p^2}$\n\n> [!idea] Ẩn dụ \"Kiên trì tỏ tình\" (Geometric Distribution)\n> Hãy tưởng tượng bạn đang \"kiên trì tỏ tình\" một người bạn thích. Mỗi ngày bạn tỏ tình một lần, xác suất người ấy đồng ý (Thành công) là $p$, từ chối là $1-p$. Các ngày tỏ tình là độc lập. Bạn quyết tâm **chỉ dừng lại khi người ấy đồng ý lần đầu tiên**.\n> *   $X$ là số ngày bạn cần tỏ tình.\n> *   Để thành công ở ngày thứ $x$, nghĩa là $x-1$ ngày trước đó bạn đều bị từ chối, và đúng ngày thứ $x$ người ấy mới gật đầu.\n> *   Do đó xác suất là: $P(X = x) = \\underbrace{(1-p)(1-p)\\dots(1-p)}_{x-1 \\text{ lần trượt}} \\times p = (1-p)^{x-1} p$.\n> *   Kỳ vọng $E(X) = 1/p$: Nếu xác suất đồng ý mỗi ngày là $p = 0.05$ ($5\\%$), thì trung bình bạn phải kiên trì thử $1/0.05 = 20$ lần mới nhận được cái gật đầu đầu tiên!\n\n> [!example] Ví dụ 4.3 (Phát hiện lỗi phiến bán dẫn)\n> Xác suất một phiến bán dẫn chứa hạt bụi ô nhiễm lớn là $0.01$. Tìm xác suất phải phân tích đúng 125 phiến bán dẫn để phát hiện phiến lỗi đầu tiên.\n>\n> **Lời giải:**\n> Gọi $X$ là số phiến bán dẫn cần kiểm tra đến khi phát hiện phiến lỗi đầu tiên $\\Rightarrow X \\sim Geo(p = 0.01)$.\n> $$P(X = 125) = (1 - 0.01)^{124} \\times 0.01 = 0.99^{124} \\times 0.01 \\approx 0.0029$$\n\n---\n\n### 4.4. Phân phối Nhị thức âm (Negative Binomial Distribution)\n\n> [!book] Phân phối Nhị thức âm\n> Thực hiện các phép thử Bernoulli độc lập liên tiếp với xác suất thành công $p$ cho đến khi xuất hiện **đúng $r$ lần thành công** thì dừng lại. Biến ngẫu nhiên $X$ chỉ số lần phép thử thực hiện.\n> *   **Hàm khối xác suất (PMF)**:\n>     $$f(x) = C_{x-1}^{r-1} p^r (1-p)^{x-r} \\quad \\text{với } x = r, r+1, r+2, \\dots$$\n> *   **Đặc trưng**:\n>     *   **Kỳ vọng**: $E(X) = \\frac{r}{p}$\n>     *   **Phương sai**: $V(X) = \\frac{r(1-p)}{p^2}$\n\n> [!idea] Ẩn dụ \"Tuyển thành viên\" (Negative Binomial Distribution)\n> Tương tự như trên, nhưng lần này bạn không chỉ cần 1 cái gật đầu. Bạn đang lập một đội gồm đúng $r$ thành viên. Bạn đi hỏi từng người một. Xác suất mỗi người đồng ý tham gia là $p$. Bạn sẽ hỏi tiếp cho đến khi tuyển **đủ $r$ thành viên** mới dừng lại.\n> *   $X$ là tổng số người bạn phải tiếp cận.\n> *   Để dừng lại ở người thứ $x$, nghĩa là người thứ $x$ phải là người đồng ý thứ $r$ (thành công thứ $r$). Điều này có nghĩa là trong $x-1$ người đầu tiên, đã có đúng $r-1$ người đồng ý (và $x-r$ người từ chối), và người cuối cùng gật đầu.\n> *   Xác suất là: $P(X = x) = \\underbrace{C_{x-1}^{r-1} p^{r-1} (1-p)^{x-r}}_{\\text{Trong } x-1 \\text{ người đầu có } r-1 \\text{ người đồng ý}} \\times \\underbrace{p}_{\\text{Người thứ } x \\text{ đồng ý}} = C_{x-1}^{r-1} p^r (1-p)^{x-r}$.\n\n> [!example] Ví dụ 4.4 (Thử nghiệm độ bền mối hàn)\n> Đối với một loại mối hàn, có $80\\%$ vết nứt xảy ra ở chính mối hàn, và $20\\%$ nứt xảy ra ở dầm đỡ. Tìm xác suất vết nứt ở dầm đỡ thứ 3 (thành công) xuất hiện ở lần thử nghiệm thứ 5.\n>\n> **Lời giải:**\n> Xem vết nứt ở dầm đỡ là \"thành công\" với xác suất $p = 0.20$. Ta cần tìm lần thử thứ $X = 5$ để xuất hiện thành công thứ $r = 3$.\n> $$P(X = 5) = C_{4}^2 (0.2)^3 (0.8)^2 = 6 \\times 0.008 \\times 0.64 = 0.03072$$\n\n---\n\n### 4.5. Phân phối Siêu bội (Hypergeometric Distribution)\n\n> [!book] Phân phối Siêu bội\n> Lấy mẫu kích thước $n$ **không hoàn lại** từ một tập gồm $N$ phần tử, trong đó có $K$ phần tử \"Thành công\" và $N-K$ phần tử \"Thất bại\". Biến ngẫu nhiên $X$ chỉ số phần tử thành công chọn được.\n> *   **Hàm khối xác suất (PMF)**:\n>     $$f(x) = \\frac{C_K^x C_{N-K}^{n-x}}{C_N^n} \\quad \\text{với } \\max(0, n - (N-K)) \\le x \\le \\min(n, K)$$\n> *   **Đặc trưng**:\n>     *   **Kỳ vọng**: $E(X) = n \\left(\\frac{K}{N}\\right) = np$\n>     *   **Phương sai**: $V(X) = np(1-p) \\left(\\frac{N-n}{N-1}\\right) \\quad \\text{với } p = \\frac{K}{N}$\n\n> [!example] Ví dụ 4.5 (Lựa chọn linh kiện từ nhà cung cấp)\n> Một lô hàng gồm 300 linh kiện mạch điện, có 100 linh kiện từ nhà cung cấp địa phương và 200 từ nhà cung cấp ngoài bang. Chọn ngẫu nhiên 4 linh kiện không hoàn lại từ lô hàng.\n> a. Tính xác suất cả 4 linh kiện chọn ra đều từ nhà cung cấp địa phương.\n> b. Tính kỳ vọng và phương sai của số linh kiện địa phương chọn được trong mẫu.\n>\n> **Lời giải:**\n> Gọi $X$ là số linh kiện địa phương chọn được ($N = 300, K = 100, n = 4$).\n> a. Xác suất $P(X = 4)$:\n> $$P(X = 4) = \\frac{C_{100}^4 C_{200}^0}{C_{300}^4} \\approx 0.0119$$\n> b. Tính kỳ vọng và phương sai (với $p = K/N = 1/3$):\n> *   $E(X) = n p = 4 \\times \\frac{1}{3} \\approx 1.3333$\n> *   $V(X) = np(1-p) \\left(\\frac{N-n}{N-1}\\right) = 4 \\times \\frac{1}{3} \\times \\frac{2}{3} \\times \\left(\\frac{300 - 4}{300 - 1}\\right) \\approx 0.8790$\n\n---\n\n### 4.6. Phân phối Poisson (Poisson Distribution)\n\n> [!book] Phân phối Poisson\n> Dùng để tính xác suất của một số lượng sự kiện xảy ra độc lập trong một **khoảng liên tục** (thời gian, chiều dài, diện tích...) với số lượng sự kiện trung bình là $\\lambda$. Ký hiệu $X \\sim Poisson(\\lambda)$.\n> *   **Hàm khối xác suất (PMF)**:\n>     $$f(x) = \\frac{e^{-\\lambda} \\lambda^x}{x!} \\quad \\text{với } x = 0, 1, 2, \\dots$$\n> *   **Đặc trưng**:\n>     *   **Kỳ vọng**: $E(X) = \\lambda$\n>     *   **Phương sai**: $V(X) = \\lambda$\n\n> [!example] Ví dụ 4.6 (Lỗi trên dây đồng mỏng)\n> Số lượng lỗi trên một dây đồng mỏng tuân theo phân phối Poisson với trung bình $2.3$ lỗi trên mỗi milimét ($2.3\\text{ lỗi/mm}$).\n> a. Tính xác suất có đúng 2 lỗi trên 1 mm dây đồng.\n> b. Tính xác suất có đúng 10 lỗi trên 5 mm dây đồng.\n> c. Tính xác suất có ít nhất 1 lỗi trên 2 mm dây đồng.\n>\n> **Lời giải:**\n> a. Xét khoảng dài $1\\text{ mm} \\Rightarrow \\lambda = 2.3$.\n> $$P(X = 2) = \\frac{e^{-2.3} \\times 2.3^2}{2!} \\approx 0.2652$$\n> b. Xét khoảng dài $5\\text{ mm} \\Rightarrow$ số lỗi trung bình trong 5 mm là $\\lambda = 2.3 \\times 5 = 11.5$.\n> $$P(X = 10) = \\frac{e^{-11.5} \\times 11.5^{10}}{10!} \\approx 0.1130$$\n> c. Xét khoảng dài $2\\text{ mm} \\Rightarrow$ số lỗi trung bình trong 2 mm là $\\lambda = 2.3 \\times 2 = 4.6$.\n> $$P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-4.6} \\approx 1 - 0.0101 = 0.9899$$"
  },
  {
    "id": "chapter_04_continuous_random_variables",
    "title": "Biến ngẫu nhiên liên tục và Phân phối Xác suất",
    "chapter_num": 4,
    "content": "# Chương 4: Biến ngẫu nhiên liên tục và Phân phối Xác suất (Continuous Random Variables and Probability Distributions)\n\nChương này tập trung vào các biến ngẫu nhiên liên tục - những đại lượng có thể nhận bất kỳ giá trị nào trong một khoảng số thực. Ví dụ điển hình bao gồm: chiều cao, cân nặng, thời gian chờ đợi, nhiệt độ phản ứng hóa học hoặc khoảng cách giữa các lỗi trên đường dây điện.\n\n---\n\n## 1. Khái niệm Biến ngẫu nhiên liên tục\n\n> [!book] Biến ngẫu nhiên liên tục\n> Là biến ngẫu nhiên có miền giá trị là một khoảng (hữu hạn hoặc vô hạn) trên trục số thực.\n> *   **Đặc điểm quan trọng**: Vì miền giá trị chứa vô số thực không đếm được, xác suất để biến liên tục $X$ nhận **chính xác** một giá trị đơn lẻ $x$ luôn bằng 0:\n>     $$P(X = x) = 0 \\quad \\text{với mọi } x$$\n> *   **Hệ quả**: Đối với biến liên tục, việc lấy dấu bằng ở các đầu mút của khoảng không làm thay đổi giá trị xác suất:\n>     $$P(a \\le X \\le b) = P(a < X < b) = P(a \\le X < b) = P(a < X \\le b)$$\n\n---\n\n## 2. Hàm mật độ xác suất (Probability Density Function - PDF)\n\nKhông giống như biến ngẫu nhiên rời rạc sử dụng xác suất tại một điểm (xem thêm Chương 3), biến ngẫu nhiên liên tục được mô tả thông qua **Hàm mật độ xác suất** $f(x)$.\n\n> [!book] Hàm mật độ xác suất (PDF)\n> Hàm số $f(x)$ là hàm mật độ xác suất (PDF) của biến ngẫu nhiên liên tục $X$ nếu nó thỏa mãn các điều kiện sau:\n> 1.  $f(x) \\ge 0$ với mọi $x \\in \\mathbb{R}$.\n> 2.  Tổng diện tích dưới đồ thị $f(x)$ trên toàn bộ trục số bằng 1:\n>     $$\\int_{-\\infty}^{+\\infty} f(x) dx = 1$$\n> 3.  Xác suất để $X$ nhận giá trị trong khoảng $[a, b]$ chính bằng diện tích hình thang cong giới hạn bởi đường $f(x)$, trục hoành và hai đường thẳng $x=a$, $x=b$:\n>     $$P(a \\le X \\le b) = \\int_{a}^{b} f(x) dx$$\n\n---\n\n## 3. Hàm phân phối tích lũy (Cumulative Distribution Function - CDF)\n\n> [!book] Hàm phân phối tích lũy (CDF) của biến liên tục\n> Hàm phân phối tích lũy của biến ngẫu nhiên liên tục $X$, ký hiệu là $F(x)$, được định nghĩa là:\n> $$F(x) = P(X \\le x) = \\int_{-\\infty}^{x} f(t) dt$$\n> *   **Tính xác suất qua CDF**: \n>     $$P(a < X < b) = F(b) - F(a)$$\n> *   **Tìm PDF từ CDF**: Nếu đạo hàm của $F(x)$ tồn tại tại điểm $x$:\n>     $$f(x) = \\frac{d F(x)}{d x} = F'(x)$$\n\n---\n\n### Các ví dụ giải chi tiết (PDF & CDF)\n\n> [!example] Ví dụ 3.1 (Lỗi nhiệt độ phản ứng)\n> Giả sử sai số nhiệt độ phản ứng (độ C) trong một thí nghiệm phòng lab là biến ngẫu nhiên liên tục $X$ có hàm mật độ xác suất:\n> $$f(x) = \\begin{cases} \\frac{x^2}{3}, & -1 < x < 2 \\\\ 0, & \\text{nơi khác} \\end{cases}$$\n> a. Kiểm chứng xem $f(x)$ có phải là hàm mật độ xác suất hợp lệ không.\n> b. Tính xác suất $P(0 < X \\le 1)$.\n>\n> **Lời giải:**\n> a. Ta thấy $f(x) = x^2/3 \\ge 0$ trên $(-1, 2)$. Tính tích phân toàn miền:\n> $$\\int_{-1}^{2} \\frac{x^2}{3} dx = \\left. \\frac{x^3}{9} \\right|_{-1}^{2} = \\frac{8}{9} - \\left(-\\frac{1}{9}\\right) = 1$$\n> Vậy $f(x)$ là hàm PDF hợp lệ.\n> b. Tính xác suất $P(0 < X \\le 1)$:\n> $$P(0 < X \\le 1) = \\int_{0}^{1} \\frac{x^2}{3} dx = \\left. \\frac{x^3}{9} \\right|_{0}^{1} = \\frac{1}{9} \\approx 0.1111$$\n\n---\n\n## 4. Kỳ vọng và Phương sai\n\n> [!formula] Kỳ vọng (Mean / Expected Value)\n> $$\\mu = E(X) = \\int_{-\\infty}^{+\\infty} x f(x) dx$$\n\n> [!formula] Phương sai (Variance)\n> $$\\sigma^2 = V(X) = \\int_{-\\infty}^{+\\infty} (x - \\mu)^2 f(x) dx = E(X^2) - [E(X)]^2$$\n> Trong đó:\n> $$E(X^2) = \\int_{-\\infty}^{+\\infty} x^2 f(x) dx$$\n\n---\n\n## 5. Các phân phối xác suất liên tục thông dụng\n\n### 5.1. Phân phối Đều liên tục (Continuous Uniform Distribution)\n\n> [!book] Phân phối Đều liên tục\n> Biến ngẫu nhiên $X$ có phân phối đều trên khoảng $[a, b]$ nếu mật độ xác suất của nó là hằng số trên khoảng đó.\n> *   **Hàm mật độ (PDF)**:\n>     $$f(x) = \\begin{cases} \\frac{1}{b - a}, & a \\le x \\le b \\\\ 0, & \\text{nơi khác} \\end{cases}$$\n> *   **Hàm tích lũy (CDF)**:\n>     $$F(x) = \\begin{cases} 0, & x < a \\\\ \\frac{x - a}{b - a}, & a \\le x \\le b \\\\ 1, & x > b \\end{cases}$$\n> *   **Đặc trưng**:\n>     *   **Kỳ vọng**: $E(X) = \\frac{a + b}{2}$\n>     *   **Phương sai**: $V(X) = \\frac{(b - a)^2}{12}$\n\n---\n\n### 5.2. Phân phối Chuẩn (Normal Distribution)\n\n> [!book] Phân phối Chuẩn\n> Biến ngẫu nhiên liên tục $X$ có phân phối chuẩn với kỳ vọng $\\mu$ và phương sai $\\sigma^2$ (Ký hiệu: $X \\sim N(\\mu, \\sigma^2)$) nếu có hàm mật độ:\n> $$f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}} \\quad \\text{với } -\\infty < x < +\\infty$$\n> *   **Quy tắc $3\\sigma$ ($3\\sigma$-rule)**:\n>     *   $P(\\mu - \\sigma \\le X \\le \\mu + \\sigma) \\approx 68.27\\%$\n>     *   $P(\\mu - 2\\sigma \\le X \\le \\mu + 2\\sigma) \\approx 95.45\\%$\n>     *   $P(\\mu - 3\\sigma \\le X \\le \\mu + 3\\sigma) \\approx 99.73\\%$\n\n> [!book] Phân phối Chuẩn chuẩn hóa (Standard Normal Distribution - $Z$)\n> *   Là phân phối chuẩn đặc biệt có kỳ vọng bằng 0 và phương sai bằng 1: $Z \\sim N(0, 1)$.\n> *   **Hàm phân phối tích lũy**: Ký hiệu là $\\Phi(z) = P(Z \\le z)$. Giá trị $\\Phi(z)$ được tra cứu từ **Bảng phân phối chuẩn tắc (Table II)**.\n> *   **Tính chất đối xứng**: $\\Phi(-z) = 1 - \\Phi(z)$.\n\n> [!formula] Phép chuẩn hóa biến ngẫu nhiên chuẩn (Standardizing)\n> Nếu $X \\sim N(\\mu, \\sigma^2)$, ta có thể chuyển đổi $X$ thành biến chuẩn hóa $Z \\sim N(0, 1)$ bằng công thức:\n> $$Z = \\frac{X - \\mu}{\\sigma}$$\n> Khi đó:\n> $$P(X \\le x) = \\Phi\\left(\\frac{x - \\mu}{\\sigma}\\right)$$\n> $$P(x_1 \\le X \\le x_2) = \\Phi\\left(\\frac{x_2 - \\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{x_1 - \\mu}{\\sigma}\\right)$$\n\n> [!idea] Bản chất của $Z$ (Mẹo tư duy thực chiến)\n> Công thức $Z = \\frac{X - \\mu}{\\sigma}$ thực chất đang đo lường: **\"Giá trị $X$ của bạn cách giá trị trung bình bao nhiêu bước chân (đơn vị $\\sigma$)?\"**\n> *   **$Z = 2.5$**: Nằm cao hơn mức trung bình $2.5$ lần độ lệch chuẩn $\\sigma$ (Cực kỳ xuất sắc).\n> *   **$Z = -1.0$**: Nằm thấp hơn mức trung bình $1$ lần độ lệch chuẩn $\\sigma$.\n> *   **$Z = 0$**: Trùng khít với mức trung bình $\\mu$.\n> *   Ý nghĩa: Khi làm bài toán tìm xác suất, việc đổi sang $Z$ giúp đưa mọi phân phối chuẩn có quy mô khác nhau (như điểm thi toán, chiều cao, doanh thu) về cùng một \"hệ đo lường chuẩn tắc\" để dễ dàng tra bảng xác suất.\n\n---\n\n### Các ví dụ giải chi tiết (Phân phối Chuẩn)\n\n> [!example] Ví dụ 5.1 (Tính xác suất cho biến chuẩn hóa $X$)\n> Cho $X \\sim N(34, 144)$. Tính xác suất $P(X < 43)$ và $P(24 < X < 37)$.\n>\n> **Lời giải:**\n> Ta có $\\mu = 34$, phương sai $\\sigma^2 = 144 \\Rightarrow \\sigma = 12$.\n> *   Tính $P(X < 43)$:\n>     Chuẩn hóa: $z = \\frac{43 - 34}{12} = 0.75 \\Rightarrow P(X < 43) = \\Phi(0.75) \\approx 0.7734$.\n> *   Tính $P(24 < X < 37)$:\n>     Chuẩn hóa hai đầu mút ta có $z_1 = \\frac{24 - 34}{12} = -0.83$ và $z_2 = \\frac{37 - 34}{12} = 0.25$.\n>     $$P(24 < X < 37) = \\Phi(0.25) - \\Phi(-0.83) = \\Phi(0.25) - [1 - \\Phi(0.83)] \\approx 0.5987 - (1 - 0.7967) = 0.3954$$\n\n> [!example] Ví dụ 5.2 (Tuổi thọ bóng đèn)\n> Tuổi thọ bóng đèn (giờ) tuân theo phân phối chuẩn với trung bình là $800$ giờ và độ lệch chuẩn $40$ giờ. Tìm xác suất một bóng đèn hoạt động từ 778 đến 834 giờ.\n>\n> **Lời giải:**\n> Gọi $X$ là tuổi thọ bóng đèn $\\Rightarrow X \\sim N(\\mu = 800, \\sigma^2 = 40^2)$.\n> Cần tính $P(778 < X < 834)$:\n> $$z_1 = \\frac{778 - 800}{40} = -0.55 \\quad \\text{và} \\quad z_2 = \\frac{834 - 800}{40} = 0.85$$\n> $$P(778 < X < 834) = \\Phi(0.85) - \\Phi(-0.55) = 0.8023 - (1 - 0.7088) = 0.5111 \\quad (51.11\\%)$$\n\n---\n\n### 5.3. Phân phối Mũ (Exponential Distribution)\n\n> [!book] Phân phối Mũ\n> Dùng để mô tả khoảng cách (thời gian, không gian) giữa hai sự kiện liên tiếp của một quá trình Poisson có tốc độ trung bình là $\\lambda$ sự kiện trên một đơn vị đo.\n> *   **Hàm mật độ (PDF)**:\n>     $$f(x) = \\begin{cases} \\lambda e^{-\\lambda x}, & x \\ge 0 \\\\ 0, & x < 0 \\end{cases} \\quad (\\text{với } \\lambda > 0)$$\n> *   **Hàm tích lũy (CDF)**:\n>     $$F(x) = 1 - e^{-\\lambda x} \\quad \\text{với } x \\ge 0$$\n> *   **Các đặc trưng**:\n>     *   **Kỳ vọng**: $E(X) = \\frac{1}{\\lambda}$ (Thời gian chờ trung bình giữa 2 sự kiện)\n>     *   **Phương sai**: $V(X) = \\frac{1}{\\lambda^2}$\n\n> [!idea] Ẩn dụ \"Tính không nhớ\" (Memoryless Property) của Phân phối Mũ\n> Đây là đặc trưng thú vị và quan trọng nhất của phân phối mũ: **Thì tương lai không phụ thuộc vào quá khứ**.\n> *   **Ẩn dụ**: Tưởng tượng bạn đang đợi xe buýt (thời gian đợi có phân phối mũ). Bạn đã đợi 20 phút rồi mà xe chưa đến. Xác suất để bạn phải đợi **thêm 10 phút nữa** đúng bằng xác suất bạn phải đợi 10 phút nếu bạn vừa mới bước chân ra trạm xe buýt! Xe buýt không hề \"nhớ\" bạn đã đợi bao lâu.\n> *   **Công thức**:\n>     $$P(X > s + t \\mid X > s) = P(X > t) \\quad \\text{với mọi } s, t > 0$$\n> *   **Ghi nhớ**: Phân phối mũ là phân phối liên tục *duy nhất* có tính chất này (ở phân phối rời rạc thì đó là phân phối Hình học).\n\n> [!example] Ví dụ 5.3 (Thời gian đăng nhập hệ thống mạng)\n> Số người dùng đăng nhập hệ thống mạng nội bộ tuân theo quá trình Poisson với trung bình $25$ lượt đăng nhập mỗi giờ.\n> a. Tính xác suất không có lượt đăng nhập nào trong vòng 6 phút.\n> b. Tính xác suất thời gian chờ đến lượt đăng nhập tiếp theo nằm trong khoảng từ 2 đến 3 phút.\n>\n> **Lời giải:**\n> Tốc độ trung bình: $\\lambda = 25\\text{ lượt/giờ} = \\frac{5}{12}\\text{ lượt/phút}$. Gọi $X$ là thời gian (phút) giữa hai lần đăng nhập $\\Rightarrow X \\sim Exp\\left(\\lambda = \\frac{5}{12}\\right)$.\n> a. Tính $P(X > 6)$:\n> $$P(X > 6) = 1 - F(6) = e^{-\\frac{5}{12} \\times 6} = e^{-2.5} \\approx 0.0821 \\quad (8.21\\%)$$\n> b. Tính $P(2 < X < 3)$:\n> $$P(2 < X < 3) = F(3) - F(2) = e^{-2\\lambda} - e^{-3\\lambda} = e^{-\\frac{5}{6}} - e^{-1.25} \\approx 0.4346 - 0.2865 = 0.1481 \\quad (14.81\\%)$$\n\n---\n\n## 6. Xấp xỉ phân phối (Normal Approximation)\n\n### 6.1. Xấp xỉ Chuẩn cho phân phối Nhị thức (Normal Approximation to Binomial)\n\n> [!check] Điều kiện áp dụng\n> Nếu $X \\sim Bin(n, p)$ và thỏa mãn: $np > 5$ và $n(1-p) > 5$.\n> Ta xấp xỉ bằng biến ngẫu nhiên chuẩn $X_{normal} \\sim N(\\mu = np, \\sigma^2 = np(1-p))$.\n\n> [!formula] Hiệu chỉnh liên tục (Continuity Correction)\n> Vì ta đang xấp xỉ một phân phối rời rạc bằng một phân phối liên tục, ta cần cộng/trừ $0.5$ vào các biên số nguyên:\n> *   $P(X \\le x) \\approx \\Phi\\left(\\frac{x + 0.5 - np}{\\sqrt{np(1-p)}}\\right)$\n> *   $P(X \\ge x) \\approx 1 - \\Phi\\left(\\frac{x - 0.5 - np}{\\sqrt{np(1-p)}}\\right)$\n> *   $P(a \\le X \\le b) \\approx \\Phi\\left(\\frac{b + 0.5 - np}{\\sqrt{np(1-p)}}\\right) - \\Phi\\left(\\frac{a - 0.5 - np}{\\sqrt{np(1-p)}}\\right)$\n\n---\n\n### 6.2. Xấp xỉ Chuẩn cho phân phối Poisson (Normal Approximation to Poisson)\n\n> [!check] Điều kiện áp dụng\n> Nếu $X \\sim Poisson(\\lambda)$ và thỏa mãn: $\\lambda > 5$.\n> Ta xấp xỉ bằng biến ngẫu nhiên chuẩn $X_{normal} \\sim N(\\mu = \\lambda, \\sigma^2 = \\lambda)$.\n> *   **Hiệu chỉnh liên tục**:\n>     $$P(X \\le x) \\approx \\Phi\\left(\\frac{x + 0.5 - \\lambda}{\\sqrt{\\lambda}}\\right)$$\n\n---\n\n### Các ví dụ giải chi tiết (Xấp xỉ Chuẩn)\n\n> [!example] Ví dụ 6.1 (Xấp xỉ Nhị thức - Bệnh hiếm gặp)\n> Xác suất một bệnh nhân phục hồi sau một căn bệnh về máu hiếm gặp là $0.4$. Có 100 người mắc căn bệnh này. Tìm xác suất có **dưới 30 người** sống sót.\n>\n> **Lời giải:**\n> Gọi $X$ là số người sống sót $\\Rightarrow X \\sim Bin(100, 0.4)$.\n> Kiểm tra: $np = 40 > 5$ và $n(1-p) = 60 > 5$ (Thỏa mãn).\n> Kỳ vọng $\\mu = 40$, độ lệch chuẩn $\\sigma = \\sqrt{100 \\times 0.4 \\times 0.6} \\approx 4.899$.\n> Cần tính $P(X < 30) = P(X \\le 29)$. Áp dụng hiệu chỉnh liên tục:\n> $$P(X \\le 29) \\approx P(X_{normal} \\le 29.5) = \\Phi\\left(\\frac{29.5 - 40}{4.899}\\right) \\approx \\Phi(-2.14) = 1 - 0.9838 = 0.0162$$\n\n> [!example] Ví dụ 6.2 (Xấp xỉ Poisson - Hạt bụi amiăng)\n> Số lượng hạt bụi amiăng trên một mét vuông thảm tuân theo phân phối Poisson với trung bình là $1000$ hạt. Tính xác suất tìm thấy **ít hơn 950** hạt bụi.\n>\n> **Lời giải:**\n> Gọi $X$ là số lượng hạt bụi $\\Rightarrow X \\sim Poisson(\\lambda = 1000)$.\n> Vì $\\lambda = 1000 > 5$, ta xấp xỉ chuẩn: $\\mu = 1000, \\sigma = \\sqrt{1000} \\approx 31.6227$.\n> Cần tính $P(X < 950) = P(X \\le 949)$. Áp dụng hiệu chỉnh liên tục:\n> $$P(X \\le 949) \\approx P(X_{normal} \\le 949.5) = \\Phi\\left(\\frac{949.5 - 1000}{31.6227}\\right) \\approx \\Phi(-1.60) = 1 - 0.9452 = 0.0548$$"
  },
  {
    "id": "chapter_06_descriptive_statistics",
    "title": "Thống kê mô tả",
    "chapter_num": 6,
    "content": "# Chương 6: Thống kê mô tả (Descriptive Statistics)\n\nChương này tập trung vào việc mô tả, tóm tắt và trình bày dữ liệu thu thập được từ các mẫu thực nghiệm. Thống kê mô tả giúp chúng ta có cái nhìn trực quan, tổng quát về các đặc trưng của bộ dữ liệu trước khi tiến hành các suy diễn thống kê phức tạp hơn.\n\n---\n\n## 1. Tóm tắt số liệu (Numerical Summaries)\n\nCho một mẫu gồm $n$ quan sát: $x_1, x_2, \\dots, x_n$.\n\n### 1.1. Các độ đo xu hướng trung tâm (Measures of Central Tendency)\n\n> [!formula] Trung bình mẫu (Sample Mean)\n> Là trung bình cộng của tất cả các quan sát trong mẫu:\n> $$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$\n\n> [!example] Ví dụ 1.1 (Trọng lượng đầu nối động cơ)\n> Đo trọng lượng của 8 đầu nối động cơ ta thu được số liệu sau (g): $12.6, 12.9, 13.4, 12.3, 13.6, 13.5, 12.6, 13.1$. Tính trung bình mẫu.\n>\n> **Lời giải:**\n> $$\\bar{x} = \\frac{12.6 + 12.9 + 13.4 + 12.3 + 13.6 + 13.5 + 12.6 + 13.1}{8} = \\frac{104}{8} = 13.0\\text{ (g)}$$\n\n> [!book] Trung vị mẫu (Sample Median)\n> Là giá trị nằm chính giữa bộ dữ liệu sau khi đã được sắp xếp theo thứ tự tăng dần.\n> *   **Cách xác định**:\n>     *   Nếu kích thước mẫu $n$ **lẻ**: Trung vị là giá trị ở vị trí thứ $\\frac{n+1}{2}$.\n>     *   Nếu kích thước mẫu $n$ **chẵn**: Trung vị là trung bình cộng của hai giá trị ở vị trí thứ $\\frac{n}{2}$ và $\\frac{n}{2} + 1$.\n\n> [!example] Ví dụ 1.2 (Giá vé máy bay khứ hồi)\n> Giá vé máy bay khứ hồi (USD) từ Chicago đi Cancun của một mẫu gồm 7 chuyến bay: $872, 432, 397, 427, 388, 782, 397$. Tìm trung vị mẫu.\n>\n> **Lời giải:**\n> 1. Sắp xếp dữ liệu tăng dần: $388, 397, 397, 427, 432, 782, 872$.\n> 2. Vì $n = 7$ (lẻ), trung vị là giá trị đứng ở vị trí thứ $4$. Vậy trung vị là $427$ USD.\n\n> [!book] Yếu vị (Sample Mode)\n> Là giá trị xuất hiện với tần số lớn nhất trong bộ dữ liệu.\n> *   Nếu không có giá trị nào lặp lại, bộ dữ liệu **không có mode**.\n> *   Nếu có từ hai giá trị trở lên có cùng tần số lớn nhất, bộ dữ liệu gọi là **đa yếu vị (bimodal/multimodal)**.\n\n---\n\n### 1.2. Các độ đo độ biến động (Measures of Variation)\n\n> [!formula] Khoảng biến thiên (Sample Range)\n> Là hiệu số giữa giá trị lớn nhất và giá trị nhỏ nhất của bộ dữ liệu:\n> $$r = x_{max} - x_{min}$$\n\n> [!formula] Phương sai mẫu (Sample Variance)\n> Đo lường mức độ biến động của các điểm dữ liệu xung quanh trung bình mẫu:\n> $$s^2 = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n - 1} = \\frac{\\sum_{i=1}^{n} x_i^2 - n \\bar{x}^2}{n - 1}$$\n\n> [!formula] Độ lệch chuẩn mẫu (Sample Standard Deviation)\n> $$s = \\sqrt{s^2}$$\n\n---\n\n### 1.3. Các độ đo vị trí tương đối: Tứ phân vị (Quartiles)\n\nTứ phân vị chia bộ dữ liệu đã sắp xếp thành 4 phần bằng nhau, mỗi phần chứa khoảng $25\\%$ số quan sát.\n1.  **Tứ phân vị thứ nhất ($Q_1$)**: Là trung vị của nửa dưới bộ dữ liệu. Khoảng $25\\%$ dữ liệu nhỏ hơn hoặc bằng $Q_1$.\n2.  **Tứ phân vị thứ hai ($Q_2$)**: Chính là trung vị ($Median$). Khoảng $50\\%$ dữ liệu nhỏ hơn hoặc bằng $Q_2$.\n3.  **Tứ phân vị thứ ba ($Q_3$)**: Là trung vị của nửa trên bộ dữ liệu. Khoảng $75\\%$ dữ liệu nhỏ hơn hoặc bằng $Q_3$.\n\n> [!example] Ví dụ 1.3 (Điểm thi kiểm tra của 15 nhân viên)\n> Điểm thi của 15 nhân viên tham gia khóa đào tạo CPR: $13, 9, 18, 15, 14, 21, 7, 10, 11, 20, 5, 18, 37, 16, 17$. Tìm các tứ phân vị.\n>\n> **Lời giải:**\n> 1. Sắp xếp dữ liệu tăng dần:\n>    $$5, 7, 9, 10, 11, 13, 14, \\mathbf{15}, 16, 17, 18, 18, 20, 21, 37$$\n> 2. Tìm trung vị $Q_2$: Vì $n = 15$ (lẻ), giá trị nằm giữa ở vị trí thứ $8$ là $15$. Vậy $Q_2 = 15$.\n> 3. Tìm $Q_1$: Nửa dưới gồm 7 giá trị bên trái $Q_2$: $\\{5, 7, 9, \\mathbf{10}, 11, 13, 14\\} \\Rightarrow Q_1 = 10$.\n> 4. Tìm $Q_3$: Nửa trên gồm 7 giá trị bên phải $Q_2$: $\\{16, 17, 18, \\mathbf{18}, 20, 21, 37\\} \\Rightarrow Q_3 = 18$.\n\n> [!key] Thực chiến phòng thi: Bấm máy tính CASIO fx-580VN X tìm nhanh các đại lượng Thống kê mô tả\n> Khi đi thi môn MAS291, việc dùng máy tính để tính nhanh trung bình ($\\bar{x}$), phương sai mẫu ($s^2$), độ lệch chuẩn mẫu ($s$), và các tứ phân vị ($Q_1, Q_2, Q_3$) sẽ giúp bạn tiết kiệm thời gian và tránh sai sót.\n> \n> **Các bước thực hiện:**\n> 1.  **Vào chế độ Thống kê (Statistics)**: \n>     *   Nhấn `MENU` -> nhấn phím `6` (Statistics).\n>     *   Chọn `1` (1-Variable) để nhập dữ liệu 1 biến.\n> 2.  **Nhập dữ liệu**:\n>     *   Nhập từng giá trị dữ liệu và nhấn dấu `=` sau mỗi giá trị.\n>     *   *(Mẹo: Nếu dữ liệu đi kèm bảng tần số, hãy bật cột tần số trước bằng cách nhấn `SHIFT` -> `MENU` -> Bấm mũi tên xuống `▼` -> Chọn `3` (Statistics) -> Chọn `1` (On)).*\n> 3.  **Xem kết quả**:\n>     *   Nhấn phím `AC` để thoát màn hình nhập.\n>     *   Nhấn phím `OPTN` (Options) -> nhấn phím `2` (1-Variable Calc).\n>     *   Màn hình sẽ hiển thị danh sách các kết quả tính toán:\n>         *   $\\bar{x}$: Trung bình mẫu (dòng đầu tiên).\n>         *   $\\sum x$: Tổng các giá trị dữ liệu.\n>         *   $\\sum x^2$: Tổng bình phương các giá trị dữ liệu.\n>         *   $\\sigma^2_x$: Phương sai tổng thể (chú ý: **không** dùng ký hiệu này cho phương sai mẫu $s^2$).\n>         *   $\\sigma_x$: Độ lệch chuẩn tổng thể.\n>         *   $\\mathbf{s^2_x}$ (hoặc hiển thị là $s^2$): **Phương sai mẫu** (chia cho $n-1$). Đây là phương sai mẫu bạn cần tìm để giải bài tập!\n>         *   $\\mathbf{s_x}$ (hoặc hiển thị là $s$): **Độ lệch chuẩn mẫu**.\n>         *   Bấm mũi tên xuống `▼` để xem tiếp:\n>             *   $n$: Kích thước mẫu.\n>             *   $\\min(X)$: Giá trị nhỏ nhất ($Min$).\n>             *   $Q_1$: Tứ phân vị thứ nhất.\n>             *   $Med$: Trung vị ($Q_2$).\n>             *   $Q_3$: Tứ phân vị thứ ba.\n>             *   $\\max(X)$: Giá trị lớn nhất ($Max$).\n\n---\n\n## 2. Biểu đồ thân - lá (Stem-and-Leaf Diagrams)\n\nBiểu đồ thân - lá là một phương pháp trực quan để tổ chức dữ liệu số thành dạng đồ họa, giúp thấy được hình dạng phân phối nhưng vẫn giữ lại các giá trị dữ liệu gốc.\n\n> [!example] Ví dụ 2.1 (Vẽ biểu đồ thân - lá)\n> Xây dựng biểu đồ thân - lá cho điểm thi của 10 học sinh: $75, 86, 83, 91, 94, 88, 84, 99, 79, 86$.\n>\n> **Lời giải:**\n> Dữ liệu có Thân là chữ số hàng chục ($7, 8, 9$), Lá là chữ số hàng đơn vị.\n>\n> | Thân (Stems) | Lá (Leaves) |\n> | :---: | :--- |\n> | **7** | 5  9 |\n> | **8** | 3  4  6  6  8 |\n> | **9** | 1  4  9 |\n>\n> *Chú thích (Key)*: $7 \\mid 5$ nghĩa là điểm số bằng $75$.\n\n---\n\n## 3. Bảng phân phối tần số và Biểu đồ tần suất (Histograms)\n\n### Bảng phân phối tần số (Frequency Distribution)\nLà bảng tóm tắt dữ liệu bằng cách chia dữ liệu vào các nhóm (lớp) không chồng chéo lên nhau và đếm số lượng quan sát (tần số) rơi vào mỗi lớp.\n\n> [!formula] Độ rộng lớp (Class Width)\n> $$\\text{Độ rộng lớp} \\approx \\frac{\\text{Khoảng biến thiên } (r)}{\\text{Số lớp mong muốn}}$$\n\n### Biểu đồ tần suất (Histogram)\nLà biểu đồ cột biểu diễn bảng phân phối tần số. Trục hoành biểu thị biên giới hạn các lớp (hoặc điểm giữa lớp), trục tung biểu thị tần số hoặc tần suất tương đối.\n\n### Các dạng hình dáng phân phối phổ biến (Common Distribution Shapes)\n*   **Bell-shaped**: Dạng hình chuông đối xứng.\n*   **Uniform**: Phân phối đều (các cột có độ cao xấp xỉ bằng nhau).\n*   **Right-skewed (Positive skew)**: Lệch phải (đuôi biểu đồ kéo dài về phía bên phải).\n*   **Left-skewed (Negative skew)**: Lệch trái (đuôi biểu đồ kéo dài về phía bên trái).\n*   **Bimodal**: Có 2 đỉnh nhô cao rõ rệt.\n\n---\n\n## 4. Biểu đồ hộp (Box Plots)\n\nBiểu đồ hộp (Box Plot) là công cụ đồ họa biểu diễn trực quan phân phối của bộ dữ liệu dựa trên **Tóm tắt 5 số liệu (Five-number Summary)**:\n1.  Giá trị nhỏ nhất ($Min$)\n2.  Tứ phân vị thứ nhất ($Q_1$)\n3.  Trung vị ($Q_2$ hoặc $Median$)\n4.  Tứ phân vị thứ ba ($Q_3$)\n5.  Giá trị lớn nhất ($Max$)\n\n```\n       Min          Q1      Q2      Q3          Max\n        |-----------[=======|========]-----------|\n```\n\n> [!idea] Ẩn dụ \"Ngôi nhà 3 tầng\" trực quan hóa Box Plot\n> Nếu bạn cảm thấy các ký hiệu $Min, Q_1, Q_2, Q_3, Max$ khó nhớ, hãy tưởng tượng Box Plot như cấu trúc của một **\"ngôi nhà 3 tầng\"**:\n> *   **Móng nhà ($Min$)**: Điểm thấp nhất chạm đất, nơi bắt đầu của ngôi nhà.\n> *   **Sàn tầng 2 ($Q_1$)**: Kết thúc tầng 1 (25% chiều cao dữ liệu từ đất lên).\n> *   **Sàn tầng 3 ($Q_2$ - Trung vị)**: Nằm giữa nhà, chia đôi chiều cao ngôi nhà (50% dữ liệu).\n> *   **Trần nhà tầng 3 ($Q_3$)**: Nơi bắt đầu của sân thượng (75% dữ liệu).\n> *   **Đỉnh mái nhà ($Max$)**: Điểm cao nhất chạm đến trời.\n> *   *Khoảng tứ phân vị $IQR = Q_3 - Q_1$* chính là **chiều cao của phần hộp (từ sàn tầng 2 lên trần tầng 3)**. Đây là khu vực tập trung $50\\%$ cư dân (dữ liệu) trung tâm hoạt động nhộn nhịp nhất của ngôi nhà!\n\n---\n\n## 5. Biểu đồ trình tự thời gian (Time Sequence Plots)\n\n*   **Định nghĩa**: Là biểu đồ biểu diễn chuỗi số liệu được thu thập theo trình tự thời gian xảy ra của chúng.\n*   **Trình bày**: Trục hoành biểu thị thời gian và trục tung biểu thị giá trị của biến quan sát. Các điểm dữ liệu được nối lại với nhau bằng các đoạn thẳng.\n*   **Biểu đồ Digidot (Digidot Plot)**: Là biểu đồ kết hợp đồng thời biểu đồ thân - lá ở bên trái và biểu đồ trình tự thời gian ở bên phải để vừa thấy được phân phối tổng thể vừa thấy được xu hướng biến động theo thời gian."
  },
  {
    "id": "chapter_07_point_estimation",
    "title": "Ước lượng điểm tham số",
    "chapter_num": 7,
    "content": "# Chương 7: Ước lượng điểm tham số (Point Estimation of Parameters)\n\nChương này đưa chúng ta từ Lý thuyết Xác suất sang **Thống kê Suy diễn (Inferential Statistics)**. Mục tiêu là sử dụng số liệu từ một mẫu ngẫu nhiên để ước lượng các tham số chưa biết của tổng thể (như trung bình tổng thể $\\mu$, phương sai tổng thể $\\sigma^2$, hoặc tỷ lệ tổng thể $p$).\n\n---\n\n## 1. Giới thiệu về Ước lượng điểm\n\n### Tham số tổng thể và Thống kê mẫu\n*   **Tham số tổng thể ($\\theta$)**: Là giá trị đặc trưng thực tế của toàn bộ quần thể chưa biết cần ước lượng (ví dụ: trung bình $\\mu$, phương sai $\\sigma^2$, tỷ lệ $p$).\n*   **Thống kê mẫu**: Là giá trị tính toán được từ mẫu ngẫu nhiên cụ thể được chọn ra.\n\n> [!book] Bộ ước lượng điểm (Point Estimator) & Ước lượng điểm (Point Estimate)\n> *   **Bộ ước lượng điểm ($\\hat{\\Theta}$)**: Là một công thức toán học hay một thống kê mẫu (một hàm của các biến ngẫu nhiên trong mẫu $X_1, X_2, \\dots, X_n$) được dùng để ước lượng tham số $\\theta$. Bản thân $\\hat{\\Theta}$ là một biến ngẫu nhiên và có phân phối mẫu riêng.\n> *   **Ước lượng điểm ($\\hat{\\theta}$)**: Là giá trị số cụ thể tính được từ bộ ước lượng điểm khi thay các dữ liệu mẫu thực tế thu thập được ($x_1, x_2, \\dots, x_n$) vào công thức.\n\n### Các bộ ước lượng điểm thông dụng trong kỹ thuật:\n1.  **Trung bình tổng thể $\\mu$**: Bộ ước lượng điểm là Trung bình mẫu $\\bar{X}$:\n    $$\\hat{\\mu} = \\bar{X} = \\frac{\\sum_{i=1}^{n} X_i}{n}$$\n2.  **Phương sai tổng thể $\\sigma^2$**: Bộ ước lượng điểm là Phương sai mẫu $S^2$:\n    $$\\hat{\\sigma}^2 = S^2 = \\frac{\\sum_{i=1}^{n} (X_i - \\bar{X})^2}{n - 1}$$\n3.  **Tỷ lệ tổng thể $p$**: Bộ ước lượng điểm là Tỷ lệ mẫu $\\hat{p}$:\n    $$\\hat{p} = \\frac{X}{n}$$\n    (Với $X$ là số phần tử trong mẫu thỏa mãn tính chất quan tâm).\n4.  **Hiệu hai trung bình tổng thể $\\mu_1 - \\mu_2$**: Bộ ước lượng là hiệu hai trung bình mẫu $\\bar{X}_1 - \\bar{X}_2$:\n    $$\\widehat{\\mu_1 - \\mu_2} = \\bar{X}_1 - \\bar{X}_2$$\n\n> [!idea] Ẩn dụ \"Bắn cung\" giải thích Ước lượng không chệch (Unbiased Estimators)\n> Một bộ ước lượng điểm được gọi là **không chệch** nếu kỳ vọng của nó bằng chính xác tham số cần ước lượng: $E(\\hat{\\Theta}) = \\theta$. Hãy tưởng tượng bạn đang chơi bắn cung:\n> *   **Ước lượng không chệch (Unbiased)**: Các mũi tên bắn ra có thể không trúng hồng tâm hoàn hảo, nhưng chúng phân tán đều xung quanh hồng tâm. Nếu bạn lấy trung bình vị trí của tất cả các mũi tên, tâm bắn trung tâm của chúng sẽ **nằm đúng hồng tâm**.\n> *   **Ước lượng chệch (Biased)**: Cánh cung của bạn bị lệch. Dù các phát bắn chụm lại rất đẹp nhưng chúng lại lệch hẳn về một hướng (ví dụ lệch lên góc trên bên phải). Điểm trung bình các phát bắn không trùng hồng tâm.\n> *   *Ghi nhớ*: Trung bình mẫu $\\bar{X}$ và phương sai mẫu $S^2$ (với mẫu số $n-1$) là các ước lượng không chệch lần lượt cho $\\mu$ và $\\sigma^2$. (Nếu phương sai mẫu chia cho $n$ thay vì $n-1$, nó sẽ là một ước lượng chệch - bắn luôn bị lệch dưới tầm thực tế).\n\n---\n\n## 2. Phân phối mẫu (Sampling Distributions)\n\n> [!book] Thống kê (Statistic)\n> Là bất kỳ hàm số nào của các quan sát mẫu $X_1, X_2, \\dots, X_n$ mà công thức của nó không chứa các tham số chưa biết.\n\n> [!book] Phân phối mẫu (Sampling Distribution)\n> Là phân phối xác suất của một thống kê mẫu.\n\n### Mẫu ngẫu nhiên (Random Sample)\nCác biến ngẫu nhiên $X_1, X_2, \\dots, X_n$ được gọi là một mẫu ngẫu nhiên kích thước $n$ nếu chúng độc lập và có cùng phân phối xác suất (*i.i.d*).\n\n> [!math] Định lý về phân phối mẫu từ quần thể Chuẩn\n> Nếu mẫu ngẫu nhiên $X_1, X_2, \\dots, X_n$ được chọn ra từ một quần thể có phân phối chuẩn $N(\\mu, \\sigma^2)$, thì:\n> 1.  Trung bình mẫu $\\bar{X}$ tuân theo chính xác phân phối chuẩn:\n>     $$\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$$\n> 2.  Biến đổi thống kê phương sai mẫu tuân theo phân phối Chi-bình phương ($\\chi^2$):\n>     $$\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)$$\n\n---\n\n## 3. Định lý giới hạn trung tâm (Central Limit Theorem - CLT)\n\n> [!formula] Định lý giới hạn trung tâm (CLT)\n> Cho $X_1, X_2, \\dots, X_n$ là một mẫu ngẫu nhiên kích thước $n$ được chọn ra từ một quần thể bất kỳ có trung bình $\\mu$ và phương sai hữu hạn $\\sigma^2$. Khi kích thước mẫu $n$ tiến ra vô cùng ($n \\to \\infty$), phân phối của biến chuẩn hóa:\n> $$Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}}$$\n> sẽ tiến tới **Phân phối Chuẩn chuẩn hóa $N(0, 1)$**.\n> \n> *Ý nghĩa*: Khi kích thước mẫu đủ lớn ($n \\ge 30$), trung bình mẫu $\\bar{X}$ sẽ có phân phối **xấp xỉ chuẩn** bất kể phân phối gốc của quần thể là gì:\n> $$\\bar{X} \\approx N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$$\n\n> [!idea] Ẩn dụ \"Chiếc máy xay sinh tố\" giải thích Định lý giới hạn trung tâm (CLT)\n> Định lý giới hạn trung tâm (CLT) là một trong những định lý kỳ diệu nhất của Thống kê. Hãy tưởng tượng nó như một chiếc **máy xay sinh tố**:\n> *   **Nguyên liệu đầu vào**: Là quần thể ban đầu với bất kỳ hình dạng phân phối nào (lệch trái, lệch phải, phân phối đều hình vuông, phân phối tam giác...). Chúng giống như những miếng trái cây có hình thù kỳ dị khác nhau: thanh long, chuối, dưa hấu.\n> *   **Kích thước mẫu $n$**: Chính là **thời gian xay**. Nếu bạn chỉ xay qua loa ($n < 30$), cốc sinh tố vẫn còn lợn cợn các miếng trái cây to nhỏ khác nhau (giữ lại hình dáng phân phối gốc).\n> *   **Đủ lớn ($n \\ge 30$)**: Khi bạn bật máy xay đủ lâu ($n \\ge 30$), mọi miếng trái cây hình thù kỳ dị đều bị nghiền nát và hòa quyện vào nhau, tạo thành một ly sinh tố **mịn màng hoàn hảo có hình dạng chiếc chuông úp ngược (Phân phối chuẩn $N(\\mu, \\sigma^2/n)$)**!\n> *   *Ứng dụng thực tế*: Nhờ CLT, trong thực tế ta không cần biết quần thể ban đầu phân bố thế nào, chỉ cần lấy mẫu đủ lớn ($n \\ge 30$), ta tự tin dùng công cụ của phân phối chuẩn để tính toán xác suất cho trung bình mẫu $\\bar{X}$.\n\n---\n\n### Các ví dụ giải chi tiết (Ước lượng điểm & CLT)\n\n> [!example] Ví dụ 3.1 (Tính xác suất cho đường ống nhựa PVC)\n> Đường ống nhựa PVC được sản xuất với đường kính trung bình $\\mu = 1.01$ inch và độ lệch chuẩn $\\sigma = 0.003$ inch (phân phối chuẩn). Chọn ngẫu nhiên một mẫu $n = 9$ đoạn ống. Tìm xác suất để trung bình mẫu đường kính nằm trong khoảng từ $1.009$ đến $1.012$ inch.\n>\n> **Lời giải:**\n> Vì quần thể có phân phối chuẩn nên trung bình mẫu $\\bar{X}$ tuân theo chính xác phân phối chuẩn:\n> $$\\bar{X} \\sim N\\left(\\mu_{\\bar{x}} = 1.01, \\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{0.003}{\\sqrt{9}} = 0.001\\right)$$\n> Cần tính $P(1.009 < \\bar{X} < 1.012)$. Tiến hành chuẩn hóa:\n> $$z_1 = \\frac{1.009 - 1.01}{0.001} = -1.0 \\quad \\text{và} \\quad z_2 = \\frac{1.012 - 1.01}{0.001} = 2.0$$\n> $$P(1.009 < \\bar{X} < 1.012) = \\Phi(2.0) - \\Phi(-1.0) = 0.9772 - (1 - 0.8413) = 0.8185 \\quad (81.85\\%)$$\n\n> [!example] Ví dụ 3.2 (Ứng dụng CLT tạo số ngẫu nhiên chuẩn từ phân phối đều)\n> Giả sử biến ngẫu nhiên $X$ có phân phối đều liên tục trên khoảng $[0, 1]$ với hàm mật độ $f(x) = 1$ với $0 \\le x \\le 1$. Chọn một mẫu ngẫu nhiên gồm $n = 12$ quan sát độc lập từ phân phối này. Hãy tìm phân phối xấp xỉ của đại lượng:\n> $$Y = \\sum_{i=1}^{12} X_i - 6$$\n> và tính kỳ vọng cũng như phương sai của $Y$.\n>\n> **Lời giải:**\n> 1. Với phân phối đều $X \\sim Uniform[0, 1]$: kỳ vọng $\\mu = 0.5$, phương sai $\\sigma^2 = 1/12$.\n> 2. Tính kỳ vọng và phương sai của tổng $S_{12} = \\sum_{i=1}^{12} X_i$:\n>    *   Kỳ vọng $E(S_{12}) = n \\mu = 12 \\times 0.5 = 6$.\n>    *   Phương sai $V(S_{12}) = n \\sigma^2 = 12 \\times \\frac{1}{12} = 1$.\n> 3. Theo Định lý giới hạn trung tâm ($CLT$), vì $n=12$ đã đủ lớn để xấp xỉ tốt cho phân phối đều, tổng $S_{12}$ sẽ có phân phối xấp xỉ Chuẩn: $S_{12} \\approx N(6, 1)$.\n> 4. Xét biến ngẫu nhiên $Y = S_{12} - 6$:\n>    *   Kỳ vọng $E(Y) = E(S_{12}) - 6 = 6 - 6 = 0$.\n>    *   Phương sai $V(Y) = V(S_{12}) = 1$.\n> 5. Vì $S_{12}$ xấp xỉ chuẩn, nên $Y$ sẽ có phân phối **xấp xỉ Chuẩn chuẩn hóa**: $Y \\approx N(0, 1)$."
  },
  {
    "id": "chapter_08_statistical_intervals",
    "title": "Khoảng tin cậy cho một mẫu đơn",
    "chapter_num": 8,
    "content": "# Chương 8: Khoảng tin cậy cho một mẫu đơn (Statistical Intervals for a Single Sample)\n\nTrong chương này, chúng ta nghiên cứu cách ước lượng một tham số tổng thể bằng một **khoảng giá trị (khoảng tin cậy - Confidence Interval)** thay vì một số đơn lẻ. Khoảng tin cậy cho biết độ chính xác của ước lượng cùng với một mức độ tin cậy được chỉ định trước (ví dụ: $95\\%$ hoặc $99\\%$).\n\n> [!idea] Ẩn dụ \"Lưới đánh cá\" giải thích Khoảng tin cậy (Confidence Intervals)\n> Nhiều sinh viên hiểu nhầm rằng \"khoảng tin cậy 95%\" nghĩa là có 95% xác suất tham số $\\mu$ nằm trong khoảng đó. Điều này chưa chính xác, vì $\\mu$ là một hằng số cố định (chỉ là ta chưa biết), nó không di chuyển ngẫu nhiên.\n> *   **Ẩn dụ**: Hãy coi tham số tổng thể chưa biết $\\mu$ là một **con cá** đang đứng yên dưới đáy hồ. Khoảng tin cậy chính là chiếc **lưới đánh cá** mà bạn quăng xuống để bắt nó.\n> *   **Nếu bạn quăng một chiếc lưới rất rộng (Độ tin cậy $99\\%$ - sai số biên $E$ lớn)**: Bạn cực kỳ tự tin là con cá sẽ nằm gọn trong lưới (độ tin cậy cao). Tuy nhiên, vì lưới quá rộng, bạn sẽ khó xác định chính xác con cá đang ở tọa độ nào trong lưới (độ chính xác thấp).\n> *   **Nếu bạn dùng một chiếc lưới rất hẹp (Độ tin cậy $80\\%$ - sai số biên $E$ nhỏ)**: Bạn khoanh vùng vị trí con cá hẹp hơn, định vị chính xác hơn. Nhưng khả năng cao là chiếc lưới nhỏ này sẽ quăng trượt con cá (độ tin cậy thấp).\n> *   **Làm sao để lưới vừa nhỏ (chính xác) vừa có tỷ lệ bắt được cá cao (tin cậy cao)?**: Cách duy nhất là **tăng kích thước mẫu $n$**. Mẫu lớn hơn giúp bạn thu thập nhiều thông tin hơn, thu nhỏ sai số biên $E = z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$ mà vẫn giữ nguyên độ tin cậy.\n\n---\n\n## 1. Khoảng tin cậy cho Trung bình $\\mu$ (Phân phối Chuẩn): Đã biết trước phương sai $\\sigma^2$ ($Z$-interval)\n\n### Bản chất lý thuyết\nKhi gạt từ mẫu ngẫu nhiên từ quần thể chuẩn $N(\\mu, \\sigma^2)$ với $\\sigma^2$ đã biết, ta có:\n$$Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\sim N(0, 1)$$\n\nVới độ tin cậy $1-\\alpha$, ta xác định giá trị tới hạn $z_{\\alpha/2}$ từ bảng phân phối chuẩn sao cho:\n$$P\\left(-z_{\\alpha/2} \\le \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\le z_{\\alpha/2}\\right) = 1 - \\alpha$$\n\n> [!formula] Công thức Khoảng tin cậy $1-\\alpha$ cho trung bình $\\mu$:\n> $$\\bar{x} - z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} \\le \\mu \\le \\bar{x} + z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$$\n> *   **Sai số biên (Margin of Error - $E$)**:\n>     $$E = z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$$\n>     Khoảng tin cậy viết gọn: $\\bar{x} - E \\le \\mu \\le \\bar{x} + E$ (hoặc $\\bar{x} \\pm E$).\n> *   **Các mức tin cậy phổ biến**:\n>     *   Độ tin cậy $90\\% \\Rightarrow z_{\\alpha/2} = z_{0.05} = 1.645$\n>     *   Độ tin cậy $95\\% \\Rightarrow z_{\\alpha/2} = z_{0.025} = 1.96$\n>     *   Độ tin cậy $99\\% \\Rightarrow z_{\\alpha/2} = z_{0.005} = 2.576$\n\n---\n\n### Xác định kích thước mẫu (Choice of Sample Size)\n\n> [!formula] Công thức tính kích thước mẫu $n$\n> Nếu ta muốn ước lượng $\\mu$ với sai số không vượt quá một giá trị $E$ cho trước, kích thước mẫu tối thiểu cần thiết là:\n> $$n = \\left( \\frac{z_{\\alpha/2} \\sigma}{E} \\right)^2$$\n> *(Lưu ý: Luôn làm tròn lên số nguyên tiếp theo nếu kết quả ra số thập phân).*\n\n---\n\n### Giới hạn tin cậy một phía (One-Sided Confidence Bounds)\n\n> [!formula] Giới hạn tin cậy một phía\n> *   **Giới hạn tin cậy trên $1-\\alpha$ (Upper Bound)**:\n>     $$\\mu \\le \\bar{x} + z_{\\alpha} \\frac{\\sigma}{\\sqrt{n}}$$\n> *   **Giới hạn tin cậy dưới $1-\\alpha$ (Lower Bound)**:\n>     $$\\mu \\ge \\bar{x} - z_{\\alpha} \\frac{\\sigma}{\\sqrt{n}}$$\n>     *(Lưu ý: Sử dụng $z_{\\alpha}$ thay vì $z_{\\alpha/2}$)*.\n\n---\n\n### Các ví dụ giải chi tiết ($Z$-interval)\n\n> [!example] Ví dụ 1.1 (Ước lượng độ tuổi trung bình sinh viên)\n> Một giám đốc tuyển sinh muốn ước lượng độ tuổi trung bình $\\mu$ của tất cả sinh viên đang theo học. Khảo sát một mẫu ngẫu nhiên gồm $n = 20$ sinh viên, tuổi trung bình mẫu $\\bar{x} = 22.9$ tuổi. Độ tuổi có phân phối chuẩn với độ lệch chuẩn đã biết là $\\sigma = 1.5$ tuổi. Dựng khoảng tin cậy $90\\%$ cho độ tuổi trung bình $\\mu$.\n>\n> **Lời giải:**\n> Ta có: $n = 20, \\bar{x} = 22.9, \\sigma = 1.5$.\n> Với độ tin cậy $90\\% \\Rightarrow z_{\\alpha/2} = z_{0.05} = 1.645$.\n> Tính sai số biên $E$:\n> $$E = z_{0.05} \\frac{\\sigma}{\\sqrt{n}} = 1.645 \\times \\frac{1.5}{\\sqrt{20}} \\approx 0.55$$\n> Khoảng tin cậy $90\\%$ là:\n> $$22.9 - 0.55 \\le \\mu \\le 22.9 + 0.55 \\Rightarrow 22.35 \\le \\mu \\le 23.45 \\text{ (tuổi)}$$\n\n> [!example] Ví dụ 1.2 (Tính kích thước mẫu nghiên cứu nồng độ kẽm)\n> Nồng độ kẽm thu được tại 36 điểm khác nhau trên một dòng sông có trung bình mẫu $\\bar{x} = 2.6\\text{ g/ml}$. Độ lệch chuẩn của quần thể là $\\sigma = 0.3\\text{ g/ml}$. Xác định kích thước mẫu cần thiết để độ tin cậy đạt $95\\%$ và sai số nhỏ hơn $0.05$.\n>\n> **Lời giải:**\n> Ta có $\\sigma = 0.3$, sai số cho phép $E = 0.05$, độ tin cậy $95\\% \\Rightarrow z_{0.025} = 1.96$.\n> $$n = \\left( \\frac{1.96 \\times 0.3}{0.05} \\right)^2 \\approx 138.3 \\Rightarrow n = 139$$\n\n---\n\n## 2. Khoảng tin cậy cho Trung bình $\\mu$ (Phân phối Chuẩn): Chưa biết phương sai $\\sigma^2$ ($t$-interval)\n\nKhi phương sai $\\sigma^2$ chưa biết, ta thay thế $\\sigma$ bằng độ lệch chuẩn mẫu $s$. Thống kê mẫu tuân theo phân phối Student $t$ với $n-1$ bậc tự do (degrees of freedom - $df$).\n\n> [!formula] Công thức Khoảng tin cậy $1-\\alpha$ cho trung bình $\\mu$ (chưa biết $\\sigma^2$):\n> $$\\bar{x} - t_{\\alpha/2, n-1} \\frac{s}{\\sqrt{n}} \\le \\mu \\le \\bar{x} + t_{\\alpha/2, n-1} \\frac{s}{\\sqrt{n}}$$\n> *   **Giới hạn trên một phía (Upper Bound)**: $\\mu \\le \\bar{x} + t_{\\alpha, n-1} \\frac{s}{\\sqrt{n}}$\n> *   **Giới hạn dưới một phía (Lower Bound)**: $\\mu \\ge \\bar{x} - t_{\\alpha, n-1} \\frac{s}{\\sqrt{n}}$\n\n---\n\n### Ví dụ giải chi tiết ($t$-interval)\n\n> [!example] Ví dụ 2.1 (Dung tích axit trong bình chứa)\n> Thể tích đo được của 7 bình chứa axit sunfuric là: $9.8, 10.2, 10.4, 9.8, 10.0, 10.2$, và $9.6$ lít. Dựng khoảng tin cậy $95\\%$ cho dung tích trung bình của các bình axit (phân phối xấp xỉ chuẩn).\n>\n> **Lời giải:**\n> 1. Tính trung bình mẫu $\\bar{x}$ và độ lệch chuẩn mẫu $s$:\n>    $$\\bar{x} = 10.0\\text{ (lít)}$$\n>    $$s^2 = \\frac{\\sum x_i^2 - n \\bar{x}^2}{n - 1} = \\frac{700.48 - 7 \\times 10^2}{6} = 0.08 \\Rightarrow s \\approx 0.2828\\text{ (lít)}$$\n> 2. Tìm giá trị tới hạn $t_{\\alpha/2, n-1}$:\n>    Bậc tự do $df = n - 1 = 6$. Độ tin cậy $95\\% \\Rightarrow \\alpha/2 = 0.025$. Tra bảng phân phối Student:\n>    $$t_{0.025, 6} = 2.447$$\n> 3. Tính khoảng tin cậy:\n>    $$10.0 \\pm 2.447 \\times \\frac{0.2828}{\\sqrt{7}} \\Rightarrow 10.0 \\pm 0.262 \\Rightarrow 9.738 \\le \\mu \\le 10.262 \\text{ (lít)}$$\n\n---\n\n## 3. Khoảng tin cậy mẫu lớn cho phân phối bất kỳ ($n \\ge 30$)\n\nNếu kích thước mẫu đủ lớn ($n \\ge 30$), theo Định lý giới hạn trung tâm, ta có thể dùng phân phối chuẩn $Z$ thay cho phân phối $t$ và thay $\\sigma$ bằng độ lệch chuẩn mẫu $s$:\n\n> [!formula] Công thức Khoảng tin cậy mẫu lớn:\n> $$\\bar{x} - z_{\\alpha/2} \\frac{s}{\\sqrt{n}} \\le \\mu \\le \\bar{x} + z_{\\alpha/2} \\frac{s}{\\sqrt{n}}$$\n\n---\n\n## 4. Khoảng tin cậy mẫu lớn cho Tỷ lệ tổng thể $p$\n\n### Điều kiện áp dụng:\n$$n\\hat{p} > 5 \\quad \\text{và} \\quad n(1-\\hat{p}) > 5$$\n\n> [!formula] Công thức Khoảng tin cậy $1-\\alpha$ cho tỷ lệ $p$:\n> $$\\hat{p} - z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} \\le p \\le \\hat{p} + z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$\n\n---\n\n### Xác định kích thước mẫu để ước lượng tỷ lệ $p$\n\n> [!formula] Kích thước mẫu ước lượng tỷ lệ\n> *   **Có ước lượng $\\hat{p}$ sơ bộ**:\n>     $$n = \\left(\\frac{z_{\\alpha/2}}{E}\\right)^2 \\hat{p}(1-\\hat{p})$$\n> *   **Không có thông tin sơ bộ (bảo thủ)**:\n>     Sử dụng $p = 0.5$ để cực đại hóa phương sai:\n>     $$n = \\frac{z_{\\alpha/2}^2}{4 E^2}$$\n\n---\n\n### Các ví dụ giải chi tiết (Ước lượng Tỷ lệ $p$)\n\n> [!example] Ví dụ 4.1 (Khảo sát lượng người xem bóng bầu dục ở Mỹ)\n> Khảo sát ngẫu nhiên gồm 1219 người trưởng thành tại Mỹ, có 354 người thích xem bóng bầu dục. Dựng khoảng tin cậy $95\\%$ cho tỷ lệ người thích xem bóng bầu dục.\n>\n> **Lời giải:**\n> Ta có $n = 1219, x = 354 \\Rightarrow \\hat{p} = \\frac{354}{1219} \\approx 0.2904$.\n> Với độ tin cậy $95\\% \\Rightarrow z_{0.025} = 1.96$.\n> Tính sai số biên $E$:\n> $$E = 1.96 \\times \\sqrt{\\frac{0.2904 \\times (1 - 0.2904)}{1219}} \\approx 0.0255$$\n> Dựng khoảng tin cậy $95\\%$:\n> $$0.2904 - 0.0255 \\le p \\le 0.2904 + 0.0255 \\Rightarrow 0.2649 \\le p \\le 0.3159 \\quad (26.49\\% \\le p \\le 31.59\\%)$$"
  },
  {
    "id": "chapter_09_hypothesis_testing",
    "title": "Kiểm định giả thuyết cho một mẫu đơn",
    "chapter_num": 9,
    "content": "# Chương 9: Kiểm định giả thuyết cho một mẫu đơn (Test of Hypotheses for a Single Sample)\n\nKiểm định giả thuyết là công cụ thống kê giúp chúng ta quyết định xem một nhận định hay phát biểu về tham số tổng thể có cơ sở khoa học hay không dựa trên bằng chứng thu thập được từ mẫu dữ liệu thực tế.\n\n---\n\n## 1. Bản chất của Kiểm định giả thuyết (Hypothesis Testing)\n\n### Giả thuyết thống kê (Statistical Hypothesis)\nLà một phát biểu hoặc nhận định về tham số của một hoặc nhiều tổng thể.\n\n### Thiết lập giả thuyết:\nLuôn luôn có một cặp giả thuyết đối nghịch nhau:\n1.  **Giả thuyết không (Null Hypothesis - $H_0$)**: Biểu thị trạng thái hiện hữu (không đổi/không hiệu quả). Giả thuyết $H_0$ luôn chứa dấu bằng ($=$).\n2.  **Giả thuyết đối (Alternative Hypothesis - $H_1$)**: Nhận định trái ngược với $H_0$, thể hiện sự thay đổi hoặc hiệu quả mới mà ta muốn chứng minh.\n    *   **Kiểm định hai phía (Two-sided)**: $H_1: \\mu \\neq \\mu_0$\n    *   **Kiểm định một phía (One-sided)**: $H_1: \\mu > \\mu_0$ hoặc $H_1: \\mu < \\mu_0$\n\n---\n\n### Các loại Sai lầm trong kiểm định (Type I & Type II Errors)\n\n| Quyết định thực tế | $H_0$ đúng thực tế | $H_0$ sai thực tế |\n| :--- | :--- | :--- |\n| **Không bác bỏ $H_0$** | Quyết định đúng ($1-\\alpha$) | Sai lầm loại II ($\\beta$) |\n| **Bác bỏ $H_0$** | Sai lầm loại I ($\\alpha$) | Quyết định đúng ($1-\\beta$) |\n\n> [!book] Sai lầm loại I (Type I Error)\n> Xảy ra khi ta bác bỏ giả thuyết $H_0$ trong khi thực tế $H_0$ đúng.\n> *   Xác suất phạm sai lầm loại I ký hiệu là $\\alpha$ (còn gọi là **Mức ý nghĩa - Significance level**):\n>     $$\\alpha = P(\\text{Bác bỏ } H_0 \\mid H_0 \\text{ đúng})$$\n\n> [!book] Sai lầm loại II (Type II Error)\n> Xảy ra khi ta không bác bỏ giả thuyết $H_0$ trong khi thực tế $H_0$ sai.\n> *   Xác suất phạm sai lầm loại II ký hiệu là $\\beta$:\n>     $$\\beta = P(\\text{Không bác bỏ } H_0 \\mid H_0 \\text{ sai})$$\n\n> [!book] Lực lượng kiểm định (Power of a Test - $1-\\beta$)\n> Là xác suất bác bỏ đúng một giả thuyết $H_0$ khi nó thực sự sai:\n> $$\\text{Power} = 1 - \\beta = P(\\text{Bác bỏ } H_0 \\mid H_0 \\text{ sai})$$\n\n> [!idea] Ẩn dụ \"Phiên tòa xét xử\" giải thích Sai lầm Loại I và Loại II\n> Hãy tưởng tượng việc kiểm định giả thuyết như một **phiên tòa xét xử tội phạm**:\n> *   **Giả thuyết $H_0$ (Trạng thái mặc định)**: Bị cáo vô tội. (Luôn giả định vô tội cho đến khi có đủ bằng chứng kết án).\n> *   **Giả thuyết $H_1$**: Bị cáo có tội.\n> *   **Sai lầm loại I ($\\alpha$ - Kết án oan)**: Tòa án phán quyết bị cáo **có tội** (bác bỏ $H_0$) trong khi thực tế bị cáo **vô tội** (thực tế $H_0$ đúng). Đây là sai lầm cực kỳ nghiêm trọng trong luật pháp.\n> *   **Sai lầm loại II ($\\beta$ - Bỏ lọt tội)**: Tòa án phán quyết bị cáo **vô tội / chưa đủ chứng cứ kết án** (không bác bỏ $H_0$) trong khi thực tế bị cáo **có tội** (thực tế $H_0$ sai).\n> *   *Mối quan hệ*: Khi ta cố gắng siết chặt quy trình để giảm kết án oan ($\\alpha$ giảm), tòa sẽ yêu cầu bằng chứng cực kỳ thuyết phục mới kết án. Điều này vô tình làm tăng tỷ lệ bỏ lọt tội phạm ($\\beta$ tăng).\n\n---\n\n## 2. Kiểm định Trung bình $\\mu$ (Phân phối chuẩn, đã biết $\\sigma^2$) - $Z$-test\n\n### Quy trình kiểm định 4 bước:\n1.  **Thiết lập cặp giả thuyết**: $H_0: \\mu = \\mu_0$ và $H_1: \\mu \\neq \\mu_0$ (hoặc $\\mu > \\mu_0$, $\\mu < \\mu_0$).\n2.  **Tính thống kê kiểm định $Z_0$**:\n    $$Z_0 = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}$$\n3.  **Xác định miền bác bỏ (Rejection Region) hoặc tính P-value**:\n    *   $H_1: \\mu \\neq \\mu_0 \\Rightarrow$ Bác bỏ $H_0$ nếu $|Z_0| > z_{\\alpha/2}$.\n    *   $H_1: \\mu > \\mu_0 \\Rightarrow$ Bác bỏ $H_0$ nếu $Z_0 > z_{\\alpha}$.\n    *   $H_1: \\mu < \\mu_0 \\Rightarrow$ Bác bỏ $H_0$ nếu $Z_0 < -z_{\\alpha}$.\n4.  **Đưa ra kết luận**.\n\n---\n\n### Phương pháp Trị số P (P-value Approach)\n\n> [!formula] Cách tính P-value cho Z-test\n> *   **Nếu P-value $\\le \\alpha$**: Bác bỏ $H_0$.\n> *   **Nếu P-value $> \\alpha$**: Chưa đủ cơ sở bác bỏ $H_0$.\n> *   *Kiểm định 2 phía*: $\\text{P-value} = 2 \\times [1 - \\Phi(|Z_0|)]$\n> *   *Kiểm định 1 phía phải*: $\\text{P-value} = 1 - \\Phi(Z_0)$\n> *   *Kiểm định 1 phía trái*: $\\text{P-value} = \\Phi(Z_0)$\n\n> [!tip] Mẹo nhớ quy tắc bác bỏ bằng P-value\n> Có một câu thơ khẩu quyết kinh điển bằng tiếng Anh mà mọi sinh viên Thống kê đều thuộc lòng:\n> > *\"If the P-value is low, the $H_0$ must go!\"*\n> > (Nếu trị số P thấp hơn mức ý nghĩa $\\alpha$, thì giả thuyết $H_0$ phải ra đi!)\n> \n> *   **P-value nhỏ ($\\le \\alpha$)**: Dữ liệu mẫu rất bất thường dưới giả thuyết $H_0$. Điều này cho thấy $H_0$ khó có thể đúng $\\Rightarrow$ Bác bỏ $H_0$ (H0 must go).\n> *   **P-value lớn ($> \\alpha$)**: Dữ liệu mẫu hoàn toàn bình thường dưới giả thuyết $H_0$ $\\Rightarrow$ Chưa đủ cơ sở bác bỏ $H_0$.\n\n---\n\n### Xác định cỡ mẫu và xác suất Sai lầm loại II ($\\beta$)\n\n> [!formula] Công thức cỡ mẫu cho kiểm định giả thuyết\n> *   **Kiểm định 2 phía**:\n>     $$n \\approx \\frac{(z_{\\alpha/2} + z_{\\beta})^2 \\sigma^2}{\\delta^2} \\quad (\\text{với } \\delta = \\mu - \\mu_0)$$\n> *   **Kiểm định 1 phía**:\n>     $$n \\approx \\frac{(z_{\\alpha} + z_{\\beta})^2 \\sigma^2}{\\delta^2}$$\n\n---\n\n### Ví dụ giải chi tiết ($Z$-test)\n\n> [!example] Ví dụ 2.1 (Kiểm định điểm nóng chảy chất kết dính)\n> Thí nghiệm đo điểm nóng chảy của $n = 10$ mẫu chất kết dính động cơ tên lửa thu được trung bình mẫu $\\bar{x} = 154.20^\\circ\\text{C}$. Biết độ lệch chuẩn $\\sigma = 1.50^\\circ\\text{C}$. Kiểm định xem điểm nóng chảy trung bình có thực sự khác $155^\\circ\\text{C}$ không? Sử dụng mức ý nghĩa $\\alpha = 0.05$.\n>\n> **Lời giải:**\n> 1. Giả thuyết: $H_0: \\mu = 155$ và $H_1: \\mu \\neq 155$ (2 phía).\n> 2. Tính thống kê kiểm định $Z_0$:\n>    $$Z_0 = \\frac{154.20 - 155}{1.50 / \\sqrt{10}} \\approx -1.69$$\n> 3. Miền bác bỏ: Với $\\alpha = 0.05 \\Rightarrow z_{0.025} = 1.96$. Miền bác bỏ là $|Z_0| > 1.96$.\n> 4. Kết luận: Vì $|Z_0| = 1.69 < 1.96 \\Rightarrow$ Chưa đủ cơ sở bác bỏ $H_0$. Điểm nóng chảy trung bình không khác biệt có ý nghĩa so với $155^\\circ\\text{C}$.\n> *Tính P-value*: $\\text{P-value} = 2 \\times [1 - \\Phi(1.69)] = 2 \\times (1 - 0.9545) = 0.091 > 0.05 \\Rightarrow$ Chấp nhận $H_0$.\n\n---\n\n## 3. Kiểm định Trung bình $\\mu$ (Phân phối chuẩn, chưa biết $\\sigma^2$) - $t$-test\n\nKhi phương sai tổng thể chưa biết, ta thay thế $\\sigma$ bằng độ lệch chuẩn mẫu $s$ và sử dụng phân phối Student $t$ với $n-1$ bậc tự do.\n\n*   **Giả thuyết**: $H_0: \\mu = \\mu_0$\n*   **Thống kê kiểm định ($T_0$)**:\n    $$T_0 = \\frac{\\bar{X} - \\mu_0}{s / \\sqrt{n}}$$\n*   **Miền bác bỏ**:\n    *   $H_1: \\mu \\neq \\mu_0 \\Rightarrow$ Bác bỏ $H_0$ nếu $|T_0| > t_{\\alpha/2, n-1}$\n    *   $H_1: \\mu > \\mu_0 \\Rightarrow$ Bác bỏ $H_0$ nếu $T_0 > t_{\\alpha, n-1}$\n    *   $H_1: \\mu < \\mu_0 \\Rightarrow$ Bác bỏ $H_0$ nếu $T_0 < -t_{\\alpha, n-1}$\n\n---\n\n### Ví dụ giải chi tiết ($t$-test)\n\n> [!example] Ví dụ 3.1 (Nồng độ oxy hòa tan tại các đập TVA)\n> Đo nồng độ oxy hòa tan (mg/l) tại một đập nước thu được mẫu 20 quan sát có trung bình mẫu $\\bar{x} = 3.265\\text{ mg/l}$ và độ lệch chuẩn mẫu $s \\approx 2.1277\\text{ mg/l}$. Kiểm định xem nồng độ oxy hòa tan trung bình có khác $4.0\\text{ mg/l}$ hay không ở mức ý nghĩa $\\alpha = 0.01$.\n>\n> **Lời giải:**\n> 1. Giả thuyết: $H_0: \\mu = 4.0$ và $H_1: \\mu \\neq 4.0$.\n> 2. Tính thống kê kiểm định $T_0$:\n>    $$T_0 = \\frac{3.265 - 4.0}{2.1277 / \\sqrt{20}} \\approx -1.545$$\n> 3. Xác định giá trị tới hạn: Bậc tự do $df = 19$, $\\alpha = 0.01 \\Rightarrow t_{0.005, 19} = 2.861$.\n> 4. Kết luận: Vì $|T_0| = 1.545 < 2.861 \\Rightarrow$ Chưa đủ cơ sở bác bỏ $H_0$.\n\n---\n\n## 4. Kiểm định Tỷ lệ tổng thể $p$ (Mẫu lớn)\n\n*   **Điều kiện**: $n p_0 > 5$ và $n(1 - p_0) > 5$.\n*   **Giả thuyết**: $H_0: p = p_0$\n\n> [!formula] Thống kê kiểm định ($Z_0$)\n> $$Z_0 = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$$\n> *   Bác bỏ $H_0$ nếu $|Z_0| > z_{\\alpha/2}$ (2 phía), $Z_0 > z_\\alpha$ (1 phía phải) hoặc $Z_0 < -z_\\alpha$ (1 phía trái).\n\n---\n\n### Ví dụ giải chi tiết (Kiểm định Tỷ lệ)\n\n> [!example] Ví dụ 4.1 (Đánh giá bề mặt của vòng bi động cơ)\n> Mẫu ngẫu nhiên 85 vòng bi động cơ phát hiện có 10 chiếc có độ nhám bề mặt vượt tiêu chuẩn. Số liệu có cho thấy tỷ lệ lỗi nhám vượt quá $10\\%$ không? Kiểm định ở mức ý nghĩa $\\alpha = 0.05$.\n>\n> **Lời giải:**\n> 1. Giả thuyết: $H_0: p = 0.10$ và $H_1: p > 0.10$ (1 phía phải).\n> 2. Tính tỷ lệ mẫu $\\hat{p} = 10 / 85 \\approx 0.1176$.\n> 3. Tính thống kê kiểm định $Z_0$:\n>    $$Z_0 = \\frac{0.1176 - 0.10}{\\sqrt{\\frac{0.10 \\times 0.90}{85}}} \\approx 0.54$$\n> 4. Kết luận: Với $\\alpha = 0.05 \\Rightarrow z_{0.05} = 1.645$. Vì $Z_0 = 0.54 < 1.645 \\Rightarrow$ Không bác bỏ $H_0$.\n\n---\n\n## 5. Sơ đồ tư duy lựa chọn kiểm định 1 mẫu (Decision Tree)\n\nSơ đồ cây dưới đây sẽ hướng dẫn bạn nhanh chóng xác định nên dùng loại kiểm định nào tùy thuộc vào thông tin đề bài cung cấp:\n\n```mermaid\nflowchart TD\n    Start([Bắt đầu: Kiểm định 1 mẫu đơn]) --> Q1{\"Đại lượng cần kiểm định?\"}\n    Q1 -->|Trung bình mẫu| Q2{\"Đã biết trước phương sai σ²?\"}\n    Q1 -->|Tỷ lệ mẫu| Q5{\"n*p₀ > 5 và n*(1-p₀) > 5?\"}\n    \n    Q2 -->|Đã biết| Z1[\"Z-test mẫu đơn<br>Z₀ = (X̄ - μ₀)/(σ/√n)\"]\n    Q2 -->|Chưa biết| Q3{\"Cỡ mẫu n?\"}\n    \n    Q3 -->|n >= 30 (Mẫu lớn)| Z2[\"Z-test mẫu lớn xấp xỉ chuẩn<br>(Thay σ bằng s)\"]\n    Q3 -->|n < 30 (Mẫu nhỏ)| Q4{\"Quần thể có phân phối chuẩn?\"}\n    \n    Q4 -->|Có| T1[\"t-test mẫu đơn (df = n-1)<br>T₀ = (X̄ - μ₀)/(s/√n)\"]\n    Q4 -->|Không| NonParam[\"Cân nhắc sử dụng kiểm định phi tham số\"]\n    \n    Q5 -->|Thỏa mãn| Z3[\"Z-test tỷ lệ mẫu lớn<br>Z₀ = (p̂ - p₀)/√(p₀(1-p₀)/n)\"]\n    Q5 -->|Không| Exact[\"Kiểm định nhị thức chính xác (Binomial Exact Test)\"]\n\n    style Z1 fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    style Z2 fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    style T1 fill:#e8f5e9,stroke:#388e3c,stroke-width:2px\n    style Z3 fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n```"
  },
  {
    "id": "chapter_10_two_samples_inference",
    "title": "Suy diễn thống kê cho hai mẫu",
    "chapter_num": 10,
    "content": "# Chương 10: Suy diễn thống kê cho hai mẫu (Statistical Inference for Two Samples)\n\nTrong chương này, chúng ta nghiên cứu các phương pháp so sánh hai tổng thể độc lập với nhau (ví dụ: so sánh hiệu quả của hai phương pháp điều trị, so sánh năng suất của hai máy sản xuất hoặc so sánh tỷ lệ ủng hộ của hai nhóm đối tượng).\n\n---\n\n## 1. So sánh hai trung bình tổng thể: Đã biết trước phương sai ($\\sigma_1^2, \\sigma_2^2$ biết)\n\n### Giả thiết:\n*   Mẫu 1 ($n_1$ quan sát) từ quần thể chuẩn $N(\\mu_1, \\sigma_1^2)$.\n*   Mẫu 2 ($n_2$ quan sát) từ quần thể chuẩn $N(\\mu_2, \\sigma_2^2)$.\n*   Hai mẫu độc lập với nhau.\n\n> [!formula] Kiểm định giả thuyết ($H_0: \\mu_1 - \\mu_2 = \\Delta_0$):\n> Thống kê kiểm định ($Z_0$):\n> $$Z_0 = \\frac{\\bar{X}_1 - \\bar{X}_2 - \\Delta_0}{\\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}}$$\n> *   Bác bỏ $H_0$ nếu $|Z_0| > z_{\\alpha/2}$ (2 phía), $Z_0 > z_\\alpha$ (1 phía phải) hoặc $Z_0 < -z_\\alpha$ (1 phía trái).\n\n---\n\n## 2. So sánh hai trung bình tổng thể: Chưa biết phương sai ($\\sigma_1^2, \\sigma_2^2$ ẩn)\n\n### Trường hợp 1: Hai phương sai bằng nhau ($\\sigma_1^2 = \\sigma_2^2 = \\sigma^2$)\n\nTa sử dụng **Phương sai gộp (Pooled Variance - $S_p^2$)** để ước lượng phương sai chung $\\sigma^2$:\n$$S_p^2 = \\frac{(n_1 - 1)S_1^2 + (n_2 - 1)S_2^2}{n_1 + n_2 - 2}$$\n\n> [!formula] Thống kê kiểm định ($T_0$)\n> $$T_0 = \\frac{\\bar{X}_1 - \\bar{X}_2 - \\Delta_0}{S_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}}$$\n> Thống kê $T_0$ tuân theo phân phối Student $t$ với **$df = n_1 + n_2 - 2$** bậc tự do.\n\n> [!formula] Khoảng tin cậy $1-\\alpha$ cho hiệu hai trung bình $\\mu_1 - \\mu_2$:\n> $$\\bar{x}_1 - \\bar{x}_2 - t_{\\alpha/2, n_1+n_2-2} S_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}} \\le \\mu_1 - \\mu_2 \\le \\bar{x}_1 - \\bar{x}_2 + t_{\\alpha/2, n_1+n_2-2} S_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}$$\n\n---\n\n### Trường hợp 2: Hai phương sai khác nhau ($\\sigma_1^2 \\neq \\sigma_2^2$)\n\n> [!formula] Thống kê kiểm định ($T_0^*$)\n> $$T_0^* = \\frac{\\bar{X}_1 - \\bar{X}_2 - \\Delta_0}{\\sqrt{\\frac{S_1^2}{n_1} + \\frac{S_2^2}{n_2}}}$$\n> Thống kê này tuân theo xấp xỉ phân phối $t$ với số bậc tự do $v$ (luôn làm tròn xuống số nguyên gần nhất):\n> $$v = \\frac{\\left( \\frac{S_1^2}{n_1} + \\frac{S_2^2}{n_2} \\right)^2}{\\frac{(S_1^2/n_1)^2}{n_1 - 1} + \\frac{(S_2^2/n_2)^2}{n_2 - 1}}$$\n\n> [!tip] Đối chiếu: So sánh hai trung bình mẫu độc lập (Phương sai bằng nhau vs Khác nhau)\n> Khi ước lượng và kiểm định hiệu hai trung bình mẫu ($\\mu_1 - \\mu_2$) khi chưa biết phương sai tổng thể, sinh viên thường bối rối giữa hai trường hợp:\n> \n> | Tiêu chí | Phương sai bằng nhau ($\\sigma_1^2 = \\sigma_2^2$) | Phương sai khác nhau ($\\sigma_1^2 \\neq \\sigma_2^2$) |\n> | :--- | :--- | :--- |\n> | **Tên gọi kiểm định** | Kiểm định $t$ gộp (Pooled variance $t$-test) | Kiểm định $t$ Welch (Welch's $t$-test) |\n> | **Cách xử lý phương sai**| Gộp hai phương sai mẫu lại thành $s_p^2$ | Giữ riêng biệt $s_1^2$ và $s_2^2$ |\n> | **Sai số tiêu chuẩn ($SE$)** | $SE = s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}$ | $SE = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$ |\n> | **Số bậc tự do ($df$)** | $df = n_1 + n_2 - 2$ (Dễ tính, cố định) | $v$ theo công thức Welch phức tạp (Luôn làm tròn xuống) |\n> | **Khi nào dùng?** | Khi có cơ sở thực tế hoặc kiểm định $F$ cho thấy phương sai hai tổng thể tương đương. | Khi không có giả định phương sai bằng nhau (Trường hợp tổng quát hơn, an toàn hơn). |\n\n---\n\n### Các ví dụ giải chi tiết (So sánh hai Trung bình)\n\n> [!example] Ví dụ 2.1 (Kiểm định so sánh hao mòn vật liệu - Phương sai bằng nhau)\n> So sánh độ mòn bề mặt của 2 vật liệu gỗ dán ép:\n> *   Vật liệu 1: $n_1 = 12, \\bar{x}_1 = 85, s_1 = 4$.\n> *   Vật liệu 2: $n_2 = 10, \\bar{x}_2 = 81, s_2 = 5$.\n> Ở mức ý nghĩa $\\alpha = 0.05$, có thể khẳng định độ mòn của vật liệu 1 lớn hơn vật liệu 2 quá 2 đơn vị không? Giả thiết hai quần thể có phân phối chuẩn với phương sai bằng nhau.\n>\n> **Lời giải:**\n> 1. Thiết lập giả thuyết: $H_0: \\mu_1 - \\mu_2 = 2$ và $H_1: \\mu_1 - \\mu_2 > 2$ (1 phía phải).\n> 2. Tính phương sai mẫu gộp $s_p^2$:\n>    $$s_p^2 = \\frac{11 \\times 4^2 + 9 \\times 5^2}{12 + 10 - 2} = 20.05 \\Rightarrow s_p \\approx 4.4777$$\n> 3. Tính thống kê kiểm định $T_0$:\n>    $$T_0 = \\frac{85 - 81 - 2}{4.4777 \\times \\sqrt{\\frac{1}{12} + \\frac{1}{10}}} \\approx 1.04$$\n> 4. Giá trị tới hạn: Bậc tự do $df = 20$, $\\alpha = 0.05 \\Rightarrow t_{0.05, 20} = 1.725$.\n> 5. Kết luận: Vì $T_0 = 1.04 < 1.725 \\Rightarrow$ Chưa thể bác bỏ $H_0$.\n\n---\n\n## 3. So sánh hai Tỷ lệ tổng thể ($p_1 - p_2$, mẫu lớn)\n\n### Bản chất lý thuyết\nKhi so sánh hai tỷ lệ tổng thể dưới giả thuyết $H_0: p_1 = p_2$, ta gộp thông tin của hai mẫu để ước lượng tỷ lệ chung $p$:\n$$\\hat{p} = \\frac{X_1 + X_2}{n_1 + n_2}$$\n\n> [!formula] Thống kê kiểm định ($Z_0$)\n> $$Z_0 = \\frac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}(1-\\hat{p})\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$$\n> *   Bác bỏ $H_0$ nếu $|Z_0| > z_{\\alpha/2}$ (2 phía), $Z_0 > z_\\alpha$ (1 phía phải) hoặc $Z_0 < -z_\\alpha$ (1 phía trái).\n\n> [!formula] Khoảng tin cậy cho hiệu hai tỷ lệ $p_1 - p_2$:\n> $$\\hat{p}_1 - \\hat{p}_2 - z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}_1(1-\\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}} \\le p_1 - p_2 \\le \\hat{p}_1 - \\hat{p}_2 + z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}_1(1-\\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}}$$\n\n---\n\n### Các ví dụ giải chi tiết (So sánh hai Tỷ lệ)\n\n> [!example] Ví dụ 3.1 (Kiểm định ý kiến cử tri địa phương)\n> Khảo sát cư dân thị trấn và cử tri ngoại ô về việc xây dựng nhà máy hóa chất mới:\n> *   Cử tri thị trấn: Khảo sát 200 người, có 120 người đồng ý $\\Rightarrow \\hat{p}_1 = 0.60$.\n> *   Cử tri ngoại ô: Khảo sát 500 người, có 240 người đồng ý $\\Rightarrow \\hat{p}_2 = 0.48$.\n> Ở mức ý nghĩa $\\alpha = 0.05$, có thể khẳng định tỷ lệ người dân thị trấn ủng hộ dự án cao hơn tỷ lệ người dân ngoại ô hay không?\n>\n> **Lời giải:**\n> 1. Thiết lập giả thuyết: $H_0: p_1 = p_2$ và $H_1: p_1 > p_2$ (1 phía phải).\n> 2. Tính tỷ lệ mẫu gộp $\\hat{p}$:\n>    $$\\hat{p} = \\frac{120 + 240}{200 + 500} \\approx 0.5143$$\n> 3. Tính thống kê kiểm định $Z_0$:\n>    $$Z_0 = \\frac{0.60 - 0.48}{\\sqrt{0.5143 \\times 0.4857 \\times \\left(\\frac{1}{200} + \\frac{1}{500}\\right)}} \\approx 2.87$$\n> 4. Giá trị tới hạn: Với $\\alpha = 0.05$, giá trị tới hạn một phía $z_{0.05} = 1.645$.\n> 5. Kết luận: Vì $Z_0 = 2.87 > 1.645 \\Rightarrow$ Bác bỏ giả thuyết $H_0$. Tỷ lệ ủng hộ của thị trấn cao hơn ngoại ô một cách có ý nghĩa thống kê.\n\n---\n\n## 4. Sơ đồ tư duy lựa chọn kiểm định 2 mẫu (Decision Tree)\n\nSơ đồ cây dưới đây sẽ hướng dẫn bạn nhanh chóng xác định nên dùng loại kiểm định nào khi so sánh hai tổng thể:\n\n```mermaid\nflowchart TD\n    Start([Bắt đầu: So sánh 2 mẫu độc lập]) --> Q1{\"Đại lượng cần so sánh?\"}\n    Q1 -->|Trung bình μ₁ - μ₂| Q2{\"Đã biết trước phương sai σ₁², σ₂²?\"}\n    Q1 -->|Tỷ lệ p₁ - p₂| Q5{\"Mẫu lớn: n*p > 5 và n*(1-p) > 5?\"\"}\n    \n    Q2 -->|Đã biết| Z1[\"Z-test hai mẫu độc lập<br>Z₀ = (X̄₁ - X̄₂ - Δ₀)/√(σ₁²/n₁ + σ₂²/n₂)\"]\n    Q2 -->|Chưa biết| Q3{\"Giả định phương sai bằng nhau?\"}\n    \n    Q3 -->|Có (σ₁² = σ₂²)| T1[\"Pooled t-test (df = n₁ + n₂ - 2)<br>Tính Sp² trước, sau đó tính T₀\"]\n    Q3 -->|Không (σ₁² ≠ σ₂²)| T2[\"Welch t-test (df = v)<br>Tính số bậc tự do v xấp xỉ trước\"]\n    \n    Q5 -->|Thỏa mãn| Z2[\"Z-test so sánh hai tỷ lệ mẫu lớn<br>Tính p̂ gộp trước, tính Z₀\"]\n    Q5 -->|Không| Exact[\"Sử dụng Fisher's Exact Test hoặc kiểm định chính xác\"]\n\n    style Z1 fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n    style T1 fill:#e8f5e9,stroke:#388e3c,stroke-width:2px\n    style T2 fill:#fff9c4,stroke:#fbc02d,stroke-width:2px\n    style Z2 fill:#e1f5fe,stroke:#0288d1,stroke-width:2px\n```"
  },
  {
    "id": "chapter_11_linear_regression",
    "title": "Hồi quy tuyến tính đơn và Tương quan",
    "chapter_num": 11,
    "content": "# Chương 11: Hồi quy tuyến tính đơn và Tương quan (Simple Linear Regression and Correlation)\n\nHồi quy và tương quan là các phương pháp thống kê mạnh mẽ dùng để mô tả mối quan hệ định lượng giữa hai biến số: biến độc lập (biến dự báo $x$) và biến phụ thuộc (biến phản hồi $Y$).\n\n---\n\n## 1. Mô hình hồi quy tuyến tính đơn\n\n> [!book] Mô hình hồi quy tuyến tính đơn\n> Giả định mối quan hệ giữa biến độc lập $x$ và biến phụ thuộc ngẫu nhiên $Y$ là mối quan hệ tuyến tính có chứa sai số ngẫu nhiên $\\epsilon$:\n> $$Y = \\beta_0 + \\beta_1 x + \\epsilon$$\n> *   $\\beta_0$: Hệ số chặn (Tung độ gốc - Intercept).\n> *   $\\beta_1$: Hệ số dốc (Độ nghiêng - Slope).\n> *   $\\epsilon$: Sai số ngẫu nhiên (độc lập, $E(\\epsilon) = 0$, $V(\\epsilon) = \\sigma^2$, phân phối chuẩn).\n\n### Các đặc trưng của $Y$ theo điều kiện $x$:\n*   **Kỳ vọng của $Y$ tại mỗi mức $x$** (Đường hồi quy thực tế):\n    $$E(Y | x) = \\mu_{Y|x} = \\beta_0 + \\beta_1 x$$\n*   **Phương sai của $Y$ tại mỗi mức $x$**:\n    $$V(Y | x) = \\sigma^2$$\n\n---\n\n## 2. Phương pháp bình phương bé nhất (Method of Least Squares)\n\nPhương pháp này tìm các ước lượng $\\hat{\\beta}_0$ và $\\hat{\\beta}_1$ sao cho tổng bình phương sai số ngẫu nhiên là nhỏ nhất:\n$$Minimizing \\quad SSE = \\sum_{i=1}^{n} (y_i - (\\beta_0 + \\beta_1 x_i))^2$$\n\n> [!formula] Công thức tính các hệ số hồi quy mẫu\n> $$\\hat{\\beta}_1 = \\frac{S_{xy}}{S_{xx}} \\quad \\text{và} \\quad \\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$$\n> *   **Đường hồi quy mẫu ước lượng (Fitted Line)**:\n>     $$\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x$$\n\n> [!key] Thực chiến phòng thi: Bấm máy tính CASIO fx-580VN X tìm nhanh phương trình hồi quy và hệ số tương quan $r$\n> Trong phòng thi MAS291, đề bài thường cho một bảng gồm các cặp số liệu $(x_i, y_i)$ và yêu cầu tìm phương trình hồi quy mẫu $\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x$ cùng hệ số tương quan $r$. Hãy bấm máy tính để ra kết quả trong 20 giây!\n> \n> **Các bước thực hiện:**\n> 1.  **Vào chế độ Hồi quy tuyến tính**:\n>     *   Nhấn `MENU` -> nhấn phím `6` (Statistics).\n>     *   Chọn `2` ($y = a + bx$) - đây chính là dạng mô hình hồi quy tuyến tính đơn.\n> 2.  **Nhập số liệu**:\n>     *   Nhập các giá trị của biến độc lập $x$ vào cột thứ nhất, nhấn `=` sau mỗi giá trị.\n>     *   Bấm mũi tên di chuyển sang cột $y$ và nhập các giá trị tương ứng của biến phụ thuộc $y$, nhấn `=` sau mỗi giá trị.\n> 3.  **Xem kết quả**:\n>     *   Nhấn phím `AC` để thoát màn hình nhập.\n>     *   Nhấn phím `OPTN` (Options) -> chọn phím `3` (Regression Calc).\n>     *   Màn hình sẽ hiển thị 3 giá trị cực kỳ quan trọng:\n>         *   **$a$**: Hệ số chặn. Trong ký hiệu của MAS291, đây chính là $\\hat{\\beta}_0$.\n>         *   **$b$**: Hệ số dốc. Trong ký hiệu của MAS291, đây chính là $\\hat{\\beta}_1$.\n>         *   **$r$**: Hệ số tương quan mẫu.\n>     *   *Lưu ý*: Nếu muốn tính các đại lượng tổng sai lệch $S_{xx}, S_{yy}, S_{xy}$, bạn có thể bấm phím `AC` -> `OPTN` -> chọn `2` (2-Variable Calc) để tìm các tổng $\\sum x, \\sum y, \\sum x^2, \\sum y^2, \\sum xy$. Sau đó lắp vào công thức định nghĩa để tính nhanh!\n\n> [!math] Các đại lượng tổng bình phương sai lệch\n> *   **$S_{xx}$ (Tổng sai lệch bình phương của $x$):**\n>     $$S_{xx} = \\sum_{i=1}^{n} x_i^2 - n \\bar{x}^2$$\n> *   **$S_{yy}$ (Tổng sai lệch bình phương của $y$):**\n>     $$S_{yy} = \\sum_{i=1}^{n} y_i^2 - n \\bar{y}^2$$\n> *   **$S_{xy}$ (Tổng tích các sai lệch chéo):**\n>     $$S_{xy} = \\sum_{i=1}^{n} x_i y_i - n \\bar{x} \\bar{y}$$\n\n---\n\n## 3. Ước lượng phương sai sai số $\\sigma^2$\n\nTổng bình phương sai số thực nghiệm ($SSE$):\n$$SSE = S_{yy} - \\hat{\\beta}_1 S_{xy}$$\n\n> [!formula] Ước lượng phương sai sai số $s^2$\n> $$s^2 = \\hat{\\sigma}^2 = \\frac{SSE}{n - 2}$$\n> *   **Sai số chuẩn của hồi quy (Standard Error of Regression)**: $s = \\sqrt{s^2}$.\n\n---\n\n## 4. Kiểm định giả thuyết trong Hồi quy tuyến tính đơn\n\n### 4.1. Kiểm định ý nghĩa hệ số dốc $\\beta_1$ (Significance of Regression)\n\n> [!formula] Kiểm định hệ số dốc $\\beta_1$\n> *   **Giả thuyết**: $H_0: \\beta_1 = 0$ và $H_1: \\beta_1 \\neq 0$.\n> *   **Thống kê kiểm định ($T_0$)**:\n>     $$T_0 = \\frac{\\hat{\\beta}_1}{s / \\sqrt{S_{xx}}}$$\n>     Thống kê $T_0$ tuân theo phân phối Student $t$ với **$df = n - 2$** bậc tự do.\n> *   **Bác bỏ**: Bác bỏ $H_0$ nếu $|T_0| > t_{\\alpha/2, n-2}$.\n\n### 4.2. Kiểm định hệ số chặn $\\beta_0$\n*   **Giả thuyết**: $H_0: \\beta_0 = 0$ và $H_1: \\beta_0 \\neq 0$.\n*   **Thống kê kiểm định ($T_0$)**:\n    $$T_0 = \\frac{\\hat{\\beta}_0}{s \\sqrt{\\frac{1}{n} + \\frac{\\bar{x}^2}{S_{xx}}}}$$\n    Bác bỏ nếu $|T_0| > t_{\\alpha/2, n-2}$.\n\n---\n\n## 5. Khoảng tin cậy và Khoảng dự báo\n\n### 5.1. Khoảng tin cậy cho hệ số dốc $\\beta_1$:\n$$\\hat{\\beta}_1 - t_{\\alpha/2, n-2} \\frac{s}{\\sqrt{S_{xx}}} \\le \\beta_1 \\le \\hat{\\beta}_1 + t_{\\alpha/2, n-2} \\frac{s}{\\sqrt{S_{xx}}}$$\n\n### 5.2. Khoảng tin cậy cho hệ số chặn $\\beta_0$:\n$$\\hat{\\beta}_0 - t_{\\alpha/2, n-2} s \\sqrt{\\frac{1}{n} + \\frac{\\bar{x}^2}{S_{xx}}} \\le \\beta_0 \\le \\hat{\\beta}_0 + t_{\\alpha/2, n-2} s \\sqrt{\\frac{1}{n} + \\frac{\\bar{x}^2}{S_{xx}}}$$\n\n### 5.3. Khoảng tin cậy cho Giá trị phản hồi trung bình $\\mu_{Y|x_0}$ tại điểm $x = x_0$:\n$$\\hat{y}_0 - t_{\\alpha/2, n-2} s \\sqrt{\\frac{1}{n} + \\frac{(x_0 - \\bar{x})^2}{S_{xx}}} \\le \\mu_{Y|x_0} \\le \\hat{y}_0 + t_{\\alpha/2, n-2} s \\sqrt{\\frac{1}{n} + \\frac{(x_0 - \\bar{x})^2}{S_{xx}}}$$\n\n### 5.4. Khoảng dự báo cho một quan sát tương lai $Y_0$ tại điểm $x = x_0$:\n$$\\hat{y}_0 - t_{\\alpha/2, n-2} s \\sqrt{1 + \\frac{1}{n} + \\frac{(x_0 - \\bar{x})^2}{S_{xx}}} \\le Y_0 \\le \\hat{y}_0 + t_{\\alpha/2, n-2} s \\sqrt{1 + \\frac{1}{n} + \\frac{(x_0 - \\bar{x})^2}{S_{xx}}}$$\n\n---\n\n## 6. Phân tích Tương quan (Correlation)\n\n> [!formula] Hệ số tương quan mẫu (Sample Correlation Coefficient - $r$)\n> $$r = \\frac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}} \\quad (-1 \\le r \\le 1)$$\n> *   $r = 1$: Mối quan hệ tuyến tính thuận hoàn hảo.\n> *   $r = -1$: Mối quan hệ tuyến tính nghịch hoàn hảo.\n> *   $r \\approx 0$: Không có liên kết tuyến tính giữa hai biến.\n\n> [!idea] Ẩn dụ \"Độ hòa hợp của một cặp đôi\" giải thích Hệ số tương quan $r$\n> Hệ số tương quan $r$ đo lường cường độ và chiều của mối quan hệ tuyến tính giữa $x$ và $Y$ (nhận giá trị từ $-1$ đến $1$). Hãy tưởng tượng $x$ và $Y$ là một **cặp đôi**:\n> *   **$r = 1$ (Hòa hợp tuyệt đối - Thuận chiều)**: Cặp đôi đồng điệu hoàn hảo. Hễ $x$ vui (tăng) là $Y$ cũng vui (tăng) theo một tỷ lệ cố định, không lệch đi một li nào. Đồ thị là một đường thẳng đi lên dốc đứng.\n> *   **$r = -1$ (Đối lập hoàn hảo - Nghịch chiều)**: Cặp đôi \"khắc khẩu\" tuyệt đối. Hễ $x$ đi hướng Đông (tăng) là $Y$ lập tức đi hướng Tây (giảm) theo tỷ lệ đối xứng hoàn hảo. Đồ thị là một đường thẳng đi xuống dốc đứng.\n> *   **$r \\approx 0.8$ hoặc $-0.8$ (Mối quan hệ mặn nồng)**: Hai người rất hiểu nhau và có xu hướng đi cùng nhau (hoặc ngược nhau), dù thỉnh thoảng vẫn có vài điểm bất đồng nhỏ (các điểm dữ liệu lệch nhẹ quanh đường thẳng hồi quy).\n> *   **$r \\approx 0$ (Kẻ xa lạ)**: Không có bất kỳ sự liên hệ nào. Sự thay đổi của $x$ hoàn toàn không liên quan gì đến $Y$. Họ giống như hai người đi lướt qua nhau trên đường.\n\n> [!formula] Kiểm định ý nghĩa hệ số tương quan tổng thể $\\rho$ ($H_0: \\rho = 0$)\n> $$T_0 = \\frac{r \\sqrt{n-2}}{\\sqrt{1 - r^2}}$$\n> Thống kê $T_0$ tuân theo phân phối Student $t$ với $df = n-2$ bậc tự do. Bác bỏ $H_0$ nếu $|T_0| > t_{\\alpha/2, n-2}$."
  },
  {
    "id": "cheatsheet_mas291_formulas",
    "title": "Tổng hợp Công thức và Lý thuyết MAS291",
    "chapter_num": 12,
    "content": "# TỔNG HỢP CÔNG THỨC VÀ LÝ THUYẾT MÔN XÁC SUẤT & THỐNG KÊ (MAS291)\n\nTài liệu này tổng hợp toàn bộ các công thức toán học và lý thuyết cốt lõi phục vụ ôn tập nhanh môn **Xác suất & Thống kê (MAS291)**.\n\n---\n\n## PHẦN I: XÁC SUẤT VÀ BIẾN NGẪU NHIÊN\n\n### 1. Lý thuyết Xác suất cơ bản (xem thêm Chapter_02_Probability)\n\n*   **Không gian mẫu ($S$)**: Tập hợp tất cả các kết quả phép thử.\n*   **Biến cố ($A$)**: Tập con của không gian mẫu ($A \\subset S$).\n*   **Biến cố xung khắc (Mutually Exclusive)**: $A \\cap B = \\emptyset \\Rightarrow P(A \\cap B) = 0$.\n\n> [!formula] Các quy tắc Xác suất cơ bản\n> *   **Công thức cộng**:\n>     *   *Tổng quát*: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$\n>     *   *Xung khắc*: $P(A \\cup B) = P(A) + P(B)$\n> *   **Xác suất có điều kiện**:\n>     $$P(B|A) = \\frac{P(A \\cap B)}{P(A)} \\quad (\\text{với } P(A) > 0)$$\n> *   **Công thức nhân**:\n>     $$P(A \\cap B) = P(A)P(B|A) = P(B)P(A|B)$$\n> *   **Biến cố độc lập (Independent)**:\n>     $$A, B \\text{ độc lập} \\iff P(A \\cap B) = P(A)P(B)$$\n> *   **Công thức Xác suất đầy đủ**:\n>     $$P(B) = \\sum_{i=1}^{k} P(E_i) P(B|E_i)$$\n> *   **Định lý Bayes (Xác suất hậu nghiệm)**:\n>     $$P(E_i|B) = \\frac{P(E_i)P(B|E_i)}{\\sum_{j=1}^{k} P(E_j)P(B|E_j)}$$\n\n---\n\n### 2. Biến ngẫu nhiên rời rạc (xem thêm Chapter_03_Discrete_Random_Variables)\n\n*   **Hàm khối xác suất (PMF)**: $f(x) \\ge 0$ và $\\sum_i f(x_i) = 1$.\n*   **Hàm phân phối tích lũy (CDF)**: $F(x) = P(X \\le x) = \\sum_{x_i \\le x} f(x_i)$.\n\n> [!formula] Kỳ vọng và Phương sai rời rạc tổng quát\n> *   **Kỳ vọng**: $\\mu = E(X) = \\sum_{i} x_i f(x_i)$\n> *   **Phương sai**: $\\sigma^2 = V(X) = E[(X - \\mu)^2] = E(X^2) - [E(X)]^2$\n> *   *Tính chất tuyến tính*:\n>     *   $E(aX + b) = aE(X) + b$\n>     *   $V(aX + b) = a^2 V(X)$\n\n#### Các phân phối xác suất rời rạc phổ biến:\n\n| Tên Phân phối | Ký hiệu & Tham số | Hàm khối xác suất (PMF) $f(x)$ | Kỳ vọng $E(X)$ | Phương sai $V(X)$ |\n| :--- | :--- | :--- | :---: | :---: |\n| **Đều rời rạc** | $X \\sim Uniform(a, b)$ | $f(x) = \\frac{1}{b - a + 1}$ | $\\frac{a+b}{2}$ | $\\frac{(b-a+1)^2 - 1}{12}$ |\n| **Nhị thức** | $X \\sim Bin(n, p)$ | $f(x) = C_n^x p^x (1-p)^{n-x}$, $x = 0, \\dots, n$ | $np$ | $np(1-p)$ |\n| **Hình học** | $X \\sim Geo(p)$ | $f(x) = (1-p)^{x-1} p$, $x = 1, 2, \\dots$ | $\\frac{1}{p}$ | $\\frac{1-p}{p^2}$ |\n| **Nhị thức âm** | $X \\sim NB(r, p)$ | $f(x) = C_{x-1}^{r-1} p^r (1-p)^{x-r}$, $x = r, r+1, \\dots$ | $\\frac{r}{p}$ | $\\frac{r(1-p)}{p^2}$ |\n| **Siêu bội** | $X \\sim Hyper(N, K, n)$| $f(x) = \\frac{C_K^x C_{N-K}^{n-x}}{C_N^n}$ | $n\\frac{K}{N}$ | $n\\frac{K}{N}(1-\\frac{K}{N})\\frac{N-n}{N-1}$ |\n| **Poisson** | $X \\sim Poisson(\\lambda)$ | $f(x) = \\frac{e^{-\\lambda} \\lambda^x}{x!}$, $x = 0, 1, \\dots$ | $\\lambda$ | $\\lambda$ |\n\n---\n\n### 3. Biến ngẫu nhiên liên tục (xem thêm Chapter_04_Continuous_Random_Variables)\n\n*   **Tính chất Hàm mật độ (PDF)**: $f(x) \\ge 0$, $\\int_{-\\infty}^{+\\infty} f(x) dx = 1$, và $P(a \\le X \\le b) = \\int_a^b f(x) dx$.\n*   **Hàm tích lũy (CDF)**: $F(x) = P(X \\le x) = \\int_{-\\infty}^{x} f(t) dt \\Rightarrow f(x) = F'(x)$.\n\n> [!formula] Kỳ vọng và Phương sai liên tục tổng quát\n> *   **Kỳ vọng**: $E(X) = \\int_{-\\infty}^{+\\infty} x f(x) dx$\n> *   **Phương sai**: $V(X) = \\int_{-\\infty}^{+\\infty} x^2 f(x) dx - \\mu^2$\n\n#### Các phân phối xác suất liên tục phổ biến:\n\n| Phân phối | Hàm mật độ (PDF) $f(x)$ | Hàm tích lũy (CDF) $F(x)$ | Kỳ vọng $E(X)$ | Phương sai $V(X)$ |\n| :--- | :--- | :--- | :---: | :---: |\n| **Đều liên tục** $Uniform[a, b]$ | $f(x) = \\frac{1}{b-a}$ | $F(x) = \\frac{x-a}{b-a}$, $x \\in [a, b]$ | $\\frac{a+b}{2}$ | $\\frac{(b-a)^2}{12}$ |\n| **Chuẩn** $N(\\mu, \\sigma^2)$ | $f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ | Đọc bảng $Z$: $\\Phi\\left(\\frac{x-\\mu}{\\sigma}\\right)$ | $\\mu$ | $\\sigma^2$ |\n| **Mũ** $Exp(\\lambda)$ | $f(x) = \\lambda e^{-\\lambda x}$, $x \\ge 0$ | $F(x) = 1 - e^{-\\lambda x}$ | $\\frac{1}{\\lambda}$ | $\\frac{1}{\\lambda^2}$ |\n\n> [!formula] Phép chuẩn hóa biến Chuẩn\n> Nếu $X \\sim N(\\mu, \\sigma^2)$ thì $Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$.\n> $$P(x_1 \\le X \\le x_2) = \\Phi\\left(\\frac{x_2 - \\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{x_1 - \\mu}{\\sigma}\\right)$$\n\n> [!formula] Xấp xỉ phân phối chuẩn (Có hiệu chỉnh liên tục $\\pm 0.5$)\n> *   **Xấp xỉ cho Nhị thức**: Nếu $X \\sim Bin(n, p)$ với $np > 5$ và $n(1-p) > 5$:\n>     $$P(X \\le x) \\approx \\Phi\\left(\\frac{x + 0.5 - np}{\\sqrt{np(1-p)}}\\right)$$\n> *   **Xấp xỉ cho Poisson**: Nếu $X \\sim Poisson(\\lambda)$ với $\\lambda > 5$:\n>     $$P(X \\le x) \\approx \\Phi\\left(\\frac{x + 0.5 - \\lambda}{\\sqrt{\\lambda}}\\right)$$\n\n---\n\n## PHẦN II: THỐNG KÊ MÔ TẢ VÀ SUY DIỄN THỐNG KÊ\n\n### 4. Thống kê mô tả (xem thêm Chapter_06_Descriptive_Statistics)\n\n*   **Trung bình mẫu**: $\\bar{x} = \\frac{\\sum x_i}{n}$\n*   **Phương sai mẫu**: $s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n - 1} = \\frac{\\sum x_i^2 - n \\bar{x}^2}{n - 1}$\n*   **Độ lệch chuẩn mẫu**: $s = \\sqrt{s^2}$\n\n---\n\n### 5. Ước lượng điểm và Phân phối mẫu (xem thêm Chapter_07_Point_Estimation)\n\n*   **Sai số chuẩn (Standard Error - $SE$)**: Là độ lệch chuẩn của bộ ước lượng điểm:\n    $$SE(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}$$\n*   **Định lý giới hạn trung tâm (CLT)**: Với mẫu ngẫu nhiên độc lập $n \\ge 30$ từ quần thể có trung bình $\\mu$, phương sai $\\sigma^2$ bất kỳ thì:\n    $$\\bar{X} \\approx N\\left(\\mu, \\frac{\\sigma^2}{n}\\right) \\Rightarrow Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\approx N(0, 1)$$\n\n---\n\n### 6. Ước lượng khoảng tin cậy một mẫu (xem thêm Chapter_08_Statistical_Intervals)\n\n> [!formula] Khoảng tin cậy cho Trung bình $\\mu$ (Quần thể Chuẩn)\n> 1.  **Đã biết phương sai $\\sigma^2$ ($Z$-interval)**:\n>     $$\\bar{x} - z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} \\le \\mu \\le \\bar{x} + z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$$\n> 2.  **Chưa biết phương sai $\\sigma^2$ ($t$-interval)**:\n>     $$\\bar{x} - t_{\\alpha/2, n-1} \\frac{s}{\\sqrt{n}} \\le \\mu \\le \\bar{x} + t_{\\alpha/2, n-1} \\frac{s}{\\sqrt{n}}$$\n\n> [!formula] Khoảng tin cậy mẫu lớn cho Tỷ lệ $p$\n> $$\\hat{p} - z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} \\le p \\le \\hat{p} + z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$\n\n> [!formula] Công thức tính cỡ mẫu tối thiểu ($n$)\n> *   *Ước lượng trung bình $\\mu$*: $n = \\left(\\frac{z_{\\alpha/2} \\sigma}{E}\\right)^2$\n> *   *Ước lượng tỷ lệ $p$*: $n = \\left(\\frac{z_{\\alpha/2}}{E}\\right)^2 \\hat{p}(1-\\hat{p})$ (hoặc $n = \\frac{z_{\\alpha/2}^2}{4 E^2}$ nếu chưa có $\\hat{p}$ sơ bộ).\n\n---\n\n### 7. Kiểm định giả thuyết cho một mẫu (xem thêm Chapter_09_Hypothesis_Testing)\n\n> [!formula] Kiểm định trung bình mẫu đơn ($H_0: \\mu = \\mu_0$)\n> *   **$\\sigma^2$ đã biết ($Z$-test)**:\n>     $$Z_0 = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}}$$\n>     Bác bỏ $H_0$ nếu $|Z_0| > z_{\\alpha/2}$ (2 phía), $Z_0 > z_\\alpha$ (1 phía phải) hoặc $Z_0 < -z_\\alpha$ (1 phía trái).\n> *   **$\\sigma^2$ chưa biết ($t$-test)**:\n>     $$T_0 = \\frac{\\bar{X} - \\mu_0}{s/\\sqrt{n}}$$\n>     Bác bỏ $H_0$ nếu $|T_0| > t_{\\alpha/2, n-1}$ (2 phía), $T_0 > t_{\\alpha, n-1}$ (1 phía phải) hoặc $T_0 < -t_{\\alpha, n-1}$ (1 phía trái).\n\n---\n\n### 8. Suy diễn thống kê cho hai mẫu độc lập (xem thêm Chapter_10_Two_Samples_Inference)\n\n> [!formula] Kiểm định so sánh hai Trung bình ($H_0: \\mu_1 - \\mu_2 = \\Delta_0$)\n> *   **Trường hợp 1: Phương sai $\\sigma_1^2, \\sigma_2^2$ đã biết ($Z$-test)**:\n>     $$Z_0 = \\frac{\\bar{X}_1 - \\bar{X}_2 - \\Delta_0}{\\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}}$$\n> *   **Trường hợp 2: Phương sai chưa biết nhưng bằng nhau ($\\sigma_1^2 = \\sigma_2^2$)**:\n>     $$T_0 = \\frac{\\bar{X}_1 - \\bar{X}_2 - \\Delta_0}{S_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}} \\sim t(n_1 + n_2 - 2) \\quad \\text{với } S_p^2 = \\frac{(n_1 - 1)S_1^2 + (n_2 - 1)S_2^2}{n_1 + n_2 - 2}$$\n> *   **Trường hợp 3: Phương sai chưa biết và khác nhau ($\\sigma_1^2 \\neq \\sigma_2^2$)**:\n>     $$T_0^* = \\frac{\\bar{X}_1 - \\bar{X}_2 - \\Delta_0}{\\sqrt{\\frac{S_1^2}{n_1} + \\frac{S_2^2}{n_2}}} \\sim t(v) \\quad \\text{với } v = \\frac{\\left( \\frac{S_1^2}{n_1} + \\frac{S_2^2}{n_2} \\right)^2}{\\frac{(S_1^2/n_1)^2}{n_1 - 1} + \\frac{(S_2^2/n_2)^2}{n_2 - 1}}$$\n\n> [!formula] Kiểm định so sánh hai tỷ lệ mẫu lớn ($H_0: p_1 = p_2$)\n> $$Z_0 = \\frac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}(1-\\hat{p})\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}} \\quad \\text{với } \\hat{p} = \\frac{X_1 + X_2}{n_1 + n_2}$$\n\n---\n\n## PHẦN III: HỒI QUY VÀ TƯƠNG QUAN (xem thêm Chapter_11_Linear_Regression)\n\n*   **Mô hình hồi quy**: $Y = \\beta_0 + \\beta_1 x + \\epsilon$\n*   **Đường hồi quy ước lượng**: $\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x$\n\n> [!formula] Hệ số hồi quy ước lượng bằng phương pháp bình phương bé nhất\n> $$\\hat{\\beta}_1 = \\frac{S_{xy}}{S_{xx}} \\quad \\text{và} \\quad \\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$$\n> *   *Tổng sai lệch bình phương*:\n>     *   $S_{xx} = \\sum x_i^2 - n \\bar{x}^2$\n>     *   $S_{yy} = \\sum y_i^2 - n \\bar{y}^2$\n>     *   $S_{xy} = \\sum x_i y_i - n \\bar{x} \\bar{y}$\n\n> [!formula] Ước lượng phương sai sai số $s^2$\n> $$SSE = S_{yy} - \\hat{\\beta}_1 S_{xy} \\Rightarrow s^2 = \\frac{SSE}{n - 2}$$\n\n> [!formula] Kiểm định Giả thuyết về Hệ số dốc ($H_0: \\beta_1 = 0$)\n> $$T_0 = \\frac{\\hat{\\beta}_1}{s / \\sqrt{S_{xx}}} \\sim t(n - 2)$$\n\n> [!formula] Khoảng tin cậy trong hồi quy\n> *   **Khoảng tin cậy cho hệ số dốc $\\beta_1$**: $\\hat{\\beta}_1 \\pm t_{\\alpha/2, n-2} \\frac{s}{\\sqrt{S_{xx}}}$\n> *   **Khoảng tin cậy cho phản hồi trung bình $\\mu_{Y|x_0}$ tại điểm $x_0$**: $\\hat{y}_0 \\pm t_{\\alpha/2, n-2} s \\sqrt{\\frac{1}{n} + \\frac{(x_0 - \\bar{x})^2}{S_{xx}}}$\n> *   **Khoảng dự báo quan sát mới $Y_0$ tại điểm $x_0$**: $\\hat{y}_0 \\pm t_{\\alpha/2, n-2} s \\sqrt{1 + \\frac{1}{n} + \\frac{(x_0 - \\bar{x})^2}{S_{xx}}}$\n\n> [!formula] Phân tích Tương quan\n> *   **Hệ số tương quan mẫu $r$**: $r = \\frac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}} \\quad (-1 \\le r \\le 1)$\n> *   **Kiểm định ý nghĩa tương quan ($H_0: \\rho = 0$):**\n>     $$T_0 = \\frac{r \\sqrt{n - 2}}{\\sqrt{1 - r^2}} \\sim t(n - 2)$$\n\n---\n\n## PHẦN IV: THƯ VIỆN ẨN DỤ & BÍ QUYẾT BẤM MÁY THỰC CHIẾN\n\n### 1. Phép ẩn dụ ghi nhớ siêu tốc (Mnemonics & Analogies)\n\n> [!idea] Các ẩn dụ cốt lõi từ bài giảng:\n> *   **Định lý Bayes**: Chiếc **\"Máy cập nhật thông tin\"** biến *Prior* (Ước lượng ban đầu, vd: tỷ lệ spam 20%) + *Bằng chứng mới* (vd: từ \"Khuyến mãi\") thành *Posterior* (Niềm tin mới được cập nhật, vd: 85%).\n> *   **Phân phối Hình học (Geometric)**: Ẩn dụ **\"Kiên trì tỏ tình\"** cho đến khi đối phương đồng ý (Thành công đầu tiên) thì dừng lại. Kỳ vọng $E(X) = 1/p$.\n> *   **Phân phối Nhị thức âm (Negative Binomial)**: Ẩn dụ **\"Tuyển thành viên\"** cho đến khi gom đủ đúng $r$ người đồng ý thì dừng lại.\n> *   **Định lý giới hạn trung tâm (CLT)**: Chiếc **\"Máy xay sinh tố\"** xay nát mọi miếng trái cây hình thù kỳ dị (phân phối bất kỳ) thành một ly sinh tố mịn màng (phân phối chuẩn $N(\\mu, \\sigma^2/n)$) khi xay đủ lâu ($n \\ge 30$).\n> *   **Khoảng tin cậy (CI)**: Chiếc **\"Lưới đánh cá\"** quăng đi tìm con cá $\\mu$. Lưới càng rộng (độ tin cậy $99\\%$ lớn) thì càng chắc chắn bắt được cá nhưng không biết rõ cá nằm ở điểm nào (kém chính xác). Tăng kích thước mẫu $n$ giúp dệt lưới khít hơn (vừa chính xác vừa tin cậy).\n> *   **Sai lầm loại I & II (Errors)**: **\"Phiên tòa xét xử\"** giả định bị cáo vô tội ($H_0$):\n>     *   *Sai lầm loại I ($\\alpha$)*: Kết án oan người vô tội (Bác bỏ $H_0$ khi $H_0$ đúng).\n>     *   *Sai lầm loại II ($\\beta$)*: Thả tự do kẻ có tội (Không bác bỏ $H_0$ khi $H_0$ sai).\n> *   **Quy tắc P-value**: Khẩu quyết *\"If the P-value is low, the $H_0$ must go!\"* (P-value $\\le \\alpha \\Rightarrow$ Bác bỏ $H_0$).\n> *   **Hệ số tương quan $r$**: **\"Độ hòa hợp cặp đôi\"**: $r = 1$ đồng điệu hoàn hảo; $r = -1$ đối lập phản ứng hoàn hảo; $r \\approx 0$ hai người lạ qua đường.\n\n---\n\n### 2. Bí quyết bấm máy tính CASIO fx-580VN X trong 20 giây\n\n> [!key] 1. Thống kê mô tả (Chương 6 - Descriptive Statistics)\n> *   **Bước 1**: Nhấn `MENU` -> `6` (Statistics) -> Chọn `1` (1-Variable).\n> *   **Bước 2**: Nhập số liệu mẫu vào bảng (Bật cột tần số bằng `SHIFT` -> `MENU` -> `▼` -> `3` -> `1` nếu cần).\n> *   **Bước 3**: Nhấn `AC` -> `OPTN` -> Chọn `2` (1-Variable Calc).\n> *   **Đọc kết quả**: $\\bar{x}$ (Trung bình mẫu), $s_x^2$ (Phương sai mẫu $s^2$), $s_x$ (Độ lệch chuẩn mẫu $s$), $Q_1$, $Med$ ($Q_2$), $Q_3$.\n\n> [!key] 2. Hồi quy tuyến tính & Tương quan (Chương 11 - Regression & Correlation)\n> *   **Bước 1**: Nhấn `MENU` -> `6` (Statistics) -> Chọn `2` ($y = a + bx$).\n> *   **Bước 2**: Nhập cặp số liệu $(x, y)$ vào hai cột tương ứng.\n> *   **Bước 3**: Nhấn `AC` -> `OPTN` -> Chọn `3` (Regression Calc).\n> *   **Đọc kết quả**: $a$ (Hệ số chặn $\\hat{\\beta}_0$), $b$ (Hệ số dốc $\\hat{\\beta}_1$), $r$ (Hệ số tương quan mẫu).\n> *   *Lưu ý*: Có thể lấy các tổng $\\sum x, \\sum y, \\sum x^2, \\sum y^2, \\sum xy$ bằng cách nhấn `AC` -> `OPTN` -> Chọn `2` (2-Variable Calc)."
  },
  {
    "id": "mas291_chien_thuoc_on_luyen",
    "title": "MAS291 Chien Thuoc On Luyen",
    "chapter_num": 13,
    "content": "# Cẩm Nang Chiến Thuật Thực Chiến & Ôn Luyện MAS291 (Xác Suất Thống Kê)\n*Dành cho sinh viên FPT University - Tối ưu hóa điểm số Final Exam (FE)*\n\n---\n\n## 🎯 Ma Trận Cấu Trúc Đề Thi Final Exam (FE)\nĐề thi FE môn MAS291 bao gồm **50 câu hỏi trắc nghiệm** làm trong **90 phút**. \n\nQua phân tích các đề thi thực tế (`de1`, `de2`, `de3`), đề thi tuân theo một **trật tự tuyến tính** cực kỳ nghiêm ngặt tương ứng với thứ tự các chương học trong sách giáo khoa. Nhờ quy luật này, bạn có thể biết ngay một câu hỏi nằm ở chương nào chỉ dựa vào số thứ tự của nó trong đề thi:\n\n| Số Thứ Tự Câu Hỏi | Chương Học (Slide / Sách) | Trọng Tâm Kiến Thức Cần Nắm | Tỉ Trọng (%) |\n| :---: | :--- | :--- | :---: |\n| **Q1 - Q10** | **Chương 2**: Xác suất cơ bản & Bayes<br>**Chương 6 (Lý thuyết)**: Phương pháp thu thập dữ liệu | - Xác suất điều kiện, Bayes (Bẫy viết sai chính tả `probabilty`).<br>- Quy tắc đếm (Sample space, Outcomes).<br>- Phân biệt Thiết kế thí nghiệm (Experiment) và Nghiên cứu quan sát (Observational study). | 20% |\n| **Q11 - Q20** | **Chương 3**: Biến ngẫu nhiên rời rạc | - Tìm kỳ vọng $E(X)$, phương sai $Var(X)$ từ bảng phân phối xác suất.<br>- Các phân phối rời rạc: Nhị thức (Binomial), Poisson, Hình học (Geometric), Siêu bội (Hypergeometric). | 20% |\n| **Q21 - Q28** | **Chương 4**: Biến ngẫu nhiên liên tục | - Tính tích phân tìm hằng số $k$, tính xác suất $P(a \\le X \\le b)$ từ hàm mật độ $f(x)$.<br>- Phân phối Chuẩn (Normal) & phân phối Mũ (Exponential - tính chất không nhớ).<br>- Xấp xỉ Nhị thức bằng phân phối Chuẩn (có hiệu chỉnh liên tục). | 16% |\n| **Q29 - Q33** | **Chương 6**: Thống kê mô tả (Tính toán) | - Tìm Mean, Median, Mode, Range, IQR từ chuỗi số liệu.<br>- Đọc hiểu biểu đồ Hộp & Râu (Boxplot) và biểu đồ Thân & Lá (Stem-and-Leaf). | 10% |\n| **Q34 - Q36** | **Chương 7**: Ước lượng điểm & CLT | - Khái niệm Ước lượng không chệch (Unbiased Estimator).<br>- Định lý giới hạn trung tâm (CLT) áp dụng cho trung bình mẫu $\\bar{X}$. | 6% |\n| **Q37 - Q40** | **Chương 8**: Khoảng tin cậy (1 mẫu) | - Khoảng tin cậy cho Trung bình (Z-interval khi biết $\\sigma$, t-interval khi chưa biết $\\sigma$).<br>- Khoảng tin cậy cho Tỷ lệ ($p$) và Phương sai ($\\sigma^2$).<br>- Tính toán cỡ mẫu $n$ tối thiểu (Luôn luôn làm tròn lên!). | 8% |\n| **Q41 - Q44** | **Chương 9**: Kiểm định giả thuyết (1 mẫu) | - Xác định cặp giả thuyết $H_0/H_1$.<br>- Tính Test Statistic ($z_0$ hoặc $t_0$), xác định miền bác bỏ (Rejection Region) hoặc tính P-value.<br>- Sai lầm loại I ($\\alpha$) và loại II ($\\beta$). | 8% |\n| **Q45 - Q48** | **Chương 10**: So sánh hai mẫu | - Khoảng tin cậy và kiểm định cho hiệu hai trung bình $\\mu_1 - \\mu_2$ (Trường hợp bằng phương sai Pooled t-test vs Khác phương sai Welch t-test).<br>- So sánh cặp (Paired t-test) và so sánh hai tỷ lệ. | 8% |\n| **Q49 - Q50** | **Chương 11**: Hồi quy tuyến tính & Tương quan | - Đọc bảng kết quả Regression của Excel để tìm phương trình hồi quy $y = \\beta_0 + \\beta_1 x$.<br>- Tìm hệ số tương quan $r$ (chú ý dấu của slope), hệ số xác định $R^2$, và giá trị kiểm định $t$-stat cho hệ số góc. | 4% |\n\n---\n\n## ⚠️ Hộp Đen: Các Bẫy Thường Gặp & Cách Tránh\n\n### Bẫy 1: Không hiệu chỉnh liên tục (Continuity Correction) khi xấp xỉ Chuẩn\n*   **Tình huống**: Đề bài cho biến ngẫu nhiên nhị thức $X \\sim B(n, p)$ với $n$ rất lớn (ví dụ: $n = 200$, $p = 0.4$) và yêu cầu dùng phân phối chuẩn xấp xỉ để tính xác suất, ví dụ $P(X \\ge 90)$.\n*   **Cạm bẫy**: Học sinh tính trực tiếp $Z = \\frac{90 - np}{\\sqrt{np(1-p)}}$ và tra bảng.\n*   **Cách tránh**: Bắt buộc phải áp dụng hiệu chỉnh liên tục trước khi chuyển sang Z:\n    *   $P(X \\ge k) \\approx P(Y \\ge k - 0.5)$\n    *   $P(X \\le k) \\approx P(Y \\le k + 0.5)$\n    *   $P(X > k) \\approx P(Y \\ge k + 0.5)$\n    *   $P(X < k) \\approx P(Y \\le k - 0.5)$\n    *   *Ví dụ thực tế*: Với $P(X \\ge 90)$, ta phải dùng mốc $89.5$ để tính $Z = \\frac{89.5 - 80}{\\sqrt{48}} \\approx 1.37$.\n\n### Bẫy 2: Nhầm lẫn giữa Độ lệch chuẩn mẫu ($s$) và Độ lệch chuẩn tổng thể ($\\sigma$)\n*   **Tình huống**: Đề bài cho một mẫu dữ liệu nhỏ hoặc các tham số tóm tắt, yêu cầu tìm khoảng tin cậy hoặc kiểm định giả thuyết.\n*   **Cạm bẫy**: Sử dụng công thức Z-interval thay vì t-interval khi đề bài cho độ lệch chuẩn mẫu $s$ chứ không phải $\\sigma$ của toàn bộ tổng thể.\n*   **Cách tránh**:\n    *   Nếu đề ghi rõ: **\"population standard deviation is...\"** hoặc ký hiệu $\\sigma \\to$ dùng **Z-test / Z-interval**.\n    *   Nếu đề ghi: **\"a sample of size n has a standard deviation of...\"** hoặc ký hiệu $s \\to$ dùng **t-test / t-interval** (với bậc tự do $df = n-1$).\n\n### Bẫy 3: Tính chất \"Không nhớ\" (Memoryless Property) của phân phối Mũ\n*   **Tình huống**: Cho biến ngẫu nhiên liên tục $X$ có phân phối mũ với trung bình là $\\beta$ (hoặc tỷ lệ $\\lambda = 1/\\beta$). Yêu cầu tính xác suất điều kiện: $P(X > s + t \\mid X > s)$.\n*   **Cạm bẫy**: Cố gắng tính tích phân phức tạp theo định nghĩa xác suất điều kiện.\n*   **Cách tránh**: Áp dụng ngay tính chất không nhớ:\n    $$P(X > s + t \\mid X > s) = P(X > t) = e^{-\\lambda t} = e^{-t/\\beta}$$\n    *Không quan tâm đến giá trị $s$ đã trôi qua!*\n\n### Bẫy 4: Làm tròn sai khi tính Cỡ mẫu ($n$)\n*   **Tình huống**: Tính kích thước mẫu tối thiểu $n$ để đạt sai số biên $E$ cho trước.\n*   **Cạm bẫy**: Tính ra kết quả lẻ (ví dụ: $n = 96.04$ hoặc $n = 96.12$) và làm tròn thông thường thành $96$.\n*   **Cách tránh**: **Luôn luôn làm tròn lên (ceil)** thành số nguyên tiếp theo (trong ví dụ trên là $97$). Nếu lấy $96$, sai số biên sẽ vượt quá mức cho phép.\n\n### Bẫy 5: Dấu của Hệ số tương quan $r$ trong Hồi quy Tuyến tính\n*   **Tình huống**: Đề bài cho bảng Excel kết quả hồi quy và yêu cầu tìm hệ số tương quan tuyến tính $r$. Bảng Excel chỉ hiển thị `Multiple R` (hệ số tương quan bội - luôn dương).\n*   **Cạm bẫy**: Học sinh lấy ngay giá trị dương của `Multiple R` làm đáp án.\n*   **Cách tránh**: Kiểm tra dấu của **hệ số góc (Slope)** $\\beta_1$ (nằm ở dòng thứ hai của cột `Coefficients` trong bảng hồi quy):\n    *   Nếu Slope dương $\\to r = \\text{Multiple R}$\n    *   Nếu Slope âm $\\to r = -\\text{Multiple R}$\n\n---\n\n## ⌨️ Thủ Thuật Casio fx-580VN X Thần Tốc\n\nMáy tính Casio fx-580VN X là vũ khí tối thượng giúp bạn giải quyết nhanh gọn hơn 60% số câu hỏi trong đề thi. Dưới đây là các quy trình bấm máy cụ thể cho từng dạng bài:\n\n### 1. Tính toán Thống kê mô tả (Chương 6) - Cực nhanh\nÁp dụng cho các bài toán cho một dãy số liệu và bắt tìm Mean, Sample Variance, Standard Deviation, Median, Quartiles.\n\n*   **Bước 1**: Nhấn `[MENU]` $\\to$ `[6]` (Thống kê) $\\to$ `[1]` (1 biến).\n*   **Bước 2**: Nhập toàn bộ dãy số liệu vào cột $X$.\n*   **Bước 3**: Nhấn `[OPTN]` $\\to$ `[3]` (Tính 1 biến).\n*   **Màn hình sẽ hiển thị toàn bộ kết quả cần tìm**:\n    *   $\\bar{x}$: Trung bình mẫu (Mean).\n    *   $s^2_x$: Phương sai mẫu hiệu chỉnh (Sample Variance) - *Trong công thức lý thuyết ký hiệu là $s^2$*.\n    *   $s_x$: Độ lệch chuẩn mẫu hiệu chỉnh (Sample Standard Deviation) - *Ký hiệu là $s$*.\n    *   $\\sigma_x$: Độ lệch chuẩn tổng thể (Population Standard Deviation) - *Ký hiệu là $\\sigma$*.\n    *   $minX, Q_1, Med, Q_3, maxX$: Các giá trị để vẽ Boxplot.\n\n### 2. Tra bảng phân phối xác suất liên tục (Chương 4) - Không cần tra bảng giấy\nKhông cần dùng bảng phân phối tích phân trong sách giáo khoa, máy tính có sẵn chức năng này.\n\n#### Phân phối Chuẩn (Normal Distribution):\nTính $P(a \\le X \\le b)$ với $X \\sim N(\\mu, \\sigma^2)$:\n*   Nhấn `[MENU]` $\\to$ `[7]` (Phân phối) $\\to$ `[2]` (Tích phân chuẩn - Normal CD).\n*   Nhập các tham số:\n    *   `Lower`: Cận dưới $a$. (Nếu tính $P(X \\le b)$, nhập cận dưới là $-10^{99}$).\n    *   `Upper`: Cận trên $b$. (Nếu tính $P(X \\ge a)$, nhập cận trên là $10^{99}$).\n    *   $\\sigma$: Độ lệch chuẩn. (Chú ý đề bài hay cho phương sai $\\sigma^2$, phải căn bậc hai để lấy $\\sigma$).\n    *   $\\mu$: Kỳ vọng.\n\n#### Phân phối Chuẩn ngược (Inverse Normal):\nTìm giá trị $x$ sao cho $P(X \\le x) = \\alpha$:\n*   Nhấn `[MENU]` $\\to$ `[7]` $\\to$ `[3]` (Chuẩn ngược - Inverse Normal).\n*   Nhập các tham số:\n    *   `Area`: Diện tích bên trái ($\\alpha$).\n    *   $\\sigma$: Độ lệch chuẩn.\n    *   $\\mu$: Kỳ vọng.\n\n### 3. Tính toán Hồi quy tuyến tính (Chương 11)\nTìm phương trình đường thẳng $y = a + bx$ và hệ số tương quan $r$ từ tập điểm dữ liệu $(x_i, y_i)$.\n\n*   **Bước 1**: Nhấn `[MENU]` $\\to$ `[6]` $\\to$ `[2]` ($y = a + bx$).\n*   **Bước 2**: Nhập dữ liệu $x$ vào cột $X$, $y$ vào cột $Y$.\n*   **Bước 3**: Nhấn `[OPTN]` $\\to$ `[3]` (Tính hồi quy).\n*   **Kết quả hiển thị**:\n    *   `a`: Hệ số tự do (Intercept).\n    *   `b`: Hệ số góc (Slope).\n    *   `r`: Hệ số tương quan (Correlation Coefficient) - *Giải quyết nhanh câu hỏi tính $r$ mà không cần tính tay công thức hiệp phương sai phức tạp*.\n\n---\n\n## 📈 Lộ Trình Ôn Luyện Đột Phá Điểm Số\n\nĐể việc ôn luyện đạt hiệu quả cao nhất trong thời gian ngắn nhất, hãy thực hiện theo lộ trình 3 bước sau:\n\n```mermaid\ngraph TD\n    A[\"Bước 1: Quét vững Lý thuyết (Chương 2, 3, 4)\"] --> B[\"Bước 2: Luyện kỹ năng bấm máy Casio (Chương 6, 11)\"]\n    B --> C[\"Bước 3: Luyện Đề FE thực tế (Áp dụng quy luật tuyến tính)\"]\n    C --> D[\"Mục tiêu: Đạt điểm >= 8.0 dễ dàng\"]\n    style A fill:#f9f,stroke:#333,stroke-width:2px\n    style B fill:#bbf,stroke:#333,stroke-width:2px\n    style C fill:#fbf,stroke:#333,stroke-width:2px\n    style D fill:#bfb,stroke:#333,stroke-width:2px\n```\n\n1.  **Bước 1: Quét vững Lý thuyết core (Chương 2, 3, 4)**: \n    *   Đây là phần chiếm số lượng câu nhiều nhất (gần 60%). Bạn cần nắm chắc các phân phối rời rạc và liên tục, ý nghĩa của hàm PMF, PDF, CDF.\n    *   *Mẹo*: Sử dụng tài liệu **\"MAS291_Cam_Nang_Thuc_Chien.docx\"** đã soạn ở OneDrive để đọc các phần ẩn dụ thực tế.\n2.  **Bước 2: Luyện kỹ năng bấm máy tính thần tốc (Chương 6, 11)**:\n    *   Đây là phần \"dâng điểm\". Chỉ cần bấm máy chính xác là chắc chắn có điểm. Hãy thực hành bấm 10 bài toán Descriptive Statistics và 5 bài toán Regression để quen tay.\n3.  **Bước 3: Luyện Đề FE thực tế (Áp dụng quy luật tuyến tính)**:\n    *   Hãy tự bấm giờ giải đề thi thử `de1` (đã có 29 câu giải nghĩa chi tiết ở trên).\n    *   Khi gặp bất kỳ câu hỏi nào, xác định ngay vị trí của nó để biết nó thuộc chương nào, từ đó kích hoạt vùng kiến thức tương ứng trong não bộ."
  }
];
