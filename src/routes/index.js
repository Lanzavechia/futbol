const { Router } = require('express');
const router = Router();
const admin =  require('firebase-admin')
const fetch = require("node-fetch");



var serviceAccount = require("../../football-db-toptive-firebase-adminsdk-mmpoz-83a1527499.json");

 admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://football-db-toptive.firebaseio.com/'
 });

const db = admin.database()

const api_url= 'https://api.football-data.org/v2/competitions';

// async function getCompetitions(){
//     const response = await fetch(api_url);
//     const data = await response.json(); //Convertir en json
//     const {  name } = data;
//     // console.log(id);
//     console.log(name);
// };

// getCompetitions(); 


router.get('/', async (req, res) =>{
    const response = await fetch(api_url);
    const data = await response.json(); //Convertir en json
    const {competitions}=data;

    res.send(competitions)
    db.ref('Competiciones').push(data);
});



module.exports = router;