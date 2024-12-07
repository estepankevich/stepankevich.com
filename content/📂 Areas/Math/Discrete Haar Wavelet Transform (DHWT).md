---
categories:
  - "[[Signal processing]]"
  - "[[Definition]]"
created: 2024-11-21 19:17
updated: 2024-12-07 10:58
---
The Discrete Haar Wavelet Transform is a simple wavelet transform used for signal analysis and data compression. It is defined by recursively computing averages and differences of a signal.

### **Definition**
For a signal $x = {x_1, x_2, \dots, x_N}$ with $N = 2^k$ (a power of 2):

1. Pairwise averages:  
    $$a_i = \frac{x_{2i-1} + x_{2i}}{2}, \quad i = 1, 2, \dots, \frac{N}{2}$$
2. Pairwise differences:  
    $$d_i = \frac{x_{2i-1} - x_{2i}}{2}, \quad i = 1, 2, \dots, \frac{N}{2}$$

These steps are applied recursively to the averages ($a$) to form a hierarchical decomposition.

### **Key Properties**
- **Orthogonality**: Haar wavelet basis functions are orthogonal.
- **Compact Support**: Haar wavelet has the smallest possible support.
- **Fast Computation**: Computable in $O(N)$ via the Fast Wavelet Transform (FWT).
- **Piecewise Constant Approximation**: Captures abrupt changes in signals efficiently.

### **Matrix Representation**
The DHWT can be expressed as a matrix multiplication:  
$y = Wx$  
where $W$ is the [[Haar Wavelet Matrix]], a product of scaling and wavelet filters.
