"use client";

import { useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  message,
  Modal,
  Result,
} from "antd";
import { courses } from "@/data/courses";

const { TextArea } = Input;
const { Option } = Select;

export default function EnrollmentForm({
  preSelectedCourse,
  visible,
  onClose,
}) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Honeypot field for bot protection
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (values) => {
    // Bot check
    if (honeypot) {
      message.error("Spam detected");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          startDate: values.startDate?.format("YYYY-MM-DD"),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        message.success("Enrollment submitted successfully!");
        setSuccess(true);
        form.resetFields();
      } else {
        // Handle error responses
        const errorMessage = data.error || "Failed to submit enrollment";
        message.error(errorMessage);

        // Show field-level errors if available
        if (data.details && Array.isArray(data.details)) {
          // If details is an array of error messages
          const fieldErrors = data.details.map((msg, index) => ({
            name: ["general"],
            errors: [msg],
          }));
          form.setFields(fieldErrors);
        } else if (data.fieldErrors) {
          // If specific field errors are provided
          form.setFields(data.fieldErrors);
        }

        console.error("Enrollment error:", data);
      }
    } catch (error) {
      message.error(
        "Network error. Please check your connection and try again."
      );
      console.error("Enrollment submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    form.resetFields();
    onClose?.();
  };

  const formContent = (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      onFinishFailed={(errorInfo) => {
        message.error("Please fill in all required fields correctly");
      }}
      initialValues={{
        courses: preSelectedCourse?.id ? [preSelectedCourse.id] : [],
      }}
      className="max-w-lg mx-auto"
      validateTrigger={["onChange", "onBlur"]}
      scrollToFirstError
    >
      {/* Honeypot field - hidden from users */}
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <Form.Item
        name="name"
        label={<span style={{ color: "black" }}>Full Name</span>}
        rules={[
          { required: true, message: "Please enter your name" },
          { min: 2, message: "Name must be at least 2 characters" },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter your full name" size="large" />
      </Form.Item>

      <Form.Item
        name="email"
        label={<span style={{ color: "black" }}>Email Address</span>}
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter your email" size="large" />
      </Form.Item>

      <Form.Item
        name="phone"
        label={<span style={{ color: "black" }}>Phone Number</span>}
        rules={[
          { required: true, message: "Please enter your phone number" },
          {
            pattern: /^[0-9+\-\s()]+$/,
            message: "Please enter a valid phone number",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter your phone number" size="large" />
      </Form.Item>

      <Form.Item
        name="courses"
        label={<span style={{ color: "black" }}>Select Course(s)</span>}
        rules={[
          {
            required: true,
            type: "array",
            min: 1,
            message: "Please select at least one course",
          },
        ]}
        hasFeedback
      >
        <Select
          mode="multiple"
          placeholder="Choose one or more courses"
          size="large"
          style={{ width: "100%" }}
          maxTagCount="responsive"
        >
          {courses.map((course) => (
            <Option key={course.id} value={course.id}>
              {course.title}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="startDate"
        label={<span style={{ color: "black" }}>Preferred Start Date</span>}
      >
        <DatePicker
          size="large"
          style={{ width: "100%" }}
          placeholder="Select preferred start date"
          format="DD/MM/YYYY"
        />
      </Form.Item>

      <Form.Item
        name="message"
        label={<span style={{ color: "black" }}>Message (Optional)</span>}
      >
        <TextArea
          rows={4}
          placeholder="Any questions or specific requirements?"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={loading}
          block
          style={{
            backgroundColor: "var(--primary)",
            borderColor: "var(--primary)",
            height: "48px",
            fontWeight: 600,
          }}
        >
          {loading ? "Submitting..." : "Submit Enrollment Inquiry"}
        </Button>
      </Form.Item>

      <p className="text-center text-sm" style={{ color: "var(--text-muted)" }}>
        By submitting this form, you agree to our terms and privacy policy. We
        will contact you within 24 hours.
      </p>
    </Form>
  );

  const successContent = (
    <Result
      status="success"
      title={
        <span style={{ color: "black" }}>Enrollment Inquiry Submitted!</span>
      }
      subTitle={
        <span style={{ color: "black" }}>
          Thank you for your interest in ABC Computronics. Our team will contact
          you within 24 hours to discuss your enrollment.
        </span>
      }
      extra={[
        <Button
          type="primary"
          key="close"
          onClick={handleClose}
          style={{
            backgroundColor: "var(--primary)",
            borderColor: "var(--primary)",
          }}
        >
          Close
        </Button>,
      ]}
    />
  );

  // If used as a modal
  if (visible !== undefined) {
    return (
      <Modal
        open={visible}
        onCancel={handleClose}
        footer={null}
        width={600}
        title={
          !success && (
            <span style={{ color: "black" }}>
              {preSelectedCourse
                ? `Enroll in ${preSelectedCourse.title}`
                : "Course Enrollment"}
            </span>
          )
        }
        styles={{
          body: { paddingTop: success ? 0 : 24 },
          content: { backgroundColor: "var(--card-bg)" },
          header: { backgroundColor: "var(--card-bg)" },
        }}
      >
        {success ? successContent : formContent}
      </Modal>
    );
  }

  // Standalone form
  return success ? successContent : formContent;
}
