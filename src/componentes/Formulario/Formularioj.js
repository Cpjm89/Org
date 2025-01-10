import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el Envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formularioCss">
        <form onSubmit={manejarEnvio}>
            <h2>Completa el formulario para registrar al colaborador</h2>
            <Campo titulo="Nombre" placeholder="Ingresa el nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo}
                equipos={props.equipos} />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Completa el formulario para registrar el equipo</h2>
            <Campo titulo="Titulo" 
            placeholder="Ingresa el titulo" 
            required valor={titulo} 
            actualizarValor={actualizarTitulo} 
            />
            <Campo 
            titulo="Color" 
            placeholder="Ingresar color en Hex" 
            required valor={color} 
            actualizarValor={actualizarColor} 
            type= "color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
            </form>
    </section>
}

export default Formulario