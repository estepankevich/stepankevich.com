---
categories:
  - "[[Code]]"
  - "[[Interview Question]]"
created: 2024-12-19 16:02
updated: 2025-02-20 21:58
source: https://leetcode.com/discuss/interview-question/2639509/DataDog-Interview-Question
---
https://leetcode.com/discuss/interview-question/2639509/DataDog-Interview-Question
```python
from typing import List

def filter_stream(stream: List[str], keywords: List[str]) -> List[str]:
    # Convert keywords to a set for efficient lookups
    keyword_set = set(keywords)

    # Result set to hold unique tags not in the keywords
    result_set = set()

    for line in stream:
        # Split the line into individual tags and convert to a set
        tags = set(tag.strip() for tag in line.split(","))

        # Check if the line contains any of the keywords
        if keyword_set & tags:
            # Add tags not in the keywords to the result set
            result_set.update(tags - keyword_set)

    # Return the result as a list
    return list(result_set)
``` 
