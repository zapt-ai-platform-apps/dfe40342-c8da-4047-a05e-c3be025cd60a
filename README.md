# reactjs-starter

## Overview
This ReactJS application serves as a foundational structure incorporating Vite, Tailwind CSS, Supabase for authentication, Drizzle ORM for database interactions, and integrates various services like Sentry for error logging and Progressier for PWA support. The app features a modern, minimalist UI designed with user experience in mind.

## User Journeys
1. [View the Story of Moses](docs/journeys/view-the-story-of-moses.md) - Read a detailed narrative about Moisés' journey and legacy.
2. [Sign In](docs/journeys/sign-in.md) - Authenticate using various providers to access personalized features.
3. [Generate Images](docs/journeys/generate-images.md) - Create custom images based on your prompts.
4. [Text to Speech](docs/journeys/text-to-speech.md) - Convert written text into spoken words.

## External APIs and Services
- **Supabase**: Handles user authentication and manages sessions.
- **Sentry**: Monitors and logs errors for both frontend and backend.
- **Progressier**: Adds Progressive Web App (PWA) capabilities.
- **Resend**: Facilitates sending emails within the app.
- **Drizzle ORM**: Manages database interactions with PostgreSQL.

Ensure to configure the necessary environment variables as listed in the `.env` file to enable these services.

---