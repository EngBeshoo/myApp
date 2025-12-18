import React from 'react'

export default function Child(prpos) {
    console.log(prpos);
    let {personData} = prpos;

  return <>
  <div className='person w-100 bg-danger'>
    <h2>Name: {personData.name}</h2>
    <h2>Age: {personData.age}</h2>
    <h2>Salary: {personData.salary}</h2>
  </div>
  </>
}
