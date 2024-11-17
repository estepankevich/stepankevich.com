---
categories:
  - "[[Data Science]]"
  - "[[Definition]]"
created: 2024-11-17 19:42
updated: 2024-11-17 20:03
---
**Definition**:  
The softmax function maps a vector of real numbers into a probability distribution over a finite set of classes. For an input vector $z = [z_1, z_2, \dots, z_n]$, the softmax function is defined as:  
$$\text{softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^n e^{z_j}} \quad \text{for } i = 1, 2, \dots, n.$$  

**Properties**:  
1. **Output Range**:  
   The softmax outputs are probabilities, so:  
   $$\text{softmax}(z_i) \in (0, 1) \quad \text{and} \quad \sum_{i=1}^n \text{softmax}(z_i) = 1.$$  

2. **Exponential Scaling**:  
   Larger values of $z_i$ have exponentially greater contributions to the numerator, making the softmax function sensitive to relative differences in $z_i$.  

3. **Translation Invariance**:  
   Adding a constant $c$ to all elements of $z$ does not change the output of the softmax:  
   $$\text{softmax}(z_i + c) = \text{softmax}(z_i).$$  

4. **Derivatives**:  
   For an individual output $\text{softmax}(z_i)$, the derivative with respect to $z_k$ is:  
   $$\frac{\partial \text{softmax}(z_i)}{\partial z_k} = \text{softmax}(z_i) (\delta_{ik} - \text{softmax}(z_k))$$  
   where $\delta_{ik}$ is the Kronecker delta ($\delta_{ik} = 1$ if $i = k$, and $0$ otherwise).  

**Applications**:  
1. **Multiclass Classification**:  
   - In machine learning, softmax is commonly used in the final layer of a neural network to model probabilities of $n$ classes.  
   - Given logits (raw scores) $z$, the predicted probability for class $i$ is:  
     $$P(y = i | z) = \text{softmax}(z_i).$$  

2. **[[Cross-Entropy]] Loss**:  
   The softmax function is often paired with the cross-entropy loss for classification tasks. Given a true label $y \in \{1, \dots, n\}$ and predicted probabilities $\hat{p}_i = \text{softmax}(z_i)$:  
   $$\text{Loss} = -\log(\hat{p}_y) = -\log(\text{softmax}(z_y)).$$  

3. **Attention Mechanisms**:  
   - Softmax is used in attention-based models (e.g., [[Transformers]]) to compute attention weights.  
   - Ensures weights sum to 1, representing probabilities.  

**Example**:  
Given $z = [2, 1, 0]$, compute the softmax output:  
1. Compute exponentials:  
   $$e^z = [e^2, e^1, e^0] = [7.389, 2.718, 1].$$  
2. Compute the sum:  
   $$\sum e^{z_i} = 7.389 + 2.718 + 1 = 11.107.$$  
3. Compute probabilities:  
   $$\text{softmax}(z_1) = \frac{7.389}{11.107} \approx 0.665, \quad \text{softmax}(z_2) = \frac{2.718}{11.107} \approx 0.245, \quad \text{softmax}(z_3) = \frac{1}{11.107} \approx 0.090.$$  

**Comparison with [[Sigmoid Function]]**:  
- **Sigmoid**: Used for binary classification, outputs a single probability.  
- **Softmax**: Generalizes sigmoid to multiclass problems, outputs a probability distribution over $n$ classes.  

**Numerical Stability**:  
To avoid numerical overflow when $z$ has large values, subtract the maximum value from all elements before applying softmax:  
$$\text{softmax}(z_i) = \frac{e^{z_i - \max(z)}}{\sum_{j=1}^n e^{z_j - \max(z)}}.$$