# Developer Manual: BreatheBetter NL

## Overview

This document provides instructions for setting up, running, and maintaining the BreatheBetter NL application. It is intended for developers with general web application knowledge but no prior familiarity with this system.

---

## Installation

1. Clone the repository:
git clone https://github.com/Jumard03/FInal-Project-377-Breathe-Better


2. Install Node.js dependencies:
npm install

- This installs all required packages for running and developing the application.

---

## Running the Application

1. Start the local development server:
npm run dev


- This starts the server, usually on `http://localhost:3000`.
2. Open your browser and navigate to the local URL to view the app.

---

## Running Tests

1. Run automated tests:
npm run test


- This executes all tests written for the application.

---

## API Endpoints

### GET /api/stations

- **Description:** Retrieves a list of all air quality stations from the Luchtmeetnet API.
- **Method:** GET
- **Response:** JSON array of station objects.
- **Example Response:**
[
{
"number": "NL49002",
"location": "Amsterdam",
"geometry": { "coordinates": [4.9, 52.37] }
}
]

text

### GET /api/favorites

- **Description:** Retrieves a list of saved favorite stations from Supabase.
- **Method:** GET
- **Response:** JSON array of favorite station objects.
- **Example Response:**
[
{
"station_number": "NL49002",
"user_id": "12345"
}
]

text

### POST /api/favorites

- **Description:** Saves a new favorite station to Supabase.
- **Method:** POST
- **Request Body:**
{
"station_number": "NL49002",
"user_id": "12345"
}

text
- **Response:** JSON object with saved data.

---

## External API

- **Luchtmeetnet API:** Used for real-time air quality data. Documentation available at [https://api-docs.luchtmeetnet.nl](https://api-docs.luchtmeetnet.nl).

---

### Known Bugs

- The map sometimes does not update immediately after searching for a station.

### Roadmap

- Add more pollutant types (e.g., PM10, NO2).
- Improve UI responsiveness.
- Add user authentication.

---

## Best Practices

- Use clear, consistent language in documentation.
- Include detailed endpoint descriptions, request/response examples, and error handling strategies.
- Keep documentation updated with API changes.