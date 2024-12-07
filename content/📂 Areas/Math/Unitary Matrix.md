---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-12-07 11:14
updated: 2024-12-07 11:14
---
### **Definition**
A square matrix $U \in \mathbb{C}^{n \times n}$ is called a **unitary matrix** if its conjugate transpose equals its inverse:
$$
U^* U = U U^* = I,
$$
where:
- $U^*$ is the conjugate transpose of $U$ (i.e., $\overline{U}^T$, where $\overline{U}$ is the element-wise complex conjugate of $U$),
- $I$ is the $n \times n$ identity matrix.

For real matrices, a unitary matrix is equivalent to an [[Orthonormal matrix|Orthogonal matrix]]


### **Key Properties**
1. **Preservation of Norms**:  
   For any vector $\mathbf{x} \in \mathbb{C}^n$:
   $$
   \|U \mathbf{x}\|_2 = \|\mathbf{x}\|_2.
   $$

2. **Eigenvalues**:  
   The eigenvalues of a unitary matrix lie on the complex unit circle, i.e., $|\lambda| = 1$.

3. **Determinant**:  
   The determinant of a unitary matrix has absolute value 1:
   $$
   |\det(U)| = 1.
   $$

4. **Preservation of Inner Products**:  
   For any vectors $\mathbf{x}, \mathbf{y} \in \mathbb{C}^n$:
   $$
   \langle U \mathbf{x}, U \mathbf{y} \rangle = \langle \mathbf{x}, \mathbf{y} \rangle,
   $$
   where $\langle \mathbf{x}, \mathbf{y} \rangle = \mathbf{x}^* \mathbf{y}$ is the standard inner product.

5. **Inverse**:  
   The inverse of a unitary matrix is its conjugate transpose:
   $$
   U^{-1} = U^*.
   $$

6. **Stability Under Multiplication**:  
   The product of two unitary matrices is also unitary:
   $$
   U_1 U_2 \text{ is unitary if } U_1 \text{ and } U_2 \text{ are unitary.}
   $$