export function descController(req,res){
    const productArray=[
        {name:"Apple", price: "10", color: "green", id:"1"},
        {name:"Orange", price: "20", color: "orange", id:"2"},
        {name:"Banana", price: "30", color: "yellow", id:"3"}
    ];
    const getPro =productArray.find((product)=>product.id===req.params.id);
    res.send( getPro);
    };

