---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-04-02 16:54
updated: 2024-11-12 11:22
---
We can see the factorization in two ways, as combination of columns or combinations or rows.

 1. $A=CR=CUR'$ . Columns-Rows. In first case we take columns from $A$ in $C$, in second case $C$ are the rows from the A, but we will need another matrix between them 
 2. $A=LU$. Elimination, solving linear equations for square invertible matrices
     $\pmatrix{2 & 3 \\ 4 & 7} = \pmatrix{1 & 0 \\ 2 & 1}\pmatrix{2 & 3 \\ 0&1}$
 4. $A=QR$. Gram-Schmidt
 5. $S=Q \Lambda Q^T$ - For symmetric matrices eigenvectors are orthogonal and $\Lambda$ is diagonal and real. $(Q \Lambda)Q^T = \sum_{rank 1} = \sum \lambda_i q_i q_i^T$ - every element is simmetric. 
    $S q_1 = \lambda_1 q_1 q_1^T q_1 = \lambda_1 q_1$
 6. $A=X \Lambda X^{-1}$
 7. $A=U \Sigma V^{-1}$ . $U$ and $V$ are orthogonal, $\Sigma$ - diagonal 
