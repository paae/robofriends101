import React from 'react'


const Searchbox=({searchField,searchChange})=>{
  return (
  <div >
    <input className="pa3 ba b--green bd-lightest-blue " 
    type="search" 
    placeholder="search moster"
    onChange={searchChange}
    />
 </div> );
}
export default Searchbox;