module.exports = {
  /*
  **  port number
  */
  port: process.env.PORT || 80,

  /*
  ** ture : production mode
  ** false: development mode
  */
  production: true,

  /*
  ** 0: log everything
  ** 1: log warnings & errors
  ** 2: log errors only
  */
  logLevel: 2,
};
