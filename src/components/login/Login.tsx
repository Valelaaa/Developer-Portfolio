//Тут использован шаблон LoginPageForm из antd-pro-components
//Опыт просто пипец какой полезный, так как только чтоб изменить submitText: '登录'(кнопку login) пришлось читать код на гитхабе
import './login.scss'
import {
    GithubOutlined,
    GoogleOutlined, InstagramOutlined,
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    LoginFormPage,
    ProFormText,
} from '@ant-design/pro-components';
import {Divider, Space, Tabs} from 'antd';
import type {CSSProperties} from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const iconStyles: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};

// const { Item } = Form;

interface User {
    username: string;
    password: string;
}

const initialUsers: User[] = [
    {username: 'admin', password: 'admin'},
    {username: 'user2', password: 'password'},
    {username: 'user3', password: 'password1'},
];

const Login: React.FC = ({loginChange}: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const navigate = useNavigate();
    const [messageText, setMessageText] = useState('');

    const handleUsernameChange = (value: string) => {
        setUsername(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (!storedUsers) {
            localStorage.setItem('users', JSON.stringify(initialUsers));
        }
    }, []);
    const handleSubmit = (values: any) => {
        const {username, password} = values;
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            const parsedUsers: User[] = JSON.parse(storedUsers);
            const matchingUser = parsedUsers.find(
                (user) => user.username === username && user.password === password
            );
            if (matchingUser) {
                setMessageText('Login successful');
                console.log('Login successfull')
                setAlertType('success');
                localStorage.setItem('currentUser', JSON.stringify(username));
                loginChange();
                setTimeout(() => {
                    navigate('/');
                }, 500);
            } else {
                setMessageText('Invalid username or password');
                setAlertType('error');
            }
        }
    };
    return (
        <div className={"login"}>
            <LoginFormPage
                backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
                logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                title="Valela"
                subTitle="Personal website"
                onFinish={handleSubmit}
                initialValues={{
                    username: '',
                    password: '',
                }}
                submitter={{
                    searchConfig: {
                        submitText: 'Войти'
                    },
                    submitButtonProps: {
                        style: {
                            width: '100%',
                            overflow: "hidden"
                        }
                    }
                }}
                actions={
                    <div className={'login-bottom'}>
                        <Divider plain>
                            <span style={{color: '#CCC', fontWeight: 'normal', fontSize: 14}}>
                            другие способы входа<br/>(в разработке)</span>
                        </Divider>
                        <Space align="center" size={24} style={{overflow: 'hidden'}}>
                            <div className={'logo-container'}>
                                <GoogleOutlined style={{...iconStyles, color: '#1677FF'}}/>
                            </div>
                            <div className={'logo-container'}>
                                <InstagramOutlined style={{...iconStyles, color: '#802c7e'}}/>
                            </div>
                            <div className={'logo-container'}>
                                <GithubOutlined style={{...iconStyles, color: '#333333'}}/>
                            </div>
                        </Space>
                    </div>
                }
            >
                <Tabs centered>
                    <Tabs.TabPane key={'account'} tab={'Войдите в свой аккаунт'}/>
                </Tabs>
                <>
                    <ProFormText
                        name="username"
                        fieldProps={{
                            size: 'large',
                            prefix: <UserOutlined className={'prefixIcon'}/>,
                        }}
                        formItemProps={{
                            style: {
                                padding: 0,
                                height: 60,
                                overflow: "hidden",
                            }
                        }}
                        placeholder={'Имя пользователя:'}

                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите имя пользователя!',
                            },
                        ]}
                        onMetaChange={handleUsernameChange}
                    />
                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'}/>,
                        }}
                        formItemProps={{
                            style: {
                                height: 65,
                                padding: 0,
                                marginTop: -20
                            }
                        }}
                        placeholder={'Пароль:'}
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите пароль！',
                            },
                        ]}
                        onMetaChange={handlePasswordChange}
                    />
                </>

            </LoginFormPage>
        </div>
    );
}
export default Login;

