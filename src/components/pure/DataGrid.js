import React, { useState, useEffect } from "react";
import "./DataGrid.css";

const DataGrid = (props) => {
  const { columns, rows, rowSelection } = props;

  const [originRows, setOriginRows] = useState(rows);
  const [data, setData] = useState(rows);
  const [selectedRow, setSelectedRow] = useState([]);

  useEffect(() => {
    console.log("### props => ", props);
  }, [props]);

  useEffect(() => {
    if (selectedRow) {
      rowSelection(selectedRow);
    }
  }, [selectedRow]);

  const CellRender = ({ row, column }) => {
    const { key, title, editable, render } = column;

    const changeEvent = (e) => {
      setData(
        data.map((item) => {
          return item.id === row.id
            ? { ...item, [column.key]: e.target.value }
            : item;
        })
      );
      console.log("### e => ", e.target.value, row, column.key);
    };
    return (
      <td>
        {render && typeof render === "function"
          ? render(row[column.key], row, changeEvent)
          : row[column.key]}
      </td>
    );
  };

  return (
    <div>
      <h2>DataGrid</h2>
      {columns.length > 0 && (
        <div>
          <table className="table1">
            <thead>
              <span>count : {data.length}</span>
              <tr>
                {columns.map((column) => (
                  <th>{column.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr onClick={() => setSelectedRow(row)}>
                  {columns.map((column) => (
                    <CellRender row={row} column={column} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataGrid;
