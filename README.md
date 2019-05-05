# chatroom

> A Vue.js project

## Build Setup
Step 1 - Installation
🕙Estimated time → 20 seconds 

npm i

Step 2 - Firebase configuration
🕙Estimated time → 3 minutes 

- Create a new firebase project with the firebase console
- Once your firebase project is created, add an application by clicking the web button 👉 Firebase web app button and copy the config object and replace the config variable in /src/firebase/init.js in bento-starter project.
- Go to Side menu → Database → Create database and select Start in test mode. Now your firestore database is up.
- Go to Side menu → Authentication click Set up sign-in method.
- Click on Google provider, enable it by clicking the switch button, select a project support email and click save button. You will be able to change or add new auth providers later if you need to.
- Back to your bento-starter project, open a console and run :

npm i -g npx

# login with the account you used to create the firebase project
npx firebase login

# select the project you've just created and use "default" as alias
npx firebase use --add

# Build the app and deploy
npm run build
npx firebase deploy

You're done ! 🎉
Your project is now available on firebase hosting.
You can also run npm run serve and start your app development !
