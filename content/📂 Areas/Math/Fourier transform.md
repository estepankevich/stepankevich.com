---
categories:
  - "[[Functional analysis]]"
  - "[[Definition]]"
  - "[[Signal processing]]"
created: 2024-12-04 17:13
updated: 2024-12-07 11:20
---
### **Definition**
The **Fourier Transform** is a mathematical operation that transforms a function of time (or space) into its frequency-domain representation. For a function $f(t)$, its Fourier Transform $\mathcal{F}(f)(\omega)$ is defined as:
$$
F(\omega) = \mathcal{F}(f)(\omega) = \int_{-\infty}^\infty f(t) e^{-i\omega t} \, dt,
$$
where:
- $t$ is the time (or spatial) variable,
- $\omega$ is the angular frequency,
- $e^{-i\omega t}$ represents the complex sinusoidal basis functions.

---

### **Inverse Fourier Transform**
The original function $f(t)$ can be recovered from its Fourier transform $F(\omega)$ using the inverse Fourier transform:
$$
f(t) = \mathcal{F}^{-1}(F)(t) = \frac{1}{2\pi} \int_{-\infty}^\infty F(\omega) e^{i\omega t} \, d\omega.
$$

---

### **Key Properties**
1. **Linearity**:  
   The Fourier transform is linear:
   $$
   \mathcal{F}(af(t) + bg(t)) = a\mathcal{F}(f)(\omega) + b\mathcal{F}(g)(\omega).
   $$

2. **Time Shifting**:  
   Shifting $f(t)$ in time results in a phase shift in the frequency domain:
   $$
   \mathcal{F}(f(t - t_0)) = e^{-i\omega t_0} F(\omega).
   $$

3. **Frequency Shifting**:  
   Multiplying $f(t)$ by a complex exponential shifts the frequency:
   $$
   \mathcal{F}(f(t) e^{i\omega_0 t}) = F(\omega - \omega_0).
   $$

4. **Scaling**:  
   Scaling $f(t)$ compresses or stretches the frequency domain:
   $$
   \mathcal{F}(f(at)) = \frac{1}{|a|} F\left(\frac{\omega}{a}\right).
   $$

5. **[[Parseval's Theorem]]**:  
   The total energy in the time domain equals the total energy in the frequency domain:
   $$
   \int_{-\infty}^\infty |f(t)|^2 \, dt = \frac{1}{2\pi} \int_{-\infty}^\infty |F(\omega)|^2 \, d\omega.
   $$

6. **Duality**:  
   Interchanging the roles of $f(t)$ and $F(\omega)$ gives:
   $$
   \mathcal{F}(F(t)) = 2\pi f(-\omega).
   $$

---

### **Fourier Transform of Common Functions**
1. **Delta Function**:  
   $$
   \mathcal{F}(\delta(t)) = 1.
   $$
2. **Constant Function**:  
   $$
   \mathcal{F}(1) = 2\pi \delta(\omega).
   $$
3. **Gaussian Function**:  
   If $f(t) = e^{-t^2 / 2}$, then:
   $$
   \mathcal{F}(f(t)) = \sqrt{2\pi} e^{-\omega^2 / 2}.
   $$
4. **Sine and Cosine**:
   - $f(t) = \cos(\omega_0 t)$:
     $$
     \mathcal{F}(f(t)) = \pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)].
     $$
   - $f(t) = \sin(\omega_0 t)$:
     $$
     \mathcal{F}(f(t)) = \frac{\pi}{i} [\delta(\omega - \omega_0) - \delta(\omega + \omega_0)].
     $$
### **Example**

#### **Function**:
Let $f(t) = e^{-t^2}$ (a Gaussian).

#### **Fourier Transform**:
$$
\mathcal{F}(f(t)) = \int_{-\infty}^\infty e^{-t^2} e^{-i\omega t} \, dt = \sqrt{\pi} e^{-\omega^2 / 4}.
$$

This result demonstrates that the Fourier transform of a Gaussian is also a Gaussian.