---
categories:
  - "[[Linear algebra]]"
  - "[[Algorithm]]"
created: 2024-11-25 17:20
updated: 2024-12-07 12:43
---
## **Modified Gram-Schmidt Algorithm**

### **Definition**
The **Modified Gram-Schmidt (MGS)** algorithm is a numerically stable variant of the [[Gram-Schmidt Orthogonalization]] used to compute an orthonormal basis for a set of vectors. It iteratively orthogonalizes each vector against previously orthogonalized vectors, reducing the numerical errors common in the classical Gram-Schmidt process.

### **Problem Setup**
Given a set of $n$ linearly independent vectors $\{\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_n\}$ in $\mathbb{R}^m$, the goal is to compute an orthonormal set $\{\mathbf{q}_1, \mathbf{q}_2, \dots, \mathbf{q}_n\}$ such that:
1. $\mathbf{q}_i^T \mathbf{q}_j = 0 \; \text{(orthogonality for } i \neq j\text{)},$
2. $\|\mathbf{q}_i\|_2 = 1 \; \text{(normalization)}.$

### **Modified Gram-Schmidt Algorithm**

#### **Input**:
1. A matrix $A \in \mathbb{R}^{m \times n}$ with columns $\mathbf{a}_1, \dots, \mathbf{a}_n$.
2. Linearly independent vectors in $A$.

#### **Output**:
1. Orthonormal matrix $Q \in \mathbb{R}^{m \times n}$ with columns $\mathbf{q}_1, \dots, \mathbf{q}_n$.
2. Upper triangular matrix $R \in \mathbb{R}^{n \times n}$ such that $A = QR$.

#### **Steps**:
1. **Initialize**: Set $Q = 0$ and $R = 0$.

2. **For each column $k = 1, \dots, n$:**
   1. **Compute $r_{ik}$**: For $i = 1, \dots, k-1$:
      $$
      r_{ik} = \mathbf{q}_i^T \mathbf{a}_k \quad \text{(projection coefficient)}.
      $$
   2. **Orthogonalize $\mathbf{a}_k$**:
      $$
      \mathbf{u}_k = \mathbf{a}_k - \sum_{i=1}^{k-1} r_{ik} \mathbf{q}_i.
      $$
   3. **Normalize $\mathbf{u}_k$** to get $\mathbf{q}_k$:
      $$
      r_{kk} = \|\mathbf{u}_k\|_2, \quad \mathbf{q}_k = \frac{\mathbf{u}_k}{r_{kk}}.
      $$

3. Return $Q$ and $R$.

---

### **Comparison with Classical Gram-Schmidt**
1. **Numerical Stability**:
   - The MGS algorithm reduces loss of orthogonality that arises due to floating-point round-off errors in the classical Gram-Schmidt process.

2. **Re-orthogonalization**:
   - MGS orthogonalizes one vector against all previous orthonormal vectors in a structured way, minimizing accumulated numerical errors.

3. **Efficiency**:
   - MGS and classical Gram-Schmidt have the same computational complexity, $O(mn^2)$, but MGS is more reliable for numerical computations.