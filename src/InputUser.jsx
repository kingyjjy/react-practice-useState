import React from 'react'

const InputUser = ({onCreate, onChange, idx}) => {
  return (
    <div>
        <input type="text" name='username' onChange={(e)=>onChange(idx,e)} />
        <input type="email" name='email' onChange={(e)=>onChange(idx,e)}/>
        <button onClick={onCreate} >등록</button>
    </div>
  )
}

export default InputUser