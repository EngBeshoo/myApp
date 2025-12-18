import React from 'react'

export default function Crad(props) {

   
  let myTheme=  props.theme=='light'?'bg-light text-dark' : 'bg-dark text-white'
    

    let {name , price , count , id , onSale}=props.prod
    
  return <>
<div className="col-md-3">
        <div className={`${myTheme}  product position-relative p-4 text-center bg-light  shadow`}>
    <h3 className='fw-bold text-Success'>Name : {name}  </h3>
    <h4>Price : {price}</h4>
    <h4>Count :  {count}</h4>
<div className='d-flex justify-content-between my-5' >
  <button onClick={()=>{props.delProd(props.indx)}} className='btn btn-danger'>Delete <i className='fas fa-delete-left'></i></button>
    <button onClick={()=>{props.updateProd(props.indx)}} className='btn btn-warning'>Update <i className='fas fa-edit'></i></button>

</div>

{onSale?<div className="bg-success top-0 end-0 position-absolute">
      onSale
    </div>:null}
   

  </div>
</div>
  
  </>
}
