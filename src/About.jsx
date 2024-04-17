import React from 'react'
import { useState } from 'react'

const About = () => {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [age, setAge] = useState('')
    const [address, setAdress] = useState('')
    const [search, setSearch] = useState('')
    const[users, setUsers] = useState([
        {first_name: 'tursunboy', last_name: "hoshimov", age: 88, address: "uchtepa"}
    ])
    const handleFirstName = (e) =>{
        setFirst_name(e.target.value)
    }
    const handlelastName = (e) =>{
        setlast_name(e.target.value)
    }

    const handleAge = (e) =>{
        setAge(e.target.value)
    }

    const handleAdress = (e) =>{
        setAdress(e.target.value)
    }
    
    const searchUser = (e) =>{
        setSearch(e.target.value)
    }

    const addUser = () =>{
        let payload = {
            first_name,
            last_name,
            age,
            address
        }
        setUsers ([...users, payload])
    }

    const deleteUser = (index) =>{
        users.splice(index, 1)
        setUsers([...users])
    }
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-8">
                <div className="row-4">
                    <input type="text" className='form-control my-4' onChange={searchUser} value={search} placeholder="Search input"/>
                </div>
                <table className='table table-bordered table-hover text-capitalize'>
                    <thead>
                        <tr>
                            <th>T/R</th>
                            <th>FirstName</th>
                            <th>lastName</th>
                            <th>age</th>
                            <th>adress</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.filter((item) =>{
                            if(search === ""){
                                return item
                            } else if(item.first_name.includes(search)){
                                return item
                            }
                        }).map((item, index) =>{
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                                <td><button className='btn btn-danger' onClick={() => deleteUser(index)}>delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className="col-md-4">
                <form>
                    <input type="text" onChange={handleFirstName} placeholder='enter your firstname' className='form-control my-2'/>
                    <input type="text" onChange={handlelastName}  placeholder='enter your lastname' className='form-control my-2'/> 
                    <input type="number" onChange={handleAge}  placeholder='enter your age' className='form-control my-2'/> 
                    <input type="text" onChange={handleAdress}  placeholder='enter your adress' className='form-control my-2'/>
                </form>
                <button className='btn btn-danger btn-hover' onClick={addUser}>add user</button>
            </div>
        </div>
    </div>
  )
}

export default About


