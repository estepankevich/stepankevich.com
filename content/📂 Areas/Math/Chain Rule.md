---
categories:
  - "[[Real Analysis]]"
  - "[[Theorem]]"
created: 2024-11-17 20:19
updated: 2024-11-17 20:19
---
**Chain Rule**  

**Definition**:  
The chain rule is a fundamental principle in calculus used to compute the derivative of a composite function. If a function $y$ depends on $u$, and $u$ depends on $x$, the derivative of $y$ with respect to $x$ is:  
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$  

---

### **General Form**:  
For functions composed of multiple layers:  
$$y = f(g(h(x))),$$  
the derivative is computed as:  
$$\frac{dy}{dx} = \frac{df}{dg} \cdot \frac{dg}{dh} \cdot \frac{dh}{dx}.$$  

---

### **Vectorized Form**:  
For functions of multiple variables, the chain rule extends to partial derivatives. If $y = f(u)$ where $u = g(x)$ and $x \in \mathbb{R}^n$, then:  
$$\frac{\partial y}{\partial x} = \frac{\partial y}{\partial u} \cdot \frac{\partial u}{\partial x},$$  
where:  
- $\frac{\partial u}{\partial x}$ is the [[Jacobian Matrix]] of $g(x)$.  
- $\frac{\partial y}{\partial u}$ is the gradient or Jacobian of $f(u)$.  

---

### **Example**:  

#### Scalar Example:  
If $y = (3x^2 + 2x + 1)^5$, let $u = 3x^2 + 2x + 1$. Then:  
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}.$$  
- $\frac{dy}{du} = 5u^4$,  
- $\frac{du}{dx} = 6x + 2$.  

Substitute $u$:  
$$\frac{dy}{dx} = 5(3x^2 + 2x + 1)^4 \cdot (6x + 2).$$  

#### Vector Example:  
If $y = \|x\|^2 = x^\top x$ and $x = [x_1, x_2]^\top$, then:  
$$\frac{\partial y}{\partial x} = \frac{\partial y}{\partial u} \cdot \frac{\partial u}{\partial x},$$  
where $u = x^\top x$.  
- $\frac{\partial y}{\partial u} = 1$,  
- $\frac{\partial u}{\partial x} = 2x$.  

Thus:  
$$\frac{\partial y}{\partial x} = 2x.$$  