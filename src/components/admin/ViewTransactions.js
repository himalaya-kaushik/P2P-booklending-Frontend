// src/components/admin/ViewTransactions.js
import React, { useEffect } from "react";

const ViewTransactions = () => {
  // const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      // const response = await getTransactions();
      // setTransactions(response);
    };
    fetchTransactions();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold">View Transactions</h1>
      {/* <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>{transaction.details}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ViewTransactions;
