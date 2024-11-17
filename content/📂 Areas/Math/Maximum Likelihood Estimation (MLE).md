---
categories:
  - "[[Statistics]]"
  - "[[Probability]]"
  - "[[Method]]"
  - "[[Data Science]]"
created: 2024-11-17 19:20
updated: 2024-11-17 19:20
---
**Definition**:  
Maximum Likelihood Estimation is a statistical method for estimating the parameters of a probabilistic model. MLE seeks the parameter values that maximize the likelihood of the observed data under the model.  

Let $\{x_1, x_2, \dots, x_n\}$ be the observed data, and let the model's probability density function or mass function be $p(x; \theta)$, where $\theta$ are the parameters to be estimated. The likelihood function is:  
$$L(\theta) = \prod_{i=1}^n p(x_i; \theta)$$  
The MLE maximizes $L(\theta)$ with respect to $\theta$:  
$$\hat{\theta}_{\text{MLE}} = \arg\max_\theta L(\theta)$$  

**Log-Likelihood**:  
Since the likelihood is a product, it is often more convenient to maximize the log-likelihood:  
$$\ell(\theta) = \log L(\theta) = \sum_{i=1}^n \log p(x_i; \theta)$$  
The MLE is equivalent to maximizing $\ell(\theta)$:  
$$\hat{\theta}_{\text{MLE}} = \arg\max_\theta \ell(\theta)$$  

**Steps to Compute MLE**:  
1. Write down the likelihood function $L(\theta)$ or log-likelihood $\ell(\theta)$ for the model.  
2. Differentiate $\ell(\theta)$ with respect to $\theta$ and set the derivative to zero to find critical points:  
   $$\frac{\partial \ell(\theta)}{\partial \theta} = 0$$  
3. Solve for $\theta$, and verify it is a maximum (e.g., using the second derivative test or inspecting behavior at boundaries).  

**Examples**:  

1. **Bernoulli Distribution**:  
   Observations $\{x_1, x_2, \dots, x_n\}$, where $x_i \in \{0, 1\}$, and $p(x; \theta) = \theta^x (1-\theta)^{1-x}$.  
   - Likelihood:  
     $$L(\theta) = \prod_{i=1}^n \theta^{x_i} (1-\theta)^{1-x_i}$$  
   - Log-likelihood:  
     $$\ell(\theta) = \sum_{i=1}^n \left[x_i \log \theta + (1-x_i) \log(1-\theta)\right]$$  
   - Derivative:  
     $$\frac{\partial \ell(\theta)}{\partial \theta} = \frac{\sum_{i=1}^n x_i}{\theta} - \frac{\sum_{i=1}^n (1-x_i)}{1-\theta}$$  
   - Solving gives:  
     $$\hat{\theta} = \frac{\sum_{i=1}^n x_i}{n}$$  
     (The sample mean is the MLE for $\theta$.)  

2. **Normal Distribution**:  
   Observations $\{x_1, x_2, \dots, x_n\}$, and $p(x; \mu, \sigma^2) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$.  
   - Likelihood:  
     $$L(\mu, \sigma^2) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}}$$  
   - Log-likelihood:  
     $$\ell(\mu, \sigma^2) = -\frac{n}{2} \log(2\pi) - \frac{n}{2} \log \sigma^2 - \frac{1}{2\sigma^2} \sum_{i=1}^n (x_i - \mu)^2$$  
   - Derivatives and solutions:  
     $$\hat{\mu} = \frac{1}{n} \sum_{i=1}^n x_i, \quad \hat{\sigma}^2 = \frac{1}{n} \sum_{i=1}^n (x_i - \hat{\mu})^2$$  

**Properties of MLE**:  
1. **Consistency**:  
   $\hat{\theta}_{\text{MLE}}$ converges to the true parameter $\theta_0$ as $n \to \infty$.  

2. **Asymptotic Normality**:  
   For large $n$, $\hat{\theta}_{\text{MLE}}$ is approximately normally distributed:  
   $$\hat{\theta}_{\text{MLE}} \sim \mathcal{N}(\theta_0, \frac{1}{I(\theta_0)})$$  
   where $I(\theta_0)$ is the Fisher information.  

3. **Efficient**:  
   MLE achieves the Cramér-Rao lower bound asymptotically, making it an efficient estimator under regularity conditions.  

**Applications**:  
- Parameter estimation for probability distributions.  
- Training models in machine learning (e.g., [[Logistic Regression]], Gaussian Mixture Models).  
- Hypothesis testing (e.g., likelihood ratio tests).