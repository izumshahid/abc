import mongoose from 'mongoose';

const EnrollmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        'Please enter a valid email',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    courses: {
      type: [String],
      required: [true, 'At least one course selection is required'],
      validate: {
        validator: function(v) {
          return Array.isArray(v) && v.length > 0;
        },
        message: 'Please select at least one course',
      },
    },
    startDate: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: '',
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'enrolled', 'rejected'],
      default: 'pending',
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Create indexes for better query performance
EnrollmentSchema.index({ email: 1 });
EnrollmentSchema.index({ status: 1 });
EnrollmentSchema.index({ submittedAt: -1 });

// Prevent model overwrite error in development
// Delete existing model to force schema reload in development
if (mongoose.models.Enrollment) {
  delete mongoose.models.Enrollment;
}

const Enrollment = mongoose.model('Enrollment', EnrollmentSchema);

export default Enrollment;
