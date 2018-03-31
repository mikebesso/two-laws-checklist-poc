
const functions = require('firebase-functions');


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.updateTags = functions.database.ref('/root/checklists/{key}/tags').onWrite(
    (event) => {
        
        // Get the checklist key that triggered this event
        const key = event.params.key;
    
        // Get the new and previous values
        const newVal = event.data.exists() ? event.data.val() : [];
        const prevVal = event.data.previous.exists() ? event.data.previous.val() : [];

        console.log({key, newVal, prevVal});

        admin.database().ref("/root/tags").once("value")
            .then(
                (snapshot) => {
                    let currentTags = snapshot.val() || {};

                    // handle tags added
                    newVal.forEach(
                        (checklistTag) => {
                            if (!currentTags[checklistTag]) {
                                currentTags[checklistTag] = [];
                            }
                            currentTags[checklistTag].push(key)
                        }
                    )
                    
                    // handle tags removed
                    // TO DO


                    admin.database().ref("/root/tags").set(currentTags)

                    return(Promise.resolve());
                }
            )
            .catch(
                (error) =>
                {
                    return(Promise.resolve());
                }
            )
        
        // we have to return something, otherwise we get a warning
        return(true);
    }
)