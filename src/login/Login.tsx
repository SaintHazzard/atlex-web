import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Profile from './Profile';
import './App.css';
import SignUpForm from './Components/SignUpForm/SignUpForm';

interface User {
    access_token: string;
    // otros campos según sea necesario
}

interface ProfileData {
    // Define los campos esperados en el perfil
    name: string;
    email: string;
    // otros campos según sea necesario
}

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<ProfileData | null>(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if (user && user.access_token) {
            axios
                .get<ProfileData>(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                    console.log("Data assigned");
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
        setUser(null);
    };

    return (
    <div>
      {profile ? (
        <Profile profileDetails={profile} login={login} logout={logOut} />
      ) : (
        <SignUpForm onLogin={login} />
      )}
    </div>
  );
}

export default App;
