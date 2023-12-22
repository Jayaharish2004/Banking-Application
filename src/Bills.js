import { useContext, useState } from "react";
import userContext from "./context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Allpages.css";

export default function Bills() {
  const user = useContext(userContext);
  const len = user.users.length;
  const accountHolderName = user.users[len - 1].name;
  const accountHolderEmail = user.users[len - 1].email;
  const [currbalance, setCurrbalance] = useState(user.users[len - 1].balance);

  const [rechargeBill, setRechargeBill] = useState('');
  const [dishBill, setDishBill] = useState('');
  const [ebBill, setEbBill] = useState('');
  const [waterBill, setWaterBill] = useState('');

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalBill = Number(rechargeBill) + Number(dishBill) + Number(ebBill) + Number(waterBill);

    if (totalBill <= currbalance) {
      setCurrbalance(Number(currbalance) - totalBill);
      setShowModal(true); 
    } else {
      alert("Insufficient Balance");
    }

    setRechargeBill('');
    setDishBill('');
    setEbBill('');
    setWaterBill('');
    setIsButtonDisabled(true);

    user.users[len - 1].balance = currbalance;
  };

  const handleBillChange = (billType, value) => {
    switch (billType) {
      case 'recharge':
        setRechargeBill(value);
        break;
      case 'dish':
        setDishBill(value);
        break;
      case 'eb':
        setEbBill(value);
        break;
      case 'water':
        setWaterBill(value);
        break;
      default:
        break;
    }

    setIsButtonDisabled(
      rechargeBill === '' || dishBill === '' || ebBill === '' || waterBill === '' ||
      Number(rechargeBill) <= 0 || Number(dishBill) <= 0 || Number(ebBill) <= 0 || Number(waterBill) <= 0
    );
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="color">
      <div className="login">
        <Card className="form">
          <center>
            <form onSubmit={handleSubmit}>
              <h3>BILLS</h3>
              <hr />
              <h5>Account Holder: {accountHolderName}</h5>
              <h5>Email: {accountHolderEmail}</h5>
              <h5>Current Balance: ₹{currbalance}</h5>
              <hr />

              <label htmlFor="rechargeBill">Phone Recharge Bill:</label>
              <input
                type="number"
                id="rechargeBill"
                placeholder="Enter Recharge Bill"
                value={rechargeBill}
                onChange={(e) => handleBillChange('recharge', e.target.value)}
              />

              <label htmlFor="dishBill">TV Bill:</label>
              <input
                type="number"
                id="dishBill"
                placeholder="Enter Dish Bill"
                value={dishBill}
                onChange={(e) => handleBillChange('dish', e.target.value)}
              />

              <label htmlFor="ebBill">EB Bill:</label>
              <input
                type="number"
                id="ebBill"
                placeholder="Enter EB Bill"
                value={ebBill}
                onChange={(e) => handleBillChange('eb', e.target.value)}
              />

              <label htmlFor="waterBill">Water Bill:</label>
              <input
                type="number"
                id="waterBill"
                placeholder="Enter Water Bill"
                value={waterBill}
                onChange={(e) => handleBillChange('water', e.target.value)}
              />

              <Button type="submit" disabled={isButtonDisabled}>
                Pay Bills
              </Button>

              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Payment Successful!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your bills have been successfully paid.</Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={handleCloseModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </form>
          </center>
        </Card>
      </div>
    </div>
  );
}
