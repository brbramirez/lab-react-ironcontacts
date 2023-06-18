// src/App.js
import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));
  const addContact = () => {
    const randomContact = allContacts.slice(5, allContacts.length - 1);
    const randomIndex = Math.floor(Math.random() * randomContact.length); 
    const newContact = randomContact[randomIndex];
    setContacts([...contacts, newContact]);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const deleteCelebrity = (celebrityId) => {
    const filteredCelebrities = contacts.filter((contact) => {
    return contact.id !== celebrityId;
  });
    setContacts(filteredCelebrities);
  };


  return <div className="App">
  <h1>IronContacts</h1>
  <button onClick={addContact}>Add Random Contact</button>
  <button onClick={sortByName}>Sort by name</button>
  <button onClick={sortByPopularity}>Sort by popularity</button>
  <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        contacts.map((contact) =>{
          console.log(contact.name);
          return (
          <tr>
            <td><img className="celebpic" src={contact.pictureUrl} alt='celebrity face'/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
              {contact.wonOscar ? <td>🏆</td> : <td> </td>}
              {contact.wonEmmy ? <td>🏆</td> : <td> </td>}
            <td><button onClick={() => deleteCelebrity(contact.id)}>Delete Celebrity</button></td>
          </tr>)
        })
  
      }
    </tbody>
  </table>



  </div>;
}
export default App;
