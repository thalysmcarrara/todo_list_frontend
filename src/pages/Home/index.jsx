import React from 'react';
import Header from '../../components/Header';
import todoImg from '../../assets/todo-image.jpg';
import './index.css';

function Home() {
  return (
    <>
      <Header />
      <main className="home-container">
        <img className="todo-img" src={ todoImg } alt="todo book" />
      </main>
    </>
  );
}

export default Home;
