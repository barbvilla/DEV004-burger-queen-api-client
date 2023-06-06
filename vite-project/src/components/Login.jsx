import { useState } from "react";

export default function LoginSection() {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {email: userEmail, password: password};
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      } 
    })
      .then(res => res.json())
      .catch(error => console.log('Error:', error))
      .then(response => console.log('Success:', response));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Escribe tu correo' type='email' onChange={e => setUserEmail(e.target.value)} value={userEmail} />
      <input placeholder='Escribe tu contraseña' type='password' onChange={e => setPassword(e.target.value)} value={password} />
      <button>Iniciar Sesión</button>
    </form>
  );
}
