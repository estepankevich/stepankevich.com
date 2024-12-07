---
categories:
  - "[[Definition]]"
  - "[[Functional analysis]]"
  - "[[Signal processing]]"
created: 2024-11-30 22:20
updated: 2024-12-04 17:31
---
## **Circular Convolution**

### **Definition**
The **circular convolution** of two discrete sequences $f[n]$ and $g[n]$ of length $N$ is defined as:
$$
(f \circledast g)[n] = \sum_{k=0}^{N-1} f[k] g[(n - k) \mod N],
$$
where the indices wrap around using modulo $N$, making the sequences periodic.

### **Key Intuition**
1. **Wrapping Behavior**:  
   Unlike linear [[Convolution]], circular convolution treats the sequences as periodic, meaning the summation "wraps around" when indices go out of bounds.
   
2. **Frequency Domain Relationship**:  
   Circular convolution corresponds to pointwise multiplication of the discrete Fourier transforms (DFTs) of the sequences:
   $$
   \text{DFT}(f \circledast g) = \text{DFT}(f) \cdot \text{DFT}(g).
   $$

---

### **Properties**
1. **Commutativity**:  
   $$
   f \circledast g = g \circledast f.
   $$

2. **Associativity**:  
   $$
   (f \circledast g) \circledast h = f \circledast (g \circledast h).
   $$

3. **Distributivity**:  
   $$
   f \circledast (g + h) = (f \circledast g) + (f \circledast h).
   $$

4. **Connection to Linear Convolution**:  
   When $f[n]$ and $g[n]$ are zero-padded to length $2N - 1$ before computing circular convolution, the result matches the linear convolution of the original sequences.

---

### **Applications**
1. **Fast Convolution via FFT**:  
   Circular convolution allows efficient computation of convolution using the [[Fast Fourier Transform (FFT)]], as:
   $$
   f \circledast g = \text{IFFT}(\text{FFT}(f) \cdot \text{FFT}(g)).
   $$

2. **Digital Signal Processing**:  
   Used in systems where periodic signals or wrapping behavior is natural, such as in discrete-time Fourier analysis.

3. **Image Processing**:  
   Circular convolution handles edge effects in periodic image filtering.
