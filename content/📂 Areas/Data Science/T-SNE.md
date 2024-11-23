---
created: 2024-11-20 14:37
updated: 2024-11-21 11:39
categories:
  - "[[Dimensionality Reduction]]"
---
SNE:
Main idea : point that are close should stay close in lower dimension space.

We convert distance to normal distribution by exponential and normalization, we do the same in lower space, than we move two probability distribution closer to each other by optimization KL divergence.

Perplexity hyper parameter - should make clusters more fiffused but visually it is not evident, need to test multiple choices

Advantages: may treat non linear data
Flaws : very slow, perplexity is obscure and need to be tuned manually

T-SNE - accelerate the SNE, but still slow