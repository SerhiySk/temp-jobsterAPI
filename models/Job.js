const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
    },
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 50,
    },
    jobLocation: {
      type: String,
      default: 'my city',
      required: true,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
