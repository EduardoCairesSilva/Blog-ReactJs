import React from 'react';
import Header from './components/Header';
import FormBase from './components/FormBase';
import './index.css';

function HeaderLink({ href, children }) {
  return (
    <a href={href} className='font-semibold leading-6 ml-5 text-black'>{children}</a>
  );
}

function App() {
  return (
    <>
      <Header className={'bg-red-300'}>
      ghf
      </Header>
        <FormBase>
          {/* <HeaderLink /> */}
        </FormBase>
    </>
  );
}

export default App
