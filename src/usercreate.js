import { useState } from "react";
import { useContext } from "react";
import  UserContext  from "./usercontext";
export default function UserCreate(){
    let [firstName,setFirstName] = useState("");
    let [lastName,setLastName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    
    let userData= useContext(UserContext);
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>User Form</h3>
                    </div>
                </div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    userData.setUserList([...userData.userList,{
                        firstName,
                        lastName,
                        email,
                        password
                    }])
                }}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>First Name</label>
                        <input className="form-control" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    </div>
                    <div className="col-lg-6">
                        <label>Last Name</label>
                        <input className="form-control" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Email Id</label>
                        <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="col-lg-6">
                        <label>Password</label>
                        <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </div>        
                
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>   
            </form>
            </div>
        </>
    )
}