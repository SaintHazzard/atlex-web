"use client"

import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Home() {
return(
<GoogleOAuthProvider clientId="221571406493-961rm6kr67mdsitfadju1loha2fdtr3g.apps.googleusercontent.com">
    <main>
      <div>
        <h1>Google auth</h1>
      </div>
    </main>
</GoogleOAuthProvider>
);
}