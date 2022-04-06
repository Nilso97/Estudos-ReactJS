function Evento() {

    function meuEvento() {
        console.log('Ativado!');
    }
    return (
        <>
        <p>Clique para disparar um Evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    );
}

export default Evento;