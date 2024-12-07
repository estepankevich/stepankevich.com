---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
  - "[[Signal processing]]"
created: 2024-11-30 18:42
updated: 2024-12-07 11:14
---
### **Definition**
The **Fourier matrix** is a [[Unitary Matrix]] that represents the [[Discrete Fourier transform (DFT)]] in matrix form. For a sequence of length $N$, the Fourier matrix $F \in \mathbb{C}^{N \times N}$ is defined as:
$$
F_{jk} = \omega^{jk}, \quad \text{where } \omega = e^{-i \frac{2\pi}{N}} \text{ is the primitive } N\text{-th root of unity},
$$
and $j, k = 0, 1, \ldots, N-1$.

---

### **Matrix Representation**
The Fourier matrix $F$ has the following structure:
$$
F = \frac{1}{\sqrt{N}}
\begin{bmatrix}
1 & 1 & 1 & \cdots & 1 \\
1 & \omega & \omega^2 & \cdots & \omega^{N-1} \\
1 & \omega^2 & \omega^4 & \cdots & \omega^{2(N-1)} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & \omega^{N-1} & \omega^{2(N-1)} & \cdots & \omega^{(N-1)(N-1)}
\end{bmatrix},
$$
where $\omega = e^{-i \frac{2\pi}{N}}$.

---

### **Key Properties**
1. **[[Unitary Matrix|Unitary]]**:  
   The Fourier matrix is unitary:
   $$
   F^* F = F F^* = I,
   $$
   where $F^*$ is the conjugate transpose of $F$, and $I$ is the identity matrix.

2. **[[Matrix Inversion|Inverse]]**:  
   The inverse of the Fourier matrix is:
   $$
   F^{-1} = F^* = \frac{1}{\sqrt{N}} \begin{bmatrix}
   1 & 1 & 1 & \cdots & 1 \\
   1 & \overline{\omega} & \overline{\omega}^2 & \cdots & \overline{\omega}^{N-1} \\
   1 & \overline{\omega}^2 & \overline{\omega}^4 & \cdots & \overline{\omega}^{2(N-1)} \\
   \vdots & \vdots & \vdots & \ddots & \vdots \\
   1 & \overline{\omega}^{N-1} & \overline{\omega}^{2(N-1)} & \cdots & \overline{\omega}^{(N-1)(N-1)}
   \end{bmatrix},
   $$
   where $\overline{\omega} = e^{i \frac{2\pi}{N}}$.

3. **Eigenvalues**:  
   The eigenvalues of $F$ are roots of unity.

4. **Symmetry**:  
   $F$ is symmetric in the sense that the $(j, k)$-th element is determined entirely by $j \cdot k \mod N$.

5. **Periodicity**:  
   The entries of $F$ are periodic with period $N$.

---

### **Applications**
1. **Discrete Fourier Transform (DFT)**:  
   The DFT can be written in matrix form using the Fourier matrix:
   $$
   \mathbf{X} = F \mathbf{x},
   $$
   where $\mathbf{x}$ is the input signal, and $\mathbf{X}$ is its frequency-domain representation.

2. **Inverse DFT**:  
   The inverse DFT is:
   $$
   \mathbf{x} = F^* \mathbf{X}.
   $$

---

### **Example**

#### **Fourier Matrix for $N = 4$**:
The primitive $4$th root of unity is $\omega = e^{-i \frac{2\pi}{4}} = i$. The Fourier matrix is:
$$
F = \frac{1}{2}
\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & -i & -1 & i \\
1 & -1 & 1 & -1 \\
1 & i & -1 & -i
\end{bmatrix}.
$$

#### **Using the Fourier Matrix for DFT**:
For $\mathbf{x} = [1, 2, 3, 4]^T$, the DFT is:
$$
\mathbf{X} = F \mathbf{x} = \frac{1}{2}
\begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & -i & -1 & i \\
1 & -1 & 1 & -1 \\
1 & i & -1 & -i
\end{bmatrix}
\begin{bmatrix}
1 \\ 2 \\ 3 \\ 4
\end{bmatrix}.
$$
Result:
$$
\mathbf{X} = \begin{bmatrix}
10 \\ -2 + 2i \\ -2 \\ -2 - 2i
\end{bmatrix}.
$$