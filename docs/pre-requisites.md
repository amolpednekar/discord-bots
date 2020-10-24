## Create a Discord server
In order to create a Discord server you will need to have a Discord account. If you don't have a Discord account already, sign up and log in at https://discordapp.com/channels/@me. Once you are registered, you can either use the web browser version or you can download the app. They both behave the same. Once you are logged in to the app, look to the bottom-left corner, for the plus (+) sign. Click on the plus sign and it will ask if you want to create or join a server. Click "Create a Server." Provide a name, and click "Create." The new server will appear in the left column.

![Image](https://www.devdungeon.com/sites/default/static/discord/AddNewServer.PNG)

## Create a Discord app
The next step is to create a Discord App. We aren't writing any code yet, we are just registering the app with Discord. Start by going to https://discordapp.com/developers/applications/me and create a new app. On your app detail page, save the Client ID. You will need it later to invite the bot to a server. Try to give your app a unique name.
![Image](https://www.devdungeon.com/sites/default/static/discord/AddNewApp.PNG)

## Create a bot user for your app
After creating app, you need to take one further step and add a bot user to the app. You can do this on the app details page. On the app details page, scroll down to the section named bot, and create a bot user. Save the token, you will need it later to run the bot. If you get an error saying "Too many users have this username, please try another" then you need to rename your application to something more unique.
![Image](https://www.devdungeon.com/sites/default/static/discord/AddBot.PNG)

## Authorize/invite the bot to your server
After you have registered your app and created the bot user for your app, you are ready to invite(authorize) the bot to your server. To do this, you will need the Client ID for your app. You can get this from your app's "General Information" page.

![Image](https://www.devdungeon.com/sites/default/static/discord/GetClientId.PNG)

![Image](https://www.devdungeon.com/sites/default/static/discord/AuthorizeBot.PNG)

When you have your Client ID, visit the URL https://discordapp.com/oauth2/authorize?client_id=XXXXXXXXXXXX&scope=bot but replace XXXXXXX with your client ID. Choose the server you want to add it to and select authorize. <b>Always keep the token a secret</b>, as that is the equivalent to your bot's password. Anyone with the token can log in as your bot.