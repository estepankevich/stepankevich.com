---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-11-26 16:17
updated: 2024-12-07 12:31
---
### **Definition**
A **Vandermonde matrix** is a structured matrix where each row is a geometric progression of the corresponding elements from a given sequence. Given a sequence of scalars $\{x_1, x_2, \ldots, x_n\}$, the Vandermonde matrix $V$ is defined as:
$$
V = 
\begin{bmatrix}
1 & x_1 & x_1^2 & \cdots & x_1^{n-1} \\
1 & x_2 & x_2^2 & \cdots & x_2^{n-1} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_m & x_m^2 & \cdots & x_m^{n-1}
\end{bmatrix}.
$$
Here, $V$ is an $m \times n$ matrix.

### **Special Cases**
1. **Square Vandermonde Matrix**:  
   If $m = n$, the Vandermonde matrix is square.

2. **Transposed Vandermonde Matrix**:  
   The columns, instead of rows, can represent the powers of a sequence:
   $$
   V^T =
   \begin{bmatrix}
   1 & 1 & \cdots & 1 \\
   x_1 & x_2 & \cdots & x_n \\
   x_1^2 & x_2^2 & \cdots & x_n^2 \\
   \vdots & \vdots & \ddots & \vdots \\
   x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1}
   \end{bmatrix}.
   $$

---

### **Key Properties**
1. **Determinant (Square Case)**:  
   If $V$ is square ($m = n$), the determinant is:
   $$
   \det(V) = \prod_{1 \leq i < j \leq n} (x_j - x_i),
   $$
   which is nonzero if and only if all $x_i$ are distinct.

2. **Rank**:  
   - The rank of a Vandermonde matrix $V$ is equal to the number of distinct $x_i$.
   - For distinct $x_i$, the matrix is full rank.

3. **Conditioning**:  
   - Vandermonde matrices are often ill-conditioned for large $n$ due to large variations in the powers of $x_i$.

4. **Polynomial Interpolation**:  
   A Vandermonde matrix naturally arises in polynomial interpolation. Solving $V \mathbf{c} = \mathbf{y}$ finds the coefficients $\mathbf{c}$ of the polynomial that passes through the points $(x_i, y_i)$.

---

### **Applications**
1. **Polynomial Interpolation**:  
   In Lagrange or Newton interpolation, Vandermonde matrices provide a basis to represent interpolation polynomials.

2. **[[Signal Processing]]**:  
   Vandermonde matrices are used in filter design and spectral analysis.

3. **System Identification**:  
   Appear in least-squares fitting of data to polynomial models.

4. **Numerical Linear Algebra**:  
   Serve as examples of structured matrices for studying algorithms.

---

### **Examples**

#### **Example 1: Small Vandermonde Matrix**
Given $\{x_1, x_2, x_3\} = \{1, 2, 3\}$, the Vandermonde matrix is:
$$
V = 
\begin{bmatrix}
1 & 1 & 1 \\
1 & 2 & 4 \\
1 & 3 & 9
\end{bmatrix}.
$$

#### **Example 2: Determinant**
For the same $V$, compute:
$$
\det(V) = (x_2 - x_1)(x_3 - x_1)(x_3 - x_2) = (2-1)(3-1)(3-2) = 1 \cdot 2 \cdot 1 = 2.
$$

#### **Example 3: Polynomial Interpolation**
To find a quadratic polynomial $p(x) = c_0 + c_1 x + c_2 x^2$ passing through the points:
$$
(x_1, y_1) = (1, 2), \quad (x_2, y_2) = (2, 3), \quad (x_3, y_3) = (3, 5),
$$
solve:
$$
\begin{bmatrix}
1 & 1 & 1 \\
1 & 2 & 4 \\
1 & 3 & 9
\end{bmatrix}
\begin{bmatrix}
c_0 \\ c_1 \\ c_2
\end{bmatrix}
=
\begin{bmatrix}
2 \\ 3 \\ 5
\end{bmatrix}.
$$

Solution:
$$
\begin{bmatrix}
c_0 \\ c_1 \\ c_2
\end{bmatrix}
=
\begin{bmatrix}
1 \\ 0.5 \\ 0.5
\end{bmatrix}.
$$
Thus, the polynomial is:
$$
p(x) = 1 + 0.5x + 0.5x^2.
$$