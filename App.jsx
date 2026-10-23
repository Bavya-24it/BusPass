
import { useState, useEffect } from 'react';
import './App.css';

function WalletTransaction(props) {
  return (
    <div>
      <p>Transaction Id: {props.transactionId}</p>
      <p>WalletHolder Name: {props.walletHolder}</p>
      <p>Amount: {props.amount}</p>
      <p>TransactionType: {props.transactionType}</p>
    </div>
  );
}

function App() {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    console.log('Digital Wallet System Loaded');
  }, [amount]);

  return (
    <div>
      <h2>Digital Wallet System</h2>

      <button onClick={() => setAmount(amount => amount + 500)}>
        Amount is {amount}
      </button>

      <WalletTransaction
        transactionId="WT02"
        walletHolder="Priya"
        amount={3000}
        transactionType="Credit"
      />
    </div>
  );
}

export default App;
