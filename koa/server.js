const Koa = require('koa');
const router = require('koa-route');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());

const handler = function(ctx, next) {
  ctx.body = { data: 'performance test!!' };
};

app.use(router.get('/loadtest/get/:id1/data1/:id2', handler));
app.use(router.get('/loadtest/get/:id1/data2/:id2', handler));
app.use(router.get('/loadtest/get/:id1/data3/:id2', handler));
app.use(router.get('/loadtest/get/:id1/data4/:id2', handler));
app.use(router.get('/loadtest/get/:id1/data5/:id2', handler));
app.use(router.get('/loadtest/get/:id1/data6/:id2', handler));
app.use(router.get('/loadtest/get/:id1/data7/:id2', handler));
app.use(router.get('/loadtest/get/:id1/data8/:id2', handler));
app.use(router.get('/loadtest/get/:id1/data9/:id2', handler));
app.use(router.get('/loadtest/get/:id1/data10/:id2', handler));

const handler2 = function(ctx, next) {
  console.log(ctx);
  // this.body = this.body;
};

app.use(router.post('/loadtest/post/:id1/data1/:id2', handler2));
app.use(router.post('/loadtest/post/:id1/data2/:id2', handler2));
app.use(router.post('/loadtest/post/:id1/data3/:id2', handler2));
app.use(router.post('/loadtest/post/:id1/data4/:id2', handler2));
app.use(router.post('/loadtest/post/:id1/data5/:id2', handler2));
app.use(router.post('/loadtest/post/:id1/data6/:id2', handler2));
app.use(router.post('/loadtest/post/:id1/data7/:id2', handler2));
app.use(router.post('/loadtest/post/:id1/data8/:id2', handler2));
app.use(router.post('/loadtest/post/:id1/data9/:id2', handler2));
app.use(router.post('/loadtest/post/:id1/data10/:id2', handler2));

// app.use(router.routes());

app.listen(3000);
