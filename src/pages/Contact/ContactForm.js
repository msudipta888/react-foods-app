import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').max(200, 'Message cannot exceed 200 characters'),
});

const FormContainer = styled.div`
  background-color: #2c3e50; /* Background color: Dark Blue */
  padding: 50px;
  border-radius: 20px;
  color: #fff; /* Text color: White */
  font-family: 'Arial', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333; /* Input text color: Dark Gray */
  font-family: 'Arial', sans-serif;
`;

const TextArea = styled.textarea`
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333; /* Textarea text color: Dark Gray */
  font-family: 'Arial', sans-serif;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #e67e22; /* Button background color: Orange */
  color: #fff; /* Button text color: White */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d35400; /* Darker Orange on hover */
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c; /* Error message color: Red */
  margin-bottom: 10px;
`;

const SuccessMessage = styled.p`
  color: #2ecc71; /* Success message color: Green */
  margin-bottom: 10px;
`;

const AdditionalInfo = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #ecf0f1; /* Additional info text color: Light Gray */
  text-align: center;
`;

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [characterCount, setCharacterCount] = useState(0);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission (replace this with your actual submission code)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'Pacifico, cursive', fontSize: '32px' }}>Contact Us</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Your Name" {...register("name")} />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

        <Input type="email" placeholder="Your Email" {...register("email")} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input type="text" placeholder="Subject" {...register("subject")} />
        {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}

        <TextArea placeholder="Your Message" {...register("message")} onChange={(e) => setCharacterCount(e.target.value.length)} />
        {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        <p style={{ color: '#ecf0f1', fontSize: '14px', marginBottom: '20px' }}>Characters remaining: {200 - characterCount}</p>

        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>

        {isSubmitted && <SuccessMessage>Form submitted successfully!</SuccessMessage>}
        {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
      </Form>
      <AdditionalInfo>
        We typically respond within 24 hours. Thank you for reaching out to us!
      </AdditionalInfo>
    </FormContainer>
  );
}

export default ContactPage;
