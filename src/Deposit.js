import { useContext, useState } from "react";
import userContext from "./context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Allpages.css";

export default function Deposit() {
  const user = useContext(userContext);
  const len = user.users.length;
  const accountHolderName = user.users[len - 1].name;
  const accountHolderEmail = user.users[len - 1].email; 
  const [currbalance, setCurrbalance] = useState(user.users[len - 1].balance);
  const [deposit, setDeposit] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBalance = Number(currbalance) + Number(deposit);
    setCurrbalance(newBalance);
    setInputValue("");
    setIsButtonDisabled(true);

    user.users[len - 1].balance = newBalance;
  };

  const handleDepositChange = (e) => {
    const amount = e.target.value;
    setDeposit(amount);
    setInputValue(amount);
    setIsButtonDisabled(amount === "" || amount <= 0);
  };

  return (
    <div className="color">
      <div className="login">
        <Card className="form">
          <center>
            <form onSubmit={handleSubmit}>
              <h3>DEPOSIT</h3>
              <hr />
              <h5>Account Holder: {accountHolderName}</h5>
              <h5>Email: {accountHolderEmail}</h5>
              <h5>Current Balance: ₹{currbalance}</h5>
              <hr />
              <label htmlFor="depositAmount">Enter the Amount:</label>
              <input
                type="number"
                id="depositAmount"
                placeholder="Enter the Amount"
                value={inputValue}
                onChange={handleDepositChange}
              />
              <Button type="submit" disabled={isButtonDisabled}>
                Deposit
              </Button>
            </form>
          </center>
        </Card>
      </div>
    </div>
  );
}
