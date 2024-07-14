import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home/index'
import NuevoVideo from './Pages/NuevoVideo/index'
import Player from './Pages/Player'
import Footer from './components/Footer'
import ModalEditar from './components/ModalEditar'
import NotFound from './Pages/NotFound'

function App() {

  const [peliculas, setPeliculas] = useState([])
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  useEffect(() => {
    fetch("https://aluraflix-api.gerardo-duarte.workers.dev/api/peliculas").then((response) => response.json()).then((data) => setPeliculas(data))
  },[])

  const agregarPelicula = async (pelicula) => {
    const { titulo, categoria, imagen, video, descripcion } = pelicula
    const res = await fetch("https://aluraflix-api.gerardo-duarte.workers.dev/api/peliculas", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        })
    })
    const data = await res.json();
    if(res.ok){
        setPeliculas([...peliculas, data])
    } else {
        console.log("Error al registrar pelicula")
    }
  }

  const eliminarPelicula = async (pelicula) => {
    const borrar = await fetch(`https://aluraflix-api.gerardo-duarte.workers.dev/api/peliculas/${pelicula.id}`, {
      method: "DELETE"
    })
    try {
      await fetch("https://aluraflix-api.gerardo-duarte.workers.dev/api/peliculas").then((response) => response.json()).then((data) => setPeliculas(data))
    } catch(error){
      alert(error)
    }
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home peliculas={peliculas} setPeliculaSeleccionada={setPeliculaSeleccionada} eliminarPelicula={eliminarPelicula} />} />
          <Route path='/nuevovideo' element={<NuevoVideo agregarPelicula={agregarPelicula}/>}/>
          <Route path="/:id" element={<Player peliculas={peliculas} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>  
      </Router>
      <ModalEditar pelicula={peliculaSeleccionada} setPeliculaSeleccionada={setPeliculaSeleccionada} />
      <Footer />
    </>
  )
}

export default App