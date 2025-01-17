---
created: 2025-01-02 20:01
updated: 2025-01-17 21:08
categories:
  - "[[Data Science]]"
  - "[[Interview Question]]"
---
The formula for classifier accuracy is:

$$Accuracy = \frac{\text{Number of Correct Predictions}}{\text{Total Number of Predictions}} \times 100 $$
### Where:

- **Number of Correct Predictions**: The sum of true positives (TP) and true negatives (TN).
- **Total Number of Predictions**: The total number of samples, which is the sum of true positives (TP), true negatives (TN), false positives (FP), and false negatives (FN).

$$Accuracy = \frac{TP + TN}{TP + TN + FP + FN} \times 100 $$

### Example:
If a classifier correctly predicts 90 samples out of 100, its accuracy would be 90\%