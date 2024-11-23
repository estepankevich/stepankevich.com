---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-11-22 14:05
updated: 2024-11-23 15:16
---
**Definition**  
The trace of a square matrix $A \in \mathbb{R}^{n \times n}$, denoted $\text{tr}(A)$, is the sum of the elements on its main diagonal:  
$$\text{tr}(A) = \sum_{i=1}^n a_{ii}.$$  
For $A = [a_{ij}]$, this is:  
$$\text{tr}(A) = a_{11} + a_{22} + \dots + a_{nn}.$$

**Intuition**  
The trace provides a simple scalar measure of a matrix's diagonal elements and often relates to properties of linear transformations, such as their invariant sums under certain transformations.  

**Key Properties**  
1. **Linearity**:  
   $$\text{tr}(A + B) = \text{tr}(A) + \text{tr}(B),$$  
   $$\text{tr}(cA) = c \cdot \text{tr}(A),$$  
   for matrices $A, B$ and scalar $c$.  

2. **Similarity Invariance**:  
   If $B = P^{-1}AP$ for invertible $P$, then $\text{tr}(B) = \text{tr}(A)$.  

3. **Cyclic Property (Partial)**:  
   For any matrices $A, B \in \mathbb{R}^{n \times n}$,  
   $$\text{tr}(AB) = \text{tr}(BA).$$  
   This property extends to cyclic permutations of products but not general reordering.  

4. **Relation to Eigenvalues**:  
   The trace of a matrix equals the sum of its eigenvalues (counting algebraic multiplicities):  
   $$\text{tr}(A) = \sum_{i=1}^n \lambda_i.$$  

5. **Trace of Identity Matrix**:  
   For $I \in \mathbb{R}^{n \times n}$, $\text{tr}(I) = n$.  

**Applications**  
- **Spectral Analysis**: The trace gives the sum of [[Eigenvalues and eigenvectors|eigenvalues]], which is useful in analyzing systems' dynamics.  