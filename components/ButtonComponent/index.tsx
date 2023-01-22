// import Button from '@mui/material/Button';
import style from '/styles/buttonComponent.module.css';
import { FC, ReactNode } from 'react';

interface IButtonComponent {
  children: ReactNode;
  onClick?: () => void;
}

const ButtonComponent: FC<IButtonComponent> = ({ children, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
