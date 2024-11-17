---
categories:
  - "[[Statistics]]"
  - "[[Probability]]"
  - "[[Definition]]"
  - "[[Data Science]]"
created: 2024-11-17 18:46
updated: 2024-11-17 18:46
---
**Kullback-Leibler Divergence (KL Divergence)**  

**Definition**:  
The Kullback-Leibler (KL) divergence measures how one probability distribution $Q$ (approximation) differs from a reference distribution $P$ (true distribution). For discrete distributions over events $\{x_1, x_2, \dots, x_n\}$:  
$$D_{\text{KL}}(P || Q) = \sum_{i=1}^n p_i \log \frac{p_i}{q_i}$$  
For continuous distributions:  
$$D_{\text{KL}}(P || Q) = \int_{-\infty}^\infty p(x) \log \frac{p(x)}{q(x)} \, dx$$  

**Intuition**:  
KL divergence quantifies the inefficiency of approximating $P$ using $Q$.  
- If $P = Q$, then $D_{\text{KL}}(P || Q) = 0$.  
- Larger values indicate a greater difference between $P$ and $Q$.  

**Key Properties**:  
1. **Non-Negativity**:  
   $$D_{\text{KL}}(P || Q) \geq 0$$  
   Equality occurs only if $P = Q$ almost everywhere.  

2. **Asymmetry**:  
   $$D_{\text{KL}}(P || Q) \neq D_{\text{KL}}(Q || P)$$  
   KL divergence is not a true distance metric because it is not symmetric and does not satisfy the triangle inequality.  

3. **Additivity for Independent Variables**:  
   If $P(X, Y) = P(X)P(Y)$ and $Q(X, Y) = Q(X)Q(Y)$, then:  
   $$D_{\text{KL}}(P(X, Y) || Q(X, Y)) = D_{\text{KL}}(P(X) || Q(X)) + D_{\text{KL}}(P(Y) || Q(Y))$$  

**Applications**:  
1. **Machine Learning**:  
   - Used in variational inference to measure the difference between the true posterior distribution and an approximate distribution.  
   - Cross-entropy loss includes KL divergence as a component:  
     $$H(P, Q) = H(P) + D_{\text{KL}}(P || Q)$$  

2. **Information Theory**:  
   - Quantifies the inefficiency of encoding messages from $P$ using a code optimized for $Q$.  

3. **Natural Sciences**:  
   - Comparing probability distributions in areas like genetics, linguistics, and physics.  

**Relation to Entropy**:  
KL divergence relates to entropy and cross-entropy:  
$$D_{\text{KL}}(P || Q) = H(P, Q) - H(P)$$  
where $H(P, Q)$ is the cross-entropy, and $H(P)$ is the Shannon entropy of $P$.  

**Special Case (Binary Variables)**:  
For binary random variables with $P = \{p, 1-p\}$ and $Q = \{q, 1-q\}$:  
$$D_{\text{KL}}(P || Q) = p \log \frac{p}{q} + (1-p) \log \frac{1-p}{1-q}$$