---
created: 2024-11-20 14:09
updated: 2024-12-13 15:45
categories:
  - "[[ToDo]]"
source: "[[VAEs and Reparameterization Trick]]"
aliases:
  - VAE
---
#### **Definition**  
A Variational Autoencoder (VAE) is a generative model that learns to encode data into a structured latent space and decode from it to reconstruct data, with a probabilistic foundation that facilitates sampling and meaningful latent representations.  

#### **Intuition**  
Unlike standard [[Autoencoder]], VAE impose a probabilistic structure on the latent space, encouraging it to follow a known distribution (commonly a Gaussian). This ensures that the latent representations are smooth and continuous, enabling meaningful interpolation and generation of data.  

#### **Key Concepts and Workflow**  
1. **Distributions**:  
   - **Data distribution**: $p(x)$  
   - **Latent distribution**: $p(z)$ (assumed to be a normal distribution $\mathcal{N}(0, I)$)  
   - Mappings:  
     - $p(x|z)$: Decoder that reconstructs data from latent variables.  
     - $p(z|x)$: Posterior distribution (unknown; approximated).  

2. **Approximation**:  
   - Approximate $p(z|x)$ using a variational distribution $q_\phi(z|x)$, parameterized by a Gaussian $\mathcal{N}(\mu, \sigma^2)$.  

3. **[[Reparameterization Trick]]**:  
   - Direct sampling from $q_\phi(z|x)$ disrupts backpropagation due to non-differentiability.  
   - Solution: Represent $z$ as $z = \mu + \sigma \cdot \epsilon$, where $\epsilon \sim \mathcal{N}(0, I)$. This separates sampling from learnable parameters $\mu$ and $\sigma$, enabling backpropagation.  

4. **Loss Function**:  
   - Combines a reconstruction loss and a regularization term:  
   $$ 
   \mathcal{L} = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - D_{\text{KL}}(q_\phi(z|x) \| p(z)) 
   $$  
   - **Reconstruction Loss**: Measures data reconstruction quality.  
   - **KL Divergence**: Encourages $q_\phi(z|x)$ to be close to $p(z)$, regularizing the latent space.  

---

#### **Variants**  
1. **Conditional VAE (CVAE)**:  
   Incorporates additional information $c$ (e.g., class labels) as a condition: $q_\phi(z|x, c)$ and $p_\theta(x|z, c)$.  

2. **Beta-VAE**:  
   Introduces a scaling factor $\beta$ to the KL divergence term, controlling the trade-off between reconstruction quality and disentanglement in the latent space:  
   $$ 
   \mathcal{L} = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - \beta D_{\text{KL}}(q_\phi(z|x) \| p(z)) 
   $$  

3. **VQ-VAE**:  
   Uses discrete latent variables and vector quantization for learning representations, addressing issues like blurry reconstructions.  

---

#### **Applications**  
- Data generation (e.g., synthetic images, text, audio).  
- Representation learning for tasks like clustering and interpolation.  
- Semi-supervised learning (CVAE).  
- Disentangled representation learning (Beta-VAE).  

---

#### **Known Issues and Improvements**  
- **Blurry Reconstructions**: Due to regularization enforcing overly smooth latent representations, leading to loss of detail in generated samples.  
- **Solution**: Improved variants like Beta-VAE and VQ-VAE focus on balancing quality and latent structure.  

---

#ToDo:
- Draw and annotate a **conditional distribution graph** to visualize relationships between $x$, $z$, $q_\phi(z|x)$, and $p_\theta(x|z)$.  
- Analyze implementation nuances (e.g., optimizing KL divergence and reparameterization trick).  