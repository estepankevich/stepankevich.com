---
categories:
  - "[[Code]]"
  - "[[Interview Question]]"
  - "[[DataDog]]"
created: 2024-12-19 16:02
updated: 2024-12-26 14:42
source: https://leetcode.com/discuss/interview-question/2639509/DataDog-Interview-Question
---
```python
class File:
    def write(self, bytes: bytearray):
        pass

class BufferedFile(File):
    def __init__(self, f: File, buffer_size: int):
        self.f = f
        self.buffer_size = buffer_size
        self.buffer = []
        self.current_size = 0

    def write(self, bytes: bytearray):
        if self.current_size + len(bytes) < self.buffer_size:
            self.buffer.append(bytes)
            self.current_size += len(bytes)
        elif len(bytes) >= self.buffer_size:
            if self.buffer:
                self.flush()
            self.f.write(bytes)
        else:
            self.flush()
            self.buffer.append(bytes)
            self.current_size += len(bytes)

    
    def flush(self):
        if not self.buffer:
            return
        try:
            self.f.write(b"".join(self.buffer))
            self.current_size = 0
            self.buffer = []
        except IOError as e:
            print(f"Error: {e}")

``` 
