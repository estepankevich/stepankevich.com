---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-11-21 17:24
updated: 2024-11-21 19:53
---
**Definition**  
Two square matrices $A$ and $B$ of the same size are said to be **similar** if there exists an invertible matrix $P$ such that:  
$$ B = P^{-1}AP. $$  
**Intuition**  
Matrix similarity indicates that $A$ and $B$ represent the same linear transformation under different bases. The matrix $P$ performs the change of basis. Similar matrices share many fundamental properties, as their core behaviors (eigenvalues, determinant, trace, etc.) are preserved under similarity transformations.

**Key Properties**  
1. **Equivalence Relation**:  
   - Similarity is reflexive, symmetric, and transitive.  

2. **Preservation of Spectral Properties**:  
   - Similar matrices have the same eigenvalues (including algebraic and geometric multiplicities).  
   - Similar matrices have the same characteristic polynomial.  

3. **Trace and Determinant**:  
   - $\text{tr}(A) = \text{tr}(B)$ and $\det(A) = \det(B)$ if $A \sim B$.  

4. **[[Rank]]**:  
   - Similar matrices have the same rank.  

5. **Canonical Forms**:  
   - Similar matrices can be reduced to simpler forms, such as the Jordan Normal Form or Diagonal Form (if diagonalizable).  

6. **Similarity vs. Congruence**:  
   - Similarity uses $P^{-1}AP$, while congruence uses $P^TAP$ or $P^*AP$ in the context of symmetric or Hermitian matrices.  

**Applications**  
1. **Diagonalization**:  
   - A matrix $A$ is similar to a diagonal matrix $D$ if $A$ is diagonalizable. In this case, $A = PDP^{-1}$, where $D$ contains the eigenvalues of $A$.  

2. **Canonical Representations**:  
   - Similarity is used to reduce matrices to their Jordan Normal Form, simplifying computations in advanced linear algebra.  

3. **Change of Basis**:  
   - Similarity transformations describe how a matrix changes under a change of basis in a vector space.  

4. **Control Theory**:  
   - Similar matrices describe equivalent dynamical systems in different coordinate systems.  

5. **Quantum Mechanics**:  
   - Used to express operators in alternative bases while preserving eigenvalues (observable quantities).  

**Examples**  
1. **Diagonalization**:  
   Let $A = \begin{bmatrix} 4 & 1 \\ 0 & 2 \end{bmatrix}$ and $P = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$. Compute:  
   $$ P^{-1}AP = \begin{bmatrix} 1 & 0 \\ 0 & 2 \end{bmatrix}, $$  
   showing that $A$ is similar to a diagonal matrix.  

2. **Non-Diagonalizable Case**:  
   Let $A = \begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix}$. $A$ is not diagonalizable, but it is similar to its Jordan Normal Form:  
   $$ P^{-1}AP = \begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix}, $$  
   where $P$ represents the change of basis.  