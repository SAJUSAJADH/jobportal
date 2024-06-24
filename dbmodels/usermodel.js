const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
  },
  contactNumber: {
    type: String,
    match: [/^\d{10}$/, "Please use a valid contact number."],
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  resume: {
    type: String, // URL to the resume file
  },
  profilePicture: {
    type: String, // URL to the profile picture
  },
  bio: {
    type: String,
    trim: true,
  },
  skills: [String],
  education: {
    institutionName: String,
    degree: String,
    fieldOfStudy: String,
    startDate: Date,
    endDate: Date,
  },
  experience: [
    {
      companyName: String,
      jobTitle: String,
      startDate: Date,
      endDate: Date,
      responsibilities: String,
    },
  ],
  // applications: [{
  //   jobId: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Job'
  //   },
  //   status: {
  //     type: String,
  //     enum: ['applied', 'interview', 'offer', 'rejected'],
  //     default: 'applied'
  //   },
  //   appliedDate: {
  //     type: Date,
  //     default: Date.now
  //   }
  // }],
  accountStatus: {
    type: String,
    default: "inactive",
  },
  profileStatus: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = User;
