---
categories:
  - "[[Linear algebra]]"
  - "[[Algorithm]]"
created: 2024-11-21 19:55
updated: 2024-11-25 17:20
---
**Definition**  
The **Gram-Schmidt orthogonalization** process transforms a set of linearly independent vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$ in an [[Inner Product and Space|inner product space]] into an orthogonal (or orthonormal) set of vectors $\{\mathbf{q}_1, \mathbf{q}_2, \dots, \mathbf{q}_n\}$ such that:  
1. $\langle \mathbf{q}_i, \mathbf{q}_j \rangle = 0$ for $i \neq j$,  
2. $\|\mathbf{q}_i\| = 1$ (if normalized).  

The orthogonal vectors $\mathbf{q}_i$ span the same subspace as the original vectors $\mathbf{v}_i$.

**Intuition**  
Gram-Schmidt removes components of one vector that "overlap" with previously processed vectors, leaving only the orthogonal component. This results in a set of mutually orthogonal basis vectors.

**Algorithm**  
1. Initialize the first orthogonal vector as:  
   $$ \mathbf{q}_1 = \mathbf{v}_1. $$  
2. For $k = 2, 3, \dots, n$:  
   - Subtract the projection of $\mathbf{v}_k$ onto each of the previous $\mathbf{q}_j$:  
 $$ \mathbf{u}_k = \mathbf{v}_k - \sum_{j=1}^{k-1} \text{proj}_{\mathbf{q}_j}(\mathbf{v}_k), $$
     where $\text{proj}_{\mathbf{q}_j}(\mathbf{v}_k) = \frac{\langle \mathbf{v}_k, \mathbf{q}_j \rangle}{\langle \mathbf{q}_j, \mathbf{q}_j \rangle} \mathbf{q}_j$.  
   - Set $\mathbf{q}_k = \mathbf{u}_k$.  

3. Normalize (if orthonormal basis is desired):  
   $$ \mathbf{q}_k = \frac{\mathbf{u}_k}{\|\mathbf{u}_k\|}. $$  

**Key Properties**  
1. **Preserves Span**:  
   - The set $\{\mathbf{q}_1, \mathbf{q}_2, \dots, \mathbf{q}_n\}$ spans the same subspace as $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$.  
2. **Orthogonality**:  
   - The resulting $\mathbf{q}_i$ are pairwise orthogonal.  
3. **Numerical Stability**:  
   - The classical Gram-Schmidt process can suffer from numerical instability in finite-precision arithmetic. The **[[Modified Gram-Schmidt]]** algorithm addresses this issue by orthogonalizing vectors incrementally.  

**Applications**  
1. **[[QR factorization]]**:  
   - Used to compute the $Q$ (orthogonal) and $R$ (upper triangular) matrices in QR factorization.  
2. **[[Least Squares Problems]]**:  
   - Orthogonal basis simplifies solving least squares problems.  
3. [[Dimensionality Reduction]]:  
   - Constructs orthogonal bases for subspaces in applications like Principal Component Analysis (PCA).  
4. **[[Signal processing]]**:  
   - Orthogonal bases are fundamental for Fourier and wavelet transforms.  