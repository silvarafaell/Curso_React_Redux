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
        </div>
    )
}