import React from "react";

export const Numbers = ({ persons }) => {
  const list = persons.map(person => {
    return (
      <div key={person.name}>
        <p>
          Name: {person.name} Number: {person.number}
        </p>
      </div>
    );
  });
  return <div>{list}</div>;
};
