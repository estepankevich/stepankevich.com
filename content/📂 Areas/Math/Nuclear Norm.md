---
categories:
  - "[[Linear algebra]]"
  - "[[Norm]]"
created: 2024-12-07 12:18
updated: 2024-12-07 12:18
aliases:
  - Trace Norm
---
### **Definition**
The **nuclear norm** of a matrix $A \in \mathbb{R}^{m \times n}$ (also called the **trace norm**) is the sum of its singular values:
$$
\|A\|_* = \sum_{i=1}^{r} \sigma_i,
$$
where:
- $\sigma_i$ are the singular values of $A$ from the [[Singular Value Decomposition (SVD)]], $A = U \Sigma V^T$,
- $r = \min(m, n)$.

The nuclear norm can be viewed as the matrix equivalent of the $\ell_1$ norm for vectors, promoting low-rank approximations and sparsity in singular values.

### **Key Properties**
1. **Non-Negativity**:  
   $\|A\|_* \geq 0$, with equality if and only if $A = 0$.

2. **Relation to [[Frobenius Norm]]**:  
   The nuclear norm is always less than or equal to the Frobenius norm:
   $$
   \|A\|_* \leq \|A\|_F.
   $$

3. **Dual Norm**:  
   The nuclear norm is the dual norm of the [[Spectral Norm]]
   :
   $$
   \|A\|_* = \sup_{\|B\|_2 \leq 1} |\text{tr}(A^T B)|,
   $$
   where $\|B\|_2$ is the spectral norm.

4. **Unitary Invariance**:  
   The nuclear norm is invariant under orthogonal (or unitary) transformations:
   $$
   \|A\|_* = \|U A V^T\|_*,
   $$
   for any orthogonal/unitary matrices $U$ and $V$.

5. **Convexity**:  
   The nuclear norm is a [[Convex Function]], making it useful for optimization problems.

---

### **Applications**
1. **Low-Rank Matrix Approximation**:  
   Minimizing the nuclear norm promotes low-rank solutions in problems like collaborative filtering and data compression.

2. **Compressed Sensing**:  
   Nuclear norm minimization is used for matrix completion problems, such as recovering missing entries in a matrix.

3. **Robust [[PCA]]**:  
   Separates a low-rank matrix from sparse noise in data analysis.

4. **Control Systems**:  
   Appears in optimal control problems for minimizing system ranks.

---

### **Examples**

#### **Example 1: Full Rank Matrix**
Let:
$$
A = \begin{bmatrix} 3 & 0 \\ 0 & 4 \end{bmatrix}.
$$
The singular values of $A$ are $\sigma_1 = 4$, $\sigma_2 = 3$.  
The nuclear norm:
$$
\|A\|_* = \sigma_1 + \sigma_2 = 4 + 3 = 7.
$$

#### **Example 2: Low-Rank Matrix**
Let:
$$
A = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}.
$$
The SVD of $A$ gives singular values $\sigma_1 = 2, \sigma_2 = 0$ (rank 1).  
The nuclear norm:
$$
\|A\|_* = \sigma_1 + \sigma_2 = 2 + 0 = 2.
$$

#### **Example 3: Relation to Frobenius Norm**
Let:
$$
A = \begin{bmatrix} 3 & 0 \\ 0 & 4 \end{bmatrix}.
$$
Frobenius norm:
$$
\|A\|_F = \sqrt{3^2 + 4^2} = 5.
$$
Nuclear norm:
$$
\|A\|_* = \sigma_1 + \sigma_2 = 7.
$$
In this case, $\|A\|_F > \|A\|_*$, consistent with the properties.
