import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "./context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
  const navigate = useNavigate();
  const user = useContext(userContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setErrors({ registration: "All fields are required" });
      return;
    }

    const isEmailTaken = user.users.some(u => u.email === email);
    if (isEmailTaken) {
      setErrors({ registration: "Email is already registered" });
      return;
    }

    user.users.push({ name, email, password, balance: 0 });

    navigate('/login');
  };

  return (
    <div className="color">
      <div className="login">
        <Card className="form">
          <form onSubmit={handleRegister}>
            <span>REGISTER</span>
            <hr />

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

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

            {errors.registration && <p className="error">{errors.registration}</p>}

            <Button type="submit" className="button">
              Register
            </Button>

            <div style={{ marginTop: "10px" }}>
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
