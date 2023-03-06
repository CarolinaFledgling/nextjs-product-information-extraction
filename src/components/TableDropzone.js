import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './TableDropzone.module.css';

function TableDropzone() {
  const [tableData, setTableData] = useState(null);

  console.log("tableData",tableData)

  const onDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        setTableData(data);
      } catch (error) {
        console.error(error);
        setTableData(null);
      }
    };
    reader.readAsText(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={styles.container}>
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag & drop some JSON data here, or click to select files</p>
        )}
      </div>
      {tableData ? (
        <div className={styles.successMessage}>JSON file successfully uploaded and processed!</div>
      ) : null}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.stickyHeader}>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image URL</th>
              <th>Price</th>
              <th>Unit Price</th>
              <th>Sold out from supplier</th>
              <th>Missing Price</th>
              <th>Missing Alt Text</th>
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td className={styles.imageCell}><img src={item.imageUrl} alt={item.hasAltText.toString()} /></td>
                <td>{item.price}</td>
                <td>{item.unitPrice}</td>
                <td>{item.outOfStock ? "OUT OF STOCK" : "-"}</td>
                <td>{item.hasMissingPrice ? "Yes" : "-"}</td>
                <td>{item.hasAltText ? "Yes" : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableDropzone;