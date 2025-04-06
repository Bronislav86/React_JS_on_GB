import React from 'react';
import delivery from '../assets/img/delivery.webp';
import discount from '../assets/img/discount.webp';
import quality from '../assets/img/quality.webp';

const BlackBlock = () => {
    return (
        <section className="blackBlock">
            <h2 style={{display: 'none'}}>Наши преимущества</h2>
            <div className="blackBlock__conteiner">
                <article className="blackBlock__conteiner-article">
                    <img src={delivery} alt="Free delivery"/>
                    <h3>Free Delivery</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                        models.</p>
                </article>
                <article className="blackBlock__conteiner-article">
                    <img src={discount} alt="Sale&discount"/>
                    <h3>Sales &amp;&nbsp;discounts</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                        models.</p>
                </article>
                <article className="blackBlock__conteiner-article">
                    <img src={quality} alt="Quality"/>
                    <h3>Quality assurance</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                        models.</p>
                </article>
            </div>
        </section>
    );
};

export default BlackBlock;
