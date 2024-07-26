// LoginGoogle.tsx
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Profile from './Profile';
import SignUpForm from './Components/SignUpForm/SignUpForm';

interface User {
    access_token: string;
}

interface ProfileData {
    name: string;
    email: string;
}

const LoginGoogle: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<ProfileData | null>(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser({ access_token: codeResponse.access_token });
        },
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

export default LoginGoogle;
