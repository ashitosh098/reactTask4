import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./usercontext";

export default function UserList(){
let userData = useContext(UserContext);
    return(
        <>
            
                    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the
                        official DataTables documentation.</p>

                            <Link to="usercreate">Create User</Link>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email Id</th>
                                            <th>Password</th>
                                            <th>Action Edit</th>
                                           
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email Id</th>
                                            <th>Password</th>
                                            <th>Action Edit</th>
                                            
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            userData.userList.map((obj)=>{
                                                return <tr>
                                                <td>{obj.firstName}</td>
                                                <td>{obj.lastName}</td>
                                                <td>{obj.email}</td>
                                                <td>{obj.password}</td>
                                                <th>
                                                <Link to="/useredit/1">useredit</Link>
                                                </th>
                                                
                                            </tr>
                                            })
                                        }
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

        </>
    )
}