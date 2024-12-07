---
categories:
  - "[[Linear algebra]]"
  - "[[Algorithm]]"
created: 2024-11-25 17:50
updated: 2024-12-07 10:56
---
### **Overview**
The **QR algorithm with shifts** is an iterative method to compute the eigenvalues of a matrix $A$. Shifts improve the convergence speed of the QR algorithm by accelerating the reduction of $A$ to an upper triangular (or nearly diagonal) form, from which eigenvalues can be directly extracted.

### **Algorithm Steps**

#### 1. **Input**
   - Matrix $A \in \mathbb{R}^{n \times n}$ (assume $A$ is real and square).
#### 2. **Shifting Strategy**
   - At each iteration, choose a shift $\mu_k$, typically close to an eigenvalue of $A$. Common choices:
     - **Rayleigh quotient shift**: $\mu_k = A_{nn}$ (last diagonal element of $A$).
     - **Wilkinson shift**: A more sophisticated choice using eigenvalue approximation of a $2 \times 2$ submatrix.
#### 3. **Iterative QR Factorization**
   1. Subtract the shift:
      $$
      A_k - \mu_k I = Q_k R_k,
      $$
      where $Q_k$ is orthogonal and $R_k$ is upper triangular (QR factorization).

   2. Update the matrix:
      $$
      A_{k+1} = R_k Q_k + \mu_k I.
      $$
   3. Repeat until $A_k$ converges to a nearly diagonal matrix.

#### 4. **Output**
   - The diagonal entries of the final matrix are the eigenvalues of $A$.

### **Key Properties**
1. **Convergence**:
   - Shifts significantly accelerate convergence, especially for matrices with distinct eigenvalues.
   - The Wilkinson shift is effective for matrices with clustered eigenvalues.

2. **Complexity**:
   - Each QR iteration with shifts costs $O(n^3)$ for dense matrices.
   - The number of iterations depends on the separation of eigenvalues.

3. **Reduction to Hessenberg Form**:
   - Before applying the QR algorithm, $A$ is typically reduced to Hessenberg form (upper triangular except for the first subdiagonal) in $O(n^3)$. This does not affect eigenvalues but improves computational efficiency.

---

### **Example**

#### **Matrix**:
$$
A = \begin{bmatrix}
6 & 2 & 1 \\
2 & 3 & 1 \\
1 & 1 & 1
\end{bmatrix}.
$$

#### **Wilkinson Shift (First Iteration)**:
1. Compute $\mu_0$: Use the last $2 \times 2$ submatrix:
   $$
   A_{22} = \begin{bmatrix}
   3 & 1 \\
   1 & 1
   \end{bmatrix}.
   $$
   Its eigenvalues are:
   $$
   \lambda = \frac{3 + 1 \pm \sqrt{(3 - 1)^2 + 4}}{2} = 3.618, 0.382.
   $$
   Choose $\mu_0 = 3.618$ (closer to the largest eigenvalue).

2. Perform QR factorization:
   $$
   A_0 - \mu_0 I = Q_0 R_0,
   $$
   where $Q_0$ is orthogonal, and $R_0$ is upper triangular.

3. Update:
   $$
   A_1 = R_0 Q_0 + \mu_0 I.
   $$

4. Repeat with updated $A_1$.