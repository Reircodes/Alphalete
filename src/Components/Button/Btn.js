import React from 'react';
import { Button } from '@mui/material';
import './Btn.css'

const Btn = ({text , bgColor}) => {
  return <div className='btn'>
        <Button className={`button ${bgColor}`}>
                {text}
        </Button>
  </div>;
};

export default Btn;
