import { login } from "../api/Service"
import { isAuth } from "../api/Service"

const logi = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    login(username, password)
}

const RegisterPage = () => {
    if (isAuth) {
        location.href = '/'
    }

  return (
    <>
    <center><h1>Вход</h1></center>
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

        <button onClick={logi} className='btn' >Войти</button>
    </div>
        </center>
        <div className="divider"></div>
        <center><p>Нет учётной записи? <a href='/reg'>Создайте аккаунт</a></p></center>
    </>
  )
}

export default RegisterPage