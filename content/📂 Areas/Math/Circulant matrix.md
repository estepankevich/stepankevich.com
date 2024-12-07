---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-11-30 16:19
updated: 2024-12-07 11:18
---
### **Definition**
A circulant matrix is a square matrix where each row is a cyclic permutation of the previous row. For a vector $\mathbf{c} = [c_0, c_1, \ldots, c_{n-1}]$, the circulant matrix $C$ is defined as:
$$
C = \begin{bmatrix}
c_0 & c_1 & c_2 & \cdots & c_{n-1} \\
c_{n-1} & c_0 & c_1 & \cdots & c_{n-2} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
c_1 & c_2 & c_3 & \cdots & c_0
\end{bmatrix}.
$$

### **Intuition**
Circulant matrices are structured matrices where the entries in each row "rotate" from the previous row. They are heavily used in signal processing and computational mathematics due to their symmetry and efficient computational properties.

### **Key Properties**
1. **Toeplitz-Like Structure**:  
   A circulant matrix is a special case of a [[Toeplitz Matrix]], where entries are constant along diagonals and cyclically wrap around.

2. **Diagonalizability**:  
   Every circulant matrix is diagonalizable using the [[Discrete Fourier transform (DFT)]]. Specifically:
   $$
   C = F^* \Lambda F,
   $$
   where $F$ is the [[Fourier Matrix]], $F^*$ is its conjugate transpose, and $\Lambda$ is a diagonal matrix of eigenvalues.

3. **[[Eigenvalues and eigenvectors|Eigenvalues]]**:  
   The eigenvalues of a circulant matrix $C$ are given by:
   $$
   \lambda_k = \sum_{j=0}^{n-1} c_j \omega^{kj}, \quad k = 0, 1, \ldots, n-1,
   $$
   where $\omega = e^{-2\pi i / n}$ is the $n$ th root of unity.

4. **Matrix Multiplication Efficiency**:  
   Multiplication with a circulant matrix can be computed in $O(n \log n)$ time using the Fast Fourier Transform (FFT).

5. **[[Matrix Inversion]]**:  
   If a circulant matrix $C$ is invertible, its inverse is also circulant.

### **Applications**
1. **[[Signal processing]]**:  
   Efficient implementation of linear convolution using the FFT.

2. **Numerical Linear Algebra**:  
   Used in preconditioning and solving structured linear systems.

3. **Graph Theory**:  
   Represent adjacency matrices of certain structured graphs.

4. **Image Processing**:  
   Convolution operations in 2D images are efficiently modeled using circulant matrices.
