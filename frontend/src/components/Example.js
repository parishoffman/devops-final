import React, { useEffect, useState } from 'react';

export default function Example() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/example`)
      .then(r => r.json())
      .then(data => setMsg(data.msg))
      .catch(err => console.error(err));
  }, []);  

  return <p>Backend says: {msg}</p>;
}
