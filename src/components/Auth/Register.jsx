import React from "react";
// import Sider from "../Sider/sider";
// import './home.scss'
import RegisterPage from "../RegisterPage";


const Register = () => {
    return (
        <>
            {/* <Sider/> */}
            <main className='content'>
                <article className=''>
                    <section className='content__hero'>
                        <RegisterPage/>
                    </section>
                </article>

            </main>
        </>
    );
}

export default Register;
