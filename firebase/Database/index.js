import { database } from "..";
import { ref, onValue } from "firebase/database";

const getProjectsRef = () => ref(database, "projetos/intro")
const getCertificadosRef = () => ref( database, "certificados/intro" )
const getProjectRef = ( id ) => ref( database, `projetos/descricao/${id}` )
const getCertificadoRef = ( id ) => ref( database, `certificados/descricao/${ id }` )  

export function getAllProjectList( setProjectList, max6=false ) {
    onValue( getProjectsRef(), snapshot => {
        let projectList = []
        snapshot.forEach(( project ) => {
            projectList.push( project.val() )
        })

        const projectListFinal =  filterListBySizeAndPosition(max6, projectList)
        setProjectList( projectListFinal )
    })
}
export function getAllCertificadoList( setCertificadosList, max6=false ) {
    onValue( getCertificadosRef(), snapshot => {
        let certificadosList = []
        snapshot.forEach( certificado => {
            certificadosList.push( certificado.val() )
        })
        const certificadosListFinal = filterListBySizeAndPosition(max6, certificadosList)
        setCertificadosList( certificadosListFinal )
    })
}

function filterListBySizeAndPosition( max6, editList ){
    filterListByPosition(editList)
    filterListBySize(editList, max6)
    return editList 
}
const filterListByPosition = ( filterList ) => filterList.sort( ( a ,b ) => a.posicao - b.posicao )
const filterListBySize = ( filterList, max6 ) => {
    filterList = ( max6 &&  filterList.length > 5) ? filterList.slice( 0, 6 ) : filterList
}





export function getCertificadoById( setCertificado, id ){
    onValue( getCertificadoRef( id ), certificado => {
        setCertificado( certificado )
    })
}
export function getProjectById( setProject, id ) {
    onValue( getProjectRef( id ), project => {
        setProject( project.val() )
    })
}
      


