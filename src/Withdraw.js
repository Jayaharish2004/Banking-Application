import { useContext, useState } from "react";
import userContext from "./context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Allpages.css";

export default function Withdraw() {
  const user = useContext(userContext);
  const len = user.users.length;
  const accountHolderName = user.users[len - 1].name;
  const accountHolderEmail = user.users[len - 1].email; 
  const [currbalance, setCurrbalance] = useState(user.users[len - 1].balance);
  const [withdraw, setWithdraw] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (withdraw >= 0 && withdraw <= currbalance) {
      setCurrbalance(Number(currbalance) - Number(withdraw));
    } else {
      alert("Insufficient Balance");
    }

    setWithdraw('');
    setIsButtonDisabled(true);

    user.users[len - 1].balance = currbalance;
  };

  const handleWithdrawChange = (e) => {
    const amount = e.target.value;
    setWithdraw(amount);
    setIsButtonDisabled(amount === '' || amount <= 0);
  };

  return (
    <div className="color">
      <div className="login">
        <Card className="form">
          <center>
            <form onSubmit={handleSubmit}>
              <h3>WITHDRAW</h3>
              <hr />
              <h5>Account Holder: {accountHolderName}</h5>
              <h5>Email: {accountHolderEmail}</h5>
              <h5>Current Balance: ₹{currbalance}</h5>
              <hr />
              <label htmlFor="withdrawAmount">Enter the Amount:</label>
              <input
                type="number"
                id="withdrawAmount"
                placeholder="Enter the Amount"
                value={withdraw}
                onChange={handleWithdrawChange}
              />
              <Button type="submit" disabled={isButtonDisabled}>
                Withdraw
              </Button>
            </form>
          </center>
        </Card>
      </div>
    </div>
  );
}
