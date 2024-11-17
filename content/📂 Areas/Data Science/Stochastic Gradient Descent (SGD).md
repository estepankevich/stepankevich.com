---
categories:
  - "[[Data Science]]"
  - "[[Algorithm]]"
created: 2024-11-17 20:25
updated: 2024-11-17 20:25
---
**Stochastic Gradient Descent (SGD)**  

**Definition**:  
Stochastic Gradient Descent is an iterative optimization algorithm used to minimize a loss function. Unlike batch gradient descent, which uses the entire dataset to compute the gradient, SGD updates the model parameters using only a single randomly chosen sample (or a small batch of samples) at each step.  

**Objective**:  
Minimize a loss function $J(\theta)$, where $\theta$ represents the parameters of the model, using the update rule:  
$$\theta \leftarrow \theta - \eta \nabla_\theta J(\theta),$$  
where:  
- $\eta$ is the learning rate (step size).  
- $\nabla_\theta J(\theta)$ is the gradient of the loss with respect to $\theta$.  

---

### **Key Difference in SGD**  

In **batch gradient descent**, the gradient is computed over the entire dataset:  
$$\nabla_\theta J(\theta) = \frac{1}{m} \sum_{i=1}^m \nabla_\theta J_i(\theta),$$  
where $m$ is the total number of samples.  

In **SGD**, the gradient is computed for a single sample (or a small mini-batch):  
$$\nabla_\theta J(\theta) \approx \nabla_\theta J_i(\theta),$$  
where $i$ is randomly selected from $\{1, 2, \dots, m\}$.  

---

### **Algorithm**  

1. **Initialize**: Set initial parameters $\theta_0$ randomly. Choose a learning rate $\eta$.  
2. **Repeat** (for a fixed number of epochs or until convergence):  
   - Shuffle the dataset.  
   - For each sample $i$ (or mini-batch $B$):  
     - Compute the gradient of the loss for $i$ (or $B$):  
       $$g_i = \nabla_\theta J_i(\theta),$$  
       or for a mini-batch:  
       $$g_B = \frac{1}{|B|} \sum_{i \in B} \nabla_\theta J_i(\theta).$$  
     - Update the parameters:  
       $$\theta \leftarrow \theta - \eta g_i \quad \text{(or } \theta \leftarrow \theta - \eta g_B \text{)}.$$  

3. **Terminate**: Stop when convergence criteria are met (e.g., no significant improvement in $J(\theta)$).  

---

### **Variants of SGD**  

1. **Mini-Batch Gradient Descent**:  
   Combines the benefits of both batch and stochastic methods by computing the gradient on small batches of data.  
   - Batch size $|B|$ typically ranges from 32 to 512.  

2. **SGD with Momentum**:  
   Adds a "momentum" term to the update to accelerate convergence and reduce oscillations:  
   $$v_t = \gamma v_{t-1} + \eta \nabla_\theta J(\theta),$$  
   $$\theta \leftarrow \theta - v_t,$$  
   where $\gamma$ is the momentum coefficient (e.g., 0.9).  

3. **Adaptive Learning Rate Methods**:  
   - **Adagrad**: Adjusts the learning rate based on past gradients.  
   - **RMSprop**: Scales learning rates by a moving average of gradient magnitudes.  
   - **Adam**: Combines momentum and adaptive learning rates for robust updates.  

---

### **Advantages**  

1. **Efficiency**:  
   Faster updates compared to batch gradient descent, especially for large datasets.  

2. **Online Learning**:  
   Can update the model as new data arrives, making it suitable for streaming or online learning.  

3. **Scalability**:  
   Requires less memory and computational resources since only a subset of data is used for each update.  

4. **Escapes Local Minima**:  
   The noisy updates of SGD can help escape shallow local minima in non-convex optimization.  

---

### **Disadvantages**  

1. **Noisy Convergence**:  
   The randomness in gradient estimates can cause oscillations around the minimum.  

2. **Sensitivity to Learning Rate**:  
   A poorly chosen learning rate can lead to divergence or slow convergence.  

3. **Tuning Challenges**:  
   Requires careful tuning of hyperparameters like learning rate, mini-batch size, and momentum.  
### **Example**  

Consider minimizing $J(\theta) = \frac{1}{2m} \sum_{i=1}^m (h_\theta(x_i) - y_i)^2$ (mean squared error) for a linear regression model.  

1. **Gradient for Sample $i$**:  
   $$\nabla_\theta J_i(\theta) = (h_\theta(x_i) - y_i) x_i.$$  

2. **SGD Update**:  
   $$\theta \leftarrow \theta - \eta (h_\theta(x_i) - y_i) x_i.$$  

---

### **Tips for Effective Use**  

1. **Learning Rate Scheduling**:  
   Reduce the learning rate over time to stabilize convergence (e.g., exponential decay).  

2. **Batch Normalization**:  
   Normalize mini-batches to improve stability and speed up convergence.  

3. **Regularization**:  
   Add penalties like $L_1$ or $L_2$ regularization to avoid overfitting.  

4. **Early Stopping**:  
   Monitor the validation loss and stop training when it stops improving.  