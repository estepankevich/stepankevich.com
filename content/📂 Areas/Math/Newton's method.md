---
categories:
  - "[[Real Analysis]]"
  - "[[Optimization]]"
  - "[[Data Science]]"
  - "[[Method]]"
  - "[[Algorithm]]"
created: 2024-11-17 20:43
updated: 2024-11-17 20:43
---
**Newton's Method**  

**Definition**:  
Newton's method is an iterative optimization algorithm used to find critical points (e.g., minima, maxima, or saddle points) of a differentiable function. It leverages seond-order Taylor approximations and the **[[Hessian matrix]]** to refine estimates of the optimal solution.  

For unconstrained optimization of a scalar-valued function $f(x)$, Newton's method updates the parameter $x$ as:  
$$x_{k+1} = x_k - H_f(x_k)^{-1} \nabla f(x_k),$$  
where:  
- $x_k$: Current estimate of the solution.  
- $\nabla f(x_k)$: Gradient (first derivative) of $f$ at $x_k$.  
- $H_f(x_k)$: Hessian matrix (second derivative) of $f$ at $x_k$.  

---
### **Key Concepts**

1. **Taylor Approximation**:  
   Newton's method is based on approximating $f(x)$ around a point $x_k$ using a second-order Taylor expansion:  
   $$f(x) \approx f(x_k) + \nabla f(x_k)^\top (x - x_k) + \frac{1}{2} (x - x_k)^\top H_f(x_k) (x - x_k).$$  
   The minimum of this quadratic approximation occurs at:  
   $$x = x_k - H_f(x_k)^{-1} \nabla f(x_k).$$  

2. **Gradient and Hessian**:  
   - The gradient $\nabla f(x)$ points in the direction of the steepest ascent/descent.  
   - The Hessian $H_f(x)$ provides curvature information, refining the step direction and size.  

---
### **Algorithm**  

1. **Initialize**: Choose an initial guess $x_0$.  
2. **Iterate**: Repeat until convergence:  
   $$x_{k+1} = x_k - H_f(x_k)^{-1} \nabla f(x_k).$$  
3. **Convergence Criterion**: Stop when:  
   $$\|\nabla f(x_k)\| < \epsilon,$$  
   where $\epsilon$ is a small tolerance value.  

---

### **Advantages**  

1. **Quadratic Convergence**:  
   - Near a critical point, convergence is very fast compared to gradient descent.  

2. **Accurate Steps**:  
   - Incorporates curvature information, resulting in better step directions and sizes.  

---

### **Disadvantages**  

1. **Computational Cost**:  
   - Computing and inverting the Hessian matrix is expensive for high-dimensional problems ($O(n^3)$ complexity).  

2. **Not Always Stable**:  
   - If the Hessian is not positive definite, the method may diverge.  

3. **Initialization Sensitivity**:  
   - Poor initial guesses can lead to slow convergence or divergence.  

---

### **Variants of Newton's Method**

1. **Modified Newton's Method**:  
   - Adds a damping factor to improve stability:  
     $$x_{k+1} = x_k - \alpha H_f(x_k)^{-1} \nabla f(x_k),$$  
     where $\alpha \in (0, 1]$ is the step size.  

2. **Quasi-Newton Methods**:  
   - Approximate the Hessian iteratively to reduce computational cost. Examples:  
     - BFGS (Broyden-Fletcher-Goldfarb-Shanno).  
     - L-BFGS (Limited-memory BFGS) for large-scale problems.  

3. **Hessian-Free Optimization**:  
   - Avoids explicit computation of the Hessian by using matrix-free methods like conjugate gradient.  

---

### **Comparison to Gradient Descent**

| Feature            | Newton's Method                          | Gradient Descent           |
| ------------------ | ---------------------------------------- | -------------------------- |
| Convergence Speed  | Quadratic near the minimum               | Linear                     |
| Step Size          | Adaptive (from Hessian)                  | Fixed or decaying          |
| Computational Cost | High (Hessian computation and inversion) | Low                        |
| Applicability      | Requires twice-differentiable functions  | First-order differentiable |

---

Newton's method is powerful for optimization, particularly for problems where second-order information is computationally feasible. For large-scale problems, approximations like quasi-Newton methods are often used to balance efficiency and accuracy.