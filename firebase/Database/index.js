import { database } from "..";

import { ref, onValue } from "firebase/database";


export function getAllProjectList(setProjectList){
    const projectsRef = ref(database, "projetos/")

    onValue(projectsRef, snapshot =>{
        let projectList = []
        snapshot.forEach((project)=>{
            projectList.push(project.val())
        })

        setProjectList(projectList)
    })
}