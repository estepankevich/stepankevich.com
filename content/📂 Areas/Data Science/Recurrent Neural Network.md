---
categories:
  - "[[Data Science]]"
  - "[[Architecture]]"
  - "[[Deep Learning]]"
created: 2024-11-17 21:18
updated: 2024-11-17 21:29
aliases:
  - RNN
---
![[Pasted image 20241117212039.png]]

**Definition**:  
Recurrent Neural Networks (RNNs) are a class of neural networks designed for processing sequential data. Unlike feedforward networks, RNNs maintain a **hidden state** that captures information about previous inputs, enabling them to model temporal dependencies. This makes RNNs well-suited for tasks such as natural language processing, speech recognition, and time-series forecasting.  

---

### **Key Idea**  

RNNs process sequences one step at a time, maintaining a hidden state $h_t$ that is updated recurrently. At each time step $t$, the hidden state $h_t$ depends on the current input $x_t$ and the previous hidden state $h_{t-1}$.  

---

### **Mathematical Formulation**  

1. **Hidden State Update**:  
   $$h_t = f(W_h h_{t-1} + W_x x_t + b_h),$$  
   where:  
   - $h_t$: Hidden state at time $t$.  
   - $x_t$: Input at time $t$.  
   - $W_h$: Recurrent weight matrix (hidden-to-hidden).  
   - $W_x$: Input weight matrix (input-to-hidden).  
   - $b_h$: Bias term.  
   - $f$: Activation function (e.g., tanh or ReLU).  

2. **Output**:  
   $$y_t = g(W_y h_t + b_y),$$  
   where:  
   - $y_t$: Output at time $t$.  
   - $W_y$: Output weight matrix (hidden-to-output).  
   - $g$: Output activation function (e.g., softmax for classification).  

---

### **Backpropagation Through Time (BPTT)**  

RNNs are trained using a variation of [[Backpropagation Algorithm]] called **Backpropagation Through Time (BPTT)**. This involves unrolling the RNN across time steps and computing gradients for each time step.  

---

### **Limitations of Vanilla RNNs**

1. **Difficulty Capturing Long-Term Dependencies**:  
   - Vanilla RNNs struggle with sequences where long-term context is critical.  

2. **[[Vanishing and Exploding Gradient Problem]]**:  
   - As gradients are propagated through many time steps, they tend to vanish or explode, making training unstable.  

3. **Sequential Processing**:  
   - Cannot parallelize across time steps, leading to slower training compared to feedforward models.  

---

### **Variants of RNNs**

1. [[Long Short-Term Memory (LSTM)]]:  
   - Introduces memory cells and gating mechanisms to mitigate vanishing gradients and better capture long-term dependencies.  
   - Components: Forget gate, input gate, output gate.  

2. **[[Gated Recurrent Unit (GRU)]]**:  
   - A simplified version of LSTM with fewer parameters.  
   - Combines the forget and input gates into a single update gate.  

3. **Bidirectional RNNs**:  
   - Processes the sequence in both forward and backward directions, capturing context from both past and future.  

4. **Sequence-to-Sequence (Seq2Seq) Models**:  
   - Consists of an encoder RNN and a decoder RNN.  
   - Used for tasks like machine translation and text summarization.  

---

### **Implementation in PyTorch**

```python
import torch
import torch.nn as nn

# Define an RNN model
class RNNModel(nn.Module):
    def __init__(self, input_size, hidden_size, output_size, num_layers):
        super(RNNModel, self).__init__()
        self.rnn = nn.RNN(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        # RNN layer
        out, hidden = self.rnn(x)  # `out` contains outputs at all time steps
        # Fully connected layer (use the last time step output)
        out = self.fc(out[:, -1, :])
        return out

# Hyperparameters
input_size = 10   # Number of input features
hidden_size = 20  # Number of hidden units
output_size = 1   # Output dimension
num_layers = 2    # Number of RNN layers

# Instantiate the model
model = RNNModel(input_size, hidden_size, output_size, num_layers)

# Example input
x = torch.randn(5, 50, input_size)  # Batch of 5 sequences, each of length 50
output = model(x)
print(output.shape)  # Output shape: [5, 1]
```

---

### **Comparison with LSTM and GRU**

| Feature                        | RNN                            | LSTM      | GRU             |
| ------------------------------ | ------------------------------ | --------- | --------------- |
| Handles Long-Term Dependencies | Poor                           | Excellent | Good            |
| Complexity                     | Low                            | High      | Moderate        |
| Parameters                     | Fewer                          | More      | Fewer than LSTM |
| Training Stability             | Unstable (vanishing gradients) | Stable    | Stable          |

---

### **Advantages**

1. **Captures Sequential Information**:  
   - Maintains hidden states, allowing modeling of temporal patterns.  

2. **Parameter Sharing**:  
   - Uses the same weights across time steps, reducing model complexity.  

3. **Flexibility**:  
   - Can process sequences of varying lengths.  

---

### **Disadvantages**

1. **Difficulty with Long Sequences**:  
   - Vanilla RNNs struggle with long-term dependencies.  

2. **Sequential Processing**:  
   - Slower training compared to parallelizable architectures like Transformers.  

3. **Gradient Issues**:  
   - Prone to vanishing or exploding gradients.  

---

### **Recent Alternatives**

1. **[[Transformers]]**:  
   - Highly parallelizable and better at capturing long-range dependencies.  
   - Used in state-of-the-art models like [[BERT]] and [[GPT]].  

2. **[[Attention Mechanisms]]**:  
   - Allow the model to focus on relevant parts of the sequence.  
