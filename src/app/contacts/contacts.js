import menuActivator from "../../lib/menu";



const API_KEY=process.env.API_KEY;
const WEB_CLIENT=JSON.parse(process.env.WEB_CLIENT);
async function loadSavedCredentialsIfExist() {
    try {
    //   const content = await fs.readFile(TOKEN_PATH);
      const credentials = JSON.parse(WEB_CLIENT);
      // return google.auth.fromJSON(credentials);
    } catch (err) {
      return null;
    }
}

const mediaContainer = document.getElementById('scroll-media');
const scrollCenter = 989/2 - mediaContainer.clientWidth/2;
mediaContainer.scrollTo(scrollCenter, 0);

menuActivator('menu-button', 'header');

