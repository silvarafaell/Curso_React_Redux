import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', /* items no centro*/
            flexWrap: 'wrap', /* permite quebrar linhas*/
            height: '100vh'
        }}>
            <Navegador texto='Estiloso' destino='/estiloso' />
            <Navegador texto='Exemplo' destino='/exemplo' cor='crimson' />
            <Navegador texto='Navegacao #01' destino='/navegacao' cor='green' />  {/*podemos criar uma pasta com arquivo index dentro ou somente um arquivo(por exemplo o arquivo exemplo) */}
        </div>
    )
}