---
categories:
  - "[[Linear algebra]]"
  - "[[Theorem]]"
created: 2024-11-21 18:12
updated: 2024-11-23 16:41
---
The **Spectral Theorem** states that for a real [[Symmetric Matrix]] $A \in \mathbb{R}^{n \times n}$ or a complex Hermitian matrix $A \in \mathbb{C}^{n \times n}$, there exists an orthonormal basis of eigenvectors such that $A$ can be diagonalized. Formally:
$$ A = Q \Lambda Q^T \quad \text{(real symmetric case)} $$
or
$$ A = Q \Lambda Q^\dagger \quad \text{(complex Hermitian case)}, $$
where:
- $Q$ is an [[Orthonormal matrix|Orthogonal matrix]] (real case) or unitary matrix (complex case) whose columns are the eigenvectors of $A$,
- $\Lambda$ is a diagonal matrix containing the eigenvalues of $A$.

For real [[Symmetric Matrix]], the eigenvalues are real; for Hermitian matrices, they are real as well.

#### **Intuition**
The Spectral Theorem reveals that symmetric (or Hermitian) matrices are structurally simple in the sense that:
1. They can be fully described by their eigenvalues and eigenvectors.
2. Their action in a vector space is equivalent to scaling along mutually perpendicular directions (eigenvectors).

#### **Key Properties**
1. **Orthogonality**: The eigenvectors corresponding to distinct eigenvalues of $A$ are orthogonal.
2. **Diagonalization**: $A$ can be expressed as $A = Q \Lambda Q^T$ (or $Q \Lambda Q^\dagger$), where $\Lambda$ contains only real eigenvalues.
3. **Decomposition**: For real symmetric matrices:
   $$ A = \sum_{i=1}^n \lambda_i q_i q_i^T, $$
   where $\lambda_i$ are eigenvalues and $q_i$ are the corresponding eigenvectors.
4. **Symmetry and Real Eigenvalues**: For real symmetric matrices, all eigenvalues are real, and the eigenvectors form an orthonormal basis of $\mathbb{R}^n$.
5. **Hermitian Case**: For complex Hermitian matrices, eigenvalues are still real, and eigenvectors form an orthonormal basis in $\mathbb{C}^n$.

#### **Applications**
1. **Principal Component Analysis ([[PCA]])**: Eigen-decomposition of the covariance matrix leverages the Spectral Theorem to identify principal directions in data.
2. **Quantum Mechanics**: Hermitian operators represent observable quantities, with real eigenvalues corresponding to measurable outcomes.
3. **[[Optimization]]**: Spectral properties help in solving quadratic forms and determining extrema.
4. **Graph Theory**: The Laplacian matrix of a graph is symmetric; its eigenvalues and eigenvectors reveal structural properties.
5. **[[Matrix Functions]]**: Computing functions like $\exp(A)$, $\sin(A)$, and $\sqrt{A}$ using eigenvalues and eigenvectors.