---
categories:
  - "[[Functional analysis]]"
  - "[[Definition]]"
created: 2024-12-04 17:14
updated: 2024-12-04 17:14
---
## **Definition**

### **Continuous Convolution**
The **convolution** of two functions $f(t)$ and $g(t)$, denoted as $(f * g)(t)$, is defined as:
$$
(f * g)(t) = \int_{-\infty}^\infty f(\tau) g(t - \tau) \, d\tau.
$$

### **Discrete Convolution**
For discrete sequences $f[n]$ and $g[n]$, the convolution is defined as:
$$
(f * g)[n] = \sum_{k=-\infty}^\infty f[k] g[n - k].
$$
### **Key Intuition**
1. **Sliding and Summing**:  
   - In continuous convolution, the function $g(t - \tau)$ represents a flipped and shifted version of $g(t)$ that is "slid" over $f(t)$. At each position, the product of overlapping values is summed.
   - In discrete convolution, the same idea applies, with summation replacing integration.

2. **Output Interpretation**:  
   The output of the convolution $(f * g)(t)$ represents how the shape of $g(t)$ "modulates" the shape of $f(t)$.

### **Properties**
1. **Commutativity**:  
   $$
   f * g = g * f.
   $$

2. **Associativity**:  
   $$
   (f * g) * h = f * (g * h).
   $$

3. **Distributivity**:  
   $$
   f * (g + h) = (f * g) + (f * h).
   $$

4. **Scaling**:  
   $$
   a(f * g) = (af) * g = f * (ag), \quad a \in \mathbb{R}.
   $$

5. **Shift Invariance**:  
   For $g(t - t_0)$, convolution shifts the output by $t_0$:
   $$
   (f * g(t - t_0))(t) = (f * g)(t - t_0).
   $$

### **Applications**
1. **[[Signal Processing]]**:  
   Describes the output of a linear time-invariant (LTI) system when an input signal $f(t)$ is passed through a system with impulse response $g(t)$.

2. **Image Processing**:  
   Used for filtering operations, such as blurring and edge detection.

3. **[[Data Science]]**:  
   Core operation in [[Convolutional Neural Networks (CNNs)]].

4. **Physics**:  
   Models systems where the output depends on the interaction of two functions (e.g., Green's function in differential equations).