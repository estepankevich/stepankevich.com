---
categories:
  - "[[Linear algebra]]"
  - "[[Signal processing]]"
  - "[[Matrix]]"
created: 2024-11-21 16:49
updated: 2024-12-07 11:38
---
#### Definition
The Haar wavelet matrix is a square matrix that represents the [[Discrete Haar Wavelet Transform (DHWT)]]. It is used in signal processing and numerical methods to perform hierarchical decomposition of data.

#### Construction
For an $n \times n$ Haar wavelet matrix $H_n$, where $n = 2^k$ (a power of 2), the rows encode scaling functions and wavelet functions at different resolutions.

The matrix is constructed recursively:

1. For $n = 2$:

$$H_2 = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$$ 

2. For $n = 2^k$ with $k > 1$:

$$H_n = \frac{1}{\sqrt{2}} \begin{bmatrix} H_{n/2} \otimes [1\ 1] \\ I_{n/2} \otimes [1\ -1] \end{bmatrix}$$

where $\otimes$ denotes the Kronecker product, and $I_{n/2}$ is the $n/2 \times n/2$ identity matrix.

#### Properties

1. **[[Orthonormal matrix|Orthogonal matrix]]:** $H_n H_n^T = I_n$, where $I_n$ is the identity matrix.
2. **Fast computation:** The Haar transform can be computed in $O(n \log n)$ time.
3. **Hierarchical structure:** Decomposes a signal into averages (low-pass filter) and differences (high-pass filter) at various scales.

#### Example

For $n = 4$:

$$H_4 = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & -1 & -1 \\ \sqrt{2} & -\sqrt{2} & 0 & 0 \\ 0 & 0 & \sqrt{2} & -\sqrt{2} \end{bmatrix}$$