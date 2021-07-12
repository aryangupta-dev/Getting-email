import axios from "axios";
import { memo,useEffect, useState } from "react";
import UserDetails from "./UserDetails";
function Frontline({page,title}){
    let[users,setUsers]=useState([]);
    useEffect(()=>{
       
            axios.get("https://randomuser.me/api/?inc=gender,name,nat,email&"+page+"&results=20")
            .then((res)=>{
                setUsers(res.data.results);
               
            });},[page]);
            console.log(page)
            
  return( <div className="p-10 mb-10 text-white bg-green-700">
      <p>{title}</p>{users.map( u=> <UserDetails email={u.email} gender={u.gender}/>)}</div>);
}
export default  memo(Frontline);