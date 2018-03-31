
import firebase from "firebase"
import initialData from "./checklists.json";
import _ from "lodash";


function pushSteps(parentPath, steps){

    _.each(
        steps,
        function(d){
            let step = firebase.database().ref(`${parentPath}/steps`).push(
                {
                    title: d.title || "Not Specified",
                    instructions: d.instructions || "Not Specified"
                }
            );

            firebase.database().ref(`${parentPath}/steps/${step.key}/key`).set(step.key);


            if (d.steps) {
                pushSteps(`${parentPath}/steps/${step.key}`, d.steps);
            }
        }
    );

}

function pushNotes(parentPath, notes){
    _.each(
        notes,
        function(d){
            let note = firebase.database().ref(`${parentPath}/notes`).push(
                {
                    type: d.type || "Not Specified",
                    title: d.title || "Not Specified",
                    body: d.body || "Not Specified"
                }
            );
            firebase.database().ref(`${parentPath}/notes/${note.key}/key`).set(note.key);
        }
    );    
}

function pushArray(parentPath, node, items){
    
    const path = `${parentPath}/${node}`;

    firebase.database().ref(path).set(items);

}

function reinitializeChecklists() { 

    
    const root = firebase.database().ref("/root")
    root.remove();

    const checklists = firebase.database().ref("/root/checklists")
    

    _.each(
        initialData.data,
        function(d){

            console.log(d);

            const checklist = checklists.push(
                {
                    version: (new Date()).toISOString(),
                    title: d.title || "Not Specified",
                    description: d.description || "Not Specified",
                    frequency:  d.frequency || "Not Specified",
                    notes: [],
                    steps: []
                }
            );
    
            const checklistNode = `/root/checklists/${checklist.key}`;

            firebase.database().ref(`${checklistNode}/key`).set(checklist.key);

            if (d.steps) {
                pushSteps(checklistNode, d.steps);
            }

            if (d.notes){
                pushNotes(checklistNode, d.notes)
            }

            if (d.tags){
                pushArray(checklistNode, "tags", d.tags);
            }
            if (d.triggers){
                pushArray(checklistNode, "triggers", d.triggers);
            }
        }

    );


}



export default reinitializeChecklists;