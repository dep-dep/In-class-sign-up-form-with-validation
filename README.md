# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **src/app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **example** directory and create a blank **src/app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

Technology
Use:

React Native with Expo
TypeScript
react-hook-form
Zod
@hookform/resolvers/zod
Expo Router
Overview
Build a mobile sign-up form that collects user information, validates the information, and redirects the user to a confirmation screen after successful submission.

The purpose of this assessment is to demonstrate your ability to:

Build a form in React Native.
Manage form state using react-hook-form.
Create and apply a Zod validation schema.
Display useful validation errors.
Handle successful form submission.
Navigate between screens using Expo Router.
Important Scope
This is not an authentication assignment.

You are not required to:

create a real user account
connect to an API
connect to a database
authenticate a user
store the submitted information
use AsyncStorage
For this assessment, a successful submission means that the form passes validation, logs the required information, and navigates to the confirmation screen.

Required Fields
Field Validation
First name
Required, 2–30 characters, cannot be only whitespace
.
Last name
Required, 2–30 characters, cannot be only whitespace
Email
Required, valid email format, trim whitespace
Password Required and must contain at least 8 characters
Confirm password Required and must exactly match the password
Requirements

1. Form UI
   Create a sign-up form containing all five required fields:

First name
Last name
Email
Password
Confirm password
Include a clearly labelled Sign Up button.

The form should be clean, readable, and functional on a mobile screen.

Use:

secureTextEntry for both password fields.
keyboardType="email-address" for the email field.
Extensive styling is not required. Focus on creating a clear and usable form.

2. Zod Validation
   Create a Zod schema that validates all five form fields.

Your schema must validate to specifications indicated above

Password matching should be handled within your Zod schema.

Provide clear validation messages such as:

Please enter a valid email address.

rather than displaying raw validation errors.

3. Form State with react-hook-form
   Use react-hook-form to manage:

form values
validation
errors
form submission
Connect your Zod schema to react-hook-form using zodResolver.

4. Error Handling
   When the user attempts to submit invalid information:

Display a clear error near the relevant field.
Use understandable, user-facing messages.
Do not navigate away from the form.
Allow the user to correct the problem and submit again.
Errors are required to appear when the user attempts to submit the form.

More complex validation behaviour while typing or leaving a field is not required.

5. Successful Submission
   When the form passes validation:

Run the form's submit handler.
Log the validated user's first name, last name, and email to the console.
Navigate to the confirmation screen.
Do not log either password field.

6. Confirmation Screen
   Use Expo Router to navigate to a separate confirmation screen after successful validation.

The confirmation screen must:

clearly indicate that the form was submitted successfully
display the user's first name
For example:

Account created for Alex!

You are only confirming successful form submission. No real account needs to be created.

AI Policy
AI may be used as a review and feedback tool, but AI may not generate code for this assessment.

You may use AI to:
review code you have already written
explain an error or concept
identify possible problems in your existing code
suggest ways you could improve your own code
provide feedback about the usability of your form
You may not use AI to:
generate the solution
generate components or screens
generate your Zod schema
generate functions or submit handlers
rewrite your code for you
provide code that you copy into your assessment
If you use AI, include an ai-usage.docx file attached to your submission containing:

each prompt you submitted
the AI response you received
You are responsible for understanding and writing the code that you submit.

Submitting AI-generated code violates the permitted-use requirements for this assessment and may be addressed through the applicable academic integrity process.
