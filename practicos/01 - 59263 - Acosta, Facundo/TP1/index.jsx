const contactos = [
    {id: 1, nombre: 'Juan Carlos', apellido: 'Perez', telefono: '1234567890'},
    {id: 2, nombre: 'Maria', apellido: 'Martinez', telefono: '0987654321'},
    {id: 3, nombre: 'Pedro', apellido: 'Gomez', telefono: '6789054321'},
    {id: 4, nombre: 'Laura', apellido: 'Rodriguez', telefono: '1234509876'},
    {id: 5, nombre: 'Luis', apellido: 'Hernandez', telefono: '6789054321'}
]


const Titulo = () => <h1>Agenda en REACT</h1>

const Contacto = ({nombre, apellido, telefono}) => (
    <div className="tarjeta">
        <div className="nombre">{nombre} <b>{apellido}</b></div>
        <p>Telefono: {telefono}</p>
    </div>

)

const Agenda = ({contactos}) => (
    <div className="agenda">
        {contactos.map(contacto => (
            <Contacto key={contacto.id} nombre={contacto.nombre} apellido={contacto.apellido} telefono={contacto.telefono} />
        ))}
    </div>
)
const App = () =>  (
    <div id="main">
        <Titulo />
        <Agenda contactos={contactos} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))