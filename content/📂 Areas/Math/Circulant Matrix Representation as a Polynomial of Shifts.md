---
categories:
  - "[[Linear algebra]]"
  - "[[Theorem]]"
created: 2024-11-30 16:21
updated: 2024-12-04 17:01
---
A [[Circulant matrix]] can be expressed as a polynomial in the **shift matrix** $S$, where the shift matrix is defined as:
$$
S = \begin{bmatrix}
0 & 1 & 0 & \cdots & 0 \\
0 & 0 & 1 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & 0 & 0 & \cdots & 0
\end{bmatrix}.
$$
The matrix $S$ cyclically shifts the entries of a vector downwards by one position.

For a vector $\mathbf{c} = [c_0, c_1, \ldots, c_{n-1}]$, the circulant matrix $C$ can be written as:
$$
C = c_0 I + c_1 S + c_2 S^2 + \cdots + c_{n-1} S^{n-1},
$$
where $I$ is the identity matrix.

### **Intuition**
The shift matrix $S$ generates the cyclic structure of the circulant matrix by shifting elements, while the coefficients $c_k$ determine the contributions of each shift. The expression $C = p(S)$, where $p(x) = \sum_{k=0}^{n-1} c_k x^k$, highlights that circulant matrices can be viewed as polynomial matrices.

### **Key Properties**
1. **Cyclic Structure from $S$**:  
   Successive powers of $S$ cyclically shift a vector:
   $$
   S \begin{bmatrix} a_0 \\ a_1 \\ \vdots \\ a_{n-1} \end{bmatrix} = \begin{bmatrix} a_{n-1} \\ a_0 \\ \vdots \\ a_{n-2} \end{bmatrix}.
   $$

2. **Diagonalization via [[Fourier Matrix]]**:  
   The eigenvalues of $C$ can be derived from the polynomial $p(x)$ evaluated at the roots of unity, i.e., $\omega^k = e^{-2\pi i k / n}$ for $k = 0, 1, \ldots, n-1$.

3. **Efficient Computation**:  
   Using the shift matrix representation, multiplication with $C$ corresponds to evaluating the polynomial $p(S)$, which can be efficiently implemented using fast matrix-vector products.

### **Example**
For $\mathbf{c} = [1, 2, 3]$, the circulant matrix is:
$$
C = \begin{bmatrix}
1 & 2 & 3 \\
3 & 1 & 2 \\
2 & 3 & 1
\end{bmatrix}.
$$
The shift matrix is:
$$
S = \begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 0 & 0
\end{bmatrix}.
$$
Thus, $C$ can be expressed as:
$$
C = 1 \cdot I + 2 \cdot S + 3 \cdot S^2.
$$