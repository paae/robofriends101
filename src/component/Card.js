import React from 'react'



const Card =({name,email,id})=>{

  return (
<div>
  <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 fl w-24'>
  <img alt='robot' src={`https://robohash.org/${id}?set=set2&size=200x200`}/>
  <h2>{name}</h2>
<p>{email}</p> 
  
  </div>
</div>
  );
}
export default Card;