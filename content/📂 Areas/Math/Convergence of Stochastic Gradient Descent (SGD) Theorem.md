---
categories:
  - "[[Data Science]]"
  - "[[Theorem]]"
  - "[[Optimization]]"
created: 2024-11-29 13:18
updated: 2024-12-04 17:08
---
### **Setting**
Consider the problem of minimizing a convex function $f(\mathbf{x})$ over a domain $\mathcal{X} \subseteq \mathbb{R}^d$:
$$
\min_{\mathbf{x} \in \mathcal{X}} f(\mathbf{x}),
$$
where $f(\mathbf{x}) = \mathbb{E}_{\xi}[F(\mathbf{x}, \xi)]$, and $F(\mathbf{x}, \xi)$ is a stochastic estimate of the objective function.

[[Stochastic Gradient Descent (SGD)]]) updates the parameter $\mathbf{x}$ as:
$$
\mathbf{x}_{k+1} = \mathbf{x}_k - \eta_k \nabla F(\mathbf{x}_k, \xi_k),
$$
where $\eta_k$ is the learning rate and $\xi_k$ is a sample from the data distribution.

---

### **Convergence Theorem (Convex Case)**
If $f(\mathbf{x})$ is [[Convex Function]] and satisfies [[Lipschitz condition]] with constant $L$, and the stochastic gradients $\nabla F(\mathbf{x}, \xi)$ have bounded variance $\sigma^2$, then SGD satisfies the following convergence guarantee under appropriate step sizes $\eta_k$:

1. **Step Size (Learning Rate)**:  
   Choose a diminishing learning rate $\eta_k = \frac{\alpha}{k + 1}$, where $\alpha > 0$ is a constant.

2. **Convergence Result**:  
   The expected function value converges as:
   $$
   \mathbb{E}[f(\bar{\mathbf{x}}_K)] - f(\mathbf{x}^*) \leq \frac{\|\mathbf{x}_1 - \mathbf{x}^*\|_2^2}{2 \alpha K} + \frac{\alpha L^2 \sigma^2}{2},
   $$
   where $\bar{\mathbf{x}}_K = \frac{1}{K} \sum_{k=1}^K \mathbf{x}_k$ is the average iterate, and $\mathbf{x}^*$ is the optimal solution.

---

### **Key Assumptions**
1. **Convexity**:  
   $f(\mathbf{x})$ is convex, i.e., for all $\mathbf{x}, \mathbf{y} \in \mathcal{X}$:
   $$
   f(\mathbf{y}) \geq f(\mathbf{x}) + \nabla f(\mathbf{x})^T (\mathbf{y} - \mathbf{x}).
   $$

2. **Lipschitz Continuity**:  
   $\|\nabla f(\mathbf{x})\|_2 \leq L$ for all $\mathbf{x} \in \mathcal{X}$.

3. **Bounded Variance**:  
   The stochastic gradients have bounded variance:
   $$
   \mathbb{E}[\|\nabla F(\mathbf{x}, \xi) - \nabla f(\mathbf{x})\|_2^2] \leq \sigma^2, \quad \forall \mathbf{x} \in \mathcal{X}.
   $$

---

### **Convergence Theorem (Strongly Convex Case)**
If $f(\mathbf{x})$ is strongly convex with constant $\mu > 0$ and the same assumptions on Lipschitz continuity and variance hold, SGD achieves a faster convergence rate:

1. **Step Size**:  
   Use a diminishing step size $\eta_k = \frac{\alpha}{k}$, with $\alpha > 1/\mu$.

2. **Convergence Result**:  
   The expected function value satisfies:
   $$
   \mathbb{E}[f(\mathbf{x}_K)] - f(\mathbf{x}^*) \leq \frac{C}{K},
   $$
   where $C$ depends on the initial distance to the optimum, the Lipschitz constant $L$, and the variance $\sigma^2$.

---

### **Interpretation**
1. For convex functions, the convergence is **sublinear** ($O(1/K)$).  
2. For strongly convex functions, the convergence is **linear in expectation** ($O(\log K)$ for the iterates).  
3. The diminishing learning rate balances convergence speed with noise suppression from the stochastic gradient.