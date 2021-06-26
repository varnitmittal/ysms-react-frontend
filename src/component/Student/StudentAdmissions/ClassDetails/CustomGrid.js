import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

const useSortableData = (customGridItems, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...customGridItems];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [customGridItems, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { customGridItems: sortedItems, requestSort, sortConfig };
};

const CustomGrid = (props) => {
  const { customGridItems, requestSort } = useSortableData(
    props.customGridItems
  );
  const [deletePopupOpenBit, setDeletePopupOpenBit] = React.useState(false);

  const deletePopupOpen = () => {
    setDeletePopupOpenBit(true);
  };

  const deletePopupClose = () => {
    setDeletePopupOpenBit(false);
  };

  return (
    <>
      <div className='pb-30'>
        <div className='table-responsive'>
          <table className='w-100per'>
            <thead className='border-bottom-grey border-top-grey fs-14'>
              <tr>
                <th
                  scope='col'
                  className='pl-30 pb-20 pt-20 text-nowrap grey2color text-left'
                >
                  <span className='hand-cursor sortingElement' sortval='REG_NO'>
                    REG NO.
                    <span
                      className='flex-column d-inline-flex'
                      onClick={() => requestSort('col1')}
                    >
                      <ExpandLessIcon />
                      <ExpandMoreIcon className='mt-n7' />
                    </span>
                  </span>
                </th>
                <th
                  scope='col'
                  className='pl-30 pb-20 pt-20 text-nowrap grey2color text-left'
                >
                  <span
                    className='hand-cursor sortingElement'
                    sortval='ROLL_NO'
                  >
                    ROLL NO.
                    <span
                      className='flex-column d-inline-flex'
                      onClick={() => requestSort('col2')}
                    >
                      <ExpandLessIcon />
                      <ExpandMoreIcon className='mt-n7' />
                    </span>
                  </span>
                </th>
                <th
                  scope='col'
                  className='pl-30 pb-20 pt-20 text-nowrap grey2color '
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <span
                    className='hand-cursor sortingElement'
                    sortval='STUDENT_NAME'
                  >
                    STUDENT NAME
                    <span
                      className='flex-column d-inline-flex'
                      onClick={() => requestSort('col3')}
                    >
                      <ExpandLessIcon />
                      <ExpandMoreIcon className='mt-n7' />
                    </span>
                  </span>
                  <div
                    style={{
                      width: '10vw',
                      color: 'white'
                    }}
                  >
                    test1234
                  </div>
                </th>
                <th
                  scope='col'
                  className='pl-30 pb-20 pt-20 text-nowrap grey2color text-left'
                >
                  <span
                    className='hand-cursor sortingElement'
                    sortval='CLASS_SECTION'
                  >
                    CLASS
                    <span
                      className='flex-column d-inline-flex'
                      onClick={() => requestSort('col4')}
                    >
                      <ExpandLessIcon />
                      <ExpandMoreIcon className='mt-n7' />
                    </span>
                  </span>
                </th>
                <th
                  scope='col'
                  className='pb-20 pt-20 text-nowrap grey2color text-left'
                >
                  <span
                    className='hand-cursor sortingElement'
                    sortval='SECTION'
                  >
                    SECTION
                    <span
                      className='flex-column d-inline-flex'
                      onClick={() => requestSort('col5')}
                    >
                      <ExpandLessIcon />
                      <ExpandMoreIcon className='mt-n7' />
                    </span>
                  </span>
                </th>
                <th
                  scope='col'
                  className='pb-20 pt-20 text-nowrap grey2color text-left'
                >
                  <span
                    className='hand-cursor sortingElement'
                    sortval='JOINING_DATE'
                  >
                    JOINING DATE
                    <span
                      className='flex-column d-inline-flex'
                      onClick={() => requestSort('col6')}
                    >
                      <ExpandLessIcon />
                      <ExpandMoreIcon className='mt-n7' />
                    </span>
                  </span>
                </th>
                <th scope='col' className='pb-20 pt-20 text-nowrap'></th>
                <th scope='col' className='pb-20 pt-20 text-nowrap'></th>
              </tr>
            </thead>
            <tbody className='fs-16 overflow-x-hidden overflow-y-auto maxh-500 d-block'>
              {customGridItems.length
                ? customGridItems.map((customGridItem) => (
                    <tr
                      className='border-bottom-grey'
                      key={customGridItem.toString()}
                    >
                      <td className='pl-30'>
                        <div className='h-80 d-flex align-items-center'>
                          {customGridItem.col1}
                        </div>
                      </td>
                      <td>
                        <div
                          className='h-80 d-flex align-items-center'
                          style={{
                            width: '6vw',
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          {customGridItem.col2}
                        </div>
                      </td>
                      <td>
                        <div
                          className='h-80 d-flex align-items-center'
                          style={{ width: '12vw' }}
                        >
                          <Avatar
                            style={{
                              height: '3.8vh',
                              width: '1.9vw',
                              marginRight: '0.5vw'
                            }}
                            alt='customer'
                          />
                          {customGridItem.col3}
                        </div>
                      </td>
                      <td>
                        <div
                          className='h-80 d-flex align-items-center'
                          style={{
                            width: '8vw',
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          {customGridItem.col4}
                        </div>
                      </td>
                      <td>
                        <div
                          className='h-80 d-flex align-items-center'
                          style={{
                            width: '5vw',
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          {customGridItem.col5}
                        </div>
                      </td>
                      <td>
                        <div className='h-80 d-flex align-items-center'>
                          {customGridItem.col6}
                        </div>
                      </td>
                      <td>
                        <button
                          onClick={deletePopupOpen}
                          className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 deleteBtn hand-cursor'
                        >
                          <DeleteIcon className='fs-25' />
                        </button>
                      </td>
                      <td>
                        <Link
                          to='/studentregistration'
                          className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 font-weight-bold editBtn hand-cursor'
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        open={deletePopupOpenBit}
        onClose={deletePopupClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className='d-flex align-items-center justify-center'
      >
        <div className='bg-grey br-20 d-flex flex-column p-30 w-400'>
          <h2 className='fs-20 d-flex w-100per font-weight-bold'>
            Delete confirmation
          </h2>
          <div className='fs-18 pb-40 pt-40'>
            Are you sure you want to delete ?
          </div>
          <div className='d-flex justify-flex-end'>
            <button
              onClick={deletePopupClose}
              className='mr-20 border-0 br-20 pb-10 pl-20 pr-20 pt-10 bg-blue whitecolor hand-cursor'
            >
              Yes
            </button>
            <button
              onClick={deletePopupClose}
              className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 bg-blue whitecolor hand-cursor'
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomGrid;
