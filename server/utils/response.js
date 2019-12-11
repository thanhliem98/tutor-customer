module.exports = {
    responseUnauthorize: (res) => {
        res.send({
            code: 403,
            message: "Bạn không có quyền ở chức năng này"
        })
    },
    badRequest: (res) => {
        res.send({
            code: 400,
            message: "Request chưa đúng định dạng."
        })
    },
    serverInternalError: (res) => {
        res.send({
            code: 500,
            message: "Server đang có lỗi."
        })
    },
    success: (res, body) => {
        res.send({
            code: 200,
            message: "Thành công",
            body
        })
    }

}