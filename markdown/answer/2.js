import React from 'react'
import SkyForm from '../components/form'
import style from './login.css'

class Login extends React.Component {
    render() {
        return <div className={style.login}>
            <div className={style.container}>
                {this.props.skyrules(
                    'username',
                    [{ require: true, message: '请输入用户名' },
                    { min: 3, message: '长度不能小于3' }],
                    <Input />
                )}
                {this.props.skyrules(
                    'password',
                    [{ require: true, message: '请输入密码' },
                    { min: 3, message: '长度不能小于6' }],
                    <Input />
                )}
                <Button style={{ width: 300 }} type="primary" onClick={this.handleSubmit} className="login-form-button">
                    Log in
                        </Button>
            </div>
        </div>
    }


    handleSubmit = e => {
        e.preventDefault();
        let ret = this.props.skyvalidate();
        if (ret) {
            //验证成功
        } else {
            //验证失败
        }
    };
}

export default SkyForm(Login)