---
categories:
  - "[[Data Science]]"
  - "[[Method]]"
created: 2024-11-17 19:01
updated: 2024-12-13 14:35
---
**Definition**:  
Ridge regression, also called $L_2$ regularized [[Linear Regression]], modifies the ordinary least squares (OLS) objective by adding a [[Regularization]] term to penalize large model coefficients. It addresses multicollinearity and prevents overfitting in linear regression.

**Objective Function**:  
The ridge regression minimizes:  
$$J(\beta) = \|y - X\beta\|^2 + \lambda \|\beta\|^2$$  
where:  
- $\|y - X\beta\|^2$ is the residual sum of squares,  
- $\|\beta\|^2 = \beta^\top \beta$ is the $L_2$ norm of the coefficients,  
- $\lambda \geq 0$ is the regularization parameter that controls the trade-off between fitting the data and keeping coefficients small.  

**Closed-Form Solution**:  
The ridge regression solution is derived using the normal equations:  
$$\beta = (X^\top X + \lambda I)^{-1} X^\top y$$  
where $I$ is the identity matrix.  

**Intuition**:  
- The term $\lambda \|\beta\|^2$ penalizes large coefficients, effectively shrinking them towards zero.  
- For $\lambda = 0$, ridge regression reduces to ordinary least squares.  
- For $\lambda \to \infty$, $\beta \to 0$ (shrinking coefficients completely).  

**Key Properties**:  
1. **Regularization Strength**:  
   - Larger $\lambda$ increases the penalty, leading to smaller coefficients and potentially underfitting.  
   - Smaller $\lambda$ reduces the penalty, approaching OLS and potentially overfitting.  

2. **Bias-Variance Trade-Off**:  
   - Ridge regression increases bias but reduces variance, improving the generalization of the model.  

3. **No Feature Elimination**:  
   Unlike Lasso regression, ridge regression does not perform variable selection; all coefficients are shrunk but not set to zero.  

4. **Stabilizes Inversion**:  
   The addition of $\lambda I$ ensures $(X^\top X + \lambda I)$ is invertible even if $X^\top X$ is singular (e.g., when features are highly collinear).  

**Gradient Descent Formulation**:  
The gradient of the ridge loss function is:  
$$\nabla_\beta J(\beta) = -2X^\top (y - X\beta) + 2\lambda \beta$$  
This can be used in iterative optimization methods when $n$ (number of features) is large.  


**Applications**:  
- Addressing multicollinearity in linear regression.  
- Regularizing models with a large number of features.  
- Situations where interpretability (non-zero coefficients) is desired over sparsity.