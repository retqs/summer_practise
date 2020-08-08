import React from 'react';
import {useSpring, animated} from 'react-spring';
import {ReactComponent as BlobOne} from '../../assets/imgs/oneBlob.svg';
import {ReactComponent as BlobTwo} from '../../assets/imgs/twoBlob.svg';
import {ReactComponent as BlobThree} from '../../assets/imgs/threeBlob.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`;

function ContactUs() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: {mass: 3, tension: 750, friction: 140},
  }));

  return (
    <section
      className='contactUs'
      onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}
    >
      <div className='contactUs__row'>
        <animated.div
          className='contactUs__box'
          style={{transform: props.xy.interpolate(trans1)}}
        >
          <BlobOne></BlobOne>
          <a href='http://www.nmu.org.ua/en/' target='_blank'>
            NTU DP official site
          </a>
        </animated.div>
        <animated.div
          className='contactUs__box'
          style={{transform: props.xy.interpolate(trans3)}}
        >
          <BlobTwo></BlobTwo>
          <a href='https://nvk138.dnepredu.com/' target='_blank'>
            Прошлое место учения
          </a>
        </animated.div>
      </div>
      <div className='contactUs__row'>
        <animated.div
          className='contactUs__box'
          style={{transform: props.xy.interpolate(trans2)}}
        >
          <BlobThree></BlobThree>
          <a
            href='http://pzks.nmu.org.ua/ua/'
            target='_blank'
            style={{marginTop: '20px'}}
          >
            Кафедра програмного забезпечення комп'ютерних систем
          </a>
        </animated.div>
      </div>

      <div className='contactUs__row'>
        <span className='contactUs__copy'>
          2020&copy;Danil Yahoda. Я согласен чтобы мои материалы можно было
          использовать в целях проф деятельности
        </span>
      </div>
    </section>
  );
}

export default ContactUs;
