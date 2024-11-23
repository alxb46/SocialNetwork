import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    {/* Главная страница */}
                    <Route path="/" element={<ProfileContainer />} />

                    {/* Остальные маршруты */}
                    <Route path="/dialogs" element={<DialogsContainer store={props.store} />} />
                    <Route path="/profile/:userId?" element={<ProfileContainer />} />
                    <Route path="/users" element={<UsersContainer />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
