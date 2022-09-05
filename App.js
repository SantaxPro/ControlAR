import react from "react";
import Main from './src/components/Main';
import { Auth0Provider } from "@auth0/auth0-react";

console.log("App executed");

export default function App() {
  return (
    <Auth0Provider 
    domain="dev-jjzjhqhb.us.auth0.com" 
    clientId="uZKFiB34Air3dvrl2k65NbBBXvckua1r" 
    redirectUri={window.location.origin}
    >
      <Main/>
    </Auth0Provider>
  );
}
