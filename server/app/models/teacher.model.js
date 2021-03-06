const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema(
  {
    salary: { type: Number, default: 200 },
    about: {
      type: String,
      index: true
    },
    successRate: { type: Number, default: 0 },
    ratings: { type: Number, default: 0 },
    tags: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Tag'
        }
      }
    ],
    jobs: { type: Number, default: 0 },
    hoursWorked: { type: Number, default: 0 },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Teacher', TeacherSchema);
