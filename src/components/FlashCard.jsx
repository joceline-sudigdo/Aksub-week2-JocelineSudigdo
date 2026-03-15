function FlashCard({ card, index, activeId, onCardClick }) {
  const isFlipped = activeId === card.question;

  function handleClick() {
    onCardClick(isFlipped ? null : card.question);
  }

  const difficultyClass = card.difficulty.toLowerCase();

  return (
    <div
      className={`flash-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      {isFlipped ? (
        <>
          <span className={`card-badge badge-${difficultyClass}`}>
            {card.difficulty}
          </span>
          <p className="card-label">Answer :</p>
          <p className="card-question-flipped">{card.question}</p>
          <p className="card-answer">{card.answer}</p>
        </>
      ) : (
        <>
          <span className="card-index">Question {index + 1}</span>
          <p className="card-question">{card.question}</p>
          <span className={`card-badge-bottom badge-${difficultyClass}`}>
            {card.difficulty}
          </span>
        </>
      )}
    </div>
  );
}

export default FlashCard;