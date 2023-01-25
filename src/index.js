// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, child, get,set, push, onValue, update, remove } from "firebase/database";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFos9TmR6AMbKRLvMD7RwQhzjxvQHz_hM",
  authDomain: "fir-playground-294c7.firebaseapp.com",
  databaseURL: "https://fir-playground-294c7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-playground-294c7",
  storageBucket: "fir-playground-294c7.appspot.com",
  messagingSenderId: "964445554433",
  appId: "1:964445554433:web:6ccc2266ba4d09550d7d00"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()

const dbRef = ref(getDatabase());


// Create
function writeUserData(todoId, name, done) {

    const db = getDatabase();
    //const newPostKey = push(child(ref(db), 'todo')).key;

    const reference = ref(db, 'todo/' + todoId);


    // Get a key for a new Post.

    set(reference, {
      name: name,
      done: done
    });
  }
  
writeUserData(3, "test", false )
writeUserData(1, "sdfg", false )
writeUserData(2, "sdfg", false )


// Read (one)
function read(todoId) {

    const reference = ref(db);

    get(child(reference, "todo/" + todoId)).then(snapshot => {
        if(snapshot.exists())
        console.log(snapshot.val())

    }).catch(error => {
        console.log(error)
    })
}

read(2)

// Update 

function Update(todoId, name, done) {
    update(ref(db, "todo/" + todoId), {
        name: name,
        done: done
    }).then(() => {
        console.log("Data stored succefully")
    }).catch(error => {
        console.log(error)
    })
}

Update(3, "hej", true)

// Delete

function deleteData(todoId) {
    remove(ref(db, "todo/" + todoId)).then(()=> {
        console.log("removed successfully")
    }).catch(error => {
        console.log(error)
    })
}

deleteData(1)