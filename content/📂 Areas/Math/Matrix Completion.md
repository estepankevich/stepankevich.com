---
categories:
  - "[[Linear algebra]]"
  - "[[Method]]"
  - "[[Problem]]"
created: 2024-11-26 15:52
updated: 2024-12-07 13:27
---

### **Definition**
**Matrix completion** is the problem of recovering a full matrix from a subset of its observed entries. The task is to fill in the missing entries of a matrix while satisfying certain assumptions, such as low rank or sparsity.

Formally, let $M \in \mathbb{R}^{m \times n}$ be the matrix to be completed, and $\Omega$ denote the set of observed indices:
$$
\Omega = \{(i, j) \mid M_{ij} \text{ is observed}\}.
$$
The goal is to reconstruct $M$ such that:
1. $M_{ij}$ matches the observed values for $(i, j) \in \Omega$, and
2. $M$ satisfies additional assumptions (e.g., low rank).

---

### **Applications**
1. **[[Recommender Systems**:  
   Filling in missing entries in user-item rating matrices (e.g., Netflix or Spotify recommendations).
   
2. **Image Processing**:  
   Recovering corrupted images by completing the pixel intensity matrix.

3. **Sensor Networks**:  
   Estimating missing sensor measurements using spatial or temporal correlations.

4. **Collaborative Filtering**:  
   Predicting preferences in social networks.

### **Key Assumptions**
1. **Low Rank**:  
   Many matrix completion problems assume that the underlying matrix $M$ has a low rank. This means:
   $$
   \text{rank}(M) \ll \min(m, n).
   $$

2. **Sufficient Observations**:  
   For exact recovery, the number of observed entries must satisfy:
   $$
   |\Omega| \geq O(r(m+n)) \quad \text{(for rank $r$)}.
   $$

3. **Incoherence**:  
   The observed entries should be uniformly distributed across the matrix.

---

### **Mathematical Formulation**

#### **Optimization Problem**
The matrix completion problem is often posed as:
$$
\text{minimize } \text{rank}(M), \quad \text{subject to } M_{ij} = O_{ij}, \; \forall (i, j) \in \Omega,
$$
where $O$ is the observed matrix with entries $O_{ij}$.

#### **Relaxation Using [[Nuclear Norm]]**
Since rank minimization is NP-hard, it is relaxed using the nuclear norm $\|M\|_*$:
$$
\text{minimize } \|M\|_*, \quad \text{subject to } M_{ij} = O_{ij}, \; \forall (i, j) \in \Omega.
$$
Here, $\|M\|_*$ is the sum of singular values of $M$.

---

### **Algorithms**

#### **1. Singular Value Thresholding (SVT)**
- Iteratively approximates the matrix by applying singular value decomposition (SVD) and thresholding the singular values.
- Steps:
  1. Initialize a guess for $M$.
  2. Perform SVD: $M_k = U_k \Sigma_k V_k^T$.
  3. Threshold the singular values in $\Sigma_k$.
  4. Update $M$ to satisfy observed constraints.

#### **2. Alternating Least Squares (ALS)**
- Assumes $M = UV^T$, where $U \in \mathbb{R}^{m \times r}$ and $V \in \mathbb{R}^{n \times r}$.
- Iteratively solves:
$$
  U = \text{argmin}_{U} \|P_\Omega(UV^T - O)\|_F^2, \quad
  V = \text{argmin}_{V} \|P_\Omega(UV^T - O)\|_F^2,
  $$
  where $P_\Omega$ projects onto the observed entries.

#### **3. Gradient Descent**
- Optimizes a loss function directly:
  $$
  \min_M \frac{1}{2} \|P_\Omega(M - O)\|_F^2 + \lambda \|M\|_*.
  $$
- Uses gradient-based methods to minimize the objective.

#### **4. Probabilistic Matrix Factorization (PMF)**
- Models the matrix as a probabilistic model and uses Bayesian inference for completion.