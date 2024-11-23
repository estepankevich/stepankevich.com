---
categories:
  - "[[Linear algebra]]"
  - "[[Factorization]]"
created: 2024-11-21 13:46
updated: 2024-11-21 22:42
---
#### **Definition**
Column-Row Factorization (CR) refers to the representation of a matrix $A \in \mathbb{R}^{m \times n}$ as the product of two lower-rank matrices, emphasizing the column and row structures of $A$. Specifically, $A$ can be expressed as:  
$$ A = CU, $$  
where:
- $C \in \mathbb{R}^{m \times r}$ contains $r$ selected columns of $A$.
- $U \in \mathbb{R}^{r \times n}$ contains coefficients encoding the linear combination of rows of $C$ to reconstruct $A$.  
Here, $r$ is the rank of $A$ or an approximation to it.

#### **Intuition**
CR factorization separates a matrix into:
1. A subset of its columns ($C$), capturing essential structural information.
2. A matrix ($U$) that linearly combines these columns to form the rows of $A$.

This factorization is particularly useful when the matrix $A$ is rank-deficient or approximately low-rank, enabling efficient storage and computations.

#### **Key Properties**
1. **Rank Preservation**: If $A$ has [[Rank]] $r$, the product $CU$ also has rank $r$.
2. **Efficient Approximation**: By selecting $r < \text{rank}(A)$, CR factorization can approximate $A$ with reduced storage.
3. **Column-Row Interpretation**:  
   - $C$ provides representative columns.
   - $U$ encodes how the rows of $A$ can be reconstructed using these columns.
4. **Existence**: Exists for any matrix $A$; $C$ can be chosen using pivoted column selection or other optimization methods like QR decomposition.

#### **Applications**
1. **[[Dimensionality Reduction]]**: Provides a compact representation of data matrices for feature selection and compression.
2. **Low-Rank Matrix Approximation**: Useful in scenarios like [[PCA]], where approximate low-rank structures are desired.
3. **Computational Efficiency**: Reduces the cost of operations on large matrices, particularly in numerical linear algebra and machine learning tasks.
4. **Data Reconstruction**: In applications like collaborative filtering, CR factorization aids in reconstructing missing entries in matrices.
5. **Interpretability**: The use of actual columns and rows from the data makes the factorization interpretable.

