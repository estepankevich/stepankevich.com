---
categories:
  - "[[Optimization]]"
created: 2024-11-28 20:02
updated: 2024-12-07 11:59
---
### **Definition**
Linear Programming (LP) is the optimization of a linear objective function subject to a set of linear equality and inequality constraints. The general form of an LP problem is:

#### **Primal Problem**:
$$
\text{maximize/minimize } \mathbf{c}^T \mathbf{x},
$$
subject to:
$$
\mathbf{A} \mathbf{x} \leq \mathbf{b}, \quad \mathbf{x} \geq \mathbf{0},
$$
where:
- $\mathbf{x} \in \mathbb{R}^n$ is the decision variable,
- $\mathbf{c} \in \mathbb{R}^n$ is the objective coefficient vector,
- $\mathbf{A} \in \mathbb{R}^{m \times n}$ is the constraint matrix,
- $\mathbf{b} \in \mathbb{R}^m$ is the constraint bounds.

---

### **Dual Problem**
Every LP problem has a corresponding **dual problem**. The dual of the primal maximization problem is a minimization problem, and vice versa.

#### **Dual Problem**:
$$
\text{minimize } \mathbf{b}^T \mathbf{y},
$$
subject to:
$$
\mathbf{A}^T \mathbf{y} \geq \mathbf{c}, \quad \mathbf{y} \geq \mathbf{0},
$$
where:
- $\mathbf{y} \in \mathbb{R}^m$ is the dual variable.

#### **Strong Duality**:
If the primal problem has an optimal solution, then the dual problem also has an optimal solution, and their objective values are equal:
$$
\mathbf{c}^T \mathbf{x} = \mathbf{b}^T \mathbf{y}.
$$

---

### **Methods for Solving LP**

#### **1. Simplex Method**
- **Approach**: 
  Starts at a vertex (corner point) of the feasible region and iteratively moves to an adjacent vertex along an edge, improving the objective value at each step.
- **Key Features**:
  - Works on the edges of the polytope defined by constraints.
  - Efficient in practice for most problems, though its worst-case complexity is exponential.
- **Applications**:
  - Industrial optimization (e.g., resource allocation, scheduling).
  - Transportation problems.

#### **2. Karmarkar's Algorithm (Interior-Point Method)**
- **Approach**:
  Operates within the interior of the feasible region using gradients and calculus, iteratively moving toward the optimal solution.
- **Key Features**:
  - Polynomial-time complexity in the worst case.
  - More suited for large-scale problems compared to the simplex method.
- **Applications**:
  - Optimization in large-scale data systems (e.g., network flow optimization, machine learning).

---

### **Key Concepts**

#### **Feasible Region**:
The set of points $\mathbf{x}$ satisfying the constraints $\mathbf{A} \mathbf{x} \leq \mathbf{b}$ and $\mathbf{x} \geq \mathbf{0}$. This region is a convex polytope.

#### **Optimal Solution**:
- Lies at a vertex of the feasible region for bounded problems (simplex exploits this property).
- The dual solution $\mathbf{y}$ can also provide insight into the sensitivity of the primal solution.

#### **Duality**:
- Solving the primal automatically solves the dual.
- Provides bounds on the optimal value and ensures numerical stability in computations.

---

### **Example**

#### **Primal Problem**:
$$
\text{maximize } 3x_1 + 5x_2,
$$
subject to:
$$
x_1 + 2x_2 \leq 6, \quad 3x_1 + 2x_2 \leq 12, \quad x_1, x_2 \geq 0.
$$

#### **Dual Problem**:
$$
\text{minimize } 6y_1 + 12y_2,
$$
subject to:
$$
y_1 + 3y_2 \geq 3, \quad 2y_1 + 2y_2 \geq 5, \quad y_1, y_2 \geq 0.
$$

#### **Solution**:
Using the simplex method, the optimal solution for the primal problem is:
$$
x_1 = 2, \quad x_2 = 2, \quad \text{optimal value } = 3(2) + 5(2) = 16.
$$

For the dual problem:
$$
y_1 = 1, \quad y_2 = 2, \quad \text{optimal value } = 6(1) + 12(2) = 16.
$$

Strong duality confirms the solutions are consistent.