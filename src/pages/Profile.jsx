import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {Button} from "../components/Button";
import {EmptyNavigationBar} from "../components/NavigationBar";


export default function ProfileScreen () {
const {LogOut, user}=UserAuth()
return (
<div className="flex flex-col items-center">
 <EmptyNavigationBar/>
 <div className="w-20 h-20 "> 
    <img src={user?.photoURL}  alt="pfp" className="w-full h-full rounded-full"/>
 </div> 
 <p className="m-5">Nombre: {user.displayName}</p>
 
 <p className="m-5"> Email: {user.email}</p>
 <Button className="bg-red-500" title={"Cerrar Sesión"} onClick={()=>{LogOut()}} />
</div>
)
}

