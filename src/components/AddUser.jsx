import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast/headless"
import { useNavigate } from "react-router-dom"


function AddUser() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")

    const navigate = useNavigate()

    const submitdata = async (e) => {
        e.preventDefault()
        //  console.log(name,email)
        try {
            const { data } = await axios.post("http://localhost:4000/api/NewCurdInsert", { name, email })
            // console.log(data)
            toast.success(data.message)
            setname("")
            setemail("")
            navigate("/")
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        }
    }

    return (
        <>
            <div className="container mt-5" style={{ width: "40%" }}>
                <h2 className="bg-info text-center">Add User</h2>
                <form onSubmit={submitdata}>
                    <div className="mb-3">
                        <label htmlFor="">Name</label>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddUser