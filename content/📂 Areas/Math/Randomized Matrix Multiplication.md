---
categories:
  - "[[Linear algebra]]"
  - "[[Algorithm]]"
created: 2024-11-25 18:36
updated: 2024-12-07 13:02
---
### **Definition**
Randomized matrix multiplication approximates the product of two large matrices $A \in \mathbb{R}^{m \times n}$ and $B \in \mathbb{R}^{n \times p}$ by sampling columns (or rows) of $A$ and rows (or columns) of $B$ according to a probability distribution. This reduces the computational cost while maintaining an acceptable approximation error.

The aim is to compute an approximation $\widetilde{C}$ of the exact product $C = AB$:
$$
C \approx \widetilde{C}.
$$

### **Steps in Randomized Matrix Multiplication**

1. **Input**:  
   Matrices $A \in \mathbb{R}^{m \times n}$ and $B \in \mathbb{R}^{n \times p}$, and the number of samples $k \ll n$.

2. **Probability Distribution**:  
   Define probabilities $p_i$ for selecting the $i$-th column of $A$ and the corresponding $i$-th row of $B$:
   $$
   p_i = \frac{\|A_{:, i}\|_2 \cdot \|B_{i, :}\|_2}{\sum_{j=1}^n \|A_{:, j}\|_2 \cdot \|B_{j, :}\|_2}.
   $$

3. **Sampling**:  
   Sample $k$ indices $\{i_1, i_2, \dots, i_k\}$ from $\{1, 2, \dots, n\}$ according to $p_i$ (with replacement).

4. **Rescale**:  
   Form reduced matrices $\widetilde{A}$ and $\widetilde{B}$ by selecting and rescaling the sampled columns of $A$ and rows of $B$:
   $$
   \widetilde{A}_{:, j} = \frac{A_{:, i_j}}{\sqrt{k p_{i_j}}}, \quad \widetilde{B}_{j, :} = \frac{B_{i_j, :}}{\sqrt{k p_{i_j}}}.
   $$

5. **Approximate Product**:  
   Compute the approximation:
   $$
   \widetilde{C} = \widetilde{A} \widetilde{B}.
   $$

### **Key Properties**
1. **Reduction in Complexity**:
   - Exact multiplication costs $O(mnp)$.
   - Randomized multiplication costs $O(k(m + p))$, where $k \ll n$.

2. **Error Bounds**:
   The [[Frobenius Norm]] error is bounded with high probability:
   $$
   \|C - \widetilde{C}\|_F \leq \epsilon \|A\|_F \|B\|_F,
   $$
   for $\epsilon \in (0, 1)$, given enough samples $k$.

3. **Trade-Off**:
   Increasing $k$ improves the accuracy of $\widetilde{C}$ but increases computational cost.

4. **Unbiased Estimation**:
   The expectation of the approximation is equal to the exact product:
   $$
   \mathbb{E}[\widetilde{C}] = C.
   $$