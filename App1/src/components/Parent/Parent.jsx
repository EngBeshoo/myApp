import React , {useState} from 'react'
import Child from '../Child/Child.jsx'

export default function Parent() {

 let [count ,setCount]= useState(0)
 let [user ,setUser]= useState('Beshoy')
 let [person , setPerson] = useState({name:'Ali', age:30 , salary:5000})

 function changeCount(){
    setCount(count+1);
 }

  return <>
    <h2>Parent : {count}</h2>
    <button className='bg-info text-dark' onClick={changeCount}>changeCount</button>
    <h2>Parent : {user}</h2>
    <button onClick={()=> {setUser('Ahmed')}}>changeUser</button>
    <h2>parent page person {person.name}</h2>
    <Child personData={person} userName={user} x={count} />
  </>
}
