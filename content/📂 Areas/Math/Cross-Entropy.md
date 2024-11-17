---
created: 2024-11-17 18:44
updated: 2024-11-17 19:39
categories:
  - "[[Statistics]]"
  - "[[Probability]]"
  - "[[Definition]]"
  - "[[Data Science]]"
---
**Cross-Entropy**  

**Definition**:  
Cross-entropy quantifies the difference between two probability distributions $P$ (true distribution) and $Q$ (predicted distribution) over the same set of events $\{x_1, x_2, \dots, x_n\}$. It is defined as:  
$$H(P, Q) = -\sum_{i=1}^n p_i \log_2 q_i$$  
where $p_i$ and $q_i$ are the probabilities assigned to event $x_i$ by distributions $P$ and $Q$, respectively.

**Intuition**:  
- Cross-entropy measures how well the predicted distribution $Q$ approximates the true distribution $P$.  
- If $Q = P$, the cross-entropy equals the [[Shannon Entropy]] $H(P)$, representing the minimum encoding cost.  
- Larger differences between $P$ and $Q$ increase the cross-entropy, signifying greater inefficiency in using $Q$ to encode $P$.  

**Key Properties**:  
1. **Non-Negativity**:  
   $$H(P, Q) \geq H(P)$$  
   Equality occurs only if $P = Q$.  

2. **Relation to Shannon Entropy**:  
   $$H(P, Q) = H(P) + D_{\text{KL}}(P || Q)$$  
   where $D_{\text{KL}}(P || Q)$ is the Kullback-Leibler divergence, measuring the extra cost of encoding $P$ using $Q$.  

3. **Logarithm Base**:  
   - Base-2 logarithms yield entropy in bits.  
   - Natural logarithms (base $e$) give entropy in nats.

**Applications**:  
1. **Machine Learning**:  
   - Used as a loss function for classification tasks, especially when predictions are probabilities (e.g., softmax outputs).  
   - Binary cross-entropy for binary classification:  
     $$H(P, Q) = -\frac{1}{m} \sum_{i=1}^m \left[y_i \log(q_i) + (1-y_i) \log(1-q_i)\right]$$  
   - Categorical cross-entropy for multi-class classification:  
     $$H(P, Q) = -\frac{1}{m} \sum_{i=1}^m \sum_{j=1}^n y_{ij} \log(q_{ij})$$  
     where $y_{ij}$ is the one-hot encoded true label, and $q_{ij}$ is the predicted probability for class $j$.  

2. **Information Theory**:  
   - Measuring the efficiency of coding when approximating one distribution by another.  

**Interpretation in Optimization**:  
Minimizing cross-entropy aligns the predicted probabilities $Q$ with the true probabilities $P$, leading to better classification or approximation.