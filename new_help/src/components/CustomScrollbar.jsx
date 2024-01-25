// CustomScrollbar.jsx
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import './CustomScrollbar.css';

const CustomScrollbar = ({ children }) => {
  return (
    <Scrollbars
      renderThumbVertical={({ style, ...props }) => {
        const thumbStyle = {
          backgroundColor: '#888', // Cor do polegar
          borderRadius: '5px', // Borda arredondada do polegar
          width: '8px', // Largura da barra de rolagem
          transition: 'background-color 0.3s', // Transição suave da cor
        };

        return <div style={{ ...style, ...thumbStyle }} {...props} />;
      }}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
