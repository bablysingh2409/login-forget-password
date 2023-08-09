import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login To The Portal</h1>
      <form>
        <input type="text" placeholder="Enter Email..." />
        <input type="password" placeholder="Enter Password.." />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
