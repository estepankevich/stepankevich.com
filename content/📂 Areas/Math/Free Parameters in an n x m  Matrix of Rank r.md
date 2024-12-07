---
categories:
  - "[[Linear algebra]]"
  - "[[Observation]]"
created: 2024-11-26 23:49
updated: 2024-12-07 11:23
---
An $n \times m$ matrix $A$ of rank $r$ has **$mr + nr - r^2$ free parameters**. This count arises from the properties of the [[Singular Value Decomposition (SVD)]]. 
### **Singular Value Decomposition (SVD)**
An $n \times m$ matrix $A$ of rank $r$ can be expressed as:
$$
A = U \Sigma V^T,
$$
where:
- $U \in \mathbb{R}^{n \times n}$ is an orthogonal matrix containing the left singular vectors.
- $V \in \mathbb{R}^{m \times m}$ is an orthogonal matrix containing the right singular vectors.
- $\Sigma \in \mathbb{R}^{n \times m}$ is a diagonal matrix with $r$ non-zero singular values $\sigma_1, \sigma_2, \ldots, \sigma_r$.

The non-zero singular values in $\Sigma$ determine the rank $r$ of $A$.

### **Free Parameters**

1. **Singular Value Matrix $\Sigma$**:
   - $\Sigma$ is $r \times r$ (diagonal), and its entries are the $r$ non-zero singular values.
   - The singular values are free parameters: **$r$ free parameters**.

2. **Matrix $U$ (Left Singular Vectors)**:
   - $U$ is $n \times n$ and orthogonal. However, only the first $r$ columns of $U$ (denoted as $U_r \in \mathbb{R}^{n \times r}$) contribute to $A$.
   - $U_r$ spans an $r$-dimensional subspace of $\mathbb{R}^n$. To parameterize this subspace:
     - $U_r$ requires $nr$ parameters to define $r$ column vectors.
     - However, $U_r$ must be orthonormal, introducing $\frac{1}{2}r(r-1)$ constraints to ensure orthogonality.
   - Net free parameters for $U_r$:  
     $$
     nr - \frac{1}{2}r(r-1).
     $$

3. **Matrix $V$ (Right Singular Vectors)**:
   - Similarly, only the first $r$ columns of $V$ (denoted as $V_r \in \mathbb{R}^{m \times r}$) contribute to $A$.
   - $V_r$ requires $mr$ parameters to define $r$ column vectors.
   - Like $U_r$, orthonormality introduces $\frac{1}{2}r(r-1)$ constraints.
   - Net free parameters for $V_r$:  
     $$
     mr - \frac{1}{2}r(r-1).
     $$

---

### **Total Free Parameters**
Summing the contributions:
1. $\Sigma$: $r$ parameters.
2. $U_r$: $nr - \frac{1}{2}r(r-1)$ parameters.
3. $V_r$: $mr - \frac{1}{2}r(r-1)$ parameters.

Total:
$$
\text{Free parameters} = r + \left(nr - \frac{1}{2}r(r-1)\right) + \left(mr - \frac{1}{2}r(r-1)\right).
$$

Simplify:
$$
\text{Free parameters} = mr + nr - r^2.
$$

---

### **Conclusion**
The number of free parameters in an $n \times m$ matrix of rank $r$ is:
$$
\text{Free parameters} = mr + nr - r^2.
$$
This count is a balance between the degrees of freedom in $U$, $\Sigma$, and $V$, and the orthonormal constraints.