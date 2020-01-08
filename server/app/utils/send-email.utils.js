require('dotenv').config()
const sendGrid = require('sendgrid').mail;

const sg = require('sendgrid')('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');
const hostUrl = 'https://ubertutor.herokuapp.com';

const sendEmail = (to, subject, contentEmail) => {
    const request = sg.emptyRequest({
        method: "POST",
        path: "/v3/mail/send",
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: to
                        }
                    ],
                    subject
                }
            ],
            from: {
                email: "web.reactjs.group@gmail.com"
            },
            content: [
                {
                    type: 'text/plain',
                    value: contentEmail
                }
            ]
        }
    });
    return new Promise(function (resolve, reject) {
        sg.API(request, function (error, response) {
            if (error) {
                return reject(error);
            }
            else {
                return resolve(response);
            }
        });
    });
};

exports.sendVerificationEmail = (name, to, token) => {
    const subject = "Kích hoạt tài khoản";
    const content = `Chào ${name}, mời bạn click vào link dưới đây để kích hoạt tài khoản: ${hostUrl}/active-email/${token}/${to}`;
    sendEmail(to, subject, content);
};

exports.sendResetPasswordEmail = (name, to, token) => {
    const subject = "Lấy lại mật khẩu";
    const content = `Chào ${name}, mời bạn click vào link dưới đây để thay đổi mật khẩu: ${hostUrl}/reset-password/${token}/${to}`;
    sendEmail(to, subject, content);
};