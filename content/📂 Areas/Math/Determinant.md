---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-11-21 19:43
updated: 2024-11-23 15:10
---
**Definition**  
The determinant of a square [[Matrix]] $A \in \mathbb{R}^{n \times n}$, denoted $\det(A)$ or $|A|$, is a scalar value that encodes certain properties of the matrix, such as whether it is invertible. Formally, for $A = [a_{ij}]$, the determinant is defined recursively:  
- For $n=1$, $\det(A) = a_{11}$.  
- For $n > 1$,  
  $$\det(A) = \sum_{j=1}^n (-1)^{1+j} a_{1j} \det(A_{1j}),$$  
  where $A_{1j}$ is the $(n-1) \times (n-1)$ submatrix obtained by removing the first row and $j$-th column of $A$.  

**Intuition**  
The determinant measures the "scaling factor" of the transformation represented by the matrix. A matrix with a determinant of $0$ represents a transformation that collapses space (e.g., maps a 2D plane to a line or a point), meaning the matrix is not invertible.  

**Key Properties**  
1. **Invertibility**: $A$ is invertible if and only if $\det(A) \neq 0$.  
2. **Multiplicative Property**: $\det(AB) = \det(A)\det(B)$.  
3. **Transposition**: $\det(A^T) = \det(A)$.  
4. **Row Operations**:  
   - Swapping two rows changes the sign of the determinant.  
   - Multiplying a row by a scalar $c$ multiplies the determinant by $c$.  
   - Adding a scalar multiple of one row to another does not change the determinant.  
5. **Diagonal Matrices**: For a diagonal or triangular matrix, $\det(A) = \prod_{i=1}^n a_{ii}$.  

**Applications**  
- **[[Matrix Inversion]]**: $\det(A)$ is used in the computation of the inverse via the adjugate formula: $A^{-1} = \frac{\text{adj}(A)}{\det(A)}$.  
- **[[Eigenvalues and eigenvectors]]**: The determinant of $A - \lambda I$ (characteristic polynomial) determines the eigenvalues of $A$.  
- **Volume Scaling**: $\det(A)$ gives the scaling factor of the volume of a parallelepiped defined by the column vectors of $A$.  
- **System of Linear Equation**: A system $Ax = b$ has a unique solution if $\det(A) \neq 0$.  

**Examples**  
1. For $A = \begin{bmatrix} 3 & 8 \\ 4 & 6 \end{bmatrix}$,  
   $$\det(A) = (3)(6) - (8)(4) = -14.$$  
2. For $A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{bmatrix}$,  
   $$\det(A) = 1 \cdot \det\begin{bmatrix} 1 & 4 \\ 6 & 0 \end{bmatrix} - 2 \cdot \det\begin{bmatrix} 0 & 4 \\ 5 & 0 \end{bmatrix} + 3 \cdot \det\begin{bmatrix} 0 & 1 \\ 5 & 6 \end{bmatrix},$$  
   leading to $\det(A) = 1(-24) - 2(-20) + 3(-5) = -24 + 40 - 15 = 1$.  