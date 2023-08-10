import { useState, useEffect } from 'react';

function FogetPassword() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    let email = localStorage.getItem('Email');
    if (email) {
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Email', email);
  }, [email]);
  return (
    <>
      <h2>Reset Your Password</h2>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <br />
      <button>Continue</button>
      <br />
    </>
  );
}

export default FogetPassword;
