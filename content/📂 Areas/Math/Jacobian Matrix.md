---
categories:
  - "[[Real Analysis]]"
  - "[[Definition]]"
created: 2024-11-17 20:21
updated: 2024-11-17 20:21
---
**Jacobian Matrix**  

**Definition**:  
The Jacobian matrix is a matrix of all first-order partial derivatives of a vector-valued function. If a function $f: \mathbb{R}^n \to \mathbb{R}^m$ maps $n$ input variables to $m$ outputs, the Jacobian matrix is defined as:  

$$
J_f(x) = \begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{bmatrix},
$$

where:
- $f(x) = [f_1(x), f_2(x), \dots, f_m(x)]^\top$ is the output vector.  
- $x = [x_1, x_2, \dots, x_n]^\top$ is the input vector.

The $(i, j)$ entry of $J_f(x)$ is $\frac{\partial f_i}{\partial x_j}$.

---

### **Properties**:  

1. **Dimensions**:  
   The Jacobian matrix has dimensions $m \times n$:
   - $m$: Number of output components.
   - $n$: Number of input variables.

2. **Linear Approximation**:  
   The Jacobian matrix is used to linearly approximate $f(x)$ near a point $x_0$:  
   $$f(x) \approx f(x_0) + J_f(x_0) (x - x_0).$$  

3. **Chain Rule (Matrix Form)**:  
   If $f: \mathbb{R}^n \to \mathbb{R}^m$ and $g: \mathbb{R}^p \to \mathbb{R}^n$, then the Jacobian of the composition $h(x) = f(g(x))$ is:  
   $$J_h(x) = J_f(g(x)) \cdot J_g(x).$$  

4. **Special Cases**:  
   - If $m = 1$ (scalar output), $J_f(x)$ reduces to the gradient vector:  
     $$J_f(x) = \nabla f(x) = \begin{bmatrix} \frac{\partial f}{\partial x_1} & \cdots & \frac{\partial f}{\partial x_n} \end{bmatrix}.$$  
   - If $n = 1$ (scalar input), $J_f(x)$ is a column vector of derivatives.  

---

### **Examples**:

1. **Scalar Function**:  
   Let $f(x, y) = [x^2 + y, e^x + \sin(y)]^\top$. The Jacobian is:  
   $$
   J_f(x, y) = \begin{bmatrix}
   \frac{\partial (x^2 + y)}{\partial x} & \frac{\partial (x^2 + y)}{\partial y} \\
   \frac{\partial (e^x + \sin(y))}{\partial x} & \frac{\partial (e^x + \sin(y))}{\partial y}
   \end{bmatrix}
   = \begin{bmatrix}
   2x & 1 \\
   e^x & \cos(y)
   \end{bmatrix}.
   $$

2. **Multivariable Function**:  
   Let $f(x) = [x_1 x_2, x_1^2 + x_2^2, e^{x_1 - x_2}]^\top$. The Jacobian is:  
   $$
   J_f(x) = \begin{bmatrix}
   \frac{\partial (x_1 x_2)}{\partial x_1} & \frac{\partial (x_1 x_2)}{\partial x_2} \\
   \frac{\partial (x_1^2 + x_2^2)}{\partial x_1} & \frac{\partial (x_1^2 + x_2^2)}{\partial x_2} \\
   \frac{\partial (e^{x_1 - x_2})}{\partial x_1} & \frac{\partial (e^{x_1 - x_2})}{\partial x_2}
   \end{bmatrix}
   = \begin{bmatrix}
   x_2 & x_1 \\
   2x_1 & 2x_2 \\
   e^{x_1 - x_2} & -e^{x_1 - x_2}
   \end{bmatrix}.
   $$

---

### **Numerical Stability**:  
For high-dimensional functions or datasets, numerical computation of the Jacobian may become computationally expensive. 