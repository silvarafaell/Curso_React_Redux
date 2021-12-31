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
            <Navegador texto='Navegacap #02' destino='/cliente/123' cor='blue' />
            <Navegador texto='Componente com Estado' destino='/estado' cor='#a45b71' />
            <Navegador texto='Integração com API #01' destino='/integracao_1' cor='#42a9a9' />
            <Navegador texto='Conteúdo Estático' destino='/estatico' cor='#fa054a' />
        </div>
    )
}