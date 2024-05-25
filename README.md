Goal is to implement an application where the user can chat with an AI model. 

The user should be able to have multiple such conversations.

Once the user is done having that conversation, the chat gets saved. This chat can be
revisited from a panel on the side/top bar.

You can mock the AI model response from a custom JSON file which includes the response for a particular question.

NOTE: You can use the above SampleData.json file to add more key, value pairs if needed.

o How to start the service and use the application 
Open the Demo link provided below and type your question in the input feild provided, click ask to get response from the Bot AI.

o Reasoning behind your technical choices
Material-UI(MUI) is a popular library for React which provide
  -Consistet and Modern Design
  -Comprehensive Component
  -Customizability
  -Responsive Design
  -Ease of use
  -Performance
  -Accessibility
  -Integration with other tools

o Reasoning behind your design choices
  -Simplicity
  -Consistency
  -Visual Feedback (like and dislike button)
  

o Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project.
  - Toggle between light and dark mode.
  - The user should be able to like/dislike the AI model's answer using the thumbs
up/thumbs down buttons. These buttons are hidden and float when the mouse
hovers over the AI model's response.
- The user should be able to give a rating out of 5 at the end of the conversation. You
can get creative here and use a likert scale, or 5 stars, etc.
- The user should be able to give subjective feedback at the end of the conversation.


Figma:
https://www.figma.com/design/DYoSNliUDL3DlpgHPLlc0r/Bot-AI?node-id=8-2

Demo link
https://botai-chatbot-roopa-ss-projects.vercel.app/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
