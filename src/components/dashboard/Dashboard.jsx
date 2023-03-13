// import PropTypes from "prop-types";
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import DashboardAction from "./DashboardAction";
// import { getCurrentProfile } from "../../redux/actions/profileAction";
// import { Link } from "react-router-dom";
// import DisplayExpDetails from "./DisplayExpDetails";
// export const Dashboard = ({
//   getCurrentProfile,
//   profileReducer: { profile },
//   auth: { user },
// }) => {
//   useEffect(() => {
//     getCurrentProfile();
//   }, [getCurrentProfile]);

//   const successPart = (
//     <>
//       {" "}
//       <DashboardAction></DashboardAction>Exp Edu
//     </>
//   );
//   const failurePart = (
//     <>
//       {" "}
//       <p>You have not yet setup a profile, please add some info</p>
//       <Link to="/create-profile" className="btn btn-primary my-1">
//         Create Profile
//       </Link>
//     </>
//   );
//   return (
//     <div>
//       <section className="container">
//         <h1 className="large text-primary">Dashboard</h1>
//         <p className="lead">
//           <i className="fas fa-user" /> Welcome {user && user.name}
//         </p>
//         {profile !== null ? successPart : failurePart}
//       </section>
//     </div>
//   );
// };

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profileReducer: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.authReducer,
//   profileReducer: state.profileReducer,
// });

// const mapDispatchToProps = { getCurrentProfile };

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import DashboardAction from "./DashboardAction";
import {
  getCurrentProfile,
  deleteAccount,
} from "../../redux/actions/profileAction";
import { Link } from "react-router-dom";

import Experience from "./DisplayExpDetails";
import Education from "./DisplayEduDetails";

export const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  authReducer: { user },
  profileReducer: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const successPart = (
    <>
      {" "}
      <DashboardAction></DashboardAction>
    </>
  );
  const failurePart = (
    <>
      {" "}
      <p>You have not yet setup a profile, please add some info</p>
      <Link to="/create-profile" className="btn btn-primary my-1">
        Create Profile
      </Link>
    </>
  );
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardAction />
          <Experience experience={profile.experience} />

          <Education education={profile.education} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  authReducer: PropTypes.object.isRequired,
  profileReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
  profileReducer: state.profileReducer,
});

const mapDispatchToProps = { getCurrentProfile, deleteAccount };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
