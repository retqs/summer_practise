import React from 'react';
import {animated, Trail} from 'react-spring/renderprops';
import data from './data';

function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <article className='hero__info'>
          <Trail
            items={data}
            keys={(i) => i.text}
            from={{transform: 'translate3d(0px,100%,0)'}}
            to={{transform: 'translate3d(0px,0,0)'}}
            config={{
              mass: 1,
              friction: 30,
              tension: 300,
            }}
          >
            {(item) => (props) => (
              <div className='hero__row'>
                <animated.h5 className='hero__title' style={props}>
                  {item.text}
                </animated.h5>
              </div>
            )}
          </Trail>
        </article>
        <figure className='hero__image'>
          <img src='/D.Y. 122-18-2.jpg' alt='me' />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
