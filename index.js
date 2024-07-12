// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import ejs from "ejs"
import bodyParser from "body-parser";




// 2. Create an express app and set the port number.

const app = express();
const Port = 3000;
app.use(bodyParser.urlencoded({extended:true}))
const API_URL = 'https://secrets-api.appbrewery.com'

// 3. Use the public folder for static files.

app.use(express.static('public'))

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req,res)=>{
 
 res.render("index.ejs", {secret:'Test', user:"Pece Katmeroski"})

})

app.get('/random', async (req,res)=>{
try{
    const response = await axios.get(API_URL+"/random")
    console.log(response.data)
    res.render("index.ejs",{secret:response.data.secret, user:response.data.username})
}
catch(error){
    res.render("index.ejs",{secret:error.response.data, user:"Error User"})
}    


})


// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.



// 6. Listen on your predefined port and start the server.
app.listen(Port, function(){
    console.log("Serverot slusa na Port 3000 .....")
})
