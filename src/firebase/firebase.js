import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, GoogleAuthProvider, database as default}

// database.ref('expenses').on('child_removed', (snap) => {
//     console.log(snap.key, snap.val())
// })

// database.ref('expenses').on('child_changed', (snap) => {
//     console.log(snap.key, snap.val())
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').on('value',(snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// }) 

// database.ref('expenses').push(
//     {
//         description: 'gum',
//         note: '',
//         amount: 195,
//         createdAt: 0
//     })

// database.ref().on('value', (snapshot) => {
//     console.log(`${snapshot.val().name} is ${snapshot.val().job.title} at ${snapshot.val().job.company} `)
// })

// setTimeout(() => {
//     database.ref('age').set(28)
// }, 3500)

// setTimeout(() => {
//     database.ref().off()
// }, 6500)

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

//   database.ref().set({
//       name: 'Aurutis',
//       age: 24,
//       stressLevel: 6,
//       job: {
//           title: 'tech support',
//           company: 'Revel systems'
//       },
//       location: {
//           city: 'Vilnius',
//           country: 'Lithuania'
//       }
//   }).then(() => {
//       console.log('data is saved')
//   }).catch((e) => {
//     console.log(e)
//   })

//   database.ref('age').set(25)
//   database.ref('attributes/height').set('1.91m')
//   database.ref('attributes/weight').set('94 kg')

// database.ref('isSingle').remove().then(() => {
//     console.log('removed')
// }).catch((e) => {
//     console.log(e)
// })

// database.ref().update({
//     name: 'Jonas',
//     age: 30,
//     job: 'maxima',
//     'location/city': 'Panevezys'
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Rimi',
//     'location/city': 'Kaunas'
// })