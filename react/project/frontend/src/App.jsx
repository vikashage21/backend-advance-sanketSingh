import { useEffect, useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Hearder from "./components/Hearder";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  let contactKey = "userContact";
  const [contact, setContact] = useState(() => {
    const retrieveContact = localStorage.getItem(contactKey);
    return retrieveContact ? JSON.parse(retrieveContact) : [];
  });
  const handelAddContact = (contacts) => {
    setContact((pre) => {
      return [
        ...pre,
        {
          id: uuidv4(),
          ...contacts,
        },
      ];
    });
  };

  // saving the data into localstorage ...

  useEffect(() => {
    localStorage.setItem(contactKey, JSON.stringify(contact));
  }, [contact]);

  // handel delete contact

  const handeldeleteContact = (id) => {
    const filterContact = contact.filter((e) => {
      return e.id !== id;
    });
    setContact(filterContact);
  };
  return (
    <div>
      <Hearder />
      <AddContact handelAddContact={handelAddContact} />
      <ContactList
        contactList={contact}
        handeldeleteContact={handeldeleteContact}
      />
    </div>
  );
};

export default App;
