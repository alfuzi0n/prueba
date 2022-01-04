import react, {useEffect,useState} from 'react'
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=ApZjuzHJ4tnzscvOTlbFw4j9KhvMnDZ4&q=pokemon&limit=10&offset=0&rating=g&lang=en'


function App() {


  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(response=>{
      const{data} = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      setGifs(gifs) 
      console.log(gifs)
    })
    
    
  }, [])
  
  
  

  return (
    <div className="App">
      <section className="App-header">
        {
      
      gifs.map(singleGif =>  <img src= {singleGif} />)
        }
      
      </section>
    </div>
  );
      }

export default App;
