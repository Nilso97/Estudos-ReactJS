import Button from './evento/Button';

function Evento() {
    function meuEvento() {
        console.log('Ativando o primeiro Evento!');
    }
    
    function segundoEvento() {
        console.log('Ativando o segundo Evento!');
    }

    return (
        <>
        <p>Clique para disparar um Evento:</p>
        <Button event={meuEvento} text="Primeiro Evento" />
        <Button event={segundoEvento} text="Segundo Evento" /> 
        </>
    );
}

export default Evento;