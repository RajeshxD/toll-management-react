import "./../styles/Navbar.css";
import React from "react";

function TableTab() {
  let vechileData = JSON.parse(
    localStorage.getItem(" vehicleEntries ") || " [ ] "
  );

  let filteredData = JSON.parse(
    localStorage.getItem("filteredItem") || " [ ] "
  );
  //console.log(filteredData)
  const data = () => {
    if (filteredData === undefined || filteredData === null || filteredData) {
      return (
        <>
          {vechileData.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{item.VehicleType}</td>
                  <td>{item.vehicleNo}</td>
                  <td>{item.time}</td>
                  <td>{item.tollName}</td>
                  <td>{item.tariff}</td>
                </tr>
              </tbody>
            );
          })}
        </>
      );
    } else {
      // console.log("running");
      return (
        <>
          {filteredData.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{item.VehicleType}</td>
                  <td>{item.vehicleNo}</td>
                  <td>{item.time}</td>
                  <td>{item.tollName}</td>
                  <td>{item.tariff}</td>
                </tr>
              </tbody>
            );
          })}
        </>
      );
    }
  };

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Vehicle Type</th>
              <th>Vehicle Number</th>
              <th>Date/Time</th>
              <th>Toll Name</th>
              <th>Tarif</th>
            </tr>
          </thead>
          {data()}
        </table>
      </div>
    </>
  );
}

export default TableTab;
