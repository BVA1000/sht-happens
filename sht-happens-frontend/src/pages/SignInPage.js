import Container from 'react-bootstrap/esm/Container';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';

function SignIn() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className="small-container">
      <Helmet>
        <title>SignIn</title>
      </Helmet>
      <div className="signIn">
        <h1 className="my-3">SignIn</h1>
      </div>

      <Form className="form">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New member?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create New Account</Link>
        </div>
      </Form>
    </Container>
  );
}
export default SignIn;
