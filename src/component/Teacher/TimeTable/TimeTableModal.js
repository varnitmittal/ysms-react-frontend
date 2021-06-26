import React from 'react';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import CancelIcon from '@material-ui/icons/Cancel';

const styles = {
  container: {
    height: 'auto',
    background: '#F8F8F8',
    borderRadius: 20,
    color: '#000'
  },
  header: {
    width: '100%',
    height: 100,
    background: '#FFFFFF',
    borderRadius: 20,
    display: 'flex',
    padding: '30px 50px',
    alignItems: 'center'
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'flex-start',
    padding: '0px 20px',
    borderRight: '1px solid #cdcdcd'
  },
  textPrimary: {
    fontWeight: 600,
    fontSize: 22
  },
  textSecondary: {
    fontSize: 12,
    color: '#888',
    marginTop: 5
  },
  noBorder: {
    border: 'none'
  },
  timeTableBody: {
    margin: '20px 40px',
    background: '#FFFFFF',
    borderRadius: 20,
    padding: '5px 30px'
  },
  box: {
    width: 90,
    height: 60,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30
  },
  boxPurple: {
    background: 'rgba(143, 58, 228, 0.1)'
  },
  boxGreen: {
    background: '#E9F9F1'
  },
  tableRow: {
    width: 'max-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: "1px solid",
    marginBottom: 20
  },
  boxText: {
    lineHeight: 2,
    fontWeight: 600,
    textAlign: 'center',
    fontSize: 10
  }
};

