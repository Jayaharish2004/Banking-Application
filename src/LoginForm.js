import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login Successful");

    navigate('/');
  };

  return (
    <div className="color">
      <div className="login">
        <Card className="form">
          <form onSubmit={handleLogin}>
            <span>LOGIN</span>
            <hr />

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" className="button">
              Login
            </Button>

            <div style={{ marginTop: "10px" }}>
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
