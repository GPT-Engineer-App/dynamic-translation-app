# dynamic-translation-app

A Next.js application featuring multiple dynamic routes: 1) A route (/translation/5) for loading posts by a specific ID (5) from a database, displaying them accordingly. 2) A general route (/translation) utilizing the same component but with an empty list of posts. Additionally, the application includes a sidebar that initially fetches all users. Selecting a user from this sidebar redirects to the dynamic route (/translation/:id), tailored to the selected user's ID. The application should be structured to support these functionalities in a user-friendly and efficient manner, incorporating best practices for dynamic routing and data fetching in Next.js.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/dynamic-translation-app.git
cd dynamic-translation-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
