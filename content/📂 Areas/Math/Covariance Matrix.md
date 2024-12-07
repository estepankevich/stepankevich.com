---
categories:
  - "[[Statistics]]"
  - "[[Linear algebra]]"
  - "[[Matrix]]"
created: 2024-11-23 16:27
updated: 2024-12-07 11:02
---
### **Definition**
The **covariance matrix** is a square matrix that summarizes the pairwise covariances between the components of a random vector. For a random vector $\mathbf{X} = [X_1, X_2, \ldots, X_n]^T$, the covariance matrix $\Sigma$ is defined as:
$$
\Sigma = \text{Cov}(\mathbf{X}) = \mathbb{E}[(\mathbf{X} - \mathbb{E}[\mathbf{X}])(\mathbf{X} - \mathbb{E}[\mathbf{X}])^T].
$$
Each entry $\Sigma_{ij}$ represents the covariance between $X_i$ and $X_j$:
$$
\Sigma_{ij} = \text{Cov}(X_i, X_j) = \mathbb{E}[(X_i - \mathbb{E}[X_i])(X_j - \mathbb{E}[X_j])].
$$

### **Key Properties**
1. **Symmetry**:  
   The covariance matrix is [[Symmetric Matrix]]:
   $$
   \Sigma_{ij} = \Sigma_{ji}.
   $$

2. **Diagonal Elements**:  
   The diagonal elements represent the variances of the individual components:
   $$
   \Sigma_{ii} = \text{Var}(X_i).
   $$

3. **Positive Semidefiniteness**:  
   The covariance matrix is [[Positive Semi-Definite Matrix]]:
   $$
   \mathbf{z}^T \Sigma \mathbf{z} \geq 0, \quad \forall \mathbf{z} \in \mathbb{R}^n.
   $$

4. **Dimension**:  
   If $\mathbf{X}$ is an $n$-dimensional random vector, then $\Sigma$ is an $n \times n$ matrix.

### **Examples**

#### **Univariate Example**:
For a single random variable $X$, the covariance matrix is:
$$
\Sigma = \text{Var}(X) = \sigma^2.
$$

#### **Multivariate Example**:
For $\mathbf{X} = [X_1, X_2]^T$, where $\mathbb{E}[\mathbf{X}] = \begin{bmatrix} \mu_1 \\ \mu_2 \end{bmatrix}$, the covariance matrix is:
$$
\Sigma = \begin{bmatrix}
\text{Var}(X_1) & \text{Cov}(X_1, X_2) \\
\text{Cov}(X_2, X_1) & \text{Var}(X_2)
\end{bmatrix}.
$$

#### **Data Matrix Representation**:
For a dataset $\mathbf{X} \in \mathbb{R}^{m \times n}$, where rows are observations and columns are variables, the sample covariance matrix is:
$$
\Sigma = \frac{1}{m - 1} (\mathbf{X} - \bar{\mathbf{X}})^T (\mathbf{X} - \bar{\mathbf{X}}),
$$
where $\bar{\mathbf{X}}$ is the row-wise mean of $\mathbf{X}$.