import React from 'react'
import BookingsList from './BookingsList'
import { isAuth } from '../api/Service'

const PersonalCabinet = () => {
    if (!isAuth){
        location.href = '/login'
    }
    return (
        <>


            <main className='content'>
                <article className=''>
                    <section className='content__hero'>
                        <h1>Личный кабинет</h1>

                        <div className="divider"></div>

                        

                        <center>
                            <h2>Ваши Брони</h2>

                            <div className="divider"></div>

                            <BookingsList/>


                        </center>
                    </section>
                </article>

            </main>
        </>
    )
}

export default PersonalCabinet