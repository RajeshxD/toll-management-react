import "../../styles/Navbar.css";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../Main";
import { useState } from "react";
function VehicleEntryModal() {
  let navigate = useNavigate();

  const [toll, setToll] = useState("");
  const [vehicletype, setvehicletype] = useState("");
  const [vehicleNo, setVehicleNo] = useState();
  const [tarif, settarif] = useState("");

  let getTollName = JSON.parse(localStorage.getItem("tollEntries") || " [ ] ");

  const vehicleList = ["Car/Jeep/Van", "LCV", "Truck/Bus", "Heavy Vehicle"];

  let vehicletoll = {};

  useMemo(() => {
    let currentTime = new Date();
    let test = [];

    if (JSON.parse(localStorage.getItem(" vehicleEntries ")) === null) {
      for (let item of getTollName) {
        if (toll === item.tollDetail) {
          // console.log(toll);
          if (item.vehicle1.vechicletype === vehicletype) {
            settarif(item.vehicle1.input1);
          }
          if (item.vehicle2.vechicletype === vehicletype) {
            settarif(item.vehicle2.input1);
          }
          if (item.vehicle3.vechicletype === vehicletype) {
            settarif(item.vehicle3.input1);
          }
          if (item.vehicle4.vechicletype === vehicletype) {
            settarif(item.vehicle4.input1);
          }
          break;
        }
        result = "";
      }
    }

    for (let i of JSON.parse(
      localStorage.getItem(" vehicleEntries ") || " [ ] "
    )) {
      if (i.vehicleNo === vehicleNo) {
        // console.log(typeof vehicleNo);
        test = i.time;

        var diff = currentTime.valueOf() - new Date(test).valueOf();

        var result = Math.floor(diff / 1000 / 60 / 60);
        for (let item of getTollName) {
          if (toll === item.tollDetail) {
            // console.log(toll);
            if (item.vehicle1.vechicletype === vehicletype) {
              // console.log("running 1st");
              if (result < 1) {
                settarif(item.vehicle1.input2);
              }
            }
            if (item.vehicle2.vechicletype === vehicletype) {
              console.log("running 2nd");
              if (result < 1) {
                // console.log(result);
                settarif(item.vehicle2.input2);
              }
            }
            if (item.vehicle3.vechicletype === vehicletype) {
              console.log("running 3d");
              if (result < 1) {
                // console.log("running");
                settarif(item.vehicle3.input2);
              }
            }
            if (item.vehicle4.vechicletype === vehicletype) {
              console.log("running 4td");
              if (result < 1) {
                // console.log("running");
                settarif(item.vehicle4.input2);
              }
            }
            break;
          }
          result = "";
        }

        if (vehicleNo === "") {
          settarif("");
        }
      } else {
        for (let item of getTollName) {
          if (toll === item.tollDetail) {
            // console.log(toll);
            if (item.vehicle1.vechicletype === vehicletype) {
              settarif(item.vehicle1.input1);
            }
            if (item.vehicle2.vechicletype === vehicletype) {
              settarif(item.vehicle2.input1);
            }
            if (item.vehicle3.vechicletype === vehicletype) {
              settarif(item.vehicle3.input1);
            }
            if (item.vehicle4.vechicletype === vehicletype) {
              settarif(item.vehicle4.input1);
            }
            break;
          }
          result = "";
        }

        if (vehicleNo === "") {
          settarif("");
        }
      }
    }
  }, [vehicleNo]);

  let vehicleDetail = {};

  const submit = () => {
    vehicleDetail["VehicleType"] = vehicletype;
    vehicleDetail["vehicleNo"] = vehicleNo;
    vehicleDetail["time"] = new Date().toLocaleString();
    vehicleDetail["tollName"] = toll;
    vehicleDetail["tariff"] = tarif;

    //console.log(vehicletype)

    if (vehicleNo === undefined || vehicletype === "" || toll === "") {
      alert("Please Enter All Field ");
    } else {
      var entrties = JSON.parse(
        localStorage.getItem(" vehicleEntries ") || " [ ] "
      );

      entrties.push(vehicleDetail);
      localStorage.setItem(" vehicleEntries ", JSON.stringify(entrties));

      navigate("/");

      window.location.reload(false);
    }
  };

  return (
    <>
      <Main />
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="/"
              title="Close"
              className="close"
              onClick={() => {
                // navigate('/')
              }}
            >
              X
            </a>
          </div>
          <div className="vehicle-title">
            <h4> Add new entry</h4>
          </div>

          <div>
            <div>
              <label htmlFor="vehicleDetails">
                Select toll name <span className="req">*</span>
              </label>
              <select
                onClick={(e) => {
                  setToll(e.target.value);
                  vehicletoll["tollName"] = toll;
                }}
              >
                {getTollName?.map((item, index) => {
                  return <option key={index}>{item.tollDetail}</option>;
                })}
              </select>
            </div>
            <div>
              <label>
                Select Vehicle type <span className="req">*</span>
              </label>
              <select
                onClick={(e) => {
                  setvehicletype(e.target.value);
                }}
              >
                {vehicleList?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
            <div>
              <label>
                Vehicle Number <span className="req">*</span>
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setVehicleNo(e.target.value);
                }}
                placeholder="Enter Vehicle No."
              />
            </div>
            <div>
              <label>
                Tariff <span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="Tariff amount"
                value={tarif}
                disabled
              />
            </div>
          </div>
          <button className="row-btn" onClick={submit}>
            Add Detail
          </button>
        </div>
      </div>
    </>
  );
}

export default VehicleEntryModal;
