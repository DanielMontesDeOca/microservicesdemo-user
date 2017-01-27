const grpc = require('grpc');
const server = new grpc.Server();
const port = process.env.PORT || 50051;

// Protos
const userProto = grpc.load('/var/lib/core/protos/user.proto').user;

// Controllers
const User = require('./api/controllers/user.js');

server.addProtoService(userProto.User.service, User);
server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
server.start();

console.log(`Listening on port ${port}`);

module.exports.app = server;
