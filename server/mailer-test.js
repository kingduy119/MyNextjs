const nodemailer = require("nodemailer");
const logger = require("./utils/logger");

function testMailer() {
    let config = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "hoangduy1192@gmail.com",
            pass: "10111001119",
        },
        tls: {
            rejectUnauthorized: false,
        }
    };
    let transporter = nodemailer.createTransport(config);
    let options = {
        from: `"WW Start" <hoangduy1192@gmail.com>`,
        to: `bboydking1109@gmail.com`,
        subject: "Test Nodemailer",
        text: `Hello Maturo`,
        html: `<h2>Nodemailer</h2>`,
    };
    transporter.sendMail(options, (err, info) => {
        if (err) { logger.error(err); }
        else {
            logger.info(info.response);
        }
    });
}

module.exports = testMailer;