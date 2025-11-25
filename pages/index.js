import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    setMessage('Hello World from Supabase + Next.js!');
  }, []);

  return <div style={{ fontSize: "2rem", textAlign: "center", marginTop: "2rem" }}>{message}</div>;
}