import React, {useState, useCallback} from 'react';
import {useTransition, animated} from 'react-spring';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';

const slides = [
  ({style}) => (
    <animated.div style={style} className='slider__slide'>
      <h4 className='slider__text'>Современные подходы к обучению</h4>
    </animated.div>
  ),
  ({style}) => (
    <animated.div style={style} className='slider__slide'>
      <h4 className='slider__text'>Понимающие и граммотные предоподаватели</h4>
    </animated.div>
  ),
  ({style}) => (
    <animated.div style={style} className='slider__slide'>
      <h4 className='slider__text'>Дружелюбные люди</h4>
    </animated.div>
  ),
];

function Slider() {
  const [index, set] = useState(0);

  const onClick = useCallback(
    () => set((prevState) => (prevState + 1) % 3),
    []
  );

  const transitions = useTransition(index, (s) => s, {
    from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
    enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'},
  });

  return (
    <section className='slider' id='motivation'>
      <h2 className='slider__title'>Мотивация</h2>
      {transitions.map(({item, props, key}) => {
        const Slide = slides[item];
        return <Slide key={key} style={props}></Slide>;
      })}
      <button className='slider__control' onClick={onClick}>
        <Arrow></Arrow>
        <Arrow></Arrow>
      </button>
    </section>
  );
}

export default Slider;
