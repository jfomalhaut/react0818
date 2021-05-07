import express from "express";

const router = express.Router();
const data=[
  {id: 1, name: "product1", price: 1000},
  {id: 2, name: "product2", price: 2000},
  {id: 3, name: "product3", price: 3000},
  {id: 4, name: "product4", price: 4000},
  {id: 5, name: "product5", price: 5000}
];

router.get("/getData", (req, res)=> {
  res.send({data});
});

router.post("/getPostData", (req,res)=>{
  const {body: { id }} = req;
  const item = data.filter(item => item.id === id)[0];
  res.send({ data: item}); 
});

export default router;