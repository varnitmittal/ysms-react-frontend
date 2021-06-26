import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import Sidebar from "./component/Layout/Sidebar";
import PrivateRoute from "./Utils/PrivateRoute";
import "./indexdashboard.css";
const Setupschool = lazy(() => import("./component/Setupschool/Setupschool"));
const NewCustomer = lazy(() => import("./component/NewCustomer/NewCustomer"));
const StudentRequests = lazy(() =>
  import("./component/Student/StudentRequests/StudentRequests")
);
const StudentAdmissions = lazy(() =>
  import("./component/Student/StudentAdmissions/StudentAdmissions")
);
const ClassDetails = lazy(() =>
  import("./component/Student/StudentAdmissions/ClassDetails/ClassDetails")
);
const StudentRegistration = lazy(() =>
  import(
    "./component/Student/StudentAdmissions/StudentRegistration/StudentRegistration"
  )
);
const Customer = lazy(() => import("./component/Customer/Customer"));
const Global = lazy(() => import("./component/Global"));
const Dashboard = lazy(() =>
  import("./component/Dashboard/dashboard/Dashboard")
);

const TeacherRequests = lazy(() =>
  import("./component/Teacher/TeacherRequests/TeacherRequests")
);

const TeacherTimeTable = lazy(() =>
  import("./component/Teacher/TimeTable/TimeTable")
);

export default function Routes() {
  return (
    <>
      <div className='App d-flex'>
        <Sidebar />
        <Switch>
          {/* <Route exact path='/' component={LandingPage}></Route> */}
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute
            exact
            path='/setupschool'
            component={Setupschool}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/customer'
            component={Customer}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/studentrequests'
            component={StudentRequests}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/newcustomer'
            component={NewCustomer}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path={`/newcustomer/:customerId`}
            component={NewCustomer}
          />
          <PrivateRoute
            exact
            path='/studentadmissions'
            component={StudentAdmissions}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/classdetails'
            component={ClassDetails}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/studentregistration'
            component={StudentRegistration}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/teacherrequests'
            component={TeacherRequests}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/teachertimetable'
            component={TeacherTimeTable}
          ></PrivateRoute>
        </Switch>
      </div>

      <Global />
    </>
  );
}
