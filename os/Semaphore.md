```
class Semaphre
	value
	list: Process

	wait()
		value--
		if value < 0
			add this process to list
			block()
	
	signal()
		value++
		if value <= 0
			remove a process P from list
			wakeup(P)
```
