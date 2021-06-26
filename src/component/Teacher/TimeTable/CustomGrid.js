import React from 'react';
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
                <span className='hand-cursor sortingElement' sortval='EMP_ID'>
                  EMP ID
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
                  sortval='TEACHER_NAME'
                >
                  TEACHER NAME
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
                  sortval='JOINING_DATE'
                >
                  JOINING DATE
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
                  sortval='MOBILE_NUMBER'
                >
                  CLASS TEACHER
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
            </tr>
          </thead>
          <tbody className='fs-16 overflow-x-hidden overflow-y-auto maxh-500 d-block'>
            {customGridItems.length
              ? customGridItems.map((customGridItem) => (
                  <tr className='border-bottom-grey' key={customGridItem.col1}>
                    <td className='pl-30'>
                      <div className='h-80 d-flex align-items-center'>
                        {customGridItem.col1}
                      </div>
                    </td>
                    <td>
                      <div className='h-80 d-flex align-items-center'>
                        <Avatar
                          style={{
                            marginRight: 5
                          }}
                        />
                        {customGridItem.col2}
                      </div>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <div className='h-80 d-flex align-items-center'>
                        {customGridItem.col3}
                      </div>
                    </td>
                    <td>
                      <div className='h-80 d-flex align-items-center'>
                        {customGridItem.col4}
                      </div>
                    </td>
                    <td>
                      <button
                        className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 font-weight-bold AcceptBtn hand-cursor'
                        onClick={() => props.handleViewDetailClick()}
                        style={{
                          color: '#1D4ED8',
                          backgroundColor: '#DBEAFE',
                          outline: 'none'
                        }}
                      >
                        View Details
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
