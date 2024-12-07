---
categories:
  - "[[Signal processing]]"
  - "[[Method]]"
created: 2024-12-04 16:55
updated: 2024-12-07 11:03
---
### **Definition**
The **Discrete Fourier Transform (DFT)** is a mathematical transformation used to analyze the frequency content of discrete signals. Given a discrete signal $\{x[n]\}$ of length $N$, the DFT produces a sequence $\{X[k]\}$, where each $X[k]$ represents the contribution of the $k$-th frequency component.

The DFT is defined as:
$$
X[k] = \sum_{n=0}^{N-1} x[n] e^{-i \frac{2\pi}{N} k n}, \quad k = 0, 1, \ldots, N-1,
$$
where:
- $x[n]$ is the input signal in the time domain,
- $X[k]$ is the frequency-domain representation,
- $e^{-i \frac{2\pi}{N} k n}$ is the complex exponential representing sinusoidal components.

---

### **Inverse DFT (IDFT)**
The Inverse Discrete Fourier Transform reconstructs the time-domain signal from the frequency-domain representation:
$$
x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{i \frac{2\pi}{N} k n}, \quad n = 0, 1, \ldots, N-1.
$$

---

### **Key Properties**
1. **Periodicity**:  
   The DFT assumes the signal $x[n]$ is periodic with period $N$. Thus:
   $$
   x[n + N] = x[n], \quad X[k + N] = X[k].
   $$

2. **Linearity**:  
   The DFT is linear:
   $$
   \text{DFT}(a x_1[n] + b x_2[n]) = a \text{DFT}(x_1[n]) + b \text{DFT}(x_2[n]),
   $$
   for scalars $a, b$.

3. **Symmetry for Real Signals**:  
   If $x[n] \in \mathbb{R}$, the DFT satisfies:
   $$
   X[N-k] = \overline{X[k]},
   $$
   where $\overline{X[k]}$ is the complex conjugate of $X[k]$.

4. **[[Parseval's Theorem]]**:  
   The total energy in the time domain equals the total energy in the frequency domain:
   $$
   \sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2.
   $$

5. **[[Convolution Theorem]]**:  
   The circular convolution of two sequences in the time domain corresponds to pointwise multiplication in the frequency domain:
   $$
   \text{DFT}(x_1[n] \circledast x_2[n]) = \text{DFT}(x_1[n]) \cdot \text{DFT}(x_2[n]),
   $$
   where $\circledast$ denotes circular convolution.

---

### **Applications**
1. **Signal Processing**:  
   Analyze the frequency components of signals for filtering, modulation, and spectrum estimation.

2. **Image Processing**:  
   DFT is used in 2D transformations for image compression and filtering.

3. **Audio Processing**:  
   Analyze and manipulate audio signals in the frequency domain.

4. **Numerical Solutions to PDEs**:  
   DFT helps solve differential equations by transforming them into simpler frequency-domain equations.

---

### **Example**

#### **Time-Domain Signal**:
Let $x[n] = \{1, 2, 3, 4\}$ for $N = 4$.

#### **DFT Calculation**:
For $k = 0, 1, 2, 3$:
$$
X[k] = \sum_{n=0}^{3} x[n] e^{-i \frac{2\pi}{4} k n}.
$$

- $X[0]$:  
  $$
  X[0] = 1 + 2 + 3 + 4 = 10.
  $$

- $X[1]$:  
  $$
  X[1] = 1 + 2 e^{-i\pi/2} + 3 e^{-i\pi} + 4 e^{-i3\pi/2} = 1 - 2i - 3 + 4i = -2 + 2i.
  $$

- $X[2]$:  
  $$
  X[2] = 1 + 2 e^{-i\pi} + 3 e^{-i2\pi} + 4 e^{-i3\pi} = 1 - 2 + 3 - 4 = -2.
  $$

- $X[3]$:  
  $$
  X[3] = 1 + 2 e^{-i3\pi/2} + 3 e^{-i3\pi} + 4 e^{-i9\pi/2} = 1 + 2i - 3 - 4i = -2 - 2i.
  $$

#### **Result**:
$$
X[k] = \{10, -2 + 2i, -2, -2 - 2i\}.
$$

