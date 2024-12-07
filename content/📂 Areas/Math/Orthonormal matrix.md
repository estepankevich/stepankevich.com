---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-04-02 20:44
updated: 2024-11-24 20:53
aliases:
  - Orthogonal matrix
---
- Doesn't change lengths $||Qx||=||x||^2$
- No overflow when using $Q$
- $Q^T\times Q = Q \times Q^T = I$ for square matrix
- $Q^{-1}=Q^T$
- Eigenvectors are orthogonal

Examples :
1. Rotation $\pmatrix{\cos{\theta}, -\sin{\theta}\\ \sin{\theta}, \cos{\theta}}$ 
2. Reflection $\pmatrix{\cos{\theta},\sin{\theta}\\ \sin{\theta}, -\cos{\theta}}$ 
3. Householder reflections: start with $U^T U=1 => H= I -2U^T U$ - family of symmetric orthonormal matrices
4. [[Haar Wavelet Matrix]]
5. [[Permutation Matrix]]
