import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import React, { useEffect, useState } from 'react';

export const App = () => {
  const [isContacts, setContacts] = useState([ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]);


  // const [isContacts, setContacts] = useState(JSON.parse('contacts'));
  const [isFilter, setFilter] = useState('');
  //при монтажі зчитуємо contacts з локалстораже
  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);
  //при демонтажі записуємо сонтастс з локалстораже
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(isContacts));
  }, [isContacts]);

  const handelInputChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };
    const contactByNameSearch = nameContact => {
    return isContacts.find(item => {
      return item.name === nameContact;
    });
  };

  //   //відправка форми з перевіркою існування контаку в списку
  const onSubmit = newCont => {
    console.log('newCont', newCont)
    if (contactByNameSearch(newCont.name, isContacts)) {
      alert(`${newCont.name} is alredy in conacts`);
      return;
    }

    setContacts(prevState => {
     setContacts([...prevState, newCont]);
    });
  };
  const getNewListContacts = (conacts, idForRemove) => {
    return conacts.filter(el => {
      return el.id !== idForRemove;
    });
  };
  const onRemoveContact = idForRem => {
    //отримуємо список контактів без контакту З ID = idForRem, що треба видалити
    const withOutDel = getNewListContacts(isContacts, idForRem);
    setContacts([...withOutDel]);
   };

  return (
    <>
      <h1 style={{ marginLeft: '20px' }}>Phonebook</h1>
      <ContactForm
        //handelInputChange={handelInputChangeForm}
        onSubmitForm={onSubmit}
      />
      <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
      <Filter
        style={{ marginLeft: '20px' }}
        handleFilter={handelInputChangeFilter}
        filter={isFilter}
      />
      <ContactList
        //contacts={getFilteredContacts(isContacts)}
        isContacts={isContacts}
         onRemoveContact={onRemoveContact}
      />
    </>
  );
};