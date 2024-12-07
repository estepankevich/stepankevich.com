---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-11-30 17:53
updated: 2024-12-07 12:29
---
### **Definition**
A **Toeplitz matrix** is a matrix in which each descending diagonal from left to right is constant. Formally, a Toeplitz matrix $T \in \mathbb{R}^{m \times n}$ satisfies:
$$
T_{ij} = T_{i+1, j+1}, \quad \forall i, j \quad \text{(elements depend only on } j - i\text{)}.
$$
For a Toeplitz matrix, the entries can be defined using the first row and the first column.

---

### **Example**
#### **General Form**:
A Toeplitz matrix has the form:
$$
T = 
\begin{bmatrix}
t_0 & t_1 & t_2 & \cdots & t_{n-1} \\
t_{-1} & t_0 & t_1 & \cdots & t_{n-2} \\
t_{-2} & t_{-1} & t_0 & \cdots & t_{n-3} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
t_{-m+1} & t_{-m+2} & t_{-m+3} & \cdots & t_0
\end{bmatrix}.
$$

#### **Specific Example**:
For $m = n = 4$, let the first row be $\{1, 2, 3, 4\}$ and the first column be $\{1, 5, 6, 7\}$:
$$
T = 
\begin{bmatrix}
1 & 2 & 3 & 4 \\
5 & 1 & 2 & 3 \\
6 & 5 & 1 & 2 \\
7 & 6 & 5 & 1
\end{bmatrix}.
$$

---

### **Key Properties**
1. **Storage Efficiency**:  
   A Toeplitz matrix can be stored with $m + n - 1$ elements, rather than $m \times n$, because it is fully defined by its first row and column.

2. **Matrix-Vector Multiplication**:  
   Multiplying a Toeplitz matrix by a vector can be performed efficiently using the [[Fast Fourier Transform (FFT)]], in $O(n \log n)$ time for $n \times n$ matrices.

3. **Circulant Relation**:  
   If the first row of a Toeplitz matrix is extended cyclically, it becomes a [[Circulant matrix]], which is a special case of a Toeplitz matrix.

4. **Structure in [[Linear Systems]]**:  
   Linear systems involving Toeplitz matrices, $T \mathbf{x} = \mathbf{b}$, can be solved efficiently using specialized algorithms like Levinson recursion in $O(n^2)$ time.

5. **Symmetry**:
   - If the first row and first column satisfy $t_{-k} = t_k$, the Toeplitz matrix is symmetric.

---

### **Applications**
1. **[[Signal Processing]]**:  
   Toeplitz matrices arise in convolution operations and are used in autocorrelation and time-series analysis.

2. **Numerical Linear Algebra**:  
   Efficient algorithms leverage Toeplitz structure to speed up operations like matrix-vector products and eigenvalue computations.

3. **Control Theory**:  
   Appears in solving control and system identification problems.

4. **PDEs and Integral Equations**:  
   Arise in discretization of problems with translation-invariant kernels.

### **Relation to Circulant Matrices**
If the Toeplitz matrix is made periodic by assuming $t_{-k} = t_{n-k}$, it becomes a **circulant matrix**, which has diagonalization properties using the [[Discrete Fourier Transform (DFT)]]. This property is exploited in solving convolution problems.