'use strict';
exports.keys = "_bao";

exports.mysql = {
  client: {
    // host
    host: "localhost",
    // 端口
    port: 3306,
    // 用户名
    user: "root",
    // 密码
    password: "",
    // 数据库名
    database: "moditest"
  },
  app: true,
  agent: false
}

exports.security = {
  csrf: {
    enable: false
  }
}

exports.jwt = {
  secret:"1234536"
}

