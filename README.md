# node-performance

Performance results of node frameworks

#### GET

```
$loadtest -n 10000 -c 20 http://localhost:3000/loadtest/content/10/data10/2
```

#### POST

```
$loadtest -n 10000 -c 20 -m POST -T application/json -P '{"key": "value"}' http://localhost:3000/loadtest/post/1/something10/2
```
