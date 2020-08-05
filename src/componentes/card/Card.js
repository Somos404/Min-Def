import React from "react";
import 'antd/dist/antd.css';
import './Card.scss';
import { Card } from 'antd';

const { Meta } = Card;

const CardComponent = (props) => {
  
  const {img, title, description} = props
  return (
    <Card className="cardContainer"
      cover={
        <img
          
          alt="example"
          src={require('../../'+img)} 
        />
      }
    >
      <Meta
        title={title}
        description={description}
      />
    </Card>
  );
};

export default CardComponent;
