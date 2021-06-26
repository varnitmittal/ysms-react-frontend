import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CustomGrid from "./CustomGrid";

(() => {
  if (window.location.pathname === "/teacherrequests") {
    import("../../../indexdashboard.css");
  }
})();

const TeacherRequests = () => {
  const items = [
    "LKG",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII"
  ];
  const status = ["Accepted", "Denied", "All requests"];
  const customGridItems = [
    {
      col1: 1,
      col2: "24 Oct 2020",
      col3: "Mr. Siddharth Jain",
      col4: 9458048800,
      col5: ""
    },
    {
      col1: 2,
      col2: "24 Oct 2020",
      col3: "Mr. Siddharth Jain",

      col4: 9458048800,
      col5: ""
    },
    ,
    {
      col1: 3,
      col2: "24 Oct 2020",
      col3: "Mr. Siddharth Jain",

      col4: 9458048800,
      col5: ""
    },
    ,
    {
      col1: 4,
      col2: "24 Oct 2020",
      col3: "Mr. Siddharth Jain",

      col4: 9458048800,
      col5: ""
    },
    ,
    {
      col1: 5,
      col2: "24 Oct 2020",
      col3: "Mr. Siddharth Jain",

      col4: 9458048800,
      col5: ""
    },
    ,
    {
      col1: 6,
      col2: "24 Oct 2020",
      col3: "Mr. Siddharth Jain",

      col4: 9458048800,
      col5: ""
    },
    ,
    {
      col1: 7,
      col2: "24 Oct 2020",
      col3: "Mr. Siddharth Jain",

      col4: 9458048800,
      col5: ""
    },
    ,
    {
      col1: 8,
      col2: "24 Oct 2020",
      col3: "Mr. Siddharth Jain",

      col4: 9458048800,
      col5: ""
    },
    ,
    {
      col1: 9,
      col2: "24 Oct 2020",
      col3: "Mr. Siddharth Jain",

      col4: 9458048800,
      col5: ""
    }
  ];

  let [searchTable, setSearchTable] = React.useState("");
  let searchtableChange = (e) => {
    setSearchTable(e.target.value);
  };

  const [statusValue, setStatusValue] = React.useState("");
  const handleChangeStatusValue = (event) => {
    setStatusValue(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const filterItems = (presets) => {
    var values = Object.keys(presets).map(function (e) {
      return presets[e];
    });
    return values.filter(function (person) {
      return (
        person.col1
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
        person.col2
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
        person.col3
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
        person.col4.toString().toLowerCase().indexOf(searchTable) >= 0
      );
    });
  };
  return (
    <>
      <div className='App d-flex'>
        <div className='d-flex flex-column w-100per bs-border-box'>
          <div className='p-20 main-scroll-height overflow-y-auto overflow-x-hidden'>
            <div className='fs-20 font-weight-bold mt-5'>Teacher Requests</div>
            <div className='studentRequestbg'>
              <div className='p-30 d-flex align-items-center justify-space-between'>
                <TextField
                  id='input-with-icon-textfield'
                  placeholder='Search requests...'
                  onChange={searchtableChange}
                  className='search-input'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                  style={{
                    border: "1px solid #EBEBEB",
                    background: "#F8F8F8"
                  }}
                />
                <div className='d-flex align-items-center'>
                  <Select
                    IconComponent={() => <KeyboardArrowDownIcon />}
                    id='classlist'
                    className='custom-choose-select'
                    name='classlist'
                    displayEmpty
                    value={statusValue}
                    onChange={handleChangeStatusValue}
                    style={{
                      width: "auto",
                      background: "#F8F8F8",
                      border: "1px solid #EBEBEB"
                    }}
                  >
                    <MenuItem value={""}>Choose Status</MenuItem>
                    {status.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </div>
              </div>

              <CustomGrid
                customGridItems={filterItems(customGridItems)}
                handleOpen={handleOpen}
                open={open}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherRequests;
