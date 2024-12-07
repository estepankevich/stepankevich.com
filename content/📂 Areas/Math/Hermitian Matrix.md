---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-04-02 20:44
updated: 2024-11-23 16:54
aliases: 
---
**Definition**  
A complex square [[Matrix]] $A \in \mathbb{C}^{n \times n}$ is called Hermitian if it is equal to its conjugate transpose, i.e.,  
$$A = A^H, \quad \text{where } A^H = \overline{A^\top}.$$  
This means that $a_{ij} = \overline{a_{ji}}$ for all $i, j$, where $\overline{z}$ denotes the complex conjugate of $z$.

**Intuition**  
A Hermitian matrix generalizes the concept of a [[Symmetric Matrix]] to the complex domain. Its elements are mirrored across the diagonal, but with complex conjugation applied.

**Key Properties**  
1. **Real Diagonal Entries**: The diagonal entries of a Hermitian matrix are always real, as $a_{ii} = \overline{a_{ii}}$.  
2. **Complex Conjugate Symmetry**: Off-diagonal entries satisfy $a_{ij} = \overline{a_{ji}}$.  
3. **Real [[Eigenvalues and eigenvectors|Eigenvalues]]**: All eigenvalues of a Hermitian matrix are real.  
4. **Orthogonal [[Eigenvalues and eigenvectors|Eigenvectors]]**: The eigenvectors corresponding to distinct eigenvalues of a Hermitian matrix are orthogonal in the sense of the complex inner product.  
5. **Unitary Diagonalization**: A Hermitian matrix is diagonalizable by a unitary matrix, i.e., $A = U \Lambda U^H$, where $U$ is unitary ($U^H U = I$) and $\Lambda$ is diagonal.  
6. **[[Positive Semi-Definite Matrix]]**: A Hermitian matrix is positive semidefinite if all its eigenvalues are non-negative.

**Applications**  
- **[[Quantum Mechanics]]**: Hermitian matrices represent observables (e.g., operators corresponding to measurable quantities like energy).  
- **[[Signal processing]]**: Covariance matrices in signal processing are often Hermitian.  