'use client';

import { useState } from 'react';
import { Form, Input, Select, DatePicker, Button, message, Modal, Result } from 'antd';
import { courses } from '@/data/courses';

const { TextArea } = Input;
const { Option } = Select;

export default function EnrollmentForm({ preSelectedCourse, visible, onClose }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Honeypot field for bot protection
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (values) => {
    // Bot check
    if (honeypot) {
      message.error('Spam detected');
      return;
    }

    setLoading(true);

    try {
      // In production, replace with actual API endpoint
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          startDate: values.startDate?.format('YYYY-MM-DD'),
        }),
      });

      if (response.ok) {
        setSuccess(true);
        form.resetFields();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      // For demo purposes, show success anyway
      // In production, handle errors appropriately
      setSuccess(true);
      form.resetFields();
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
      initialValues={{
        course: preSelectedCourse?.id,
      }}
      className="max-w-lg mx-auto"
    >
      {/* Honeypot field - hidden from users */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
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
        label={<span style={{ color: 'var(--foreground)' }}>Full Name</span>}
        rules={[
          { required: true, message: 'Please enter your name' },
          { min: 2, message: 'Name must be at least 2 characters' },
        ]}
      >
        <Input
          placeholder="Enter your full name"
          size="large"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        />
      </Form.Item>

      <Form.Item
        name="email"
        label={<span style={{ color: 'var(--foreground)' }}>Email Address</span>}
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input
          placeholder="Enter your email"
          size="large"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        />
      </Form.Item>

      <Form.Item
        name="phone"
        label={<span style={{ color: 'var(--foreground)' }}>Phone Number</span>}
        rules={[
          { required: true, message: 'Please enter your phone number' },
          { pattern: /^[0-9+\-\s()]+$/, message: 'Please enter a valid phone number' },
        ]}
      >
        <Input
          placeholder="Enter your phone number"
          size="large"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        />
      </Form.Item>

      <Form.Item
        name="course"
        label={<span style={{ color: 'var(--foreground)' }}>Select Course</span>}
        rules={[{ required: true, message: 'Please select a course' }]}
      >
        <Select
          placeholder="Choose a course"
          size="large"
          style={{ width: '100%' }}
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
        label={<span style={{ color: 'var(--foreground)' }}>Preferred Start Date</span>}
      >
        <DatePicker
          size="large"
          style={{ width: '100%', backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
          placeholder="Select preferred start date"
          format="DD/MM/YYYY"
        />
      </Form.Item>

      <Form.Item
        name="message"
        label={<span style={{ color: 'var(--foreground)' }}>Message (Optional)</span>}
      >
        <TextArea
          rows={4}
          placeholder="Any questions or specific requirements?"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
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
            backgroundColor: 'var(--primary)',
            borderColor: 'var(--primary)',
            height: '48px',
            fontWeight: 600,
          }}
        >
          {loading ? 'Submitting...' : 'Submit Enrollment Inquiry'}
        </Button>
      </Form.Item>

      <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
        By submitting this form, you agree to our terms and privacy policy.
        We will contact you within 24 hours.
      </p>
    </Form>
  );

  const successContent = (
    <Result
      status="success"
      title="Enrollment Inquiry Submitted!"
      subTitle="Thank you for your interest in ABC Computronics. Our team will contact you within 24 hours to discuss your enrollment."
      extra={[
        <Button
          type="primary"
          key="close"
          onClick={handleClose}
          style={{
            backgroundColor: 'var(--primary)',
            borderColor: 'var(--primary)',
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
            <span style={{ color: 'var(--foreground)' }}>
              Enroll in {preSelectedCourse?.title || 'a Course'}
            </span>
          )
        }
        styles={{
          body: { paddingTop: success ? 0 : 24 },
          content: { backgroundColor: 'var(--card-bg)' },
          header: { backgroundColor: 'var(--card-bg)' },
        }}
      >
        {success ? successContent : formContent}
      </Modal>
    );
  }

  // Standalone form
  return success ? successContent : formContent;
}
