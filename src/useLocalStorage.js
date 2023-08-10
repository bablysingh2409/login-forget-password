import { useState, useEffect } from 'react';

export default function useLocalStorage() {
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

  return { email, setEmail };
}
