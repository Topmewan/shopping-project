import RowItem from "./RowItem/RowItem";
import styles from "./Table.module.scss";

export const Table = ({ columns, rows }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <td key={column.accessor}>{column.label}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((item, idx) => {
          return <RowItem key={idx} item={item} />;
        })}
      </tbody>
    </table>
  );
};
