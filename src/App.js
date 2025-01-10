
import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Headerj"
import Formulario from "./componentes/Formulario/Formularioj"
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{

    id: uuid(),
    equipo: "Data Science",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbD3khBaBDWa3Rne-Kswt_85bETUVb8Djt3Q&s",
    nombre: "Tony Stark",
    puesto: "Investigador",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNjAp6PGyrBMTMlr5gourYXRCfXWLgpDZ2A&s",
    nombre: "Sheldon Cooper",
    puesto: "Investigador",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX & Diseño",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpnGAcHlmEe2NUw-nnC0nDKmx9F9jA0CnEw&s",
    nombre: "Edna Moda",
    puesto: "Diseñadora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRna9VE1bP1cMGLFsZUgQeC7X-i6s9VyMEdIg&s",
    nombre: "Rick",
    puesto: "Profesor",
    fav: false
  }])


  const [equipos, actualizarEquipos] = useState([

    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX & Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },

  ])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }


  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eiminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipos
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map ((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log (nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

  //Colaborador Favorito 
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if ( colaborador.id === id ) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* mostrarFormulario ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario
      equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}


      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
