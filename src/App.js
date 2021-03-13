import Card from './Card/Card'
import React from 'react';
import Header from './Header/Header';




function App() {

  return (
    <div className="container">
      <Header></Header>
      <h1 className="text-center p-2">Top News</h1>
      <Card></Card>
    </div>
  );
}

export default App;
