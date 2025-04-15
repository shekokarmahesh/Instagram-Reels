
# Instagram Reels Clone

```markdown
# Instagram Reels Clone

A React-based web application that mimics the core functionality of Instagram Reels, allowing users to scroll through short video content with autoplay capabilities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Component Hierarchy](#component-hierarchy)
- [API](#api)

## Features

- Vertical scroll-based video feed with snap alignment
- Autoplay videos when they enter the viewport
- Pause/play functionality on click
- Video captions and channel information display
- API integration for fetching video content

## Tech Stack

- **Frontend**: React 18
- **State Management**: React Hooks
- **API Client**: Axios
- **Data Fetching**: TanStack React Query
- **Build Tool**: Vite
- **Linting**: ESLint
- **Module Aliasing**: Path aliasing with '@' prefix

## Project Structure

```

src/
├── apis/             \# API integration functions
├── components/       \# UI components organized by atomic design
│   ├── atoms/        \# Basic UI building blocks
│   ├── molecules/    \# Combinations of atoms
│   └── organism/     \# Complex UI sections
├── config/           \# Application configuration
├── hooks/            \# Custom React hooks
│   └── apis/         \# API-related hooks
└── main.jsx          \# Application entry point

```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with required environment variables (see Environment Variables section)
4. Start the development server:
```bash
npm run dev
```


## Usage

The application displays a feed of videos that users can scroll through. Videos automatically play when they enter the viewport and pause when scrolled away. Users can also manually pause/play videos by clicking on them.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_BACKEND_URL=your_backend_api_url
```


## Component Hierarchy

- **App**: Main application component wrapped with QueryClientProvider
    - **Reel**: Container for video feed
        - **Video**: Individual video component with autoplay/pause functionality
            - **ReelFooter**: Displays channel and caption information


## API

The application fetches video data from a backend API using the following endpoint:

- `GET /videos`: Retrieves a list of all available videos

Each video object contains:

- `id`: Unique identifier
- `url`: Video file URL
- `caption`: Text description

```markdown
# Instagram Reels Clone

A React-based web application that replicates the core experience of Instagram Reels, enabling users to scroll through short-form videos with seamless autoplay and interactive features.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Component Hierarchy](#component-hierarchy)
- [API](#api)

## Features

- Vertical, snap-aligned video feed for intuitive scrolling
- Autoplay videos as they enter the viewport
- Click to pause/play individual videos
- Display of video captions and channel/user information
- Integration with backend API for dynamic video content

## Tech Stack

- **Frontend:** React 18
- **State Management:** React Hooks
- **API Client:** Axios
- **Data Fetching:** TanStack React Query
- **Build Tool:** Vite
- **Linting:** ESLint
- **Module Aliasing:** Path aliasing with '@' prefix

## Project Structure

```

src/
├── apis/             \# API integration functions
├── components/       \# UI components (atomic design)
│   ├── atoms/        \# Basic UI elements
│   ├── molecules/    \# Combinations of atoms
│   └── organism/     \# Complex UI sections
├── config/           \# App configuration
├── hooks/            \# Custom React hooks
│   └── apis/         \# API-related hooks
└── main.jsx          \# Application entry point

```

## Installation

1. **Clone the repository**
2. **Install dependencies:**
```

npm install

```
3. **Create a `.env` file** in the project root with required environment variables (see [Environment Variables](#environment-variables))
4. **Start the development server:**
```

npm run dev

```

## Usage

- Browse a feed of short videos that autoplay as you scroll.
- Videos pause automatically when out of view.
- Click on a video to manually pause or play.
- View captions and channel/user details below each video.

## Environment Variables

Create a `.env` file in the root directory with:

```

VITE_BACKEND_URL=your_backend_api_url

```

## Component Hierarchy

- **App**: Main application, wrapped with `QueryClientProvider`
  - **Reel**: Container for the video feed
    - **Video**: Individual video with autoplay/pause logic
      - **ReelFooter**: Displays channel/user and caption info

## API

The app fetches video data from a backend API:

- `GET /videos`: Returns a list of available videos

Each video object includes:
- `id`: Unique identifier
- `url`: Video file URL
- `caption`: Text description

---

&gt; For more on building Instagram Reels clones and best practices, see guides on feature sets, monetization, and legal considerations[^1][^5][^9].
```

