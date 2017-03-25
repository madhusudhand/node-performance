# node-performance

Performance results of node frameworks

#### GET

```sh
loadtest -n 10000 -c 20 http://localhost:3000/loadtest/get/10/data10/20
```

#### POST

```sh
loadtest -n 10000 -c 20 -m POST -T application/json -P '{"key": "value"}' http://localhost:3000/loadtest/post/1/data10/2
```
