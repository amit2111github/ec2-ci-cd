const app = require("express")();

const PORT = 3000;

app.get("/" , async ( req , res) => {
  return res.json({name : "Amit"})  
})
app.get("/user/all" ,async(req , res) => {
    return res.json([{name :"Amit"},{ name : "Akash"} ]);
})
app.listen(PORT , () => console.log(`Running on port ${PORT}`))