---
categories:
  - "[[Linear algebra]]"
  - "[[Factorization]]"
created: 2024-11-22 17:51
updated: 2024-11-23 16:54
---
**Definition**  
The **polar decomposition** of a [[Matrix]] $A \in \mathbb{C}^{m \times n}$ (or $\mathbb{R}^{m \times n}$) expresses $A$ as the product of two matrices:  
$$A = UP,$$  
where:  
1. $U \in \mathbb{C}^{m \times n}$ (or $\mathbb{R}^{m \times n}$) is a **unitary** matrix (or **[[Orthonormal matrix|Orthogonal matrix]]** if $A$ is real), satisfying $U^*U = I$ (or $U^TU = I$).  
2. $P \in \mathbb{C}^{n \times n}$ (or $\mathbb{R}^{n \times n}$) is a [[Positive Semi-Definite Matrix]] and Hermitian (or [[Symmetric Matrix]] if $A$ is real), satisfying $P = P^*$ and $P \geq 0$.  

If $A$ is square and [[Matrix Inversion|invertible]], $U$ is unitary and $P$ is [[Positive Definite Matrix]].

**Intuition**  
The polar decomposition separates a matrix $A$ into two parts:  
1. **$U$** represents the "rotation" or "orthogonal transformation" component.  
2. **$P$** represents the "stretching" or "scaling" component.  

For square matrices, this is analogous to decomposing a complex number $z = re^{i\theta}$ into a unit-magnitude rotation $e^{i\theta}$ and a positive scaling $r$.  

**Key Properties**  
1. **Existence and Uniqueness**:  
   - The polar decomposition always exists for any matrix $A$.  
   - $P$ is uniquely determined. $U$ is unique if $A$ is full rank.  

2. **Computation of $P$**:  
   $$P = \sqrt{A^*A},$$  
   where $\sqrt{A^*A}$ is the unique positive semi-definite square root of $A^*A$.  

3. **Computation of $U$**:  
   $$U = A P^{-1},$$  
   if $P$ is invertible. If $A$ is not full rank, $U$ can be determined using a projection.  

4. **[[Norm]] Preservation**:  
   The unitary (or orthogonal) matrix $U$ preserves the norm of vectors: $\|Uv\| = \|v\|$ for any vector $v$.  

5. **Special Case (Square Matrices)**:  
   If $A$ is invertible, $U$ is unitary, and $P$ is positive definite.  

**Applications**  
- **Numerical Linear Algebra**: Polar decomposition is used in algorithms requiring matrix decompositions with orthogonal and positive components.  
- **Computer Graphics**: Used to decompose affine transformations into rotation and scaling parts.  
- **Continuum Mechanics**: Describes deformation gradients in materials, separating pure rotation from stretch.  
- **[[Signal processing]]**: Polar decomposition helps in solving least squares problems and analyzing signal transformations.  
