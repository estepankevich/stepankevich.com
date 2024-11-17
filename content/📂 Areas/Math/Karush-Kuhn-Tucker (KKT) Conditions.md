---
categories:
  - "[[Optimization]]"
  - "[[Method]]"
created: 2024-11-17 18:51
updated: 2024-11-17 18:51
---
**Definition**:  
The Karush-Kuhn-Tucker (KKT) conditions are necessary (and sometimes sufficient) conditions for a solution to be optimal in a nonlinear optimization problem with constraints.  

The general problem:  
Minimize $f(x)$ subject to:  
- Equality constraints: $h_i(x) = 0, \, i = 1, \dots, m$,  
- Inequality constraints: $g_j(x) \leq 0, \, j = 1, \dots, p$.  

**KKT Conditions**:  
Let $x^*$ be a candidate solution, and let $\lambda_i$ and $\mu_j$ be the Lagrange multipliers for the equality and inequality constraints, respectively. The KKT conditions are:  

1. **Stationarity**:  
   $$\nabla f(x^*) + \sum_{i=1}^m \lambda_i \nabla h_i(x^*) + \sum_{j=1}^p \mu_j \nabla g_j(x^*) = 0$$  

2. **Primal Feasibility**:  
   $$h_i(x^*) = 0 \quad \text{for all } i$$  
   $$g_j(x^*) \leq 0 \quad \text{for all } j$$  

3. **Dual Feasibility**:  
   $$\mu_j \geq 0 \quad \text{for all } j$$  

4. **Complementary Slackness**:  
   $$\mu_j g_j(x^*) = 0 \quad \text{for all } j$$  
   (If $\mu_j > 0$, then $g_j(x^*) = 0$; if $g_j(x^*) < 0$, then $\mu_j = 0$.)  

**Intuition**:  
The KKT conditions generalize the [[Lagrange Multipliers Method]] to handle inequality constraints.  
- **Stationarity** ensures that $x^*$ is a critical point of the Lagrangian function.  
- **Primal feasibility** ensures that $x^*$ satisfies the original constraints.  
- **Dual feasibility** ensures non-negativity of the multipliers for inequality constraints.  
- **Complementary slackness** couples the satisfaction of inequality constraints with their associated multipliers.  

**Applications**:  
- Convex optimization: For convex problems, the KKT conditions are both necessary and sufficient for optimality.  
- Non-convex optimization: KKT conditions are necessary, but not always sufficient.  

**Lagrangian Function**:  
The KKT conditions derive from the Lagrangian function:  
$$\mathcal{L}(x, \lambda, \mu) = f(x) + \sum_{i=1}^m \lambda_i h_i(x) + \sum_{j=1}^p \mu_j g_j(x)$$  

**Special Case (Unconstrained Problems)**:  
If there are no constraints, the KKT conditions reduce to $\nabla f(x) = 0$.