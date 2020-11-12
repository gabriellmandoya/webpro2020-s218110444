import React from "react";
import Counter from "./Counter";

const Card = ({name, institution, address, phoneNumber}) => {
    return (
        <div className = "card-container">
            <p>{name}</p>
            <p>{institution}</p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
            <Counter title = "Counter Component" />
        </div>
    );
};

export default Card;