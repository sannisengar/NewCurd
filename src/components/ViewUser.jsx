import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


function ViewUser() {
    const {id} = useParams()
    const[user,setUser] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/NewCurdView/${id}`)
        .then(response=>{
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])


    return (
        <>
            <div className="container mt-5" style={{ width: "40%" }}>
                <h2 className="bg-success text-center">View User</h2>
                <table className="table text-center">
                    <thead>
                        <tr>
                        
                            <th>Name</th>
                            <th>Email</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           <div className="text-center">
           <Link to={"/"} >Back To Display Data</Link>
           </div>
        </>
    )
}

export default ViewUser