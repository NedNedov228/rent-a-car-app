import { register } from '../api/Service'
import { isAuth } from '../api/Service'

const reg = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    register(username, password)
}

const RegisterPage = () => {
    if (isAuth) {
        location.href = '/'
    }

  return (
    <>
    <h1>Регистрация</h1>
    <div className="divider"></div>

        <center>
        <div className='form'>
        <div className="input-box">
            <label htmlFor="username">Имя пользователя</label>
            <input type="username" id="username" name="username" />
        </div>


        <div className="input-box">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" />
        </div>

        <div className="input-box">
            <label htmlFor="password2">Повторите пароль</label>
            <input type="password" id="password2" name="password2" />
        </div>

        <button onClick={ reg } className='btn' >Зарегистрироваться</button>
    </div>
        </center>
        <div className="divider"></div>
        <p>Уже есть учётная запись? <a href='/login'>Войти</a></p>
    </>
  )
}

export default RegisterPage