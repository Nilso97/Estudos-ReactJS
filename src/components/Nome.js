function Nome({ setNome }) {
    return (
        <>
        <p>Digite o seu nome:</p>
        <input 
        type="text" 
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)} />
        </>
    );
}

export default Nome;