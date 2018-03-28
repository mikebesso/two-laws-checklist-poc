
import firebase from "firebase"
import initialData from "./checklists.json";
import _ from "lodash";


function pushSteps(parentPath, steps){

    _.each(
        steps,
        function(d){
            let step = firebase.database().ref(`${parentPath}/steps`).push(
                {
                    title: d.title
                }
            );

            firebase.database().ref(`${parentPath}/steps/${step.key}/key`).set(step.key);


            if (d.steps) {
                pushSteps(`${parentPath}/steps/${step.key}`, d.steps);
            }
        }
    );
/*
    steps.map( 
        (d) => {
            let step = firebase.database().ref(`${parentPath}/steps`).push(
                {
                    title: d.title
                }
            );

            firebase.database().ref(`${parentPath}/steps/${step.key}/key`).set(step.key);


            if (d.steps) {
                pushSteps(`${parentPath}/steps/${step.key}`, d.steps);
            }
        }
    );    
*/
}

function reinitializeChecklists() { 

    const root = firebase.database().ref("/root")
    root.remove();

    const checklists = firebase.database().ref("/root/checklists")
    

    _.each(
        initialData.data,
        function(d){

            const checklist = checklists.push(
                {
                    title: d.title,
                    brief: "brief description",
                    description: "detailed description",
                    steps: []
                }
            );
    
            firebase.database().ref(`/root/checklists/${checklist.key}/key`).set(checklist.key);
            pushSteps(`/root/checklists/${checklist.key}`, d.steps);
        }

    );
    /*
    initialData.data.map( 
        (d) => {

            const checklist = checklists.push(
                {
                    title: d.title,
                    brief: "brief description",
                    description: "detailed description",
                    steps: []
                }
            );
    
            firebase.database().ref(`/root/checklists/${checklist.key}/key`).set(checklist.key);
            pushSteps(`/root/checklists/${checklist.key}`, d.steps);
        }
    );
*/

}



export default {
    reinitializeChecklists
}