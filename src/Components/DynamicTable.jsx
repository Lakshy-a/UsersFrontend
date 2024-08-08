/* eslint-disable no-unused-vars */
import React from 'react';

const DynamicTable = () => {
  const numRows = 8;
  const numCols = 10;
  
  // Create an array of column headers
  const columns = Array.from({ length: numCols }, (_, index) => `Column ${index + 1}`);

  // Create table data
  const data = Array.from({ length: numRows }, () => 
    Array.from({ length: numCols }, () => `Data`)
  );

  return (
    <div className="container mx-auto">
      <table className="table-auto w-full">
        <thead className="text-left bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="text-xs font-medium text-gray-500 uppercase p-2"
                style={{ width: '100px' }} // Set the width for header cells
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="p-2"
                  style={{ width: '100px', height: '50px' }} // Set the width and height for cells
                >
                  {cell} {rowIndex + 1}-{colIndex + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <DynamicTable />
    </div>
  );
};

export default App;
