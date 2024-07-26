import React from 'react';

interface ProfileProps {
  profileDetails: {
    picture?: string;
    name?: string;
    email?: string;
  } | null;
  login: () => void;
  logout: () => void;
}

function Profile({ profileDetails, login, logout }: ProfileProps) {
  console.log(profileDetails);

  return (
    <>
      <div className='profile-container'>
        {profileDetails ? (
          // Verifica que profileDetails no sea null
          profileDetails.picture && profileDetails.name && profileDetails.email ? (
            <div className="profile-details">
              <img src={profileDetails.picture} alt="" className='profile-avatar' />
              <div className="profile-content">
                <h3>{profileDetails.name}</h3>
                <h5>{profileDetails.email}</h5>
              </div>
              <button className='profile-button' onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="landing-container">
              <div className="landing-icon">
                <h1>🎉</h1>
              </div>
              <h4>Sign in to create profile!</h4>
              <button onClick={login}>⚡ Sign in with Google</button>
            </div>
          )
        ) : (
          <div className="landing-container">
            <div className="landing-icon">
              <h1>🎉</h1>
            </div>
            <h4>Sign in to create profile!</h4>
            <button onClick={login}>⚡ Sign in with Google</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
