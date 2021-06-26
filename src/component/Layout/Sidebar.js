import React from "react";
import logo from "../../assets/img/logo.svg";
import dashboard from "../../assets/img/dashboard.svg";
import admissions from "../../assets/img/admissions.svg";
import attendance from "../../assets/img/attendance.svg";
import examinations from "../../assets/img/examinations.svg";
import fees from "../../assets/img/fees.svg";
import notices from "../../assets/img/notices.svg";
import reportCard from "../../assets/img/reportCard.svg";
import requests from "../../assets/img/requests.svg";
import setup from "../../assets/img/setup.svg";
import timeTable from "../../assets/img/timeTable.svg";
import calender from "../../assets/img/calender.svg";
import customer from "../../assets/img/customerpage.svg";

import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";
import { Style } from "./Styles";

const Sidebar = (props) => {
  const classes = makeStyles(Style())();
  const location = useLocation();
  function closeMenu() {
    document
      .getElementById("yogsham-nav-panel")
      .classList.remove("show-yogsham-nav-panel");
  }
  return (
    <div className='mw-287 pl-50 bg-white' id='yogsham-nav-panel'>
      <div className='mr-20 mt-20 justify-flex-end hide-on-desktop'>
        <CloseIcon
          className='yogshem-menu-icon hand-cursor'
          onClick={closeMenu}
        ></CloseIcon>
      </div>
      <div
        className='align-items-center d-flex h-130'
        style={{ marginTop: "-55%" }}
      >
        <img src={logo} className='h-35' alt='logo' />
      </div>

      <ul className='menuitems pt-10 main-scroll-height overflow-y-auto overflow-x-hidden'>
        <li
          className={`pb-40 fs-18 lh-21 ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <Link to='/' className='d-flex align-items-center'>
            <img src={dashboard} className='mr-20' alt='dashboard' />
            Dashboard
          </Link>
        </li>
        <li
          className={`pb-40 fs-18 lh-21 ${
            location.pathname === "/setupschool" ? "active" : ""
          }`}
        >
          <Link to='/setupschool' className='d-flex align-items-center'>
            <img src={setup} className='mr-20' alt='setup' />
            Setup School
          </Link>
        </li>
        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={calender} className='mr-20' alt='calender' />
          Calender
        </li>
        <div className='pb-40 pt-40 w-80per border-top-grey fs-14 lh-17'>
          MANAGEMENT
        </div>
        <li
          className={`pb-40 fs-18 lh-21 ${
            location.pathname === "/customer" ? "active" : ""
          }`}
        >
          <Link to='/customer' className='d-flex align-items-center'>
            <img src={customer} className='mr-20' alt='setup' />
            Customers
          </Link>
        </li>
        <div className='pb-40 pt-40 w-80per border-top-grey fs-14 lh-17'>
          STUDENTS
        </div>
        <li
          className={`pb-40 fs-18 lh-21 ${
            location.pathname === "/studentrequests" ? "active" : ""
          }`}
        >
          <Link to='/studentrequests' className='d-flex align-items-center'>
            <img src={requests} className='mr-20' alt='requests' />
            Requests
          </Link>
        </li>
        <li
          className={`pb-40 fs-18 lh-21 ${
            location.pathname === "/studentadmissions" ? "active" : ""
          }`}
        >
          <Link to='/studentadmissions' className='d-flex align-items-center'>
            <img src={admissions} className='mr-20' alt='admissions' />
            Admissions
          </Link>
        </li>
        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={fees} className='mr-20' alt='fees' />
          Fees
        </li>
        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={notices} className='mr-20' alt='notices' />
          Notices
        </li>
        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={timeTable} className='mr-20' alt='time table' />
          Time table
        </li>
        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={attendance} className='mr-20' alt='attendance' />
          Attendance
        </li>
        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={examinations} className='mr-20' alt='examinations' />
          Examinations
        </li>
        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={reportCard} className='mr-20' alt='report card' />
          Report Card
        </li>
        <div className='pb-40 pt-40 w-80per border-top-grey fs-14 lh-17'>
          TEACHERS
        </div>

        <li
          className={`pb-40 fs-18 lh-21 ${
            location.pathname === "/teacherrequests" ? "active" : ""
          }`}
        >
          <Link to='/teacherrequests' className='d-flex align-items-center'>
            <img src={requests} className='mr-20' alt='requests' />
            Requests
          </Link>
        </li>

        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={admissions} className='mr-20' alt='Employees' />
          Employees
        </li>
        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={notices} className='mr-20' alt='notices' />
          Notices
        </li>

        <li
          className={`pb-40 fs-18 lh-21 ${
            location.pathname === "/teachertimetable" ? "active" : ""
          }`}
        >
          <Link to='/teachertimetable' className='d-flex align-items-center'>
            <img src={timeTable} className='mr-20' alt='time table' />
            Time table
          </Link>
        </li>

        <li className='pb-40 fs-18 d-flex align-items-center lh-21'>
          <img src={attendance} className='mr-20' alt='attendance' />
          Attendance
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
