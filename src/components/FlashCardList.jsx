import {useState} from 'react';
import FlashCard from './FlashCard';

function FlashCardList({cards}) {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className='card-list'>
      {cards.map((card, index) => (
        <FlashCard
          key={card.question}
          card={card}
          index={index}
          activeId={activeId}
          onCardClick={setActiveId}
        />
      ))}
    </div>
  );
}

export default FlashCardList;