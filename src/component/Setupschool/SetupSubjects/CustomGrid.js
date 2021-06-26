import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';

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
  const [viewMore, setViewMore] = useState();
  const [deletePopupOpenBit, setDeletePopupOpenBit] = React.useState(false);

  const deletePopupOpen = () => {
    setDeletePopupOpenBit(true);
  };

  const deletePopupClose = () => {
    setDeletePopupOpenBit(false);
  };

  const handleViewMore = (e, index) => {
    setViewMore(index);
  };

  const handleHideAll = (e, index) => {
    setViewMore();
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
                  <span
                    className='hand-cursor sortingElement'
                    sortval='CLASS_NAME'
                  >
                    SERIAL NO.
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
                  className='pb-20 pt-20 text-nowrap grey2color text-left'
                >
                  <span
                    className='hand-cursor sortingElement'
                    sortval='SECTION'
                  >
                    SUBJECT
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
                  className='pb-20 pt-20 text-nowrap grey2color text-left'
                >
                  <span
                    className='hand-cursor sortingElement'
                    sortval='CLASS_TEACHER'
                  >
                    CLASSES
                    <span
                      className='flex-column d-inline-flex'
                      onClick={() => requestSort('col3')}
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
                    sortval='NO_OF_STUDENTS'
                  >
                    SUBJECT TEACHERS
                    <span
                      className='flex-column d-inline-flex'
                      onClick={() => requestSort('col4')}
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
                ? customGridItems.map((customGridItem, index) => (
                    <tr
                      className='border-bottom-grey'
                      key={customGridItem.toString()}
                    >
                      <td className='pl-30'>
                        <div className='h-80 d-flex align-items-center'>
                          {customGridItem.id < 10
                            ? '0' + customGridItem.id
                            : customGridItem.id}
                        </div>
                      </td>
                      <td>
                        <div
                          className='h-80 d-flex align-items-center'
                          style={{
                            width: '10vh',
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          {customGridItem.col1}
                        </div>
                      </td>
                      <td>
                        {/* <div
                          className='h-80 d-flex align-items-center'
                          style={{
                            width: '10vh',
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          {customGridItem.col2}
                        </div> */}
                        {viewMore == index ? (
                          <div
                            className='h-80 d-flex align-items-center'
                            style={{
                              width: '10vh',
                              display: 'flex',
                              justifyContent: 'center',
                              flexDirection: 'column'
                            }}
                          >
                            {customGridItem.col5.map((item) => (
                              <div
                                style={{
                                  padding: 20
                                }}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div
                            className='h-80 d-flex align-items-center'
                            style={{
                              width: '10vh',
                              display: 'flex',
                              justifyContent: 'center'
                            }}
                          >
                            {customGridItem.col2}
                          </div>
                        )}
                      </td>
                      <td>
                        {viewMore == index ? (
                          <div
                            className='h-80 d-flex'
                            style={{
                              height: '30vh',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-start'
                            }}
                          >
                            {customGridItem.col4.map((item) => (
                              <div className='h-80 d-flex align-items-center'>
                                <Avatar
                                  style={{
                                    marginRight: 5
                                  }}
                                />
                                <div>{item}</div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className='h-80 d-flex align-items-center'>
                            <Avatar
                              style={{
                                marginRight: 5
                              }}
                            />
                            {customGridItem.col3}
                          </div>
                        )}
                      </td>
                      <td>
                        {viewMore == index ? (
                          <div
                            className='border-blue d-inline-flex p-10 br-20 font-weight-bold hand-cursor bluecolor fs-16 align-items-center'
                            onClick={(e) => handleHideAll(e, index)}
                            key={index}
                          >
                            hide all <ExpandLessIcon className='fs-25' />
                          </div>
                        ) : (
                          <div
                            className='border-blue d-inline-flex p-10 br-20 font-weight-bold hand-cursor bluecolor fs-16 align-items-center'
                            onClick={(e) => handleViewMore(e, index)}
                            key={index}
                          >
                            view all <ExpandMoreIcon className='fs-25' />
                          </div>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={deletePopupOpen}
                          className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 deleteBtn hand-cursor'
                        >
                          <DeleteIcon className='fs-25' />
                        </button>
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
