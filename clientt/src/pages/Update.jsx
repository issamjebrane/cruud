import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Update = () => {
    const navigate = useNavigate()
    const [book,setBook] = useState({
        title : '',
        desc : '',
        price: null,
        cover : ''
    })
    const {id} = useParams()
    const [error,setError]=useState('')

    const handleChange =(e)=>{
        setBook((prev)=>(
            {...prev,[e.target.name]:e.target.value}
        ))
    }
    const handleUpdate = async ()=>{
        try{
            await axios.put(`http://localhost:8800/books/${id}`,book)
            navigate("/")
        }catch(e){
            console.log(e)
        }
    } 
  return (
    <div className='form'>
        <h1>Update Book</h1>
        <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={handleChange}
        />
        <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <button className='update' onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default Update
