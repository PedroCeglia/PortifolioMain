import { database } from "..";
import { ref, onValue } from "firebase/database";

export function getAllProjectList( setProjectList, max6=false ) {
    onValue( getProjectsRef(), snapshot => {
        let projectList = []
        snapshot.forEach(( project ) => {
            projectList.push( project.val() )
        })

        const filterProjectListByPosition = () => projectList.filter( ( a ,b ) => a.posicao - b.posicao )
        const filterProjectListBySize = () => ( 
            ( max6 ) ? filterProjectListByPosition().slice( 0, 5 ) : filterProjectListByPosition()
        )

        const projectListFinal =  filterProjectListBySize()
        setProjectList( projectListFinal )
    })
}
const getProjectsRef = () => ref(database, "projetos/intro")

export function getProjectById( setProject, id ) {
    onValue( getProjectRef( id ), project => {
        setProject( project.val() )
    })
}
const getProjectRef = ( id ) => ref( database, `projetos/descricao/${id}` )


export function getAllCertificadoList( setCertificadosList, max6=false ) {
    onValue( getCertificadosRef(), snapshot => {
        let certificadosList = []
        snapshot.forEach( certificado => {
            certificadosList.push( certificado.val() )
        })

        const filterCertificadosListByPosition = () => certificadosList.filter( ( a, b ) => a.position - b.position )
        const filterCertificadosListBySize = () => (
            ( max6 ) ? filterCertificadosListByPosition().slice( 0, 5 ): filterCertificadosListByPosition()
        )

        const certificadosListFinal = filterCertificadosListBySize()
        setCertificadosList( certificadosListFinal )
    })
}
const getCertificadosRef = () => ref( database, "certificados/intro" )

export function getCertificadoById( setCertificado, id ){
    onValue( getCertificadoRef( id ), certificado => {
        setCertificado( certificado )
    })
}
const getCertificadoRef = ( id ) => ref( database, `certificados/descricao/${ id }` )