import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

  const handleViewMore = (e, index) => {
    setViewMore(index);
  };

  const handleHideAll = (e, index) => {
    setViewMore();
  };

  return (
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
                  CLASS NAME
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
                <span className='hand-cursor sortingElement' sortval='SECTION'>
                  SECTION
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
                  CLASS TEACHER
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
                  NO OF STUDENTS
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
                        {customGridItem.col1}
                      </div>
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
                          {customGridItem.col6.map((item) => (
                            <div className='h-80 d-flex align-items-center'>
                              <div>{item}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className='h-80 d-flex align-items-center'>
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
                          {customGridItem.col5.map((item) => (
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
                      {/* <div
                        className='h-80 d-flex align-items-center'
                        style={{
                          width: '7vw',
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        {customGridItem.col4}
                      </div> */}
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
                          {customGridItem.col7.map((item) => (
                            <div className='h-80 d-flex align-items-center'>
                              <div>{item}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className='h-80 d-flex align-items-center'>
                          {customGridItem.col4}
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
                        onClick={props.handleOpen}
                        className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 font-weight-bold editBtn hand-cursor'
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomGrid;
