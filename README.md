# node-performance

In this repo, I've run a round of tests for different node frameworks.

## Results

| Rank | Framework | Version      | Req. served Per Sec. |
| ---- | --------- | ------------ | -------------------- |
| #1   | donode    | 1.0.0-beta.3 | 1200 - 1300          |
| #2   | express   | 4.14.1       | 900  - 1200          |
| #3   | restify   | 4.3.0        | 900  - 1150          |
| #4   | hapi      | 16.1.0       | 350  - 500           |

Out of the listed frameworks results are quite near for all except for **hapi**.

hapi seems to be damn slower and clearly out of race.

**GET:** 

express and restify are serving around **1200** requests per second. 

Whereas *donode* is slightly higher and is **1250+** requests per second.

**POST:** 

restify and express *POST* requests are not as performant as their *GET* requests. They are slightly slower and are about **1000** requests per sercond.

Whereas **donode** performing almost equal to its *GET* requests at a rate about **1200** requests per second.

#### donode wins !!

This framework is performing better than all in all categories and also code looks pretty much organized.
But its a **new framework** and currently in **beta** version.

### Detailed results

I've broken the results down and by request type have included requests served per sec and mean latency.

Note:- Two tests performed per request type here are the observed results.

| Framework | Request type | Req. served Per Sec. | Mean Latency |
| --------- | ------------ | -------------------- | ------------ |
| donode    | GET          | 1262                 | 15.8 ms      |
|           |              | 1203                 | 16.5 ms      |
|           | POST         | 1214                 | 16.4 ms      |
|           |              | 1218                 | 16.3 ms      |
| express   | GET          | 1135                 | 17.5 ms      |
|           |              | 989                  | 20.1 ms      |
|           | POST         | 1038                 | 19.2 ms      |
|           |              | 907                  | 21.9 ms      |
| restify   | GET          | 1220                 | 16.3 ms      |
|           |              | 1158                 | 17.2 ms      |
|           | POST         | 957                  | 20.8 ms      |
|           |              | 935                  | 21.2 ms      |
| hapi      | GET          | 496                  | 40.2 ms      |
|           |              | 418                  | 47.7 ms      |
|           | POST         | 349                  | 57.1 ms      |
|           |              | 389                  | 51.3 ms      |

#### Test conditions


| Condition               | Values/Comments |
| ----------------------- | --------------- |
| Number of requests sent | 10,000          |
| Concurrency             | 20 requests     |
| Routes                  | 10 different routes with route params |
| Computer Config         |                 |
|   - OS                  | Mac 10.12.3     |
|   - RAM                 | 16 GB           |
|   - Processor           | 2.5 GHz Intel Core i5 |
| Node version            | 6.9             |



## Running Tests

1. clone this repo
2. npm install (run another "npm install" inside donode directory)
3. npm install -g loadtest
4. npm run framework-name

and loadtest using the following.

#### GET

```sh
loadtest -n 10000 -c 20 http://localhost:3000/loadtest/get/10/data10/20
```

#### POST

```sh
loadtest -n 10000 -c 20 -m POST -T application/json -P '{"key": "value"}' http://localhost:3000/loadtest/post/1/data10/2
```

> TODO: Test execution needs to be simplified.
