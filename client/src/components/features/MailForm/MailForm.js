import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMail } from '../../../redux/mailRedux';

export function MailForm() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log('works');
    dispatch(sendMail({ title, email, topic, tel, message }));
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group controlId='formLogin'>
        <Form.Label>Imię</Form.Label>
        <Form.Control
          {...register('title', {
            required: true,
            minLength: 2,
            maxLength: 30,
          })}
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Form.Control>
        {errors.title && <small>Imię musi zawierać od 2 do 30 znaków</small>}
      </Form.Group>

      <Form.Group controlId='formLogin'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...register('email', {
            required: true,
            minLength: 2,
            maxLength: 40,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
        {errors.email && (
          <small>
            Email musi mieć odpowiedni format i mieć nie więcej niż 40 znaków
          </small>
        )}
      </Form.Group>

      <Form.Group controlId='formLogin'>
        <Form.Label>Temat</Form.Label>
        <Form.Control
          {...register('topic', {
            required: true,
            minLength: 2,
            maxLength: 40,
          })}
          type='text'
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        ></Form.Control>
        {errors.topic && <small>Temat musi zawierać od 2 do 40 znaków</small>}
      </Form.Group>

      <Form.Group controlId='formLogin'>
        <Form.Label>Telefon</Form.Label>
        <Form.Control
          {...register('tel', {
            required: true,
            minLength: 7,
            maxLength: 15,
          })}
          type='tel'
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        ></Form.Control>
        {errors.tel && (
          <small>Numer telefonu musi zawierać od 7 do 15 znaków</small>
        )}
      </Form.Group>

      <Form.Group controlId='formLogin'>
        <Form.Label>Wiadomość</Form.Label>
        <Form.Control
          {...register('message', {
            required: true,
            minLength: 2,
            maxLength: 500,
          })}
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></Form.Control>
        {errors.message && (
          <small>Wiadomość musi zawierać od 2 do 500 znaków</small>
        )}
      </Form.Group>

      <Button type='submit' className='mt-3'>
        Wyślij
      </Button>
    </Form>
  );
}
