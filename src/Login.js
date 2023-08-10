import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

function Login() {
  const [password, setPassword] = useState('');
  const { email, setEmail } = useLocalStorage();

  return (
    <>
      <h1>Login To The Portal</h1>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email..."
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password.."
      />
      <br />
      <button>Login</button>
      <br></br>
    </>
  );
}

export default Login;
