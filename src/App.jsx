import "./App.css";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import RoomForm from "./components/RoomForm";


function App() {
  const [roomType, setRoomType] = useState(localStorage.getItem('roomType') || 'Standard Double City View');
  const [adults, setAdults] = useState(localStorage.getItem('adults') || 1);
  const [children, setChildren] = useState(JSON.parse(localStorage.getItem('children')) || []);

  useEffect(() => {
      localStorage.setItem('roomType', roomType);
      localStorage.setItem('adults', adults);
      localStorage.setItem('children', JSON.stringify(children));
  }, [roomType, adults, children]);

  const handleUpdate = (roomType, adults, children) => {
      setRoomType(roomType);
      setAdults(adults);
      setChildren(children);
  };

  return (
    <div className="App">
            <Header />
            <main>
                <RoomForm onUpdate={handleUpdate} />
                
            </main>
        </div>
  );
}

export default App;
