---
categories:
  - "[[Linear algebra]]"
  - "[[Definition]]"
created: 2024-11-21 22:49
updated: 2024-12-07 12:40
---
### **Definition**
A **matrix function** is a function that operates on matrices, analogous to scalar functions. Given a matrix $A \in \mathbb{R}^{n \times n}$ and a scalar function $f(x)$ (e.g., $\exp(x)$, $\sin(x)$, $\log(x)$), the matrix function $f(A)$ is defined in a way consistent with $f(x)$ acting on the eigenvalues or through a power series expansion.

### **Key Methods for Defining Matrix Functions**
1. **Power Series Expansion**:
   If $f(x)$ has a convergent power series:
   $$
   f(x) = \sum_{k=0}^\infty c_k x^k,
   $$
   then:
   $$
   f(A) = \sum_{k=0}^\infty c_k A^k,
   $$
   where $A^k$ is the $k$-th power of the matrix $A$.

   **Example**: For the exponential function:
   $$
   \exp(A) = \sum_{k=0}^\infty \frac{A^k}{k!}.
   $$

2. **Eigenvalue Decomposition**:
   If $A$ is diagonalizable:
   $$
   A = V \Lambda V^{-1},
   $$
   where $\Lambda = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$, then:
   $$
   f(A) = V f(\Lambda) V^{-1},
   $$
   where $f(\Lambda)$ applies $f$ to each eigenvalue:
   $$
   f(\Lambda) = \text{diag}(f(\lambda_1), f(\lambda_2), \dots, f(\lambda_n)).
   $$

3. **Jordan Normal Form**:
   If $A$ is not diagonalizable, use its Jordan decomposition:
   $$
   A = P J P^{-1},
   $$
   where $J$ is the Jordan form. Then:
   $$
   f(A) = P f(J) P^{-1}.
   $$
   Here, $f(J)$ involves handling blocks corresponding to repeated eigenvalues.

4. **Numerical Approximation**:
   For large matrices or matrices without explicit decompositions, numerical methods (e.g., Padé approximants, Krylov subspace methods) are used.

### **Examples of Matrix Functions**

#### **1. Exponential of a Matrix ($\exp(A)$)**
The matrix exponential is defined as:
$$
\exp(A) = \sum_{k=0}^\infty \frac{A^k}{k!}.
$$
It is used in solving systems of differential equations:
$$
\mathbf{x}' = A \mathbf{x} \implies \mathbf{x}(t) = \exp(At) \mathbf{x}(0).
$$

---

#### **2. Logarithm of a Matrix ($\log(A)$)**
The matrix logarithm is the inverse of the matrix exponential:
$$
\log(A) \text{ satisfies } \exp(\log(A)) = A.
$$
For diagonalizable $A$:
$$
\log(A) = V \log(\Lambda) V^{-1}.
$$
#### **3. Square Root of a Matrix ($\sqrt{A}$)**
The matrix square root satisfies:
$$
\sqrt{A} \cdot \sqrt{A} = A.
$$
For diagonalizable $A$:
$$
\sqrt{A} = V \sqrt{\Lambda} V^{-1},
$$
where $\sqrt{\Lambda} = \text{diag}(\sqrt{\lambda_1}, \sqrt{\lambda_2}, \dots)$.

---

#### **4. Trigonometric Matrix Functions**
- Sine:
  $$
  \sin(A) = \sum_{k=0}^\infty (-1)^k \frac{A^{2k+1}}{(2k+1)!}.
  $$

- Cosine:
  $$
  \cos(A) = \sum_{k=0}^\infty (-1)^k \frac{A^{2k}}{(2k)!}.
  $$

---

### **Properties**

1. **Commutativity with Diagonalizable Matrices**:  
   If $A$ and $B$ commute ($AB = BA$), then:
   $$
   f(A + B) = f(A) + f(B).
   $$

2. **Similarity Invariance**:  
   For any invertible matrix $P$:
   $$
   f(P A P^{-1}) = P f(A) P^{-1}.
   $$

3. **Taylor Series Consistency**:  
   Matrix functions extend scalar Taylor series expansions to matrices.

---

### **Applications**

1. **Differential Equations**:  
   Solving linear systems $\mathbf{x}' = A \mathbf{x}$ involves $\exp(A)$.

2. **Quantum Mechanics**:  
   Time evolution of quantum states uses matrix exponentials.

3. **Control Theory**:  
   Stability analysis uses functions like $\exp(At)$.

4. **Data Science and Machine Learning**:  
   Regularization (e.g., $\log(A)$ or $\sqrt{A}$) in covariance estimation.