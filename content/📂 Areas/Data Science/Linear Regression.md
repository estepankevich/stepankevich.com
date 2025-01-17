---
categories:
  - "[[Data Science]]"
  - "[[Method]]"
created: 2024-11-17 19:01
updated: 2024-12-13 14:33
---
**Definition**:  
Linear regression models the relationship between a dependent variable $y$ and one or more independent variables $X$. For $m$ data points, the model predicts:  
$$\hat{y} = X\beta$$  
where:  
- $X \in \mathbb{R}^{m \times n}$ is the design matrix of features (including a column of ones for the intercept),  
- $\beta \in \mathbb{R}^n$ is the vector of model parameters,  
- $\hat{y} \in \mathbb{R}^m$ is the vector of predictions.  

The goal is to minimize the residual sum of squares (RSS):  
$$J(\beta) = \|y - X\beta\|^2 = (y - X\beta)^\top (y - X\beta)$$  

**Normal Equations**:  
The solution to minimizing $J(\beta)$ is obtained by solving the normal equations:  
$$X^\top X \beta = X^\top y$$  

The closed-form solution for $\beta$ is:  
$$\beta = (X^\top X)^{-1} X^\top y$$  
(if $X^\top X$ is invertible).  

**Derivation**:  
1. Start with the loss function:  
   $$J(\beta) = \|y - X\beta\|^2 = (y - X\beta)^\top (y - X\beta)$$  

2. Expand $J(\beta)$:  
   $$J(\beta) = y^\top y - 2y^\top X\beta + \beta^\top X^\top X\beta$$  

3. Take the gradient with respect to $\beta$:  
   $$\nabla_\beta J(\beta) = -2X^\top y + 2X^\top X\beta$$  

4. Set $\nabla_\beta J(\beta) = 0$:  
   $$-2X^\top y + 2X^\top X\beta = 0$$  
   $$X^\top X\beta = X^\top y$$

**Key Properties**:  
1. **Existence of Solution**:  
   - If $X^\top X$ is invertible, $\beta$ has a unique solution.  
   - If $X^\top X$ is singular, regularization (e.g., [[Ridge Regression]]) may be used.  

2. **Geometric Interpretation**:  
   The normal equations project $y$ onto the [[Column Space]] of $X$, yielding the best linear approximation of $y$.  

3. **Computational Complexity**:  
   Solving via the normal equations involves matrix inversion, with complexity $O(n^3)$. Gradient-based methods or QR decomposition can be more efficient for large $n$.  