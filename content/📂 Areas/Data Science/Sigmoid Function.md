---
created: 2024-11-17 18:33
updated: 2024-11-17 19:26
categories:
  - "[[Data Science]]"
  - "[[Definition]]"
---
**Definition**:  
$$\sigma(x) = \frac{1}{1 + e^{-x}}$$  

**Key Properties**:  
1. **Range**: $\sigma(x) \in (0, 1)$.  
2. **Derivative**:  
   $$\sigma'(x) = \sigma(x)(1 - \sigma(x))$$  
   Peaks at $x = 0$, where $\sigma'(0) = 0.25$, and decreases symmetrically as $|x|$ increases.  
3. **Monotonicity**: $\sigma(x)$ is monotonically increasing for all $x$.  
4. **Asymptotes**: $\sigma(x) \to 0$ as $x \to -\infty$ and $\sigma(x) \to 1$ as $x \to +\infty$.  
5. **Symmetry**:  
   $$\sigma(-x) = 1 - \sigma(x)$$  
   This symmetry makes it useful in probabilistic models.  
6. **Relationship to Log-Odds**:  
   If $p = \sigma(x)$, then:  
   $$x = \ln\left(\frac{p}{1-p}\right)$$  
   where $x$ represents the log-odds of $p$.  
7. **Saturation**: When $|x|$ is large, gradients vanish, which can slow training in deep networks.  

**Connection to the Softplus Function**:  
The softplus function is defined as:  
$$\text{softplus}(x) = \ln(1 + e^x)$$  

1. **Gradient Connection**: The sigmoid function is the derivative of the softplus function:  
   $$\sigma(x) = \frac{d}{dx} \text{softplus}(x)$$  
2. **Softplus Approximation to ReLU**:  
   The softplus function is a smooth approximation of the ReLU function, while the sigmoid is more tightly linked to probabilities.  
3. **Range vs. Output Behavior**:  
   - $\sigma(x)$ maps $x$ to $(0, 1)$, suited for probabilities.  
   - $\text{softplus}(x)$ maps $x$ to $(0, \infty)$, suited for non-negative outputs (e.g., certain loss functions).  

**Applications Comparison**:  
- Sigmoid is used for probabilistic interpretations and outputs.  
- Softplus is used in settings requiring smooth, non-negative activations, such as Poisson regression models.  