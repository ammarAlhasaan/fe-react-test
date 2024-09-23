import React from 'react';
import styles from './List.module.scss';

interface ListProps {
  headers: { key: string, label:string }[]; // Array of header titles
  data: any[]; // Array of objects, each representing a row of data
}


const Item = ({ colData, colIndex }: any) => {

  // Determine if the cellData is an object or string (or any other type)
  let content;
  if (typeof colData === 'object' && colData !== null) {
    content = colData.renderCol();
  } else {
    // If it's a primitive value (string, number, etc.)
    content = colData;
  }
  return (
    <div key={colIndex} className={styles.listItem}>
      {content}
    </div>
  )
}
const List: React.FC<ListProps> = ({headers, data}) => {
  return (
    <div className={styles.listContainer}>
      {/* Render Headers */}
      <div className={styles.listHeader}>
        {headers.map((header) => (
          <div key={header.key} className={styles.listHeaderItem}>
            {header.label}
          </div>
        ))}
      </div>

      {/* Render Data Rows */}
      <div className={styles.listBody}>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.listRow}>
            {headers.map((header, colIndex) => (
              <Item key={colIndex} colIndex={colIndex} colData={row[header.key]}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
