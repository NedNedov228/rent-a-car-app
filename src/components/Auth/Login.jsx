import React from "react";
// import Sider from "../Sider/sider";
// import './home.scss'
import LoginPage from "../LoginPage";



const Login = () => {
    return (
        <>
            {/* <Sider/> */}
            <main className='content'>
                <article className=''>
                    <section className='content__hero'>
                        <LoginPage/>
                    </section>
                </article>

            </main>
        </>
    );
}

export default Login;
