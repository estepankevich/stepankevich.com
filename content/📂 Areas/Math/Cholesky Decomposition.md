---
categories:
  - "[[Linear algebra]]"
  - "[[Factorization]]"
created: 2024-11-21 19:55
updated: 2024-12-04 16:45
---
### **Definition**
Cholesky decomposition is a factorization of a symmetric positive definite matrix $A$ into the product:
$$A = LL^T$$

where $L$ is a lower triangular matrix with positive diagonal entries, and $L^T$ is its transpose.
### **Intuition**
Cholesky decomposition is a specialized form of the [[Lower–Upper Factorization (LU)]] tailored for [[Symmetric Matrix|Symmetric]] [[Positive Definite Matrix]]. Instead of requiring separate lower and upper triangular matrices, it takes advantage of symmetry and positivity to reduce computation and storage.

### **Key Properties**
1. **Existence and Uniqueness**:  
    The decomposition exists and is unique for any symmetric positive definite matrix.
    
2. **Computational Efficiency**:  
    It requires approximately half the computational effort of LU decomposition for symmetric matrices.
    
3. **Matrix Symmetry**:  
    If $A$ is symmetric positive definite, then the resulting $L$ is also symmetric in terms of the structure of $LL^T$.
    
4. **Diagonal Positivity**:  
    All diagonal elements of $L$ are positive.
    
5. **Numerical Stability**:  
    Cholesky decomposition is numerically more stable compared to other decompositions for well-conditioned matrices.
    

### **Applications**
1. **[[Linear Systems]]**:  
    Used to solve $Ax = b$ by first solving $Ly = b$ and then $L^T x = y$.

2. **Numerical Optimization**:  
    Frequently used in optimization algorithms, particularly in quadratic programming and least squares problems.
    
3. **[[Covariance Matrix]]**:  
    Essential for sampling from multivariate Gaussian distributions in statistical modeling.
    
4. **Eigenvalue Problems**:  
    Provides a basis for iterative methods like the conjugate gradient method.
    

### **Algorithm**

1. Start with $A \in \mathbb{R}^{n \times n}$, symmetric and positive definite.
2. Compute elements of $L$: $$L_{ii} = \sqrt{A_{ii} - \sum_{k=1}^{i-1} L_{ik}^2}, \quad L_{ij} = \frac{1}{L_{ii}} \left( A_{ij} - \sum_{k=1}^{i-1} L_{ik} L_{jk} \right), \; j > i$$