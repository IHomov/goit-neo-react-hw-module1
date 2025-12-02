import "./TransactionHistory.css";
function TransactionHistory({ items }) {
  return (
    <table className="all-table">
      <thead className="table-name">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="table-body">
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className="row-data">{type}</td>
            <td className="row-data">{amount}</td>
            <td className="row-data">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
