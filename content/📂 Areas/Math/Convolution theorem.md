---
categories:
  - "[[Signal processing]]"
  - "[[Theorem]]"
  - "[[Functional analysis]]"
created: 2024-11-30 22:27
updated: 2024-12-04 17:13
---
### **Statement**
The convolution theorem states that the [[Convolution]] of two functions in the time domain is equivalent to the pointwise multiplication of their [[Fourier transform]] in the frequency domain, and vice versa. Formally:

1. **Time Domain to Frequency Domain**:  
   For functions $f(t)$ and $g(t)$, the convolution $h(t) = (f * g)(t)$ satisfies:
   $$
   \mathcal{F}[f * g](\omega) = \mathcal{F}[f](\omega) \cdot \mathcal{F}[g](\omega),
   $$
   where $\mathcal{F}[\cdot]$ denotes the Fourier transform.

2. **Frequency Domain to Time Domain**:  
   For functions $F(\omega)$ and $G(\omega)$, the convolution in the frequency domain satisfies:
   $$
   \mathcal{F}^{-1}[F \cdot G](t) = \mathcal{F}^{-1}[F](t) * \mathcal{F}^{-1}[G](t),
   $$
   where $\mathcal{F}^{-1}[\cdot]$ is the inverse Fourier transform.
