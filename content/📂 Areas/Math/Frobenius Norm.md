---
categories:
  - "[[Linear algebra]]"
  - "[[Norm]]"
created: 2024-11-23 16:51
updated: 2024-12-07 12:17
---
### **Definition**
The **Frobenius norm** of a matrix $A \in \mathbb{R}^{m \times n}$ is defined as:
$$
\|A\|_F = \sqrt{\sum_{i=1}^m \sum_{j=1}^n |A_{ij}|^2}.
$$
Alternatively:
$$
\|A\|_F = \sqrt{\text{tr}(A^T A)} = \sqrt{\sum_{i=1}^r \sigma_i^2},
$$
where:
- $\text{tr}(\cdot)$ is the trace operator,
- $r = \text{rank}(A)$,
- $\sigma_i$ are the singular values of $A$.

---

### **Properties**
1. **Non-Negativity**:  
   $\|A\|_F \geq 0$, with equality only if $A = 0$.

2. **Scaling**:  
   $\|\alpha A\|_F = |\alpha| \|A\|_F$ for $\alpha \in \mathbb{R}$.

3. **Triangle Inequality**:  
   $\|A + B\|_F \leq \|A\|_F + \|B\|_F$.

4. **Unitary Invariance**:  
   For unitary $U$ and $V$, $\|U A V\|_F = \|A\|_F$.

5. **Relation to Vector Norm**:  
   Treating $A$ as a vector by concatenating rows or columns gives:
   $$
   \|A\|_F = \|\text{vec}(A)\|_2.
   $$

---

### **Examples**

#### **Example 1: Frobenius Norm of a Small Matrix**
Let:
$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}.
$$

Compute:
$$
\|A\|_F = \sqrt{1^2 + 2^2 + 3^2 + 4^2} = \sqrt{30}.
$$

---

#### **Example 2: Using Singular Values**
For $A \in \mathbb{R}^{3 \times 2}$ with singular values $\sigma_1 = 5$ and $\sigma_2 = 3$:
$$
\|A\|_F = \sqrt{\sigma_1^2 + \sigma_2^2} = \sqrt{25 + 9} = \sqrt{34}.
$$
