import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function LoanForm() {
  const [accountNumber, setAccountNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [showModal, setShowModal] = useState(false);

  const loanTypes = ['Housing Loan', 'Personal Loan', 'Gold Loan', 'Educational Loan'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Form Submitted", {
      accountNumber,
      fullName,
      email,
      phone,
      loanType,
      loanAmount,
    });

    setShowModal(true);

    setAccountNumber('');
    setFullName('');
    setEmail('');
    setPhone('');
    setLoanType('');
    setLoanAmount('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="color">
      <div className="login">
        <Card className="form">
          <form onSubmit={handleSubmit}>
            <span>LOAN APPLICATION</span>
            <hr />
            <Form.Group controlId="accountNumber">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="loanType">
              <Form.Label>Loan Type</Form.Label>
              <Form.Control
                as="select"
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                required
              >
                <option value="" disabled>Select Loan Type</option>
                {loanTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="loanAmount">
              <Form.Label>Loan Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Loan Amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" className="button">
              Submit Loan Application
            </Button>
          </form>
        </Card>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Loan application form submitted successfully.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
