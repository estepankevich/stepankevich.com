---
categories:
  - "[[Data Science]]"
  - "[[Method]]"
  - "[[Statistics]]"
  - "[[Probability]]"
created: 2024-11-17 19:23
updated: 2024-11-17 20:05
---
**Definition**:  
Softmax regression, also known as **multinomial logistic regression**, is a generalization of logistic regression to handle multiclass classification. It models the probability distribution over $k$ classes for a given input $x \in \mathbb{R}^n$ by using the [[Softmax Function]] in the output layer.  

**Model**:  
For $k$ classes, the probability of an input $x$ belonging to class $j$ is given by:  
$$P(y = j | x; \Theta) = \frac{e^{x^\top \theta_j}}{\sum_{i=1}^k e^{x^\top \theta_i}}, \quad j = 1, \dots, k$$  
where:  
- $x \in \mathbb{R}^n$: Feature vector (may include a bias term).  
- $\Theta = [\theta_1, \theta_2, \dots, \theta_k]$: Parameter matrix where $\theta_j \in \mathbb{R}^n$ is the weight vector for class $j$.  
- $y \in \{1, \dots, k\}$: Target class label.  

**Key Properties**:  
1. **Probabilities**:  
   The softmax output forms a valid probability distribution:  
   $$\sum_{j=1}^k P(y = j | x; \Theta) = 1.$$  

2. **Linear Decision Boundaries**:  
   Softmax regression assumes linear decision boundaries between classes.  

3. **Interpretability**:  
   Each $\theta_j$ can be interpreted as the contribution of features to the likelihood of class $j$.  

**Loss Function**:  
Softmax regression is trained by minimizing the **cross-entropy loss**:  
$$\mathcal{L}(\Theta) = -\frac{1}{m} \sum_{i=1}^m \sum_{j=1}^k \mathbb{1}(y_i = j) \log P(y = j | x_i; \Theta)$$  
where:  
- $m$: Number of training examples.  
- $\mathbb{1}(y_i = j)$: Indicator function (1 if the true label of $x_i$ is $j$, 0 otherwise).  

**Gradient Descent for Optimization**:  
The gradient of the loss function with respect to $\theta_j$ is:  
$$\frac{\partial \mathcal{L}(\Theta)}{\partial \theta_j} = -\frac{1}{m} \sum_{i=1}^m \left[ \mathbb{1}(y_i = j) - P(y = j | x_i; \Theta) \right] x_i$$  
This gradient is used in optimization algorithms such as stochastic gradient descent (SGD).  

**Steps for Training Softmax Regression**:  
1. Initialize $\Theta$ (e.g., small random values).  
2. Compute the softmax probabilities for each class using:  
   $$P(y = j | x_i; \Theta) = \frac{e^{x_i^\top \theta_j}}{\sum_{l=1}^k e^{x_i^\top \theta_l}}.$$  
3. Compute the cross-entropy loss.  
4. Compute gradients and update $\Theta$ using an optimization method like gradient descent.  
5. Iterate until convergence.  

**Example**:  

Consider 3 classes ($k = 3$), an input feature vector $x = [1, 2]$, and parameter vectors:  
$$\theta_1 = [0.1, 0.2], \quad \theta_2 = [0.3, 0.5], \quad \theta_3 = [0.4, 0.1].$$  

1. Compute logits (linear combinations):  
   $$z_1 = x^\top \theta_1 = 1(0.1) + 2(0.2) = 0.5$$  
   $$z_2 = x^\top \theta_2 = 1(0.3) + 2(0.5) = 1.3$$  
   $$z_3 = x^\top \theta_3 = 1(0.4) + 2(0.1) = 0.6$$  

2. Apply the softmax function:  
   $$P(y = 1 | x) = \frac{e^{z_1}}{e^{z_1} + e^{z_2} + e^{z_3}} = \frac{e^{0.5}}{e^{0.5} + e^{1.3} + e^{0.6}}$$  
   $$P(y = 2 | x) = \frac{e^{1.3}}{e^{0.5} + e^{1.3} + e^{0.6}}$$  
   $$P(y = 3 | x) = \frac{e^{0.6}}{e^{0.5} + e^{1.3} + e^{0.6}}$$  

3. Predict the class with the highest probability.  

**Applications**:  
- Multiclass classification problems: text classification, image recognition, etc.  
- Neural networks: Softmax is often used in the output layer of multiclass models.  

**Limitations**:  
- Assumes linear decision boundaries; may underperform on complex datasets.  
- Requires sufficient data to avoid overfitting, especially with many classes.  