---
categories:
  - "[[Algorithm]]"
  - "[[Linear algebra]]"
  - "[[Signal processing]]"
  - "[[Statistics]]"
created: 2024-11-25 20:40
updated: 2024-12-07 11:32
---
Also may use [[Sherman-Morrison-Woodbury Formula]]

### **Definition**
The **Kalman Filter** is an iterative algorithm that estimates the state of a linear dynamic system from noisy measurements. It uses a combination of predictions from a system model and measurements to produce optimal estimates of the state in the least-squares sense.

### **Equations**
#### **1. System Model**
A linear system is represented as:
- **State Transition**:
  $$
  \mathbf{x}_{k+1} = \mathbf{A} \mathbf{x}_k + \mathbf{B} \mathbf{u}_k + \mathbf{w}_k,
  $$
  where:
  - $\mathbf{x}_k$: State vector at time $k$.
  - $\mathbf{A}$: State transition matrix.
  - $\mathbf{B}$: Control matrix.
  - $\mathbf{u}_k$: Control input.
  - $\mathbf{w}_k$: Process noise, $\mathbf{w}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{Q})$.

- **Measurement Equation**:
  $$
  \mathbf{z}_k = \mathbf{H} \mathbf{x}_k + \mathbf{v}_k,
  $$
  where:
  - $\mathbf{z}_k$: Measurement vector.
  - $\mathbf{H}$: Observation matrix.
  - $\mathbf{v}_k$: Measurement noise, $\mathbf{v}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{R})$.

### **Steps in the Kalman Filter**

#### **1. Prediction Step**
- **State Prediction**:
  $$
  \hat{\mathbf{x}}_{k|k-1} = \mathbf{A} \hat{\mathbf{x}}_{k-1|k-1} + \mathbf{B} \mathbf{u}_k.
  $$
- **Error Covariance Prediction**:
  $$
  \mathbf{P}_{k|k-1} = \mathbf{A} \mathbf{P}_{k-1|k-1} \mathbf{A}^T + \mathbf{Q}.
  $$

#### **2. Update Step**
- **Kalman Gain**:
  $$
  \mathbf{K}_k = \mathbf{P}_{k|k-1} \mathbf{H}^T \left( \mathbf{H} \mathbf{P}_{k|k-1} \mathbf{H}^T + \mathbf{R} \right)^{-1}.
  $$
- **State Update**:
  $$
  \hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k \left( \mathbf{z}_k - \mathbf{H} \hat{\mathbf{x}}_{k|k-1} \right).
  $$
- **Error Covariance Update**:
  $$
  \mathbf{P}_{k|k} = \left( \mathbf{I} - \mathbf{K}_k \mathbf{H} \right) \mathbf{P}_{k|k-1}.
  $$
### **Key Concepts**
1. **Prediction**:  
   Propagates the current state estimate forward in time using the system model.

2. **Correction**:  
   Adjusts the predicted state using measurements and the Kalman gain to minimize estimation error.

3. **Kalman Gain**:  
   Balances trust between the prediction (model) and the measurement.

4. **Optimality**:  
   The Kalman Filter minimizes the mean squared error under the assumption of linearity and Gaussian noise.

### **Examples**

#### **1. One-Dimensional Example (Temperature Sensor)**
- System dynamics: $\mathbf{x}_{k+1} = \mathbf{x}_k + \mathbf{w}_k$, where $\mathbf{w}_k \sim \mathcal{N}(0, \sigma_w^2)$.
- Measurement: $\mathbf{z}_k = \mathbf{x}_k + \mathbf{v}_k$, where $\mathbf{v}_k \sim \mathcal{N}(0, \sigma_v^2)$.


---

#### **2. 2D Object Tracking**
- State: $\mathbf{x}_k = \begin{bmatrix} x \\ y \\ \dot{x} \\ \dot{y} \end{bmatrix}$ (position and velocity in 2D).
- Transition Matrix:
  $$
  \mathbf{A} = \begin{bmatrix} 
  1 & 0 & \Delta t & 0 \\ 
  0 & 1 & 0 & \Delta t \\ 
  0 & 0 & 1 & 0 \\ 
  0 & 0 & 0 & 1 
  \end{bmatrix}.
  $$
- Observation: $\mathbf{z}_k = \begin{bmatrix} x \\ y \end{bmatrix}$.


