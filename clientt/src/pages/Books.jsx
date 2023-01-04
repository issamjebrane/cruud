import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
const Books = () => {
    const [books,setBooks] = useState([])
    const handleDelete=async(id)=>{
        try{
        await axios.delete(`http://localhost:8800/books/${id}`)
        document.location.reload(true);
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                console.log(res)
                setBooks(res.data)
            }catch(e){
                console.log(e)
            }
        }
        fetchAllBooks()
    },[])

  return (
    <div>
      <h1>issam book shop</h1>
      <div className="books">
        {books.map(book=>(
            <div className="book" key={book.id}>
                <img src={book.cover} alt="" />
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>${book.price}</span>
                <button className='delete'
                   onClick={() => handleDelete(book.id)}>
                    delete
                </button>
                <button className="update">
                    <Link
                        to={`/update/${book.id}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        Update
                    </Link>
                </button>
            </div>
        )
        )}
      </div>
      <button className='addHome'><Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>Add new Book</Link></button>
    </div>
  )
}

export default Books
