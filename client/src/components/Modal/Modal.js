import React from 'react';
import Card from '../Card/Card';
import congrats from '../../assets/congrats.gif';
import './Modal.scss'

const Modal = () => {
  return (
    <Card className='modal'>
      <h2>Good Job! 🥳 </h2>
      <img src={congrats} alt="congrats"/>
    </Card>
  );
};

export default Modal;