---
categories:
  - "[[Linear algebra]]"
  - "[[Method]]"
created: 2024-11-25 20:32
updated: 2024-12-07 11:38
---
### **Statement**
The **Sherman-Morrison-Woodbury formula** provides an efficient way to compute the [[Matrix Inversion]] that has been modified by a low-rank update. Specifically, for an invertible matrix $A \in \mathbb{R}^{n \times n}$ and matrices $U \in \mathbb{R}^{n \times k}$ and $V \in \mathbb{R}^{k \times n}$, the formula is:
$$
(A + UV)^{-1} = A^{-1} - A^{-1} U \left(I_k + V A^{-1} U \right)^{-1} V A^{-1},
$$
where:
- $A$ is an invertible $n \times n$ matrix,
- $U$ and $V$ represent the rank-$k$ modification,
- $I_k$ is the $k \times k$ identity matrix.

### **Special Cases**

1. **Sherman-Morrison Formula**:  
   When $U \in \mathbb{R}^n$ and $V \in \mathbb{R}^n$ are vectors (i.e., $k = 1$), the formula reduces to:
   $$
   (A + uv^T)^{-1} = A^{-1} - \frac{A^{-1} u v^T A^{-1}}{1 + v^T A^{-1} u}.
   $$

2. **Woodbury Identity**:  
   The general formula is also referred to as the **Woodbury matrix identity**, especially when $U$ and $V$ are rectangular matrices.

---

### **Applications**
1. **Efficient Updates**:  
   The formula is widely used in numerical linear algebra to compute the inverse of a matrix after a low-rank update without recomputing the entire inverse. For example in [[Kalman Filter]]

2. **[[Gaussian Process]]**:  
   Used in kernel methods to efficiently update [[Covariance Matrix]].

3. **Optimization**:  
   Employed in iterative algorithms where [[Hessian matrix]] are updated with low-rank modifications.

4. **Machine Learning**:  
   Useful in regularized regression models such as [[Ridge Regression]] and in Bayesian inference.

---

### **Derivation**
Starting from the matrix identity:
$$
(A + UV) X = I,
$$
assume the inverse exists and set $X = (A + UV)^{-1}$. Pre-multiply by $A^{-1}$:
$$
X = A^{-1} - A^{-1} U Y V A^{-1},
$$
where $Y = (I_k + V A^{-1} U)^{-1}$ is derived by ensuring consistency with the equation:
$$
(I_k + V A^{-1} U) Y = I_k.
$$

---

### **Example**

#### **Given:**
$$
A = \begin{bmatrix} 4 & 1 \\ 1 & 3 \end{bmatrix}, \quad U = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad V = \begin{bmatrix} 1 & 0 \end{bmatrix}.
$$

#### **Step 1: Compute $A^{-1}$**
$$
A^{-1} = \frac{1}{11} \begin{bmatrix} 3 & -1 \\ -1 & 4 \end{bmatrix}.
$$

#### **Step 2: Apply Sherman-Morrison-Woodbury**
Here $UV = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$. Compute:
1. $V A^{-1} U = \begin{bmatrix} 1 & 0 \end{bmatrix} \frac{1}{11} \begin{bmatrix} 3 \\ -1 \end{bmatrix} = \frac{3}{11}$.
2. $I_k + V A^{-1} U = 1 + \frac{3}{11} = \frac{14}{11}$.
3. Inverse term: $\left(I_k + V A^{-1} U \right)^{-1} = \frac{11}{14}$.

The update becomes:
$$
(A + UV)^{-1} = A^{-1} - A^{-1} U \left(I_k + V A^{-1} U \right)^{-1} V A^{-1}.
$$

Plugging values:
$$
(A + UV)^{-1} = \frac{1}{11} \begin{bmatrix} 3 & -1 \\ -1 & 4 \end{bmatrix} - \frac{11}{14} \cdot \frac{1}{11} \begin{bmatrix} 3 \\ -1 \end{bmatrix} \begin{bmatrix} 1 & 0 \end{bmatrix} \frac{1}{11} \begin{bmatrix} 3 & -1 \\ -1 & 4 \end{bmatrix}.
$$

Simplify to get the final inverse.