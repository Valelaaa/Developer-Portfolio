import "./menu.scss";
import {Link} from "react-router-dom";
import {Button} from "antd";
import {LoginOutlined, LogoutOutlined} from "@ant-design/icons";

interface MenuProps {
    logOut: React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLButtonElement>
}

export default function Menu({menuOpen, setMenuOpen, showLogin, logOut}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>

            <Link className={'login-link'} to={'/login'} onClick={() => setMenuOpen(false)}>
                <Button
                    className={'log-in'}
                    type="primary"
                    icon={<LoginOutlined/>
                    }
                    style={
                        {
                            visibility: `${showLogin ? 'hidden' : 'visible'}`
                        }
                    }
                >
                    LogIn
                </Button>
            </Link>
            <Link className={'login-link'} to={'/'} onClick={() => setMenuOpen(false)}>
                <Button className={'log-in'} type={"primary"} icon={<LogoutOutlined/>}
                        style={{
                            visibility: `${showLogin ? 'visible' : 'hidden'}`
                        }}
                        onClick={logOut}
                >
                    LogOut
                </Button>
            </Link>

        </div>
    );
}
