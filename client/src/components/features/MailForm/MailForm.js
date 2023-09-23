import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function MailForm() {
  return (
    <Form>
      <Form.Group controlId='formLogin'>
        <Form.Label>Imię</Form.Label>
        <Form.Control type='text'></Form.Control>
      </Form.Group>

      <Form.Group controlId='formLogin'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email'></Form.Control>
      </Form.Group>

      <Form.Group controlId='formLogin'>
        <Form.Label>Temat</Form.Label>
        <Form.Control type='text'></Form.Control>
      </Form.Group>

      <Form.Group controlId='formLogin'>
        <Form.Label>Telefon</Form.Label>
        <Form.Control type='tel'></Form.Control>
      </Form.Group>

      <Form.Group controlId='formLogin'>
        <Form.Label>Wiadomość</Form.Label>
        <Form.Control type='text'></Form.Control>
      </Form.Group>

      <Button type='submit' className='mt-3'>
        Wyślij
      </Button>
    </Form>
  );
}
