const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json())
let todoList = [
         {   id:1,
             task:"washing",
             status:"completed"
        
         },
         {   id:2,
            task:"cleaning",
            status:"completed"
         },
         {   id:3,
             task:"studying",
             status:"pending"
         }
]
app.get("/",(req,res)=>{
    console.log("todoList")
    res.send(todoList)
})
app.post("/list",(req,res)=>{
    let task = req.body
    let newtaskList = [...todoList,task]
    console.log(task)
    res.send(newtaskList)
})
app.delete("/:id",(req,res)=>{
    const {id} = req.params;
    todoList = todoList.filter((task)=>task.id !== id)
    res.send(todoList)
})
app.patch("/:id",(req,res)=>{
    const {id} = req.params;
    console.log(id)
    todoList = todoList.map((task)=>{
        if(task.id == id){
            task.status = "completed"
        }
        return task
    })
    console.log(todoList)
    res.send(todoList)
})
app.patch("/statusComplete",(req,res)=>{

     let result = todoList.filter((task)=>task.status == "completed")
     console.log(res);
     res.send(result)
})
app.patch("/statusIncomplete",(req,res)=>{

    let result = todoList.filter((task)=>task.status == "pending")
    console.log(res);
    res.send(result)
})

app.listen(3000,()=>{
   console.log("running")
})
