import React from "react";

const Context = React.createContext({isLoggedIn: false, setIsLoggedIn: ()=>{}});
export const HeaderContext = React.createContext({type: "main", setType: function (e) {this.type = e}});

export default Context;
