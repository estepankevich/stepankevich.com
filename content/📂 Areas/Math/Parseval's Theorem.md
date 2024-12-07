---
categories:
  - "[[Functional analysis]]"
  - "[[Signal processing]]"
  - "[[Theorem]]"
created: 2024-12-07 11:05
updated: 2024-12-07 12:56
---
### **Definition**
Parseval's theorem is a fundamental result in Fourier analysis that states that the total energy of a signal in the time domain is equal to the total energy in the frequency domain. It establishes a relationship between a function and its Fourier transform.

---

### **Continuous-Time Version**
Let $f(t)$ be a square-integrable function with Fourier transform $\hat{f}(\omega)$. Parseval's theorem states:
$$
\int_{-\infty}^\infty |f(t)|^2 \, dt = \frac{1}{2\pi} \int_{-\infty}^\infty |\hat{f}(\omega)|^2 \, d\omega.
$$

- The left-hand side represents the energy in the time domain.
- The right-hand side represents the energy in the frequency domain.

### **Discrete-Time Version**
For a discrete signal $x[n]$ with discrete-time Fourier transform (DTFT) $X(\omega)$, Parseval's theorem states:
$$
\sum_{n=-\infty}^\infty |x[n]|^2 = \frac{1}{2\pi} \int_{-\pi}^\pi |X(\omega)|^2 \, d\omega.
$$

### **Discrete Fourier Transform (DFT) Version**
For a sequence $x[n]$ of length $N$ with DFT $X[k]$, Parseval's theorem takes the form:
$$
\sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2.
$$

Here:
- $\sum_{n=0}^{N-1} |x[n]|^2$ is the total energy of the signal in the time domain.
- $\frac{1}{N} \sum_{k=0}^{N-1} |X[k]|^2$ is the total energy in the frequency domain.

### **Key Properties**
1. **Energy Conservation**:  
   Parseval's theorem shows that energy is conserved between the time and frequency domains.

2. **Orthonormal Basis**:  
   The Fourier transform decomposes a signal into an orthonormal basis of sinusoidal functions, preserving the signal's energy.

3. **Implication for Power Spectral Density**:  
   Parseval's theorem is often used in signal processing to analyze power spectral densities.
