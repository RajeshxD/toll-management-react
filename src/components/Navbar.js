//import "./../style/filter.css"
import { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  var tollData = JSON.parse(localStorage.getItem("tollEntries") || " [ ] ");

  let vehicleDetail = [];
  const filtertolldropdown = (e) => {
    var entrties = JSON.parse(
      localStorage.getItem(" vehicleEntries ") || " [ ] "
    );

    if (e === "All") {
      for (let i of entrties) {
        vehicleDetail.push(i);
      }
      localStorage.setItem("filteredItem", JSON.stringify(vehicleDetail));
    }
    // console.log(JSON.parse(localStorage.getItem("filteredItem")));
    for (let i of entrties) {
      if (i.tollName === e) {
        vehicleDetail.push(i);
      }
    }
    localStorage.setItem("filteredItem", JSON.stringify(vehicleDetail));

    window.location.reload(false);
  };

  let searchedfilter = [];

  const filterBySearch = (e) => {
    //For Toll Search In Toll Gate

    if (JSON.parse(localStorage.getItem("Boolean") || " [ ] ") === false) {
      let getTollName = JSON.parse(
        localStorage.getItem("tollEntries") || " [ ] "
      );

      // console.log(JSON.parse(localStorage.getItem("searchtoll")));
      const filteredData = getTollName.filter((item) =>
        String(item.tollDetail)
          .toLowerCase()
          .includes(
            String(JSON.parse(localStorage.getItem("searchtoll"))).toLowerCase()
          )
      );
      setTimeout(window.location.reload(false), 2000);

      localStorage.setItem("filteredItem", JSON.stringify(filteredData));
    } else {
      //For Vehicle  Search In Main Page
      let entrties = JSON.parse(
        localStorage.getItem(" vehicleEntries ") || " [ ] "
      );
      for (let item of entrties) {
        if (item.vehicleNo === e) {
          searchedfilter.push(item);
          setTimeout(window.location.reload(false), 2000);
        }
      }
      localStorage.setItem("filteredItem", JSON.stringify(searchedfilter));
    }
  };

  //For View Toll

  let viewTolls = JSON.parse(localStorage.getItem("Boolean"));
  const [boolean, setBoolean] = useState(viewTolls);

  useMemo(() => {
    localStorage.setItem("Boolean", true);
    localStorage.setItem("Boolean", JSON.stringify(boolean));

    if (JSON.parse(localStorage.getItem("Boolean")) === false) {
      navigate("/viewlist");
    } else {
      navigate("/");
    }
  }, [boolean]);

  return (
    <>
      <div>
        <h4
          style={{
            display: "flex",
            marginLeft: "50px",
            fontSize: "25px",
          }}
        >
          Toll Management Application
        </h4>
        <hr />
      </div>
      <div className="main">
        <div className="a">
          {/* For Home Page Filter          */}
          {viewTolls ? (
            <>
              <h3> Toll entries/Vehicle entries</h3>
              <img
                onClick={() => {
                  if (isActive === false) {
                    setIsActive(true);
                  } else {
                    setIsActive(false);
                  }
                }}
                style={{
                  marginTop: "20px",
                  marginLeft: "10px",
                }}
                src="./filter.svg"
                alt=""
              ></img>

              <div
                className="dropdowncontainer"
                style={{
                  display: isActive ? "inline-block" : "none",
                  backgroundColor: "white",
                }}
              >
                <li
                  style={{
                    cursor: "pointer",
                  }}
                  key={"name"}
                  onClick={(e) => {
                    filtertolldropdown(e.target.innerHTML);
                  }}
                >
                  All
                </li>

                {tollData?.map((item, index) => {
                  return (
                    <div key={index}>
                      <li
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          setIsActive(false);
                          localStorage.setItem("Name", item.tollDetail);
                          filtertolldropdown(item.tollDetail);
                        }}
                      >
                        {item.tollDetail}
                      </li>
                    </div>
                  );
                })}
              </div>

              <input
                style={{
                  height: "35px",
                  // width: "400px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  marginLeft: "10px",
                  fontFamily: "Arial , FontAwesome",
                  fontSize: "large",
                }}
                onChange={(e) => {
                  filterBySearch(e.target.value);
                }}
                placeholder="&#xF002; Search a vehicle"
              />
            </>
          ) : (
            /* For Toll Gates Filter          */
            <>
              <h3> Toll Gates List</h3>
              <input
                style={{
                  height: "35px",
                  // width: "400px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  marginLeft: "10px",
                  fontFamily: "Arial , FontAwesome",
                  fontSize: "large",
                }}
                value={JSON.parse(localStorage.getItem("searchtoll"))}
                onChange={(e) => {
                  filterBySearch();
                  localStorage.setItem(
                    "searchtoll",
                    JSON.stringify(e.target.value)
                  );
                }}
                placeholder="&#xF002; Search a toll"
                ref={(element) => element?.focus?.()}
              />
            </>
          )}

          {/* For Right  Filter          */}
        </div>

        <div className="c">
          <button
            onClick={() => {
              localStorage.setItem("filteredItem", JSON.stringify(null));
              setBoolean(true);
            }}
          >
            <a
              style={{
                color: "white",
                textDecoration: "none",
              }}
              href="/addnewvehicle"
            >
              Add Vehicle Entry
            </a>
          </button>
          <button
            onClick={() => {
              localStorage.setItem(
                "filteredItem",
                JSON.stringify(
                  JSON.parse(localStorage.getItem(" vehicleEntries "))
                )
              );
              setBoolean(true);
              //navigate('/addnewvehicle')
            }}
          >
            <a
              style={{
                color: "white",
                textDecoration: "none",
              }}
              href="/addnewtoll"
            >
              Add New Toll
            </a>
          </button>

          {boolean ? (
            <button
              onClick={() => {
                if (boolean === false) {
                  setBoolean(true);
                } else if (boolean === true) {
                  setBoolean(false);
                }
                localStorage.setItem("filteredItem", "");
                var entrties = JSON.parse(
                  localStorage.getItem("tollEntries") || " [ ] "
                );

                localStorage.setItem("filteredItem", JSON.stringify(entrties));
              }}
            >
              View Tolls
            </button>
          ) : (
            <button
              onClick={() => {
                if (boolean === false) {
                  setBoolean(true);
                } else if (boolean === true) {
                  setBoolean(false);
                }
                localStorage.setItem("filteredItem", "");
                var entrties = JSON.parse(
                  localStorage.getItem(" vehicleEntries ") || " [ ] "
                );

                for (let i of JSON.parse(
                  localStorage.getItem("tollEntries") || " [ ] "
                )) {
                  vehicleDetail.push(i);
                }
                localStorage.setItem("filteredItem", JSON.stringify(entrties));
              }}
            >
              Back to vehicle logs
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
