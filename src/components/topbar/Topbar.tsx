import './topbar.scss'
import {UserOutlined, MailFilled} from "@ant-design/icons";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"top-bar " + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href={"#intro"} className={"logo"}>Valela</a>
                    <div className="itemContainer">
                        <UserOutlined className={"icon"}/>
                        <span>+373 67 54 74 54</span>
                    </div>
                    <div className="itemContainer">

                        <MailFilled className={"icon"}/>
                        <span>KiyoshiYoshi@gmail.com</span>

                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
