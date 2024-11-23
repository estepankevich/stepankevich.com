---
created: 2024-11-20 14:09
updated: 2024-11-20 14:37
categories:
  - "[[ToDo]]"
---
https://youtu.be/qJeaCHQ1k2w

Problem with simple autoencoders - 
Representation state is not meaningful and not mapped to well to meaningful data after the decoding because of the irregularities 

We want a nicely organized latent state

Base paper : auto encoders, auto variational bayes

ToDo : conditional distribution graph

2 distributions : data p(x) and latent p(z). We define two mappings p(z|x) and p(x|z).

We assume that p(z) is normal distribution, that allows us to estimate the likelihood of p(x|z), but we still miss p(z|x), we approximate it with gaussian with mi and sigma q(mu, sigma).

We can't propagate through sampling phase, to do it we use a reparameterisation trick. It allows us to back propagation 

Latent space is continious 

Standard VAE produced blurry images of faces dataset because 9f the regularization term, other variants tried to improve it

Variants
- CVAE
- beta-VAE
- VQ-VAE
