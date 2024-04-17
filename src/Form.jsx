import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Form() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleClick = (e) => {
    setPassword(e.target.value);
  }

  const handleBtn = () => {
    if (password.length >= 5) {
      navigate("./About")
    } else {
      alert('xato')
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <input className="form-control" onChange={handleClick} value={password} type="text" placeholder='Enter your text' />
          <button className="btn btn-primary mt-3" onClick={handleBtn}>Click</button>
        </div>
      </div>
    </div>
  )
}
