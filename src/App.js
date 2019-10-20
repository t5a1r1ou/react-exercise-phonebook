import React, { useState } from "react";

import { Numbers } from "./components/Numbers";
import { PersonsForm } from "./components/PersonsForm";
import { Filter } from "./components/Filter";

export const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const addPerson = e => {
    e.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNumber
    };
    const nameList = persons.map(person => person.name);

    if (nameList.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }
    setPersons(persons.concat(newNameObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = e => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    e.preventDefault();
    setNewNumber(e.target.value);
  };

  const handleFilterChange = e => {
    e.preventDefault();
    setFilterName(e.target.value);
  };

  const filteredPersons = filterName => {
    const filteredList = persons.filter(person => {
      return person.name.toUpperCase().includes(filterName.toUpperCase());
    });
    if (filterName === "") {
      return persons;
    }
    return filteredList;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonsForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Numbers persons={filteredPersons(filterName)} />
    </div>
  );
};
