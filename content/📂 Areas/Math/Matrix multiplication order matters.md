---
categories:
  - "[[Linear algebra]]"
  - "[[Observation]]"
created: 2024-11-29 13:48
updated: 2024-12-07 12:24
---
### **Matrix Multiplication Order Matters**

Matrix multiplication is **not commutative**, meaning the order of multiplication affects the result. When multiplying multiple matrices, the **grouping** of matrices (i.e., the order of operations) can significantly affect both the computational cost and the interpretation of the result.

---

### **Example: $ABC$, Where $C$ Is a Column Vector**

#### **Given**:
- $A \in \mathbb{R}^{m \times n}$,
- $B \in \mathbb{R}^{n \times p}$,
- $C \in \mathbb{R}^{p \times 1}$ (a column vector).

#### **Scenarios**:

1. **Compute $BC$ First**:
   - $BC$: This results in a matrix-vector multiplication, producing a vector $\mathbf{v} \in \mathbb{R}^{n \times 1}$.
   - $A(BC)$: Then $A \mathbf{v}$ results in another matrix-vector multiplication, producing a vector in $\mathbb{R}^{m \times 1}$.

2. **Compute $AB$ First**:
   - $AB$: This results in a matrix-matrix multiplication, producing a matrix $D \in \mathbb{R}^{m \times p}$.
   - $D C$: Then multiplying $D$ with $C$ results in a vector in $\mathbb{R}^{m \times 1}$.

#### **Result**:
Both approaches yield the same final vector in $\mathbb{R}^{m \times 1}$, but the intermediate computations and efficiency may differ.

---

### **Computational Efficiency**

Matrix multiplication has complexity $O(kmn)$ for multiplying a $k \times m$ matrix with an $m \times n$ matrix. The grouping can change the number of operations required.

1. **Compute $BC$ First**:
   - $BC$: Multiplying $B \in \mathbb{R}^{n \times p}$ with $C \in \mathbb{R}^{p \times 1}$ requires $O(np)$ operations.
   - $A(BC)$: Multiplying $A \in \mathbb{R}^{m \times n}$ with the resulting vector $\mathbf{v} \in \mathbb{R}^{n \times 1}$ requires $O(mn)$ operations.
   - **Total Cost**: $O(np + mn)$.

2. **Compute $AB$ First**:
   - $AB$: Multiplying $A \in \mathbb{R}^{m \times n}$ with $B \in \mathbb{R}^{n \times p}$ requires $O(mnp)$ operations.
   - $D C$: Multiplying $D \in \mathbb{R}^{m \times p}$ with $C \in \mathbb{R}^{p \times 1}$ requires $O(mp)$ operations.
   - **Total Cost**: $O(mnp + mp)$.

#### **Which Is Faster?**
- If $p = 1$ (as $C$ is a column vector), $BC$ first is generally faster:
  $$
  O(np + mn) \quad \text{vs.} \quad O(mnp + mp).
  $$
