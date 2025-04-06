import React from 'react';
import photo from '../assets/img/photo.png'

const Subscribe = () => {
    return (
        <section className="subscribe">
            <h2 style={{display: 'none'}}>Подпишитесь на наши новости и акции</h2>
            <div className="subscribe__background">
                <div className="subscribe__background_conteiner">
                    <article className="subscribe__background-conteiner-article_1">
                        <h2 style={{display: 'none'}}>Отзывы о нас</h2>
                        <img src={photo} alt="Photo"/>
                        <p>
                            &laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi, a&nbsp;pulvinar purus
                            condimentum&raquo;
                        </p>
                    </article>
                    <article className="subscribe__background-conteiner-article_2">
                        <h2 style={{display: 'none'}}>Форма для подписки</h2>
                        <h2>SUBSCRIBE</h2>
                        <h3>FOR OUR NEWLETTER AND PROMOTION</h3>
                        <form className="from">
                            <input className="input__email" type="email" placeholder="Enter Your Email"/>
                            <button className="input__submit" type="submit">Subscribe</button>
                        </form>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
