---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-11-25 18:09
updated: 2024-12-07 11:40
---
### **Definition**
A **Heisenberg matrix** is an upper triangular matrix of size $n \times n$, where all the entries below the main diagonal are zero, the main diagonal contains all ones, and the first subdiagonal contains arbitrary values. It is often used in mathematical physics and numerical linear algebra.

Formally, the Heisenberg matrix $H \in \mathbb{R}^{n \times n}$ is defined as:
$$
H_{ij} =
\begin{cases}
1, & \text{if } i = j, \text{ (main diagonal)} \\
a_{i}, & \text{if } j = i + 1, \text{ (first subdiagonal)} \\
0, & \text{if } j < i, \text{ (below diagonal)} \\
1, & \text{otherwise (above the first subdiagonal).}
\end{cases}
$$

### **Matrix Form**
For $n = 4$, a typical Heisenberg matrix looks like:
$$
H =
\begin{bmatrix}
1 & 1 & 1 & 1 \\
a_1 & 1 & 1 & 1 \\
0 & a_2 & 1 & 1 \\
0 & 0 & a_3 & 1
\end{bmatrix}.
$$

### **Key Properties**
1. **Upper Triangular Structure**:  
   $H$ is an upper triangular matrix, meaning all entries below the diagonal are zero.

2. **Determinant**:  
   The determinant of $H$ is the product of its diagonal elements. Since all diagonal elements are $1$, we have:
   $$
   \det(H) = 1.
   $$

3. **Invertibility**:  
   The Heisenberg matrix is always invertible because its determinant is nonzero.

4. **Inverse Structure**:  
   The inverse of a Heisenberg matrix is also an upper triangular matrix with the same sparsity structure.

5. **Special Case**:  
   If all the $a_i = 0$, $H$ reduces to an identity matrix.

### **Applications**
- **Quantum Mechanics**:  
  The Heisenberg matrix is used to study the Heisenberg uncertainty principle and other properties in quantum systems.
  
- **Linear Algebra**:  
  It is used in numerical methods to construct test cases for algorithms involving triangular matrices.

- **Physics Simulations**:  
  Represents interaction matrices in specific systems with structured sparsity.

### **Example**

#### **Matrix Construction**
For $n = 3$ and $a_1 = 2, a_2 = 3$:
$$
H =
\begin{bmatrix}
1 & 1 & 1 \\
2 & 1 & 1 \\
0 & 3 & 1
\end{bmatrix}.
$$

#### **Inverse**
The inverse of $H$ can be computed explicitly using its triangular structure:
$$
H^{-1} =
\begin{bmatrix}
1 & -1 & 0 \\
-2 & 1 & -1 \\
0 & -3 & 1
\end{bmatrix}.
$$