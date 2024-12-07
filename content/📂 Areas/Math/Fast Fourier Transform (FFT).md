---
categories:
  - "[[Signal processing]]"
  - "[[Algorithm]]"
created: 2024-12-04 17:31
updated: 2024-12-07 11:08
---
### **Definition**
The **Fast Fourier Transform (FFT)** is an efficient algorithm for computing the [[Discrete Fourier transform (DFT)]] and its inverse. By exploiting the symmetry and periodicity properties of the Fourier Transform, FFT reduces the computational complexity of the DFT from $O(N^2)$ to $O(N \log N)$, where $N$ is the number of data points.

The FFT is widely used in signal processing, numerical methods, and many other fields requiring fast spectral analysis.

### **Mathematical Formulation**
The DFT of a signal $x[n]$ of length $N$ is defined as:
$$
X[k] = \sum_{n=0}^{N-1} x[n] e^{-i \frac{2\pi}{N} k n}, \quad k = 0, 1, \ldots, N-1.
$$

The FFT computes this efficiently using a divide-and-conquer approach.

---

### **Key Ideas Behind FFT**

#### 1. **Divide and Conquer**
The FFT recursively divides the DFT computation into smaller DFTs:
- Split the sequence $x[n]$ into two subsequences:
  - Even-indexed terms: $x_e[n] = x[2n]$.
  - Odd-indexed terms: $x_o[n] = x[2n + 1]$.
- Use the symmetry property of the DFT:
  $$
  X[k] = \text{DFT}_{N}(x[n]) = \text{DFT}_{N/2}(x_e[n]) + e^{-i \frac{2\pi}{N} k} \cdot \text{DFT}_{N/2}(x_o[n]).
  $$

This reduces the computation from $N^2$ multiplications in the naive DFT to $N \log N$ for FFT.

---

### **Algorithm**
1. **Input**: A signal $x[n]$ of length $N$ (assume $N$ is a power of 2 for simplicity).
2. **Base Case**: If $N = 1$, return $x[n]$.
3. **Recursive Step**:
   - Compute FFT of even-indexed terms ($x_e[n]$).
   - Compute FFT of odd-indexed terms ($x_o[n]$).
   - Combine results using:
     $$
     X[k] = X_e[k] + W_N^k X_o[k], \quad W_N^k = e^{-i \frac{2\pi}{N} k},
     $$
     where $W_N^k$ is the **twiddle factor**.
     $$
     X[k + N/2] = X_e[k] - W_N^k X_o[k].
     $$

4. **Output**: The sequence $X[k]$ for $k = 0, 1, \ldots, N-1$.

---

### **Complexity**
- **Naive DFT**: $O(N^2)$
- **FFT**: $O(N \log N)$
  - This is achieved by recursively dividing the sequence into smaller subsequences and combining results efficiently.

### **Example**

#### **Input**:
Signal $x[n] = \{1, 2, 3, 4\}$.

#### **Step 1**: Divide into Even and Odd:
- Even terms: $x_e[n] = \{1, 3\}$.
- Odd terms: $x_o[n] = \{2, 4\}$.

#### **Step 2**: Compute DFT for Subproblems:
- $X_e[k] = \{4, -2\}$.
- $X_o[k] = \{6, -2\}$.

#### **Step 3**: Combine Using Twiddle Factors:
- Twiddle factor $W_4^k = e^{-i \frac{2\pi}{4} k}$:
  - $W_4^0 = 1$, $W_4^1 = -i$, $W_4^2 = -1$, $W_4^3 = i$.

- Combine:
  $$
  X[k] = X_e[k] + W_4^k X_o[k], \quad X[k+2] = X_e[k] - W_4^k X_o[k].
  $$
- Result:
  $$
  X[0] = 10, \quad X[1] = -2 + 2i, \quad X[2] = -2, \quad X[3] = -2 - 2i.
  $$

#### **Output**:
The FFT of $x[n]$ is:
$$
X[k] = \{10, -2+2i, -2, -2-2i\}.
$$