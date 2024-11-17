---
categories:
  - "[[Data Science]]"
  - "[[Method]]"
created: 2024-11-17 19:01
updated: 2024-11-17 20:34
---
**Lasso Regression**  

**Definition**:  
Lasso regression, or **Least Absolute Shrinkage and Selection Operator**, is a linear regression technique that incorporates $L_1$ [[Regularization]]. This regularization adds a penalty proportional to the absolute value of the coefficients, encouraging sparsity in the model.  

**Objective Function**:  
The Lasso regression minimizes:  
$$J(\beta) = \|y - X\beta\|^2 + \lambda \|\beta\|_1$$  
where:  
- $\|y - X\beta\|^2$ is the residual sum of squares,  
- $\|\beta\|_1 = \sum_{i=1}^n |\beta_i|$ is the $L_1$ norm of the coefficients,  
- $\lambda \geq 0$ is the regularization parameter controlling the trade-off between model fit and sparsity.  

**Key Properties**:  
1. **Feature Selection**:  
   - Lasso shrinks some coefficients to exactly zero, performing variable selection.  
   - This is due to the sharp geometry of the $L_1$ penalty.  

2. **Sparsity**:  
   - Lasso promotes sparsity in the coefficients, making it useful for high-dimensional datasets with irrelevant features.  

3. **Regularization Strength**:  
   - Larger $\lambda$ increases the penalty, leading to more coefficients being shrunk to zero.  
   - Smaller $\lambda$ reduces the penalty, approaching ordinary least squares (OLS).  

4. **Bias-Variance Trade-Off**:  
   - Lasso increases bias but reduces variance, improving generalization.  

**Optimization**:  
Unlike [[Ridge Regression]], Lasso does not have a closed-form solution due to the non-differentiability of the $L_1$ norm. Instead, iterative algorithms such as coordinate descent or least angle regression (LARS) are used to compute $\beta$.  

**Geometric Interpretation**:  
- The $L_1$ penalty forms a diamond-shaped constraint region in coefficient space.  
- The solution often lies on the boundary, where some coefficients are zero, leading to sparsity.  

**Example**:  
Given $X = \begin{bmatrix}1 & 1 \\ 1 & 2 \\ 1 & 3\end{bmatrix}$ and $y = \begin{bmatrix}1 \\ 2 \\ 2\end{bmatrix}$, and $\lambda = 0.5$:  
1. Construct the objective:  
   $$J(\beta) = \|y - X\beta\|^2 + 0.5(|\beta_1| + |\beta_2|)$$  

2. Solve using an algorithm (e.g., coordinate descent):  
   - Assume starting values $\beta_1 = \beta_2 = 0$.  
   - Iteratively optimize each $\beta_i$ while keeping others fixed.  

Result: Coefficients such as $\beta_1 = 0.5$, $\beta_2 = 0.4$ (example solution, computation varies with algorithm).  



**Comparison with Ridge Regression**:  

| Property               | Ridge Regression         | Lasso Regression                           |
| ---------------------- | ------------------------ | ------------------------------------------ |
| Regularization Type    | $L_2$ (squared) norm     | $L_1$ (absolute) norm                      |
| Effect on Coefficients | Shrinks all coefficients | Shrinks some coefficients to zero (sparse) |
| Feature Selection      | No                       | Yes                                        |

**Applications**:  
- High-dimensional datasets with many irrelevant features (e.g., gene expression data).  
- When both prediction accuracy and feature selection are important.  
- Models requiring interpretability by identifying the most relevant predictors.  