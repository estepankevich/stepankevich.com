---
categories:
  - "[[Linear algebra]]"
  - "[[Cheat Sheet]]"
created: 2024-11-27 00:01
updated: 2024-12-04 17:03
---
### **1. Scalar with Respect to a Vector**

1. **Gradient of a Linear Function**  
   $f(\mathbf{x}) = \mathbf{a}^T \mathbf{x}$  
   $$
   \nabla_{\mathbf{x}} f = \mathbf{a}.
   $$

2. **Gradient of a Quadratic Function**  
   $f(\mathbf{x}) = \frac{1}{2} \mathbf{x}^T \mathbf{A} \mathbf{x}$ (where $\mathbf{A}$ is symmetric)  
   $$
   \nabla_{\mathbf{x}} f = \mathbf{A} \mathbf{x}.
   $$

3. **Gradient of a Norm**  
   $f(\mathbf{x}) = \|\mathbf{x}\|_2 = \sqrt{\mathbf{x}^T \mathbf{x}}$  
   $$
   \nabla_{\mathbf{x}} f = \frac{\mathbf{x}}{\|\mathbf{x}\|_2}.
   $$

4. **Gradient of the Dot Product**  
   $f(\mathbf{x}) = \mathbf{a}^T \mathbf{x}$  
   $$
   \nabla_{\mathbf{x}} f = \mathbf{a}.
   $$

5. **Gradient of the Log-Sum-Exp Function**  
   $f(\mathbf{x}) = \log \left( \sum_{i} e^{x_i} \right)$  
   $$
   \nabla_{\mathbf{x}} f = \frac{\exp(\mathbf{x})}{\sum_{i} \exp(x_i)}.
   $$

---

### **2. Vector with Respect to a Vector**

1. **Derivative of a Vector-Vector Product**  
   $\mathbf{f}(\mathbf{x}) = \mathbf{A} \mathbf{x}$  
   $$
   \frac{\partial \mathbf{f}}{\partial \mathbf{x}} = \mathbf{A}.
   $$

2. **Derivative of a Norm-Squared**  
   $f(\mathbf{x}) = \|\mathbf{x}\|_2^2 = \mathbf{x}^T \mathbf{x}$  
   $$
   \nabla_{\mathbf{x}} f = 2\mathbf{x}.
   $$

---

### **3. Scalar with Respect to a Matrix**

1. **Derivative of Trace**  
   $f(\mathbf{A}) = \text{tr}(\mathbf{A})$  
   $$
   \frac{\partial f}{\partial \mathbf{A}} = \mathbf{I}.
   $$

2. **Derivative of a Quadratic Form**  
   $f(\mathbf{A}) = \mathbf{x}^T \mathbf{A} \mathbf{x}$  
   $$
   \frac{\partial f}{\partial \mathbf{A}} = \mathbf{x} \mathbf{x}^T.
   $$

3. **Derivative of Trace with Matrix Multiplication**  
   $f(\mathbf{A}) = \text{tr}(\mathbf{A} \mathbf{B})$  
   $$
   \frac{\partial f}{\partial \mathbf{A}} = \mathbf{B}^T.
   $$

---

### **4. Matrix with Respect to a Matrix**

1. **Derivative of a Matrix Product**  
   $\mathbf{C} = \mathbf{A} \mathbf{B}$  
   $$
   \frac{\partial \mathbf{C}}{\partial \mathbf{A}} = \mathbf{B}^T.
   $$

2. **Derivative of a Quadratic Form**  
   $f(\mathbf{A}) = \text{tr}(\mathbf{A}^T \mathbf{B} \mathbf{A})$  
   $$
   \frac{\partial f}{\partial \mathbf{A}} = \mathbf{B} \mathbf{A} + \mathbf{B}^T \mathbf{A}.
   $$

---

### **5. Special Functions**

1. **[[Softmax Function]]**  
   $\sigma(\mathbf{x})_i = \frac{e^{x_i}}{\sum_{j} e^{x_j}}$  
   $$
   \frac{\partial \sigma(\mathbf{x})_i}{\partial x_j} = \sigma(\mathbf{x})_i (\delta_{ij} - \sigma(\mathbf{x})_j).
   $$

2. **[[Sigmoid Function]]**  
   $s(x) = \frac{1}{1 + e^{-x}}$  
   $$
   \frac{\partial s(x)}{\partial x} = s(x)(1 - s(x)).
   $$