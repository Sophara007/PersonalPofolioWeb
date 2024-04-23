import React, { useState } from "react";
import { Contact } from "../../components/contact/contacts";
export function ContactPages() {
const [dataForm, setDataForm] =useState({
    username: '',
    email: '',
    messege: ''
});
function handleChange(e) {
    setDataForm({...dataForm, [e.target.name]: e.target.value,})
}

function handleSubmit(e) {
    e.preventDefault();
      // Stringify the dataForm object to display it in the alert
  const formDataString = JSON.stringify(dataForm);
  alert('Form submitted:\n' + formDataString);
  setDataForm({
    username: '',
    email: '',
    messege: ''
  });

}
    return (
        <Contact value={dataForm}
        onChange={handleChange}
        onSubmit={handleSubmit} />
    );
}