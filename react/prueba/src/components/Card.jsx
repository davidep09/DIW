function Card(props) {
    let variable = "Soy un texto de una variable";
    return (
        <div className="card">
            <div className="cardTitle">
                <h2>{props.name}</h2>
            </div>
            <div className="cardBody">
                <p>{variable}</p>
            </div>
        </div>
    );
}
export default Card;