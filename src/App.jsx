import { useEffect, useState } from 'react';
import './App.css';
import { LanguageContext } from './MyContext';

function App() {
  const [counter, setCount] = useState(0)
  const [quantityOfDogs, setquantityOfDogs] = useState(3)
  const [responseDogs, setresponseDogs] = useState([])
  const [selectorBreed, setselectorBreed] = useState('')
  const [arrOfKeys, setarrOfKeys] = useState([])
  const [isLoading, setisLoading] = useState(true)


  useEffect(() => {
    async function fetchBreed() {
      try {
        const response = await fetch(`https://dog.ceo/api/breeds/list/all`)

        if (!response.ok) {
          throw new Error('ошибка')
        }

        const result = await response.json()
        console.log(result);
        setarrOfKeys(Object.keys(result.message))

      } catch (err) {
        console.log(err.message);
      }
    }
    fetchBreed()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        setisLoading(true)
        const url = selectorBreed === ''
  ? `https://dog.ceo/api/breeds/image/random/${quantityOfDogs}`
  : `https://dog.ceo/api/breed/${selectorBreed}/images/random/${quantityOfDogs}`;
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('ошибка')
        }

        const result = await response.json()
        setresponseDogs(result.message)

      } catch (err) {
        console.log(err.message);

      }
      finally {
        setisLoading(false)

      }
    }
    fetchData()
  }, [counter,selectorBreed])

  const handleClick = () => setCount((prevNum) => prevNum + 1)
  const handleChange = (e) => setquantityOfDogs(e.target.value)
  const handleSelect = (e) => setselectorBreed(e.target.value)

  return (<>
    <h1 >Галерея собак</h1>
    <p>Картинки обновлены <b>{counter} раз(а)</b></p>
    <div>
      <span>Показать</span>
      <input type='number' onChange={handleChange} value={quantityOfDogs} min={1} max={50} />
      <button onClick={handleClick}>Обновить</button>
      <p>тут выведу значение инпута {quantityOfDogs}</p>
      <select onChange={handleSelect} value={selectorBreed}>
        <option value="">Все породы</option>
        {arrOfKeys.map((item) => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>
    <div>
      {isLoading ? <h3>Идет загрузка...</h3> : responseDogs.map((item) => <img alt='Собака' src={item} key={item} />)}
    </div>
  </>
  )
}

export default App

