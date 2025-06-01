import Card from "./Card.jsx";

export default function Column({ status, cards }) {
  return (
    <div className="main__column ">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            theme={card.theme}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}
