---
categories:
  - "[[Code]]"
  - "[[Interview Question]]"
  - "[[DataDog]]"
created: 2024-12-19 16:02
updated: 2024-12-27 09:16
source: https://leetcode.com/discuss/interview-question/2639509/DataDog-Interview-Question
---

```python
def process_stream(stream):
    from collections import defaultdict

    query_dict = defaultdict(set)  # Maps a word to a set of query IDs
    query_map = {}  # Maps query IDs to their full set of words
    query_id_counter = 1  # Unique ID counter

    for line in stream:
        line = line.strip()
        if line.startswith("query:"):
            # Register a query
            query = line[len("query:"):].strip()
            query_words = set(query.split())
            query_id = query_id_counter
            query_id_counter += 1

            query_map[query_id] = query_words
            for word in query_words:
                query_dict[word].add(query_id)

            print(query_id)  # Print the assigned query ID

        elif line.startswith("log:"):
            # Process a log line
            log = line[len("log:"):].strip()
            log_words = set(log.split())

            # Find matching queries
            matching_query_ids = set()
            for word in log_words:
                if word in query_dict:
                    matching_query_ids.update(query_dict[word])

            # Verify that all query words are present in the log
            result_ids = []
            for query_id in matching_query_ids:
                if query_map[query_id].issubset(log_words):
                    result_ids.append(query_id)

            if result_ids:
                print(" ".join(map(str, sorted(result_ids))))
            else:
                print()  # Print nothing if no queries are matched
``` 
