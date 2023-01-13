import { useState } from 'react';
import FormInput from './components/FormInput';

function App() {
  const [kursy, setKursy] = useState([
    {
      id: 1,
      content: "Programowanie w C#"
    },
    {
      id: 2,
      content: "Angular dla początkujących"
    },
    {
      id: 3,
      content: "Kurs Django"
    }
  ])

  const [daneFormularz, setDaneFormularz] = useState({
    imieNazwisko: "",
    kursNr: 0
  })

  const formChangeHandler = (event) => {
    setDaneFormularz({
      ...daneFormularz,
      [event.target.name]: event.target.value
    })
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log(`Imię i nazwisko: ${daneFormularz.imieNazwisko}`)

    if (daneFormularz.kursNr > 0 && daneFormularz.kursNr < kursy.length + 1) {
      console.log(`Kurs nr: ${daneFormularz.kursNr}`);
    } else {
      console.log("Nieprawidłowy numer kursu");
    }
  }

  return (
    <div className="App p-4">
      <h2>Liczba kursów: {kursy.length}</h2>
      <ol>
        {
          kursy.map(e => <li key={e.id}>{e.content}</li>)
        }
      </ol>
      <form className='form'>
        <FormInput
          fieldId="imieNazwisko"
          label="Imię i nazwisko"
          value={daneFormularz.imieNazwisko}
          changeHandler={formChangeHandler}/>
        
        <FormInput
          fieldId="kursNr"
          label="Number kursu"
          value={daneFormularz.kursNr}
          changeHandler={formChangeHandler} />

        <button
          type='submit'
          id="przyciskWyslij"
          className='btn btn-primary mt-3'
          onClick={formSubmitHandler}>Zapisz do kursu</button>
      </form>
    </div>
  );
}

export default App;
