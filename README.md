# Dynamic Task Management Application

## Overview

The Dynamic Task Management Application is a single-page application (SPA) built with Next.js for the frontend and Node.js with Express and MongoDB for the backend. It allows users to manage tasks dynamically, offering features such as task creation, editing, filtering, and undo the deleted tasks, all within a user-friendly interface.

## Features

- Create tasks with custom tags, due dates, and priority levels.
- Dynamic task list display with color-coded priorities.
- Task filtering and searching capabilities.
- Edit and delete tasks with an undo option.
- Undo the deleted task within 60 seconds.
- Fully responsive design and accessibility features.

## Technology Used

- Frontend: Next.js, Redux Toolkit, CSS
- Backend: Node.js, Express.js
- Database: MongoDB

## Getting Started

Follow the instructions below to clone the repository, install packages, and run the application.

```bash
git clone https://github.com/RakibMojumder/todo-ena-ema.git
```

## Install Dependencies

To install the necessary packages

```bash
pnpm install
```

## Configure Environment Variables

Create a .env file add the server url

```bash
NEXT_PUBLIC_SERVER_URL=server_url
```

## Run the Application

```bash
pnpm dev
```
