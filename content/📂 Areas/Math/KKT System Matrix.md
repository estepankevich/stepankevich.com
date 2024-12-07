---
categories:
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-11-27 00:03
updated: 2024-12-07 12:53
---
#### **[[Karush-Kuhn-Tucker (KKT) Conditions|KKT]] System Matrix**
The KKT system is a saddle-point system associated with the Lagrangian. It involves solving:
$$
\begin{bmatrix}
H & A^T \\
A & 0
\end{bmatrix}
\begin{bmatrix}
\mathbf{d} \\
\mathbf{y}
\end{bmatrix}
=
\begin{bmatrix}
-\nabla f(\mathbf{x}) \\
\mathbf{r}
\end{bmatrix},
$$
where:
- $H = \nabla^2 \mathcal{L}(\mathbf{x})$ is the Hessian of the Lagrangian,
- $A$ is the Jacobian of the constraints,
- $\mathbf{r}$ accounts for residuals of equality constraints.

#### **Saddle Point Nature**
The KKT matrix does not directly correspond to the minimum of the objective function but represents a **saddle point**:
1. The solution minimizes $\mathcal{L}$ over $\mathbf{x}$.
2. The solution maximizes $\mathcal{L}$ over the multipliers $(\boldsymbol{\lambda}, \boldsymbol{\mu})$.

This saddle-point structure ensures the constraints are satisfied and the objective function is locally minimized.
