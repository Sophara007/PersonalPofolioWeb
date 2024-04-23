import React from "react";
import Styles from "../../resource/contact.module.css"
export function Contact({value, onChange, onSubmit}) {
    return (<>
  <main className={Styles.container}>
   <form onSubmit={onSubmit}> 
<label htmlFor="namer">Name : </label>
<input id="namer" type="text" value={value.username} onChange={onChange} name="username"></input>

<label htmlFor="emailield">Email : </label>
<input id="emailfield" type="text" value={value.email} onChange={onChange}  name="email"></input>

<label htmlFor="messegefield">Messege : </label>
<textarea id="messegefield" type="text" value={value.messege} onChange={onChange} name="messege"></textarea>
<button type="submit">Send</button>
   </form>
  </main>
        </>);
}