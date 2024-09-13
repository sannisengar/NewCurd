import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"


function EditUser() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:4000/api/NewCurdView/${id}`)
      .then((response) => {
        setname(response.data.name)
        setemail(response.data.email)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  const Updatedata = async (e) => {
    e.preventDefault()
    //console.log(name,email)
    try {
      const { data } = await axios.post(`http://localhost:4000/api/NewCurdEdit/${id}`,
        { name, email }
      )
     // console.log(data)
      toast.success(data.message)
      setname("")
      setemail("")
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  }

  return (
    <>
      <div className="container mt-5" style={{ width: "40%" }}>
        <h2 className="bg-info text-center">Add User</h2>
        <form onSubmit={Updatedata}>
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

export default EditUser