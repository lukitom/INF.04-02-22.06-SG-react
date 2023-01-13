import { useState } from 'react';

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
        <div className='form-group'>
          <label htmlFor="imieNazwisko" className='mb-3'>Imię i nazwisko</label>
          <input
            type="text"
            id="imieNazwisko"
            name="imieNazwisko"
            className='form-control'
            value={daneFormularz.imieNazwisko}
            onChange={formChangeHandler} />
        </div>
        <div className='form-group mt-3'>
          <label htmlFor="kursNr" className="mb-3">Number kursu</label>
          <input
            type="number"
            id='kursNr'
            name="kursNr"
            className='form-control'
            value={daneFormularz.kursNr}
            onChange={formChangeHandler} />
        </div>

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
