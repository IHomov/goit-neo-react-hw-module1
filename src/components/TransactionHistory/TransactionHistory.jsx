import styles from "./TransactionHistory.module.css" ;
function TransactionHistory({ items }) {
  return (
    <table className={styles.allTable}>
      <thead className={styles.tableName}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.rowData}>{type}</td>
            <td className={styles.rowData}>{amount}</td>
            <td className={styles.rowData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
