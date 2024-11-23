---
categories:
  - "[[Data Science]]"
  - "[[Definition]]"
created: 2024-11-17 20:11
updated: 2024-11-19 15:18
---
**Definition**:  
The Rectified Linear Unit (ReLU) activation function is defined as:  
$$
\text{ReLU}(x) = \max(0, x)
$$  
---

### **Properties**  
1. **Piecewise Linear**:  
   - Linear for $x > 0$.  
   - Constant at $0$ for $x \leq 0$.  

2. **Range**:  
   - Outputs values in $[0, \infty)$.  

3. **Non-linear Activation**:  
   - Despite being linear for $x > 0$, it introduces non-linearity by zeroing out negative inputs, enabling the network to learn complex mappings.  

4. **Sparse Activation**:  
   - Only neurons with $x > 0$ are activated, leading to efficient representations.  

5. **Gradient Behavior**:  
   - Derivative:  
     $$
     \frac{d}{dx}\text{ReLU}(x) = 
     \begin{cases} 
     1 & x > 0 \\ 
     0 & x \leq 0 
     \end{cases}
     $$
   - Gradients are preserved for $x > 0$, mitigating the vanishing gradient problem.

---

### **Advantages**  
1. **Computational Efficiency**:  
   - Simple to compute: requires only comparison and a max operation.  

2. **Mitigation of [[Vanishing and Exploding Gradient Problem|Vanishing Gradients]]**:  
   - Unlike sigmoid or tanh, ReLU retains gradients for positive activations, enabling deeper networks to train more effectively.  

3. **Encourages Sparse Representations**:  
   - Zeroing out negative inputs results in fewer active neurons, improving model interpretability and reducing overfitting.  

---

### **Disadvantages**  
1. **Dying ReLU Problem**:  
   - Neurons with $x \leq 0$ produce zero gradients, becoming permanently inactive during training.  
   - Common in poorly initialized or overly large learning rate scenarios.  

2. **Unbounded Outputs**:  
   - Can lead to exploding activations, especially in deeper layers if not managed with techniques like normalization.  

3. **Sensitivity to Initialization**:  
   - Proper weight initialization (e.g., He initialization) is crucial for preventing gradient issues.  

---

**Visualization**:
![[A-visual-representation-of-the-paper-folding-metaphor-demonstrating-how-depth-allows.png]]

---
### **Variants**  
1. **Leaky ReLU**:  
   - Allows a small negative slope for $x \leq 0$ to prevent dying neurons:  
    $$
     \text{Leaky ReLU}(x) = \begin{cases} 
     x & x > 0 \\ 
     \alpha x & x \leq 0 
     \end{cases}
     $$  
   - Typical value of $\alpha$ is $0.01$.  

2. **Parametric ReLU (PReLU)**:  
   - Generalizes Leaky ReLU by making $\alpha$ a learnable parameter.  

3. **Exponential Linear Unit (ELU)**:  
   - Smooths the transition for $x \leq 0$:  
    $$
     \text{ELU}(x) = \begin{cases} 
     x & x > 0 \\ 
     \alpha (e^x - 1) & x \leq 0 
     \end{cases}
     $$  
   - Provides non-zero gradients for negative inputs and a bounded range for negative outputs.  

4. **Scaled Exponential Linear Unit (SELU)**:  
   - A self-normalizing variant designed to maintain a mean and variance close to $0$ and $1$, respectively.  

5. **Maxout**:  
   - Outputs the maximum of multiple linear functions:  
    $$\text{Maxout}(x) = \max(w_1^T x + b_1, w_2^T x + b_2)$$
      
   - Highly flexible but computationally expensive.  

