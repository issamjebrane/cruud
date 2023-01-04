import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express()
const db = mysql.createConnection({
    host :"localhost",
    user : "root",
    password:"root123",
    database : "issamdb" 
}) 

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello it's backend")
})

app.get("/books",(req,res)=>{
    const  q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post("/books",(req,res)=>{
    const q ="INSERT INTO books (`title`,`desc`,`cover`,`price`) VALUES (?)"
    const value =[
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price
    ]
    db.query(q,[value],(err ,data)=>{
        res.json(data)
    })
})

app.delete('/books/:id',(req,res)=>{
    const q = `DELETE FROM books WHERE id=${req.params.id};`
    db.query(q,(err, result)=> {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
      })
})

app.put("/books/:id",(req,res)=>{
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `cover`= ?, `price`= ? WHERE id = ?";
    const value =[
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price
    ]
    db.query(q,[...value,req.params.id],(err,data)=>{
        if (err) return res.send(err);
        return res.json(data);
    })
})

app.listen("8800",()=>{
    console.log("connected to backend!")
})