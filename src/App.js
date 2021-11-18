import React, { useState } from 'react';
import data from './cities.json';
import Input from './Input'

function App() {

   const [value, setValue] = useState("");


   function handleChange(e) {

      if (e.target.value == "") {
         setValue("");
      }

      else {
         let item = data.find(item => item.startsWith(e.target.value));

         setValue(item);
      }

   }


   return <div>
      <Input handleChange={handleChange} hint={value} />
   </div>
}

export default App;
