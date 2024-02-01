import React from 'react';
import { Work } from './Work';
import img1 from './p1.png';
import img2 from './p2.jpg';
import img3 from './p3.jpg';

function Cards() {
  const cardsData = [
    {
      id: 1,
      imgSrc: img1,
      title: "Double Cheese",
      buttonText: "Github",
      link: 'https://github.com/rithika74/Responsive'
    },
    {
      id: 2,
      imgSrc: img2,
      title: "Planty'x",
      buttonText: "Github",
      link: '#'
    },
    {
      id: 3,
      imgSrc: img3,
      title: "Landing Page",
      buttonText: "Github",
      link: '#'
    },
    {
      id: 4,
      title: "ToDo List",
      buttonText: "Github",
      link: "#"
    }
  ];

  return (
    <>
      <div style={{ marginTop: '10px', fontSize: '36px', fontWeight: 'bolder', textAlign: 'center' }}>Projects</div>
      <div className='work' style={{ display: 'flex',flexWrap:'wrap'  }}>
        {cardsData.map((card) => (
          <Work
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            buttonText={card.buttonText}
            link={card.link}
          />
        ))}
      </div>
    </>
  );
}

export default Cards;
