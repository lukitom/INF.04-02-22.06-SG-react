import { useState } from 'react';

function App() {
  const [kursy, setKursy] = useState(["Programowanie w C#", "Angular dla początkujących", "Kurs Django"]);

  const [daneFormularz, setDaneFormularz] = useState({
    imieNazwisko: "",
    kursNr: 0
  });

  const imieNazwiskoChangeHandler = (event) => {
    setDaneFormularz({
      ...daneFormularz,
      imieNazwisko: event.target.value
    })
  }

  const kursNrChangeHandler = (event) => {
    setDaneFormularz({
      ...daneFormularz,
      kursNr: event.target.value
    })
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log(daneFormularz)
  }

  return (
    <div className="App p-4">
      <h2>Liczba kursów: {kursy.length}</h2>
      <ol>
        {
          kursy.map(e => <li>{e}</li>)
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
            onChange={imieNazwiskoChangeHandler} />
        </div>
        <div className='form-group mt-3'>
          <label htmlFor="kursNr" className="mb-3">Number kursu</label>
          <input
            type="number"
            id='kursNr'
            name="kursNr"
            className='form-control'
            value={daneFormularz.kursNr}
            onChange={kursNrChangeHandler} />
        </div>

        <button type='submit' id="przyciskWyslij" className='btn btn-primary mt-3' onClick={formSubmitHandler}>Zapisz do kursu</button>
      </form>
    </div>
  );
}

export default App;
