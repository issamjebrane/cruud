import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Add = () => {
    const navigate = useNavigate();
    const [book,setBook] = useState({
        title : '',
        desc : '',
        price: null,
        cover : ''
    })
    const [error,setError]=useState('')

    const handleChange =(e)=>{
        setBook((prev)=>(
            {...prev,[e.target.name]:e.target.value}
        ))
    }

    const handleClick = async ()=>{
        try{
            console.log(book)
            const q = await axios.post("http://localhost:8800/books",book)
            console.log(q)
            navigate('/')
        }catch(e){
            console.log(e)
            setError(e)
        }
    }

  return (
    <div className='form'>
        <h1>Add new book</h1>
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
      <button onClick={handleClick}>Add</button>
      {error && "oh something went wrong"}
      <Link to="/">See all books</Link>
    </div>
  )
}

export default Add
