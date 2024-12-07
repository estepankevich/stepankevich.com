---
categories:
  - "[[Linear algebra]]"
  - "[[Real Analysis]]"
  - "[[Method]]"
created: 2024-11-21 22:33
updated: 2024-11-24 22:08
---
**Definition**  
The **least squares problem** seeks to minimize the residual error $\|Ax - b\|_2$, where:  
- $A \in \mathbb{R}^{m \times n}$ is a matrix with $m \geq n$,  
- $b \in \mathbb{R}^m$ is a given vector,  
- $x \in \mathbb{R}^n$ is the unknown vector to solve for.

This arises when the system $Ax = b$ is overdetermined (more equations than unknowns), and no exact solution exists. The solution is:  
$$ x^* = \text{argmin}_{x \in \mathbb{R}^n} \|Ax - b\|_2. $$
**Intuition**  
The least squares solution minimizes the Euclidean distance between $b$ and the column space of $A$. It projects $b$ onto the subspace spanned by the columns of $A$, yielding the best approximation of $b$ that lies in the range of $A$.

**Key Properties**  
1. **Normal Equations**:  
   The least squares solution satisfies:  
   $$ A^T A x = A^T b. $$

2. **Existence and Uniqueness**:  
   - A unique solution exists if $A^T A$ is invertible (i.e., $A$ has full column rank).  
   - If $A$ is not full rank, the solution is not unique, and the pseudoinverse is used.  

3. **Orthogonality Condition**:  
   The residual $r = b - Ax^*$ is orthogonal to the column space of $A$:  
   $$ A^T r = 0. $$  
**Methods to Solve**  
1. **[[QR factorization]]**:  
   - Compute $A = QR$, where $Q$ is orthogonal and $R$ is upper triangular. Solve:  
     $$ Rx = Q^T b. $$

2. **[[Linear Regression|Normal Equations]]**:  
   - Solve $A^T A x = A^T b$ directly.  
   - This method is computationally less stable compared to QR or SVD.  

3. **[[Singular Value Decomposition (SVD)]]**:  
   - Decompose $A = U \Sigma V^T$, where $\Sigma$ is diagonal. Solve using:  
     $$ x = V \Sigma^+ U^T b, $$  
     where $\Sigma^+$ is the pseudoinverse of $\Sigma$.  

4. **Iterative Methods**:  
   - For large systems, iterative solvers like [[Stochastic Gradient Descent (SGD)]] or conjugate gradient are used.  
5. **[[Nearly Singular Matrix]]**:
   - Use [[Regularization]] to improve the stability

**Applications**  
1. **Data Fitting**:  
   - Fit a model to data points by minimizing the sum of squared errors (e.g., linear regression).  

2. **[[Signal processing]]**:  
   - Denoise signals or approximate functions using least squares.  

3. **Control Systems**:  
   - Estimate system parameters in system identification.  

4. **Computer Vision**:  
   - Solve problems like camera calibration and 3D reconstruction.  

5. **[[Optimization]]**:  
   - Forms the basis for solving constrained optimization problems (e.g., quadratic programming).  

**Examples**  
1. **Simple [[Linear Regression]]**:  
   Fit a line $y = mx + c$ to data points $(x_i, y_i)$ by solving the least squares problem:  
   $$ A = \begin{bmatrix} x_1 & 1 \\ x_2 & 1 \\ \vdots & \vdots \\ x_n & 1 \end{bmatrix}, \quad b = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix}. $$  
   Solve for $x = \begin{bmatrix} m \\ c \end{bmatrix}$.  

2. **Overdetermined System**:  
   Solve $A x = b$ where:  
   $$ A = \begin{bmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{bmatrix}, \quad b = \begin{bmatrix} 6 \\ 0 \\ 0 \end{bmatrix}. $$  
   Using the normal equations:  
   $$ A^T A = \begin{bmatrix} 3 & 6 \\ 6 & 14 \end{bmatrix}, \quad A^T b = \begin{bmatrix} 6 \\ 6 \end{bmatrix}. $$  
   Solve $A^T A x = A^T b$ to find $x$.  