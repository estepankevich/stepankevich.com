---
categories:
  - "[[Data Science]]"
  - "[[Real Analysis]]"
  - "[[Method]]"
  - "[[Optimization]]"
  - "[[Algorithm]]"
created: 2024-11-17 20:43
updated: 2024-11-17 20:54
aliases\: Broyden-Fletcher-Goldfarb-Shanno Algorithm
---
**Definition**:  
The **BFGS algorithm** is a quasi-Newton optimization method used to minimize a differentiable scalar-valued function $f(x)$. It approximates the inverse of the [[Hessian matrix]] iteratively, avoiding the computational cost of explicitly calculating or inverting the Hessian.  

BFGS updates an approximation of the inverse Hessian matrix using information from gradients at successive iterations. It is widely used for unconstrained optimization problems and is robust and efficient for many applications.  

---

### **Key Idea**  

1. **Avoid Explicit Hessian Computation**:  
   Instead of directly computing the Hessian matrix $H_f(x)$, BFGS builds an approximation of the inverse Hessian, $B_k \approx H_f(x_k)^{-1}$, iteratively.  

2. **Quasi-Newton Update**:  
   The inverse Hessian approximation is updated based on gradient differences and step sizes between iterations.  

3. **Line Search**:  
   BFGS typically incorporates a line search to determine a suitable step size for each iteration.  

---

### **Algorithm**  

1. **Initialization**:  
   - Start with an initial guess $x_0 \in \mathbb{R}^n$.  
   - Initialize the inverse Hessian approximation as $B_0 = I$ (identity matrix).  
   - Compute the initial gradient $\nabla f(x_0)$.  

2. **Iterative Updates**:  
   For $k = 0, 1, 2, \dots$:  
   - Compute the search direction:  
     $$p_k = -B_k \nabla f(x_k).$$  

   - Perform a line search to find step size $\alpha_k$ that sufficiently reduces $f$:  
     $$x_{k+1} = x_k + \alpha_k p_k.$$  

   - Compute the gradient difference and step vector:  
     $$s_k = x_{k+1} - x_k, \quad y_k = \nabla f(x_{k+1}) - \nabla f(x_k).$$  

   - Update the inverse Hessian approximation $B_k$:  
     $$B_{k+1} = B_k + \frac{s_k s_k^\top}{s_k^\top y_k} - \frac{B_k y_k y_k^\top B_k}{y_k^\top B_k y_k}.$$  

3. **Convergence**:  
   Stop when the gradient norm $\|\nabla f(x_k)\|$ is below a predefined threshold.  

---

### **Key Formulas**  

1. **Search Direction**:  
   $$p_k = -B_k \nabla f(x_k).$$  

2. **Hessian Inverse Update Rule**:  
   $$B_{k+1} = B_k + \frac{s_k s_k^\top}{s_k^\top y_k} - \frac{B_k y_k y_k^\top B_k}{y_k^\top B_k y_k},$$  
   where:  
   - $s_k = x_{k+1} - x_k$: Change in position.  
   - $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$: Change in gradient.  

---

### **Advantages of BFGS**

1. **Efficiency**:  
   - Avoids the $O(n^3)$ cost of explicit Hessian computation and inversion.  
   - Updates the inverse Hessian approximation in $O(n^2)$ per iteration.  

2. **Robustness**:  
   - Converges quickly for well-behaved functions.  
   - Suitable for both small and medium-sized problems.  

3. **Superlinear Convergence**:  
   - Converges faster than gradient descent near the minimum due to better curvature approximation.  

---

### **Limitations of BFGS**

1. **Memory Requirements**:  
   - Storing and updating the inverse Hessian approximation requires $O(n^2)$ memory, which can be prohibitive for very high-dimensional problems.  

2. **Line Search Dependency**:  
   - Relies on an effective line search to ensure sufficient decrease in the objective function.  

3. **Ill-Conditioned Problems**:  
   - May struggle when the Hessian is ill-conditioned, though modifications like damped BFGS help mitigate this.  

---

### **Variants**

1. **Limited-Memory BFGS (L-BFGS)**:  
   - Stores only a few vectors to approximate the Hessian, reducing memory requirements to $O(n)$.  
   - Suitable for high-dimensional problems (e.g., training machine learning models).  

2. **Damped BFGS**:  
   - Modifies the update rule to ensure positive definiteness of $B_k$, improving stability.  

---

### **Example**  

#### Problem: Minimize $f(x) = x_1^2 + 4x_2^2$.  

1. **Gradient**:  
   $$\nabla f(x) = [2x_1, 8x_2]^\top.$$  

2. **Initialization**:  
   - Start with $x_0 = [1, 1]^\top$.  
   - Set $B_0 = I$.  

3. **First Iteration**:  
   - Compute search direction:  
     $$p_0 = -B_0 \nabla f(x_0) = -[1, 1]^\top.$$  

   - Perform line search to find $\alpha_0$:  
     $$\alpha_0 = \arg\min_\alpha f(x_0 + \alpha p_0).$$  

   - Update position:  
     $$x_1 = x_0 + \alpha_0 p_0.$$  

4. **Update $B_0$ to $B_1$ using $s_0$ and $y_0$.**  

---

### **Comparison with Other Methods**

| Method           | Hessian Use      | Memory Cost | Convergence Speed       | Use Case                  |
| ---------------- | ---------------- | ----------- | ----------------------- | ------------------------- |
| Gradient Descent | None             | Low         | Linear                  | Simple/large problems     |
| Newton's Method  | Explicit Hessian | High        | Quadratic (near optima) | Small problems            |
| BFGS             | Approx. Hessian  | Medium      | Superlinear             | Medium-sized problems     |
| L-BFGS           | Approx. Hessian  | Low         | Superlinear             | High-dimensional problems |

---

### **Conclusion**

The BFGS algorithm is a powerful and versatile tool for unconstrained optimization. It balances the accuracy of second-order methods with the efficiency of avoiding explicit Hessian computation, making it a cornerstone in optimization techniques for machine learning and scientific computing.