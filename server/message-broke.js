// const amqp = require("amqplib/callback_api");
// const logger = require("./utils/logger");
// const { RABBIT_MQ_URL } = require("./consts");

// function testMQ() {
//     amqp.connect(RABBIT_MQ_URL, (error0, connection) => {
//         if (error0) { return logger.error(`error0: ${error0}`); }

//         connection.createChannel((error1, channel) => {
//             if (error1) { return logger.error(`error1: ${error1}`); }

//             let queue = "hello";
//             let msg = "hello world";
//             channel.assertQueue(queue, { durable: false });

//             channel.sendToQueue(queue, Buffer.from(msg));

//             channel.consume(queue, (msg) => {
//                 // let secs = msg.content.toString().length - 1;
//                 logger.info(`[x] Received ${msg.content.toString()}`);

//                 // setTimeout(() => { logger.log("[x] Done"); }, secs * 1000);
//             }, {
//                 noAck: true,
//             })
//         });

//         // setTimeout(() => {
//         //     connection.close();
//         //     process.exit(0);
//         // }, 5000);
//     });
// }

// module.exports = testMQ;