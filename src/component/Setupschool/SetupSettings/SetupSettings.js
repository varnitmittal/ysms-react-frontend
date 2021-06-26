import React from 'react';
import CustomGrid from './CustomGrid';

const SetupSettings = () => {
  const items = [
    'Quarter 1',
    'Quarter 2',
    'Quarter 3',
    'Half-Yearly 1',
    'Half-Yearly 2',
    'Half-Yearly 3'
  ];
  const customGridItems = [
    {
      col1: 'a',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'b',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'c',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'd',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'e',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'f',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'g',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'h',
      col2: 'Mr. aiddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'I',
      col2: 'Mr. Siddharth Jain',
      col3: 4,
      col4: ''
    },
    {
      col1: 'j',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'k',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'l',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'm',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'n',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'I',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'z',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    }
  ];

  let [searchTable, setSearchTable] = React.useState('');
  // let searchtableChange = (e) => {
  //   setSearchTable(e.target.value);
  // };

  const [claassValue, setChooseValue] = React.useState('');
  // const handleChangeChooseValue = (event) => {
  //   setChooseValue(event.target.value);
  // };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [count, setCount] = React.useState(1);
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
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
  const [state, setState] = React.useState({ values: [] });

  const handleSelectChange = (i, e) => {
    setState({
      values: { ...state.values, [i]: e.target.value }
    });
  };
  return (
    <>
      <CustomGrid
        customGridItems={filterItems(customGridItems)}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default SetupSettings;
