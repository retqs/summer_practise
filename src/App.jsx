import ContactUs from './components/ContactUs';
import { Helmet } from 'react-helmet'
import Hero from './components/Hero/Hero';
import React from 'react';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className='App'>
      <Helmet
        title='NTU DP Yahoda Danilo 122-18-2'
        htmlAttributes={{ lang: 'ru' }}
      >
        <meta name='description' content='this is meta decription for SEO optimization'></meta>
        <meta property='og:title' content='this is og:title for SEO optimization' />
        <meta property='og:type' content='this is og:type for SEO optimization' />
        <meta property='og:url' content={window.location.href} />
        <meta property='og:image' content='/logo512.png' />
        <meta property='og:description' content='this is og:description for SEO optimization' />
        <link rel='canonical' href={window.location.href}></link>
        <link rel='alternate' hreflang='ru-UA' href={window.location.href} />
        <link rel='alternate' hreflang='uk-UA' href={window.location.href} />
        <link rel='alternate' hreflang='x-default' href={window.location.href} />
      </Helmet>
      <Hero></Hero>
      <Slider></Slider>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
