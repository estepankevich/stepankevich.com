---
categories:
  - "[[Linear algebra]]"
  - "[[Optimization]]"
  - "[[Theorem]]"
created: 2024-11-28 00:47
updated: 2024-12-07 13:00
---
#### **Theorem**:
The function $f(X) = -\log(\det(X))$ is [[Convex Function]] over the domain of [[Positive Definite Matrix|positive definite]] matrices, $X \in \mathbb{S}_{++}^n$, where $\mathbb{S}_{++}^n$ is the set of $n \times n$ symmetric positive definite matrices.

### **Proof Outline**

#### **Step 1: Domain and Feasibility**
- The determinant $\det(X)$ is positive for all $X \in \mathbb{S}_{++}^n$.
- $\log(\det(X))$ is well-defined and finite over $\mathbb{S}_{++}^n$.
- $-\log(\det(X))$ is thus a valid function on $\mathbb{S}_{++}^n$.
#### **Step 2: First and Second Derivatives**
To show convexity, we compute the **Hessian of $f(X)$** and verify that it is positive semidefinite.

1. **Gradient of $f(X)$**:
   Using matrix calculus:
   $$
   f(X) = -\log(\det(X)) \quad \implies \quad \nabla f(X) = -X^{-1}.
   $$

2. **Hessian of $f(X)$**:
   The gradient $\nabla f(X)$ is a matrix-valued function. Differentiating $\nabla f(X)$ with respect to $X$ gives the Hessian:
   $$
   \nabla^2 f(X)[H, H] = \text{tr}(X^{-1} H X^{-1} H),
   $$
   for any symmetric perturbation matrix $H \in \mathbb{S}^n$.

#### **Step 3: Positive Semidefiniteness**
- The quadratic form of the Hessian is:
  $$
  \nabla^2 f(X)[H, H] = \text{tr}(X^{-1} H X^{-1} H).
  $$
- Since $X^{-1}$ is positive definite (as $X \in \mathbb{S}_{++}^n$) and $H$ is symmetric, the term $X^{-1} H$ is also symmetric. The trace of a square of a symmetric matrix is non-negative:
  $$
  \text{tr}(X^{-1} H X^{-1} H) \geq 0.
  $$
- Thus, the Hessian is positive semidefinite.

#### **Step 4: Convexity**
The positive semidefiniteness of the Hessian implies that $f(X)$ is convex over $\mathbb{S}_{++}^n$.

### **Intuition**
1. The determinant $\det(X)$ measures the volume of the parallelepiped defined by the rows or columns of $X$. Minimizing $-\log(\det(X))$ encourages $X$ to "spread out" the volume.

2. The function $-\log(\det(X))$ grows rapidly as $X$ approaches singularity (where $\det(X) \to 0$), discouraging near-singular configurations.
