import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './TableDropzone.module.css';

function TableDropzone() {
  const [tableData, setTableData] = useState(null);

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
          <p>Drag &apos;n&apos; drop some JSON data here, or click to select files</p>
        )}
      </div>
      {tableData ? (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Image URL</th>
                <th>Price</th>
                <th>Unit Price</th>
                <th>Out of Stock</th>
                <th>Missing Price</th>
                <th>Alt Text</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td className={styles.imageCell}><img src={item.imageUrl} alt={item.hasAltText.toString()} /></td>
                  <td>{item.price}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.outOfStock.toString()}</td>
                  <td>{item.hasMissingPrice.toString()}</td>
                  <td>{item.hasAltText.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default TableDropzone;