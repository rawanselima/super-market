import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // ملف db.json لازم يكون في الـ root
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default server;
