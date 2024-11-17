---
categories: 
created: 2024-11-17 20:11
updated: 2024-11-17 21:11
---
**Definition**:  
The **Rectified Linear Unit (ReLU)** is an activation function commonly used in neural networks. It is defined as:  
$$\text{ReLU}(x) = \max(0, x)$$  

For an input $x \in \mathbb{R}$:  
- If $x > 0$, $\text{ReLU}(x) = x$.  
- If $x \leq 0$, $\text{ReLU}(x) = 0$.  

**Visualization**:
![[A-visual-representation-of-the-paper-folding-metaphor-demonstrating-how-depth-allows.png]]

**Properties**:  

1. **Range**:  
   $$\text{ReLU}(x) \in [0, \infty)$$  

2. **Non-Linearity**:  
   ReLU introduces non-linearity to the network, allowing it to approximate non-linear functions.  

3. **Derivative**:  
   The derivative of ReLU is:  
   $$\text{ReLU}'(x) = \begin{cases} 
   1 & \text{if } x > 0, \\ 
   0 & \text{if } x \leq 0. 
   \end{cases}$$  
   Note: At $x = 0$, the derivative is undefined, but it is typically treated as 0 or chosen arbitrarily during training.  

4. **Sparse Activation**:  
   ReLU outputs $0$ for negative inputs, resulting in sparse activations, which can improve computation efficiency and model interpretability.  

**Advantages**:  
1. **Computational Efficiency**:  
   Simple computation compared to other activation functions like sigmoid or tanh.  

2. **Avoids [[Vanishing and Exploding Gradient Problem|Vanishing]] Gradient**:  
   Unlike sigmoid and tanh, ReLU does not saturate for positive inputs, reducing the likelihood of vanishing gradients.  

3. **Biologically Inspired**:  
   Resembles activation patterns in biological neurons, which fire only when the input exceeds a certain threshold.  

**Disadvantages**:  
1. **Dying ReLU Problem**:  
   Neurons with negative inputs always output 0 and stop contributing to learning, leading to "dead" neurons.  

2. **Unbounded Outputs**:  
   Large positive inputs can lead to unbounded outputs, which might cause instability in some networks.  

**Variants**:  

1. **Leaky ReLU**:  
   Allows a small gradient for negative inputs to mitigate the dying ReLU problem:  
   $$\text{Leaky ReLU}(x) = \begin{cases} 
   x & \text{if } x > 0, \\ 
   \alpha x & \text{if } x \leq 0, 
   \end{cases}$$  
   where $\alpha \in (0, 1)$ is a small slope (e.g., $\alpha = 0.01$).  

2. **Parametric ReLU (PReLU)**:  
   Generalizes Leaky ReLU by learning the slope $\alpha$ during training:  
   $$\text{PReLU}(x) = \begin{cases} 
   x & \text{if } x > 0, \\ 
   \alpha x & \text{if } x \leq 0. 
   \end{cases}$$  

3. **Exponential Linear Unit (ELU)**:  
   Smooths the transition for negative inputs:  
   $$\text{ELU}(x) = \begin{cases} 
   x & \text{if } x > 0, \\ 
   \alpha (e^x - 1) & \text{if } x \leq 0, 
   \end{cases}$$  
   where $\alpha > 0$.  

4. **Scaled Exponential Linear Unit (SELU)**:  
   A self-normalizing activation function that keeps mean and variance stable:  
   $$\text{SELU}(x) = \lambda \begin{cases} 
   x & \text{if } x > 0, \\ 
   \alpha (e^x - 1) & \text{if } x \leq 0. 
   \end{cases}$$  

**Applications**:  
1. **Deep Neural Networks**:  
   Widely used in deep learning architectures like convolutional neural networks (CNNs) and fully connected networks.  

2. **Object Recognition**:  
   Integral to models for image recognition and classification tasks (e.g., AlexNet, ResNet).  

3. **Reinforcement Learning**:  
   Often used in deep reinforcement learning models.  

**Comparison to Sigmoid and Tanh**:  

| Property           | ReLU                    | Sigmoid              | Tanh      |
| ------------------ | ----------------------- | -------------------- | --------- |
| Range              | $[0, \infty)$           | $(0, 1)$             | $(-1, 1)$ |
| Non-linearity      | Yes                     | Yes                  | Yes       |
| Saturation         | For $x \leq 0$          | For large $          | x         |
| Computational Cost | Low                     | High                 | High      |
| Gradient Behavior  | Non-vanishing for $x>0$ | Vanishes for large $ | x         |

**Conclusion**:  
ReLU is the default activation function for most deep learning models due to its simplicity, efficiency, and effectiveness, though variants like Leaky ReLU and ELU are used to address its limitations.