import './App.scss'
import {observer} from "mobx-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./components/mainPage/MainPage.tsx";
import Login from "./components/login/Login.tsx";
import {useState} from "react";
import Topbar from "./components/topbar/Topbar.tsx";
import Menu from "./components/menu/Menu.tsx";

const App: React.FC = observer(() => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false)
    const LogOut =()=>{
        setShowLogin(false);
        localStorage.removeItem('currentUser');
    }
    return (
        <BrowserRouter>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}  showLogin = {showLogin} logOut={LogOut}/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/login' element={<Login loginChange={() => setShowLogin(true)}/>}/>
            </Routes>
        </BrowserRouter>
    );
});

export default App;
