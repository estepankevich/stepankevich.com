---
categories:
  - "[[Statistics]]"
  - "[[Probability]]"
  - "[[Method]]"
  - "[[Data Science]]"
created: 2024-11-17 19:20
updated: 2024-11-17 19:37
---
**Definition**:  
Bayesian estimation is a statistical method for estimating parameters of a model by incorporating prior beliefs about the parameters and updating them based on observed data. It is rooted in [[Bayes' theorem]]:  
$$P(\theta | x) = \frac{P(x | \theta) P(\theta)}{P(x)}$$  
where:  
- $P(\theta | x)$ is the **posterior distribution** of the parameter $\theta$ given the data $x$.  
- $P(x | \theta)$ is the **likelihood**, representing the probability of the observed data given $\theta$.  
- $P(\theta)$ is the **prior distribution**, expressing beliefs about $\theta$ before observing the data.  
- $P(x)$ is the **evidence** (normalizing constant), ensuring the posterior is a valid probability distribution:  
  $$P(x) = \int P(x | \theta) P(\theta) d\theta$$  

**Posterior Distribution**:  
The posterior combines the likelihood and the prior:  
$$P(\theta | x) \propto P(x | \theta) P(\theta)$$  

**Key Concepts**:  

1. **Prior** ($P(\theta)$):  
   Encodes prior knowledge or beliefs about $\theta$. Common choices include:  
   - **Non-informative prior**: Reflects minimal prior knowledge (e.g., uniform distribution).  
   - **Informative prior**: Incorporates domain-specific information (e.g., Gaussian centered on known values).  

2. **Likelihood** ($P(x | \theta)$):  
   Represents the data generation process, connecting the parameter $\theta$ to the observed data.  

3. **Posterior** ($P(\theta | x)$):  
   The updated belief about $\theta$ after observing data.  

4. **Bayesian Estimators**:  
   - **Maximum A Posteriori (MAP)**: Chooses the value of $\theta$ that maximizes the posterior:  
     $$\hat{\theta}_{\text{MAP}} = \arg\max_\theta P(\theta | x)$$  
     Equivalently:  
     $$\hat{\theta}_{\text{MAP}} = \arg\max_\theta [P(x | \theta) P(\theta)]$$  
   - **Posterior Mean**: The expected value of $\theta$ under the posterior:  
     $$\hat{\theta}_{\text{Bayes}} = \mathbb{E}[\theta | x] = \int \theta P(\theta | x) d\theta$$  

**Example**:  

1. **Gaussian Likelihood with Gaussian Prior**:  
   - Data: $\{x_1, x_2, \dots, x_n\} \sim \mathcal{N}(\mu, \sigma^2)$  
   - Prior: $\mu \sim \mathcal{N}(\mu_0, \tau^2)$  
   - Likelihood:  
     $$P(x | \mu) \propto \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^n (x_i - \mu)^2\right)$$  
   - Posterior: Combining prior and likelihood:  
     $$\mu | x \sim \mathcal{N} \left( \frac{\frac{\mu_0}{\tau^2} + \frac{\bar{x}}{\sigma^2}}{\frac{1}{\tau^2} + \frac{n}{\sigma^2}}, \frac{1}{\frac{1}{\tau^2} + \frac{n}{\sigma^2}} \right)$$  

2. **Binomial Likelihood with Beta Prior**:  
   - Data: $y \sim \text{Binomial}(n, \theta)$  
   - Prior: $\theta \sim \text{Beta}(\alpha, \beta)$  
   - Posterior:  
     $$\theta | y \sim \text{Beta}(\alpha + y, \beta + n - y)$$  

**Applications**:  
1. **Parameter Estimation**:  
   Estimating model parameters in probabilistic models.  

2. **Prediction**:  
   Using the posterior predictive distribution:  
   $$P(x_{\text{new}} | x) = \int P(x_{\text{new}} | \theta) P(\theta | x) d\theta$$  

3. **Regularization**:  
   Prior distributions act as a form of regularization (e.g., Gaussian priors on weights in Bayesian linear regression).  

4. **Bayesian Machine Learning**:  
   Bayesian models are foundational in probabilistic machine learning methods, such as Gaussian processes and Bayesian neural networks.  

**Advantages**:  
- Explicit incorporation of prior knowledge.  
- Provides a full distribution over parameters, capturing uncertainty.  
- Naturally avoids overfitting by weighting the prior and likelihood.  

**Limitations**:  
- Computationally intensive for complex models (requires sampling methods like MCMC).  
- Sensitivity to the choice of prior in small datasets.