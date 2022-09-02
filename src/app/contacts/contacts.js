import menuActivator from "../../lib/menu";


const API_KEY="AIzaSyC0HBc92apvJtst7CPtIxTttglASvkMp3M";
const WEB_CLIENT=JSON.parse('{"web":{"client_id":"659403616723-1i3q9h1d0emeanbbr5cqisk83uegto1a.apps.googleusercontent.com","project_id":"utcfilm","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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"}}').web;
const SCOPES = ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/profile'];
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

        
const mediaContainer = document.getElementById('scroll-media');
const scrollCenter = 989/2 - mediaContainer.clientWidth/2;
mediaContainer.scrollTo(scrollCenter, 0);

menuActivator('menu-button', 'header');

