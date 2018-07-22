```c
int n;
semaphore mutex = 1;
semaphore empty = n;
semaphore full = 0;
```

```c
// the producer producing full buffers for the consumer
do {
    /* produce an item in next produced */
    wait(empty); 
    wait(mutex);

    /* add next produced to the buffer */
	
    signal(mutex); 
    signal(full);
} while (true);
```

```c
// the consumer producing empty buffers for the producer
do {
	wait(full);
    wait(mutex);

    /* remove an item from buffer to next consumed */
    signal(mutex);
    signal(empty);

    /* consume the item in next consumed */

} while (true);
```
