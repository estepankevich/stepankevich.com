---
created: 2024-11-03 23:34
updated: 2025-01-17 20:11
share: true
---

### Books to read
```dataview
TABLE
	WITHOUT ID
	link(file.link, name) as Name,
	category,
	embed(link(localCover, "100")) as Cover
	FROM "📚 Resources/Books"
	WHERE status = [[Unread]]
```

### Completed books
```dataview
TABLE
	WITHOUT ID
	link(file.link, name) as Name,
	category,
	embed(link(localCover, "100")) as Cover
	FROM "📚 Resources/Books"
	WHERE status = [[Completed]]
```
