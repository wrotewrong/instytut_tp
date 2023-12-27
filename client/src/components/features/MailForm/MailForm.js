import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postMailRequest } from '../../../redux/mailRedux';
import { config } from '../../../clientConfig';
import styles from './mailForm.module.scss';

export function MailForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(postMailRequest({ name, email, subject, tel, message }));
    // const url = 'http://localhost:8000/mail';
    // const payload = {
    //   name,
    //   email,
    //   subject,
    //   tel,
    //   message,
    // };

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // };

    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });

    // dispatch(sendMail({ name, email, subject, tel, message }));
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.messageComponent}>
      <Form onSubmit={validate(handleSubmit)}>
        <div className={styles.inputWrapper}>
          <Form.Group controlId='formLogin'>
            {/* <Form.Label>Imię</Form.Label> */}
            <Form.Control
              {...register('name', {
                required: true,
                minLength: config.nameCharacterMin,
                maxLength: config.nameCharacterMax,
              })}
              type='text'
              placeholder='Imię'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
            {errors.name && (
              <small>
                Imię musi zawierać od {config.nameCharacterMin} do{' '}
                {config.nameCharacterMax} znaków
              </small>
            )}
          </Form.Group>
        </div>

        <div className={styles.inputWrapper}>
          <Form.Group controlId='formLogin'>
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              {...register('email', {
                required: true,
                maxLength: config.emailCharacterMax,
                pattern: config.emailFormat,
              })}
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            {errors.email && (
              <small>
                Email musi mieć odpowiedni format i mieć nie więcej niż{' '}
                {config.emailCharacterMax} znaków
              </small>
            )}
          </Form.Group>
        </div>

        <div className={styles.inputWrapper}>
          <Form.Group controlId='formLogin'>
            {/* <Form.Label>Temat</Form.Label> */}
            <Form.Control
              {...register('subject', {
                required: true,
                minLength: config.subjectCharacterMin,
                maxLength: config.subjectCharacterMax,
              })}
              type='text'
              placeholder='Temat'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></Form.Control>
            {errors.subject && (
              <small>
                Temat musi zawierać od {config.subjectCharacterMin} do{' '}
                {config.subjectCharacterMax} znaków
              </small>
            )}
          </Form.Group>
        </div>

        <div className={styles.inputWrapper}>
          <Form.Group controlId='formLogin'>
            {/* <Form.Label>Telefon</Form.Label> */}
            <Form.Control
              {...register('tel', {
                required: true,
                minLength: config.phoneCharacterMin,
                maxLength: config.phoneCharacterMax,
              })}
              type='tel'
              placeholder='Telefon'
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            ></Form.Control>
            {errors.tel && (
              <small>
                Numer telefonu musi zawierać od {config.phoneCharacterMin} do{' '}
                {config.phoneCharacterMax} znaków
              </small>
            )}
          </Form.Group>
        </div>

        <div className={styles.inputWrapper}>
          <Form.Group controlId='formLogin'>
            {/* <Form.Label>Wiadomość</Form.Label> */}
            <Form.Control
              as='textarea'
              rows={5}
              {...register('message', {
                required: true,
                minLength: config.messageCharacterMin,
                maxLength: config.messageCharacterMax,
                pattern: config.messageFormat,
              })}
              type='text'
              placeholder='Wiadomość'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></Form.Control>
            {errors.message && (
              <small>
                Wiadomość musi zawierać od {config.messageCharacterMin} do{' '}
                {config.messageCharacterMax} liter lub cyfr
              </small>
            )}
          </Form.Group>
        </div>

        <Button type='submit' className='mt-3'>
          Wyślij
        </Button>
      </Form>
    </div>
  );
}
