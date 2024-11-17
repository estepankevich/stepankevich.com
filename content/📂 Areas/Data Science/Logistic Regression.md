---
categories:
  - "[[Data Science]]"
  - "[[Method]]"
  - "[[Statistics]]"
  - "[[Probability]]"
created: 2024-11-17 19:23
updated: 2024-11-17 19:42
---
**Definition**:  
Logistic regression is a statistical model used for binary classification. It models the probability of a binary outcome as a function of input features using the logistic ([[Sigmoid Function|sigmoid]]) function.  

The probability that an observation belongs to the positive class ($y = 1$) is modeled as:  
$$P(y=1 | x; \beta) = \sigma(x^\top \beta) = \frac{1}{1 + e^{-x^\top \beta}}$$  
where:  
- $x \in \mathbb{R}^n$ is the vector of features (including an intercept term).  
- $\beta \in \mathbb{R}^n$ is the vector of model parameters.  
- $\sigma(z)$ is the sigmoid function:  
  $$\sigma(z) = \frac{1}{1 + e^{-z}}$$  

**Log-Likelihood Function**:  
Given $m$ training examples $\{(x_i, y_i)\}_{i=1}^m$ where $y_i \in \{0, 1\}$, the [[Maximum Likelihood Estimation (MLE)|likelihood]] of the data is:  
$$L(\beta) = \prod_{i=1}^m \sigma(x_i^\top \beta)^{y_i} (1 - \sigma(x_i^\top \beta))^{1 - y_i}$$  
Taking the logarithm gives the log-likelihood:  
$$\ell(\beta) = \sum_{i=1}^m \left[ y_i \log \sigma(x_i^\top \beta) + (1 - y_i) \log (1 - \sigma(x_i^\top \beta)) \right]$$  

**Optimization Problem**:  
The logistic regression parameters $\beta$ are obtained by maximizing the log-likelihood:  
$$\hat{\beta} = \arg\max_\beta \ell(\beta)$$  

Equivalently, minimizing the negative log-likelihood:  
$$\hat{\beta} = \arg\min_\beta \left[ -\sum_{i=1}^m \left( y_i \log \sigma(x_i^\top \beta) + (1 - y_i) \log (1 - \sigma(x_i^\top \beta)) \right) \right]$$  

**Gradient Descent**:  
The gradient of the log-likelihood with respect to $\beta$ is:  
$$\nabla_\beta \ell(\beta) = \sum_{i=1}^m (y_i - \sigma(x_i^\top \beta)) x_i$$  

This gradient is used in iterative optimization algorithms like gradient descent or Newton's method.  

**Decision Rule**:  
The predicted probability for the positive class is:  
$$\hat{P}(y=1 | x) = \sigma(x^\top \hat{\beta})$$  
The decision rule for classification is:  
$$\hat{y} =  
\begin{cases} 
1 & \text{if } \hat{P}(y=1 | x) \geq 0.5 \\ 
0 & \text{otherwise} 
\end{cases}$$  

**Assumptions**:  
1. The relationship between the log-odds of the outcome and the features is linear:  
   $$\log \frac{P(y=1 | x)}{P(y=0 | x)} = x^\top \beta$$  
2. Independence of observations.  
3. Features are not highly collinear (to ensure stable estimation).  

**Extensions**:  
1. **Multiclass Logistic Regression** ([[Softmax Regression]]):  
   Generalizes logistic regression to classify among $k$ classes using the [[Softmax Function]].  

2. **Regularized Logistic Regression**:  
   Adds $L_1$ or $L_2$ regularization to prevent overfitting:  
   - Lasso ($L_1$):  
     $$\ell_\text{reg}(\beta) = \ell(\beta) - \lambda \|\beta\|_1$$  
   - Ridge ($L_2$):  
     $$\ell_\text{reg}(\beta) = \ell(\beta) - \lambda \|\beta\|^2$$  

**Applications**:  
- Binary classification problems: spam detection, medical diagnosis, etc.  
- Estimating probabilities of binary events.  
- Feature importance analysis through parameter interpretation.  

**Limitations**:  
- Assumes linearity in the log-odds, which may not hold for complex relationships.  
- Not inherently robust to outliers or highly imbalanced datasets.  