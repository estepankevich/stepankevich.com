---
categories:
  - "[[Linear algebra]]"
  - "[[Theorem]]"
created: 2024-11-24 13:09
updated: 2024-12-04 17:33
---
### **Statement**
The **Eckart-Young Theorem** provides the optimal low-rank approximation of a matrix in terms of the [[Singular Value Decomposition (SVD)]]. It states:

Let $A \in \mathbb{R}^{m \times n}$ with singular value decomposition $A = U \Sigma V^T$, where $\Sigma = \text{diag}(\sigma_1, \sigma_2, \ldots, \sigma_r)$ is the diagonal matrix of singular values. For any $k \leq r$, the rank-$k$ approximation $A_k$ that minimizes the [[Frobenius Norm]] or [[Spectral Norm]] of the error satisfies:
$$
A_k = \sum_{i=1}^k \sigma_i \mathbf{u}_i \mathbf{v}_i^T,
$$
where $\mathbf{u}_i$ and $\mathbf{v}_i$ are the $i$th left and right singular vectors, respectively.

Equivalently:
$$
A_k = U_k \Sigma_k V_k^T,
$$
where $U_k$, $\Sigma_k$, and $V_k$ are obtained by truncating $U$, $\Sigma$, and $V$ to their first $k$ components.

### **Optimality**
1. **Frobenius Norm**:  
   The rank-$k$ approximation $A_k$ minimizes the Frobenius norm of the error:
   $$
   \|A - A_k\|_F = \min_{\text{rank}(B) \leq k} \|A - B\|_F.
   $$

2. **Spectral Norm**:  
   $A_k$ also minimizes the spectral norm of the error:
   $$
   \|A - A_k\|_2 = \min_{\text{rank}(B) \leq k} \|A - B\|_2.
   $$