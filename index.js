// This function returns the next number in sequence to use as the key
// for a javascript object whose value is the text of the next note.
function getNoteId(){
// getExisting Notes (a javascript object) and assign to variable noteObject   
    let noteObject = getExistingNotes()
    // if there are no notes(noteObject doesn't exist), return 1 as the number to assign to the first note
    if (!noteObject){
        return 1
    }
    // extract all keys from noteObject and store them in the constant keysArray
    // so if noteObject were equal to {"1": "first note", "2": "second note", "3": "third note"}
    //then keysArray would be assigned ["1", "2", "3"]
    const keysArray = Object.keys(noteObject)
    // convert all keys to javascript numbers by using the Number()
    // conversion function on each element in keysArray and storing result
    // in the constant array numberKeys (conversion is necessary because
    // js objects store all keys as strings) 
    const numberKeys = keysArray.map((key) => Number(key))
    // log the resulting key array for debugging assistance
    console.log(numberKeys)
    // return the next number in sequence by finding the largest existing
    // key and adding 1 to it
    return Math.max(...numberKeys) +1 // this part with the +1 adds a new key to match the new note value 
}
// this function retrieves the notes from localStorage using the localStorage key
// "note," converts them from JSON format to a JS object, and returns the object 
function getExistingNotes() {
    // retrieve item from localStorage using key "note" and assign to variable notes
    let notes = localStorage.getItem("note")
    // if there are no notes retrieved, return null
    if (!notes){
        return null 
    }
    // otherwise, parse the JSON format string to a regular js object and return it
    return JSON.parse(notes) 
    
    
}
