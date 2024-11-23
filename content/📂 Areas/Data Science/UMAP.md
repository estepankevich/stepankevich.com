---
created: 2024-11-20 14:37
updated: 2024-11-21 11:39
categories:
  - "[[Dimensionality Reduction]]"
---
Idea loke tsne, but we use graphs, we construct one graph that describes the points in initial space and a graph in lower space, than we compare and optimize the cross entropy of two adjacency matrices

Hyperparameter : number of neighbors, visually more clear