---
categories:
  - "[[Optimization]]"
  - "[[Method]]"
created: 2024-11-17 18:51
updated: 2024-11-17 18:51
---
**Definition**:  
The Lagrange multipliers method is a strategy for finding the extrema (maxima or minima) of a function $f(x)$ subject to equality constraints.  

Consider the problem:  
- Maximize or minimize $f(x)$ subject to $h_i(x) = 0$, $i = 1, \dots, m$,  
where $x = (x_1, x_2, \dots, x_n)$.  

**Lagrangian Function**:  
The Lagrangian is defined as:  
$$\mathcal{L}(x, \lambda) = f(x) + \sum_{i=1}^m \lambda_i h_i(x)$$  
where $\lambda_i$ are the Lagrange multipliers corresponding to the constraints $h_i(x) = 0$.  

**Necessary Conditions**:  
The extrema occur at points $(x^*, \lambda^*)$ satisfying:  
1. **Stationarity**:  
   $$\nabla_x \mathcal{L}(x, \lambda) = \nabla f(x) + \sum_{i=1}^m \lambda_i \nabla h_i(x) = 0$$  

2. **Primal Feasibility**:  
   $$h_i(x^*) = 0 \quad \text{for all } i$$  

**Interpretation**:  
- The gradients of the objective function $f(x)$ and the constraint functions $h_i(x)$ must align at the optimal point.  
- The Lagrange multipliers $\lambda_i$ represent the rate at which the optimal value of $f(x)$ changes with respect to small changes in the constraint $h_i(x)$.  

**Steps to Solve**:  
1. Construct the Lagrangian $\mathcal{L}(x, \lambda)$.  
2. Compute the partial derivatives $\frac{\partial \mathcal{L}}{\partial x_j}$ and $\frac{\partial \mathcal{L}}{\partial \lambda_i}$ for all $j$ and $i$.  
3. Solve the resulting system of equations:  
   $$\nabla_x \mathcal{L} = 0 \quad \text{and} \quad h_i(x) = 0.$$  

**Example**:  
Find the extrema of $f(x, y) = x^2 + y^2$ subject to $x + y - 1 = 0$.  

1. **Lagrangian**:  
   $$\mathcal{L}(x, y, \lambda) = x^2 + y^2 + \lambda(x + y - 1)$$  

2. **Equations**:  
   $$\frac{\partial \mathcal{L}}{\partial x} = 2x + \lambda = 0 \quad (1)$$  
   $$\frac{\partial \mathcal{L}}{\partial y} = 2y + \lambda = 0 \quad (2)$$  
   $$\frac{\partial \mathcal{L}}{\partial \lambda} = x + y - 1 = 0 \quad (3)$$  

3. **Solve**:  
   From (1) and (2): $x = y$.  
   From (3): $x + y = 1 \implies 2x = 1 \implies x = y = \frac{1}{2}$.  

4. **Result**:  
   The critical point is $\left(\frac{1}{2}, \frac{1}{2}\right)$ with $f\left(\frac{1}{2}, \frac{1}{2}\right) = \frac{1}{2}$.  

**Extensions**:  
- The method can handle multiple equality constraints by including additional multipliers.  
- For inequality constraints, the [[Karush-Kuhn-Tucker (KKT) Conditions]] conditions generalize the Lagrange method.