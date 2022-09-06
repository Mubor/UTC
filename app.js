const express = require("express");
const dotenv = require("dotenv");
const { google } = require('googleapis');
const bodyParser = require('body-parser');


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
    run(response, request.body);
});


//adding 1 hour and returning date localISOString
function getEndDate(date) {
    const eventDate = new Date(date);
    const dateOffset = eventDate.getTimezoneOffset() * 60000;
    
    eventDate.setHours(eventDate.getHours() + 1);
    
    return (new Date(eventDate - dateOffset).toISOString().slice(0, -1).split('.')[0]);
}

async function run(res, data) {
    const SCOPES = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'];
    const CALENDAR_ID = process.env.CALENDAR_ID;
    const sk = process.env.SERVICE_KEY;


    const jwtClient = new google.auth.JWT(
        sk.client_email,
        null,
        sk.private_key,
        SCOPES,
    );
      
    const calendar = google.calendar({
        version: "v3",
        auth: jwtClient,
    });
      
    const auth = new google.auth.GoogleAuth({
        keyFile: "./service_key.json",
        scopes: SCOPES,
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
    

    const operationResponser = (error, response) => {
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
            operationResponser);
        });

    };

    try {
        await addCalendarEvent();
    }catch(err) {
        console.log(err.message);
        res.sendStatus(400);
    }
}