import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "..//Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <button onClick={() => auth.signOut()} className="profileScreen_signout">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
