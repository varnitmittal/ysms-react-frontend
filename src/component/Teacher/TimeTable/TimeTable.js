import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import CustomGrid from './CustomGrid';
import TimeTableModal from './TimeTableModal';

(() => {
  if (window.location.pathname === '/teachertimetable') {
    import('../../../indexdashboard.css');
  }
})();

const TeacherRequests = () => {
  const customGridItems = [
    {
      col1: '#4566',
      col2: 'Mr. Siddharth Jain',
      col3: '24 Oct 2020',
      col4: 'XII-A',
      col5: ''
    },
    {
      col1: '#4567',
      col2: 'Mr. Siddharth Jain',
      col3: '24 Oct 2020',

      col4: 'XII-B',
      col5: ''
    },
    ,
    {
      col1: '#4568',
      col2: 'Mr. Siddharth Jain',
      col3: '24 Oct 2020',

      col4: 'XII-C',
      col5: ''
    },
    ,
    {
      col1: '#4569',
      col2: 'Mr. Siddharth Jain',
      col3: '24 Oct 2020',

      col4: 'XI-A',
      col5: ''
    },
    ,
    {
      col1: '#4570',
      col2: 'Mr. Siddharth Jain',
      col3: '24 Oct 2020',

      col4: 'XI-B',
      col5: ''
    },
    ,
    {
      col1: '#4571',
      col2: 'Mr. Siddharth Jain',
      col3: '24 Oct 2020',

      col4: 'XI-C',
      col5: ''
    },
    ,
    {
      col1: '#4572',
      col2: 'Mr. Siddharth Jain',
      col3: '24 Oct 2020',

      col4: 'XI-D',
      col5: ''
    },
    ,
    {
      col1: '#4573',
      col2: 'Mr. Siddharth Jain',
      col3: '24 Oct 2020',

      col4: 'XI-E',
      col5: ''
    },
    ,
    {
      col1: '#4574',
      col2: 'Mr. Siddharth Jain',
      col3: '24 Oct 2020',

      col4: 'XI-F',
      col5: ''
    }
  ];

  let [searchTable, setSearchTable] = React.useState('');
  let searchtableChange = (e) => {
    setSearchTable(e.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({ status: false, data: {} });
  const handleModalClose = () => {
    setModalData({ status: false, data: {} });
  };
  const handleViewDetailClick = () => {
    setModalData({ status: true, data: {} });
  };

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
            <div className='fs-20 font-weight-bold mt-5'>Time - Table</div>
            <div className='studentRequestbg'>
              <div className='p-30 d-flex align-items-center justify-space-between'>
                <TextField
                  id='input-with-icon-textfield'
                  placeholder='Search teachers...'
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
                    width: 'auto',
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB'
                  }}
                />
              </div>
              <CustomGrid
                customGridItems={filterItems(customGridItems)}
                handleOpen={handleOpen}
                open={open}
                handleViewDetailClick={handleViewDetailClick}
              />
            </div>
          </div>
        </div>
      </div>

      <TimeTableModal modalData={modalData} onClose={handleModalClose} />
    </>
  );
};

export default TeacherRequests;
