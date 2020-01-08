const District = require('../models/district.model');

exports.getAll = async (req, res) => {
    try {
        const result = await District.find();
        return res.status(200).send({ payload: result });

    } catch (err) {
        console.log("err: ", err);
        return res.status(500).send({ message: 'Đã có lỗi xảy ra, vui lòng thử lại!' });
    }
};

exports.getAll = async (req, res) => {
    try {
        const result = await District.find();
        return res.status(200).send({ payload: result });
    } catch (err) {
        console.log("err: ", err);
        return res.status(500).send({ message: 'Đã có lỗi xảy ra, vui lòng thử lại!' });
    }
};