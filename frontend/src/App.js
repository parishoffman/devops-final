import React from 'react';
import './App.css';
import Example from './components/Example';

export default function App() {
  return (
    <div className="app">
      <header className="header">My Portfolio</header>
      <main className="content">
        <Example />
      </main>
    </div>
  );
}