const TimeTableModal = ({ modalData, onClose }) => {
  return (
    <Modal
      open={modalData.status}
      onClose={onClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      className='d-flex justify-center'
      style={{ marginTop: '8vh' }}
    >
      <div className='absolute inset-0'>
        <div className='bg-[rgba(51,51,51,0.95)] text-white h-full flex justify-center items-center'>
          <div style={styles.container}>
            <div style={styles.header}>
              <Avatar
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 5
                }}
              />
              <div style={styles.headerText}>
                <div style={styles.textPrimary}>Preeti Sharma</div>
                <div style={styles.textSecondary}>Name</div>
              </div>

              <div style={styles.headerText}>
                <div style={styles.textPrimary}>XII-A</div>
                <div style={styles.textSecondary}>Class Teacher</div>
              </div>
              <div style={styles.headerText}>
                <div style={styles.textPrimary}>English</div>
                <div style={styles.textSecondary}>Subject Teaching</div>
              </div>
              <div
                style={Object.assign({}, styles.headerText, styles.noBorder)}
              >
                <div style={styles.textPrimary}> VIII, IX, X, XI, XII</div>
                <div style={styles.textSecondary}>Classes Teaching</div>
              </div>
            </div>

            <div style={styles.timeTableBody}>
              <div
                style={Object.assign({}, styles.tableRow, { marginBottom: 0 })}
              >
                <div
                  style={Object.assign({}, styles.box, { marginLeft: 0 })}
                ></div>
                <div style={Object.assign({}, styles.box)}>8 AM - 9 AM</div>
                <div style={Object.assign({}, styles.box)}>9 AM - 10 AM</div>
                <div style={Object.assign({}, styles.box)}>10 AM - 11 AM</div>
                <div
                  style={Object.assign({}, styles.box, { marginLeft: 0 })}
                ></div>
                <div style={Object.assign({}, styles.box, { marginLeft: 0 })}>
                  12 PM - 1 PM
                </div>
                <div style={Object.assign({}, styles.box, { marginRight: 30 })}>
                  1 PM - 2 PM
                </div>
              </div>

              <div style={styles.tableRow}>
                <div style={Object.assign({}, styles.box, { marginLeft: 0 })}>
                  Monday
                </div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxPurple,
                    styles.boxText
                  )}
                >
                  XII-A <br />
                  English
                </div>
                <div
                  style={Object.assign({}, styles.box, styles.boxGreen)}
                ></div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxPurple,
                    styles.boxText
                  )}
                >
                  XII-C <br />
                  English
                </div>
                <div
                  style={Object.assign({}, styles.box, { marginLeft: 0 })}
                ></div>

                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxGreen,
                    {
                      marginLeft: 0
                    },
                    styles.boxText
                  )}
                >
                  VII-B
                  <br /> Socials
                </div>
                <div
                  style={Object.assign({}, styles.box, styles.boxPurple)}
                ></div>
              </div>

              <div style={styles.tableRow}>
                <div style={Object.assign({}, styles.box, { marginLeft: 0 })}>
                  Tuesday
                </div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxGreen,
                    styles.boxText
                  )}
                >
                  VII-B <br />
                  Socials
                </div>
                <div
                  style={Object.assign({}, styles.box, styles.boxGreen)}
                ></div>
                <div
                  style={Object.assign({}, styles.box, styles.boxPurple)}
                ></div>
                <div
                  style={Object.assign({}, styles.box, { marginLeft: 0 })}
                ></div>

                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxPurple,
                    styles.boxText,
                    {
                      marginLeft: 0
                    }
                  )}
                >
                  XII-A <br />
                  English
                </div>
                <div
                  style={Object.assign({}, styles.box, styles.boxGreen)}
                ></div>
              </div>

              <div style={styles.tableRow}>
                <div style={Object.assign({}, styles.box, { marginLeft: 0 })}>
                  Wednesday
                </div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxGreen,
                    styles.boxText
                  )}
                ></div>
                <div
                  style={Object.assign({}, styles.box, styles.boxPurple)}
                ></div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxGreen,
                    styles.boxText
                  )}
                >
                  VII-B <br />
                  Socials
                </div>
                <div style={Object.assign({}, styles.box, { marginLeft: 0 })}>
                  <div
                    style={{ letterSpacing: 40, transform: 'rotate(-90deg)' }}
                  >
                    RECESS
                  </div>
                </div>

                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxGreen,
                    styles.boxText,
                    {
                      marginLeft: 0
                    }
                  )}
                ></div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxPurple,
                    styles.boxText
                  )}
                >
                  XII-C
                  <br />
                  English
                </div>
              </div>

              <div style={styles.tableRow}>
                <div style={Object.assign({}, styles.box, { marginLeft: 0 })}>
                  Thursday
                </div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxPurple,
                    styles.boxText
                  )}
                >
                  XII-A <br />
                  English
                </div>
                <div
                  style={Object.assign({}, styles.box, styles.boxGreen)}
                ></div>
                <div
                  style={Object.assign({}, styles.box, styles.boxPurple)}
                ></div>
                <div
                  style={Object.assign({}, styles.box, { marginLeft: 0 })}
                ></div>

                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxGreen,
                    styles.boxText,
                    {
                      marginLeft: 0
                    }
                  )}
                >
                  VII-B <br />
                  Socials
                </div>
                <div
                  style={Object.assign({}, styles.box, styles.boxPurple)}
                ></div>
              </div>

              <div style={styles.tableRow}>
                <div style={Object.assign({}, styles.box, { marginLeft: 0 })}>
                  Friday
                </div>
                <div
                  style={Object.assign({}, styles.box, styles.boxPurple)}
                ></div>
                <div
                  style={Object.assign({}, styles.box, styles.boxGreen)}
                ></div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxPurple,
                    styles.boxText
                  )}
                >
                  XII-C <br />
                  English
                </div>
                <div
                  style={Object.assign({}, styles.box, { marginLeft: 0 })}
                ></div>

                <div
                  style={Object.assign({}, styles.box, styles.boxPurple, {
                    marginLeft: 0
                  })}
                ></div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxGreen,
                    styles.boxText
                  )}
                >
                  {' '}
                  VII-B <br />
                  Socials
                </div>
              </div>

              <div style={styles.tableRow}>
                <div style={Object.assign({}, styles.box, { marginLeft: 0 })}>
                  Saturday
                </div>
                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxGreen,
                    styles.boxText
                  )}
                >
                  VII-B <br />
                  Socials
                </div>
                <div
                  style={Object.assign({}, styles.box, styles.boxPurple)}
                ></div>
                <div
                  style={Object.assign({}, styles.box, styles.boxGreen)}
                ></div>
                <div
                  style={Object.assign({}, styles.box, { marginLeft: 0 })}
                ></div>

                <div
                  style={Object.assign(
                    {},
                    styles.box,
                    styles.boxGreen,
                    styles.boxText,
                    {
                      marginLeft: 0
                    }
                  )}
                >
                  VII-B <br />
                  Socials
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: 10, right: 10 }}>
              <CancelIcon
                onClick={() => onClose()}
                style={{ fontSize: 24, cursor: 'pointer', color: '#ef5350' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TimeTableModal;
