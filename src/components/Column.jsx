export default function Column({status, children}) {
    return (
        <div className="main__column ">
        <div className="column__title">
          <p>{status}</p>
        </div>
        <div className="cards">
            {children}
        </div>
      </div>
    );
  }
  