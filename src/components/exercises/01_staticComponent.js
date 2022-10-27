import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h1>Applied Computing - Game Development</h1>
      <table className = "table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No. Lectures</th>
            <th>No. practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>WAD2</td>
          <td>2</td>
          <td>2</td>
          </tr>
          <tr>
            <td>DevOps</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NoSQL</td>
            <tr>2</tr>
            <tr>2</tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
