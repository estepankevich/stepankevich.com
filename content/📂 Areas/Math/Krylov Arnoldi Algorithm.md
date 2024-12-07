---
categories:
  - "[[Linear algebra]]"
  - "[[Algorithm]]"
created: 2024-11-25 17:28
updated: 2024-12-07 11:45
---
### **Purpose**
The **Krylov-Arnoldi algorithm** is an iterative method used to compute an orthonormal basis for the [[Krylov Subspace]] associated with a matrix $A \in \mathbb{R}^{n \times n}$ and a starting vector $\mathbf{b} \in \mathbb{R}^n$. It is commonly used in numerical linear algebra to approximate [[Eigenvalues and eigenvectors]] (e.g., in the [[Lanczos Algorithm]] or [[GMRES]]).

### **Krylov Subspace**
The **Krylov subspace** of order $k$ is defined as:
$$
\mathcal{K}_k(A, \mathbf{b}) = \text{span}\{\mathbf{b}, A\mathbf{b}, A^2\mathbf{b}, \dots, A^{k-1}\mathbf{b}\}.
$$
The goal of the Arnoldi algorithm is to construct an orthonormal basis $\{ \mathbf{q}_1, \mathbf{q}_2, \dots, \mathbf{q}_k \}$ for $\mathcal{K}_k(A, \mathbf{b})$.

### **Arnoldi Process**

#### **Input**:
1. Matrix $A \in \mathbb{R}^{n \times n}$ (not required to be symmetric).
2. Starting vector $\mathbf{b} \neq 0$.
3. Dimension $k$ (number of steps).

#### **Output**:
1. Orthonormal basis $\mathbf{Q}_k = [\mathbf{q}_1, \mathbf{q}_2, \dots, \mathbf{q}_k]$.
2. Upper Hessenberg matrix $H_k \in \mathbb{R}^{k \times k}$ such that:
   $$
   A \mathbf{Q}_k = \mathbf{Q}_k H_k + \mathbf{r}_k \mathbf{e}_k^T,
   $$
   where $\mathbf{r}_k$ is the residual vector.

---

#### **Algorithm**:
1. Normalize $\mathbf{b}$ to obtain the first basis vector:
   $$
   \mathbf{q}_1 = \frac{\mathbf{b}}{\|\mathbf{b}\|}.
   $$

2. For $j = 1, 2, \dots, k$:
   - Compute $\mathbf{v} = A \mathbf{q}_j$.
   - Orthogonalize $\mathbf{v}$ against all previous basis vectors:
     $$
     h_{ij} = \mathbf{q}_i^T \mathbf{v}, \quad \mathbf{v} \gets \mathbf{v} - \sum_{i=1}^j h_{ij} \mathbf{q}_i.
     $$
   - Compute the norm of the residual:
     $$
     h_{j+1, j} = \|\mathbf{v}\|.
     $$
   - If $h_{j+1, j} = 0$, terminate (Krylov subspace has been fully spanned).
   - Normalize $\mathbf{v}$ to get the next basis vector:
     $$
     \mathbf{q}_{j+1} = \frac{\mathbf{v}}{h_{j+1, j}}.
     $$

3. Assemble $H_k$ as an upper Hessenberg matrix with entries $h_{ij}$.

---

### **Key Properties**
1. **Orthonormal Basis**:  
   The columns of $\mathbf{Q}_k$ form an orthonormal basis:
   $$
   \mathbf{Q}_k^T \mathbf{Q}_k = I_k.
   $$

2. **Hessenberg Representation**:  
   The Arnoldi algorithm produces a [[Hessenberg Matrix]] $H_k$, which is smaller and easier to work with than $A$.

3. **Convergence**:  
   The eigenvalues of $H_k$ approximate the eigenvalues of $A$ as $k$ increases (used in iterative eigenvalue solvers).

---

### **Applications**
1. **Eigenvalue Approximation**:  
   Used in methods like the Arnoldi iteration to compute a few dominant eigenvalues of $A$.

2. **Krylov Subspace Methods**:  
   Forms the basis of methods like GMRES (for solving linear systems) and the Lanczos algorithm (for symmetric matrices).

3. **Model Reduction**:  
   Used in control theory and model reduction to approximate large-scale systems with smaller ones.

---

### **Example**

#### **Input**:
$$
A = \begin{bmatrix} 
4 & 1 & 2 \\ 
1 & 3 & 0 \\ 
2 & 0 & 5 
\end{bmatrix}, \quad \mathbf{b} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}.
$$

#### **Step 1**: Initialization
Normalize $\mathbf{b}$:
$$
\mathbf{q}_1 = \frac{\mathbf{b}}{\|\mathbf{b}\|} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}.
$$

#### **Step 2**: Iteration 1
Compute $\mathbf{v} = A \mathbf{q}_1$:
$$
\mathbf{v} = \begin{bmatrix} 4 \\ 1 \\ 2 \end{bmatrix}.
$$
Orthogonalize:
$$
h_{11} = \mathbf{q}_1^T \mathbf{v} = 4, \quad \mathbf{v} \gets \mathbf{v} - h_{11} \mathbf{q}_1 = \begin{bmatrix} 0 \\ 1 \\ 2 \end{bmatrix}.
$$
Normalize $\mathbf{v}$:
$$
h_{21} = \|\mathbf{v}\| = \sqrt{5}, \quad \mathbf{q}_2 = \frac{\mathbf{v}}{h_{21}} = \begin{bmatrix} 0 \\ \frac{1}{\sqrt{5}} \\ \frac{2}{\sqrt{5}} \end{bmatrix}.
$$

#### **Step 3**: Iteration 2
Repeat for $\mathbf{q}_2$ to construct $\mathbf{q}_3$ and $H_2$.

---

The process iteratively builds $\mathbf{Q}_k$ and $H_k$.