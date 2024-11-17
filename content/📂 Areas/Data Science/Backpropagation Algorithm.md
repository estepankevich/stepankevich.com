---
created: 2024-11-17 20:18
updated: 2024-11-17 20:28
categories:
  - "[[Data Science]]"
  - "[[Algorithm]]"
---
**Definition**:  
Backpropagation is an algorithm used to train neural networks by computing the gradient of the loss function with respect to the network’s weights and biases. It applies the [[Chain Rule]] of calculus to efficiently propagate errors from the output layer back to the earlier layers, enabling gradient-based optimization methods like [[Stochastic Gradient Descent (SGD)]].  

---

### **Steps of Backpropagation**  

1. **Forward Pass**:  
   Compute the predictions of the network for given inputs and calculate the loss.  

2. **Backward Pass** (Gradient Computation):  
   - Compute the gradient of the loss with respect to the outputs of each layer (starting from the last layer).  
   - Use the chain rule to propagate gradients back through the network to compute the gradients of the loss with respect to the weights and biases of each layer.  

3. **Update Parameters**:  
   Use the computed gradients to update the weights and biases, typically using gradient descent:  
   $$w \leftarrow w - \eta \frac{\partial L}{\partial w}, \quad b \leftarrow b - \eta \frac{\partial L}{\partial b},$$  
   where $\eta$ is the learning rate.  

---

### **Mathematical Formulation**  

Consider a feedforward network with:  
- $L$ layers,  
- Activation functions $\sigma^{(l)}$ for layer $l$,  
- Weight matrices $W^{(l)}$, bias vectors $b^{(l)}$, and activations $a^{(l)}$.  

#### **Forward Pass Equations**:  
For each layer $l$:  
1. Compute the pre-activation (weighted sum):  
   $$z^{(l)} = W^{(l)} a^{(l-1)} + b^{(l)}$$  
2. Compute the activation:  
   $$a^{(l)} = \sigma^{(l)}(z^{(l)})$$  

At the output layer:  
- Predicted output $\hat{y} = a^{(L)}$.  
- Loss $L(\hat{y}, y)$ measures the discrepancy between predictions $\hat{y}$ and true labels $y$.  

---

#### **Backward Pass (Gradient Computation)**  

1. **Output Layer (Last Layer $L$)**:  
   Compute the gradient of the loss with respect to the pre-activation $z^{(L)}$:  
   $$\delta^{(L)} = \frac{\partial L}{\partial z^{(L)}} = \frac{\partial L}{\partial a^{(L)}} \odot \sigma^{(L)'}(z^{(L)})$$  
   where $\odot$ denotes elementwise multiplication, and $\sigma^{(L)'}$ is the derivative of the activation function.  

2. **Hidden Layers ($l = L-1, \dots, 1$)**:  
   Propagate the error backward through the network using:  
   $$\delta^{(l)} = \left(W^{(l+1)^\top} \delta^{(l+1)}\right) \odot \sigma^{(l)'}(z^{(l)})$$  

3. **Gradients of Weights and Biases**:  
   Compute the gradients for updating parameters:  
   - Weight gradient:  
     $$\frac{\partial L}{\partial W^{(l)}} = \delta^{(l)} a^{(l-1)^\top}$$  
   - Bias gradient:  
     $$\frac{\partial L}{\partial b^{(l)}} = \delta^{(l)}$$  

---

### **Algorithm Outline**  

1. **Initialization**: Randomly initialize $W^{(l)}$ and $b^{(l)}$.  

2. **Forward Pass**:  
   - Compute activations and predictions for input $x$.  
   - Compute the loss $L(\hat{y}, y)$.  

3. **Backward Pass**:  
   - Compute $\delta^{(L)}$ for the output layer.  
   - Propagate errors backward to compute $\delta^{(l)}$ for all hidden layers.  
   - Compute gradients $\frac{\partial L}{\partial W^{(l)}}$ and $\frac{\partial L}{\partial b^{(l)}}$.  

4. **Parameter Update**:  
   Update $W^{(l)}$ and $b^{(l)}$ using an optimization algorithm (e.g., gradient descent).  

5. **Iterate**: Repeat until convergence.  

---

### **Key Concepts**  

1. **Chain Rule**:  
   Backpropagation relies on the chain rule to efficiently compute gradients layer by layer:  
   $$\frac{\partial L}{\partial W^{(l)}} = \frac{\partial L}{\partial z^{(l)}} \frac{\partial z^{(l)}}{\partial W^{(l)}}.$$  

2. **Local Gradients**:  
   The computations involve local gradients for each layer, reducing the complexity compared to computing the full gradient in one step.  

3. **Computational Graph**:  
   Neural networks can be viewed as computational graphs, where backpropagation systematically computes gradients by traversing the graph in reverse order.  

---

### **Advantages**  
1. **Efficiency**: Exploits the chain rule to compute gradients in $O(N)$ time, where $N$ is the number of parameters.  
2. **Scalability**: Works for deep networks with many layers.  
3. **General Applicability**: Compatible with various loss functions and activation functions.  

---

### **Limitations**  
1. **Vanishing/Exploding Gradients**: Gradients can become too small or too large, especially in deep networks with sigmoidal activations.  
2. **Computational Cost**: For very large networks, backpropagation can be computationally expensive.  
3. **Initialization Sensitivity**: Poor weight initialization can slow convergence or prevent effective learning.  