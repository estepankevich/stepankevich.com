---
categories:
  - "[[Data Science]]"
  - "[[Definition]]"
created: 2024-11-17 19:16
updated: 2024-11-17 19:16
---
**Definition**:  
The **Vapnik-Chervonenkis (VC) dimension** is a measure of the capacity or complexity of a hypothesis class in statistical learning theory. Specifically, it is the largest number of points that can be **shattered** by the hypothesis class $\mathcal{H}$.  

A set of points is **shattered** by $\mathcal{H}$ if, for every possible binary labeling of those points, there exists a hypothesis $h \in \mathcal{H}$ that correctly classifies them.  

**Formal Definition**:  
The VC dimension of a hypothesis class $\mathcal{H}$, denoted $\text{VC}(\mathcal{H})$, is the size of the largest finite set $S$ such that $S$ can be shattered by $\mathcal{H}$. If $\mathcal{H}$ can shatter arbitrarily large sets, $\text{VC}(\mathcal{H}) = \infty$.  

**Key Concepts**:  
1. **Shattering**:  
   A hypothesis class $\mathcal{H}$ shatters a set $S = \{x_1, x_2, \dots, x_n\}$ if for every possible labeling of $S$ (i.e., $2^n$ labelings), there exists a hypothesis $h \in \mathcal{H}$ that perfectly separates the points according to that labeling.  

2. **Examples**:  
   - A hypothesis class of linear classifiers in $\mathbb{R}^2$ can shatter any 3 non-collinear points but cannot shatter 4 points in general position. Thus, $\text{VC}(\mathcal{H}) = 3$.  
   - A hypothesis class of all functions can shatter any finite set, so $\text{VC}(\mathcal{H}) = \infty$.  

**Properties**:  
1. **Relation to Learning**:  
   The VC dimension quantifies the capacity of $\mathcal{H}$.  
   - A higher VC dimension implies a more expressive hypothesis class, which can fit more complex data but is more prone to overfitting.  
   - A lower VC dimension implies a less expressive hypothesis class, which may underfit.  

2. **Generalization Bound**:  
   If $\text{VC}(\mathcal{H}) = d$, then with high probability, the generalization error $\epsilon$ is bounded as:  
   $$\epsilon \leq \sqrt{\frac{d \log(m/d) + \log(1/\delta)}{m}}$$  
   where $m$ is the number of training samples, and $\delta$ is the confidence level.  

3. **Finite VC Dimension**:  
   If $\mathcal{H}$ has finite VC dimension, it satisfies the PAC (Probably Approximately Correct) learning framework.  

**Applications**:  
1. **Model Selection**:  
   Helps compare the complexity of hypothesis classes (e.g., linear classifiers, decision trees).  

2. **Generalization Analysis**:  
   Used to derive theoretical guarantees on a model's ability to generalize beyond training data.  

3. **Support Vector Machines (SVMs)**:  
   The VC dimension is related to the margin of separation, impacting the capacity of SVMs.  

**Examples**:  
1. **Linear Classifiers in $\mathbb{R}^2$**:  
   - VC dimension = 3 (3 points in general position can be shattered).  
2. **Axis-Aligned Rectangles in $\mathbb{R}^2$**:  
   - VC dimension = 4 (4 points in a specific arrangement can be shattered).  
3. **Polynomial Classifiers of Degree $k$**:  
   - VC dimension = $\binom{k+2}{2}$ in $\mathbb{R}^2$ (related to the number of parameters).  

