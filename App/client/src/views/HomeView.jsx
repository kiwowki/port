import React from 'react'
import Skip from '../components/Skip'
import Header from '../components/Header'
import Main from '../components/Main'
import Intro from '../components/Intro'
import About from '../components/About'
import Works from '../components/Works'
import Skills from '../components/Skills'
import Contact from '../components/Contact'


const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Intro />
      <Main>
        <About />
        <Works />
        <Skills />
        <Contact />
      </Main>
    </>
  )
}

export default HomeView