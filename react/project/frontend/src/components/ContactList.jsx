import React, { useState } from "react";

const ContactList = ({ contactList, handeldeleteContact }) => {
  return (
    <div className="container">
      {contactList.map((e) => {
        return (
          <div className="d-flex " key={e.id}>
            <div className="d-flex flex-column gap-2">
              <p className="text-black">{e.name}</p>
              <p className="text-black">{e.email}</p>
              <span
                className="bi bi-trash"
                onClick={() => handeldeleteContact(e.id)}
              ></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
