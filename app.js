const express = require("express");
const dotenv = require("dotenv");
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const { gmail } = require("googleapis/build/src/apis/gmail");
const nodemailer = require("nodemailer") 


const app = express();
const urlencodedParser = express.urlencoded({extended: false});
dotenv.config();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get("/", function (request, response) {
    response.sendFile(process.cwd() + "/index.html");
});

app.listen(process.env.PORT, ()=>console.log('Server is running...' + process.cwd() +' '+process.env.PORT));


app.post("/create", function (request, response) {
    if(!request.body || request.body === {}) return response.sendStatus(400);
    runCalendarAPI(response, request.body);
});
app.post("/send", function (request, response) {
    if(!request.body || request.body === {}) return response.sendStatus(400);
    runGmailAPI(response, request.body);
});



//adding 1 hour and returning date localISOString
function getEndDate(date) {
    const eventDate = new Date(date);
    const dateOffset = eventDate.getTimezoneOffset() * 60000;
    
    eventDate.setHours(eventDate.getHours() + 1);
    
    return (new Date(eventDate - dateOffset).toISOString().slice(0, -1).split('.')[0]);
}

async function runGmailAPI(res, data) {
    const ck = JSON.parse(process.env.CLIENT_KEY);
    const token = JSON.parse(process.env.TOKEN);
    const myEmail = 'muha010801@gmail.com';
    const oauth2Client = new google.auth.OAuth2(
        ck.client_id, 
        ck.client_secret, 
        token.redirect_uris
    );

    oauth2Client.setCredentials({ refresh_token: token.refresh_token});
    
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: myEmail,
            clientId: ck.client_id,
            clientSecret: ck.client_secret,
            refreshToken: token.refresh_token,
            accessToken,
        },
    });

    try {
        await transporter.sendMail({
            from: myEmail,
            to: "muha010801@gmail.com",
            subject: "Message from " + data.username,
            text: data.message,
          }, 
          function(error, info){
            if(error){
              console.log("Error: "+error);
            } else {
              console.log("Success: "+info);
            }
        });

    } catch (error) {
        console.log(error.message);
        res.sendStatus(400)
    }
}

async function runCalendarAPI(res, data) {
    const SCOPES = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'];
    const CALENDAR_ID = process.env.CALENDAR_ID;
    const sk = process.env.SERVICE_KEY;
    
    const jwtClient = new google.auth.JWT(
        sk.client_email,
        null,
        sk.private_key,
        SCOPES,
    );

    const auth = new google.auth.GoogleAuth({
        keyFile: "./service_key.json",
        scopes: SCOPES,
    }); 

    const calendar = google.calendar({
        version: "v3",
        auth: jwtClient,
    });
   
    const calendarEvent = {
        summary: "MEETING WITH UTC FILM",
        description: `Meeting with: ${data.fullname}, ${data.email}`,
        start: {
            dateTime: `${data.time}:00+03:00`,
            timeZone: "Europe/Kyiv",
        },
        end: {
            dateTime: `${getEndDate(data.time)}+03:00`,
            timeZone: "Europe/Kyiv",
        },
        attendees: [],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
    };
    
    const calendarOperationResponser = (error, response) => {
        if (error) {
            console.log("Something went wrong: " + error.message);
            return;
        }
        res.json(response.data.htmlLink);   
    }

    const addCalendarEvent = async () => {
        auth.getClient().then((auth) => {
            calendar.events.insert({
                auth: auth,
                calendarId: CALENDAR_ID,
                resource: calendarEvent,
            }, 
            calendarOperationResponser);
        });

    };

    try {
        await addCalendarEvent();
    }catch(err) {
        console.log(err.message);
        res.sendStatus(400);
    }
}