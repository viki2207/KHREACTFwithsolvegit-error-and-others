import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProfileById } from "../../redux/actions/profileAction";
import Spinner from "../layouts/Spinner";
import ProfileAbout from "./ProfileAbout";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfileGitHub from "./ProfileGitHub";
import ProfileTop from "./ProfileTop";
export const Profile = ({ getProfileById, profile: { profile }, auth }) => {
  const { id } = useParams();
  // we may collect one or more params from the routing path as per hte req.
  // it will help us to get the userId from the routing path .i.e. it help us to get the :id value.
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);
  const editProfileButton = (
    <Link to="/edit-profile" className="btn btn-dark">
      Edit Profile
    </Link>
  );
  const profileGithubUserName = "";
  // (
  //   <ProfileGitHub username={profile.githubusername} />
  // );

  return (
    <div>
      {" "}
      <section className="container">
        {profile === null ? (
          <Spinner />
        ) : (
          <>
            <Link to="/profiles" className="btn btn-light">
              Back To Profiles
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id &&
              editProfileButton}
            <div className="profile-grid my-1">
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
              <div className="profile-exp bg-white p-2">
                <h2 className="text-primary">Experience</h2>
                {profile.experience.length > 0 ? (
                  <>
                    {profile.experience.map((e) => (
                      <ProfileExperience key={e._id} experience={e} />
                    ))}
                  </>
                ) : (
                  <h4>No experience credentials</h4>
                )}
              </div>

              <div className="profile-edu bg-white p-2">
                <h2 className="text-primary">Education</h2>
                {profile.education.length > 0 ? (
                  <>
                    {profile.education.map((e) => (
                      <ProfileEducation key={e._id} education={e} />
                    ))}
                  </>
                ) : (
                  <h4>No education credentials</h4>
                )}
              </div>

              {profile.githubusername && profileGithubUserName}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer,
  auth: state.authReducer,
});

const mapDispatchToProps = { getProfileById };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
