---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-11-27 00:12
updated: 2024-12-07 13:05
---
### **Definition**
The **Rayleigh quotient** of a square matrix $A \in \mathbb{R}^{n \times n}$ and a nonzero vector $\mathbf{x} \in \mathbb{R}^n$ is defined as:
$$
R(\mathbf{x}, A) = \frac{\mathbf{x}^T A \mathbf{x}}{\mathbf{x}^T \mathbf{x}}.
$$

- **Numerator**: $\mathbf{x}^T A \mathbf{x}$ is a scalar obtained by a quadratic form of $A$ and $\mathbf{x}$.
- **Denominator**: $\mathbf{x}^T \mathbf{x} = \|\mathbf{x}\|_2^2$ is the squared Euclidean norm of $\mathbf{x}$, ensuring normalization.

---

### **Key Properties**

1. **[[Eigenvalues and eigenvectors]]**:  
   - If $\mathbf{v}$ is an eigenvector of $A$ with eigenvalue $\lambda$, then:
     $$
     R(\mathbf{v}, A) = \lambda.
     $$
   - The Rayleigh quotient evaluated at an eigenvector returns its corresponding eigenvalue.

2. **Bounds on Eigenvalues**:  
   The Rayleigh quotient provides bounds for the eigenvalues of $A$. If $A$ is symmetric:
   $$
   \lambda_{\min}(A) \leq R(\mathbf{x}, A) \leq \lambda_{\max}(A),
   $$
   where $\lambda_{\min}$ and $\lambda_{\max}$ are the smallest and largest eigenvalues of $A$, respectively.

3. **Maximization**:  
   For [[Symmetric Matrix]] $A$, the maximum value of $R(\mathbf{x}, A)$ is the largest eigenvalue, achieved when $\mathbf{x}$ is the corresponding eigenvector:
   $$
   \max_{\mathbf{x} \neq 0} R(\mathbf{x}, A) = \lambda_{\max}.
   $$

4. **Minimization**:  
   Similarly, the minimum value of $R(\mathbf{x}, A)$ is the smallest eigenvalue, achieved when $\mathbf{x}$ is the corresponding eigenvector:
   $$
   \min_{\mathbf{x} \neq 0} R(\mathbf{x}, A) = \lambda_{\min}.
   $$

5. **Symmetry and Definiteness**:  
   - For symmetric positive definite matrices, $R(\mathbf{x}, A) > 0$ for all $\mathbf{x} \neq 0$.
   - For symmetric negative definite matrices, $R(\mathbf{x}, A) < 0$ for all $\mathbf{x} \neq 0$.
