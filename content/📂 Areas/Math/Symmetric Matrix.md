---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-04-02 20:44
updated: 2024-11-23 16:42
aliases: 
---
**Definition**  
A [[Matrix]] $A \in \mathbb{R}^{n \times n}$ is called a symmetric matrix if $A = A^\top$, where $A^\top$ denotes the transpose of $A$. Formally:  
$$a_{ij} = a_{ji} \quad \forall i, j \in \{1, \dots, n\}.$$

**Intuition**  
A symmetric matrix is one where the entries are mirrored across the diagonal, meaning the upper triangular portion is a reflection of the lower triangular portion.

**Key Properties**  
1. **Real [[Eigenvalues and eigenvectors|Eigenvalues]]**: All eigenvalues of a symmetric matrix are real.  
2. **Orthogonal [[Eigenvalues and eigenvectors|Eigenvectors]]**: The eigenvectors corresponding to distinct eigenvalues of a symmetric matrix are orthogonal.  
3. **Diagonalizability**: Symmetric matrices are diagonalizable via an orthogonal matrix, i.e., $A = Q \Lambda Q^\top$, where $Q$ is [[Orthonormal matrix|Orthogonal matrix]] and $\Lambda$ is diagonal.  
4. [[Positive Semi-Definite Matrix]]: If all eigenvalues of $A$ are non-negative, $A$ is positive semidefinite.  
5. **Closure Under Addition and Scalar Multiplication**: The sum of two symmetric matrices and the scalar multiple of a symmetric matrix are symmetric.  

**Applications**  
- **Quadratic Forms**: Symmetric matrices represent quadratic forms, which appear in optimization and geometry.  
- **Spectral Theorems**: Used in principal component analysis ([[PCA]]) and other [[Eigendecomposition]]-based methods.  
