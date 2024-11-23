---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-04-02 20:44
updated: 2024-11-21 22:45
aliases:
  - Orthogonal matrix
---
- Doesn't change lengths $||Qx||=||x||^2$
- No overflow when using $Q$
- $Q^T Q = I$ for square matrix
- Eigen vectors are orthogonal

Examples :
1. Rotation $\pmatrix{\cos{\theta}, -\sin{\theta}\\ \sin{\theta}, \cos{\theta}}$ 
2. Reflection $\pmatrix{\cos{\theta},\sin{\theta}\\ \sin{\theta}, -\cos{\theta}}$ 
3. Householder reflections: start with $U^T U=1 => H= I -2U^T U$ - family of symmetric orthonormal matrices
4. [[Haar Wavelet Matrix]] matrix 
