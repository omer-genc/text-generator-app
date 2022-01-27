import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [value, setValue] = useState({
    format: "text",
    paras: 2,

  });

  const [response, setResponse] = useState("")



  useEffect(() => {
    const getText = async (value) => {
      const { data } = await axios.post(`https://baconipsum.com/api/?type=all-meat&paras=${value.paras}&format=${value.format}`)
      return data
    }
    getText(value).then(res => setResponse(res))
  }, [value]);
  return (
    <div className="App">
      <header>
        <h1>React sample text generator app</h1>
        <hr />
      </header>
      <form onChange={
        (e) => {
          console.log(e.target.value)
        }
      }>
        <input
          type='number'
          name='count'
          value={value.paras}
          onChange={(e) => {
            setValue({
              ...value,
              paras: e.target.value
            })
          }} />

        <select onChange={(e) => {
          setValue({
            ...value,
            format: e.target.value
          })
        }}>
          <option value="text">TEXT</option>
          <option value="html">HTML</option>
        </select>


      </form>
      <div className='text-area'>
        {response}
      </div>
    </div>
  );
}

export default App;
