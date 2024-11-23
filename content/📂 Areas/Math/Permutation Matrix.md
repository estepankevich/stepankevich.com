---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-11-21 19:42
updated: 2024-11-21 19:42
---
**Definition**  
A **permutation matrix** is a square binary matrix (consisting of 0s and 1s) where each row and each column contains exactly one entry equal to 1, and all other entries are 0. It represents a reordering (or permutation) of rows or columns of a matrix.

Formally, a permutation matrix $P$ of size $n \times n$ is associated with a permutation $\sigma$ of the set $\{1, 2, \dots, n\}$, where the $i$-th row has a 1 in the $\sigma(i)$-th column.

**Intuition**  
Permutation matrices act as a "shuffling operator" for rows or columns of other matrices or vectors. Multiplying a matrix by a permutation matrix permutes its rows or columns depending on the order of multiplication.

**Key Properties**  
1. **[[Orthonormal matrix|Orthogonality]]**:  
   $$ P^T = P^{-1}, \quad \text{so } P^T P = I. $$  
2. **[[Determinant]]**:  
   $$ \det(P) = \pm 1, $$  
   where the sign depends on whether the associated permutation is even or odd.

3. **Action on Vectors**:  
   - Left-multiplication: $P \mathbf{v}$ permutes the rows of $\mathbf{v}$.  
   - Right-multiplication: $\mathbf{v}^T P$ permutes the columns of $\mathbf{v}$.  

4. **Composition of Permutations**:  
   - The product of two permutation matrices corresponds to the composition of the two associated permutations.

**Construction**  
To construct a permutation matrix $P$ for a permutation $\sigma$:  
1. Start with the identity matrix $I$.  
2. Rearrange the rows of $I$ according to the permutation $\sigma$.

**Applications**  
1. **[[Lower–Upper Factorization (LU)]] with Pivoting**:  
   - Permutation matrices represent row swaps in partial pivoting, ensuring numerical stability.  

2. **Reordering Problems**:  
   - Used to reorder rows or columns in numerical algorithms or combinatorial problems.  

3. **Graph Theory**:  
   - Represent adjacency matrix transformations under vertex relabeling.  
4. **Cryptography**:  
   - Permutation matrices are used in encryption schemes as part of mixing operations.  

**Examples**  
1. Permutation $\sigma = (2, 3, 1)$ (maps row 1 → row 2, row 2 → row 3, row 3 → row 1):  
   $$ P = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}. $$  

2. Reordering rows of $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{bmatrix}$ using $P$:  
   $$ P = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}, \quad PA = \begin{bmatrix} 5 & 6 \\ 1 & 2 \\ 3 & 4 \end{bmatrix}. $$