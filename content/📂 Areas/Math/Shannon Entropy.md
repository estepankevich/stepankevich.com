---
categories:
  - "[[Statistics]]"
  - "[[Probability]]"
  - "[[Definition]]"
  - "[[Data Science]]"
created: 2024-11-17 18:41
updated: 2024-11-17 18:41
---
**Shannon Entropy**  

**Definition**:  
Shannon entropy quantifies the uncertainty in a discrete probability distribution. For a random variable $X$ with possible outcomes $\{x_1, x_2, \dots, x_n\}$ and corresponding probabilities $\{p_1, p_2, \dots, p_n\}$, the entropy is defined as:  
$$H(X) = -\sum_{i=1}^n p_i \log_2 p_i$$  

**Intuition**:  
Entropy measures the "average information content" or uncertainty of a random variable.  
- High entropy means more unpredictability (e.g., uniform distribution).  
- Low entropy means less unpredictability (e.g., highly skewed distribution).  

**Key Properties**:  
1. **Range**:  
   $$0 \leq H(X) \leq \log_2 n$$  
   - $H(X) = 0$ if one outcome has probability 1 (perfect certainty).  
   - $H(X) = \log_2 n$ for a uniform distribution over $n$ outcomes (maximum uncertainty).  

2. **Additivity for Independent Variables**:  
   If $X$ and $Y$ are independent:  
   $$H(X, Y) = H(X) + H(Y)$$  

3. **Non-Negativity**:  
   $$H(X) \geq 0$$  

4. **Invariance Under Reordering**:  
   The entropy value is unaffected by the ordering of probabilities.  

**Special Cases**:  
- For a binary variable with probabilities $p$ and $1-p$:  
  $$H(X) = -p \log_2 p - (1-p) \log_2 (1-p)$$  
**Relation to Other Concepts**:  
1. **[[Cross-Entropy]]**: Shannon entropy is a special case of cross-entropy when comparing a distribution to itself.  
2. **[[Kullback-Leibler Divergence]]**: Measures the difference between two distributions and relates to entropy:  
   $$D_{\text{KL}}(P || Q) = \sum_i p_i \log_2 \frac{p_i}{q_i} = H(P, Q) - H(P)$$