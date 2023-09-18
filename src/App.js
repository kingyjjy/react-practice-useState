import React, {useState} from 'react'
import CreateUser from './CreateUser';
import InputUser from './InputUser';

const mem = [
  { id:1,
    username:"홍길동",
    email:"hong@gil.com",
    active:true
  },
  { id:2,
    username:"홍길자",
    email:"ja@gil.com",
    active:false
  },
  { id:3,
    username:"박길동",
    email:"park@gil.com",
    active:true
  },
  { id:4,
    username:"강자동",
    email:"kang@ja.com",
    active:false
  },
  { id:5,
    username:"김철수",
    email:"kim@chul.com",
    active:true
  },
]

const App = () => {
  const [mymem, setMymem] = useState(mem);
  const [newUser, setNewUser]= useState({});

  const onCreate = () => {
    setMymem([...mymem, newUser]);
    }
 
  const onChange = (idx, e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setNewUser({
      id:parseInt(idx),
      ...newUser,
      [name]:value
    })
  }
  return (
    <div>
      <InputUser onCreate={onCreate} onChange={onChange} idx={mymem.length+1}/>
      {
        mymem.map((m,i)=>(
          <CreateUser key={i} id={m.id} username={m.username} email={m.email} active={m.active}/>
        ))
      }
    </div>
  )
    }

export default App