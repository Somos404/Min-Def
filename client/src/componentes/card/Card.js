import React from "react";
import "./Card.scss";

const CardComponent = (props) => {
  const { img, title, description, meta } = props;
  return (
    <div className="box gallery">
      <div className="card">
        <div className="background">
          {
            props.web?
            <img width="100%" style={{maxHeight: '40em'}} alt={title} src={props.img} />
            :
            <img width="100%" style={{maxHeight: '40em'}} alt={title} src={require(`../../${img}`).default} />
          }
          
        </div>
        <span className="overlay"></span>
        <span>
          <i className="fa fa-camera-retro"></i>
        </span>
        <span className="thumb">
          <div className="info">
            <h2 dangerouslySetInnerHTML={{__html: `<span>${title}</span>`}}></h2>
            <p dangerouslySetInnerHTML={{__html: `<span>${description}</span>`}}></p>
            <div className="foot">
              <i className="line"></i>
              <span className="date">{meta}</span>
              <span target="_blank" className="social">
                <i className="fa fa-facebook"></i>
              </span>
              <span target="_blank" className="social">
                <i className="fa fa-twitter"></i>
              </span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default CardComponent;
