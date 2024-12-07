---
categories:
  - "[[Linear algebra]]"
  - "[[Observation]]"
created: 2024-11-25 23:44
updated: 2024-12-07 12:08
---
# Change of Inverse Matrix

Let $A(t)$ be a differentiable matrix-valued function, where $A(t)$ is invertible. The time derivative of the inverse $A^{-1}(t)$ is:

$$\frac{d}{dt}A^{-1}(t) = -A^{-1}(t) \frac{dA(t)}{dt} A^{-1}(t)$$

## Derivation:
1. Start from $A(t)A^{-1}(t) = I$, where $I$ is the identity matrix.
2. Differentiate both sides with respect to $t$: $$\frac{dA(t)}{dt}A^{-1}(t) + A(t)\frac{dA^{-1}(t)}{dt} = 0.$$
3. Solve for $\frac{dA^{-1}(t)}{dt}$: $$\frac{dA^{-1}(t)}{dt} = -A^{-1}(t) \frac{dA(t)}{dt} A^{-1}(t).$$

# Change of Eigenvalues

Let $\lambda_i(t)$ be the eigenvalues of $A(t)$ and $v_i(t)$ the corresponding eigenvectors. For a differentiable $A(t)$:

## First-Order Change in Eigenvalues:
If $A(t)$ is diagonalizable, the rate of change of the eigenvalue $\lambda_i(t)$ is given by:

$$\frac{d\lambda_i(t)}{dt} = v_i(t)^T \frac{dA(t)}{dt} v_i(t)$$

## Conditions:

1. The eigenvectors $v_i(t)$ are normalized: $v_i(t)^* v_i(t) = 1$.
2. This result assumes that $\lambda_i(t)$ is a simple eigenvalue (no degeneracy).

# Change of Singular Values

Let $\sigma_i(t)$ be the singular values of $A(t)$, defined as the square roots of the eigenvalues of $A(t)^T A(t)$ or $A(t)A(t)^T$.

# First-Order Change in Singular Values:

The rate of change of $\sigma_i(t)$ is:
$$\frac{d\sigma_i(t)}{dt} = \frac{u_i(t)^T \frac{dA(t)}{dt} v_i(t)}{\sigma_i(t)}$$
$u_i(t)$ and $v_i(t)$ are the left and right singular vectors corresponding to $\sigma_i(t)$.
This assumes $\sigma_i(t) \neq 0$.

## Conditions:
1. Singular value decomposition: $A(t) = U(t)\Sigma(t)V(t)^T$, where $U(t)$ and $V(t)$ are orthogonal matrices, and $\Sigma(t)$ is diagonal.
2. The singular values are real and non-negative: $\sigma_i(t) \geq 0$.

For small perturbations, these formulas can be used to approximate how the inverse matrix, eigenvalues, and singular values evolve over time or with respect to a parameter.