import React from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";

import "react-table/react-table.css";
import "./styles.css";

function App() {
  const tableData = [
      { name: 'Tanner Linsley', age: 26 }
    , { name: 'Bob Dylan', age: 53 }
  ];

  const columns = [
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    },
    {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }
  ];

  return (
    <div className="App">
      <h1>Test React Table</h1>
      Offical Site <a href="https://react-table.js.org/">https://react-table.js.org/</a>
      <p>
        Refer to the <strong>Props</strong> section for the available options.
      </p>

      <ReactTable
        data={tableData}
        columns={columns}
        showPagination={false}
        defaultPageSize={2}
      />
      <p>
        <i>Tip: Hold shift when sorting to multi-sort!</i>
        <p>Note: Columns are not draggable.</p>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
