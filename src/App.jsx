import "./App.css";
import React from "react";
import Header from "./components/Header";
import RoomForm from "./components/RoomForm";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <RoomForm />
            </main>
        </div>
    );
}

export default App;
