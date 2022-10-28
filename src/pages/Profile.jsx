import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function ProfileScreen () {
const {user}=UserAuth()
return (
<div className="flex-col  mx-10 ">
 <div className=" items-center rounded-full mr-auto w-20 h-20"> 
    <img src={user?.photoURL}  alt="pfp" className="w-full h-full bg-cover"/>
 </div> 

 Nombre:{user.displayName}
 
 Email:{user.email}
   
</div>



)
}

