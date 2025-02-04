Health Challenge Tracker

Overview

The Health Challenge Tracker is a single-page application (SPA) built with Angular 14+ that allows users to track their workouts by entering their name, workout type, and workout duration. The app provides a user-friendly interface with features like search, filtering, pagination, and optional charts to visualize progress.

Features

Add user workout entries (Name, Workout Type, Minutes)

Display workouts in a tabular format

Search users by name

Filter workouts by type

Pagination for efficient data handling

Data persistence using localStorage

Optional charts for workout visualization

Unit tests for one component and one service with 100% coverage

Responsive UI built using TailwindCSS

Tech Stack

Frontend: Angular 14+

UI Components: Angular Material / PrimeNG

Styling: TailwindCSS

Data Storage: localStorage

Deployment: Vercel / Netlify / GitHub Pages

Installation & Setup

Clone the Repository:

git clone https://github.com/your-username/Health-tracker.git cd Health-tracker

Install Dependencies:

npm install

Run the Development Server:

ng serve

The app will be accessible at http://localhost:4200/

Production Build

To generate an optimized production build, run:

ng build --configuration=production

This will create the output files in the dist/health-tracker directory.

Deployment

Deploy to GitHub Pages

npm install -g angular-cli-ghpages ng deploy --base-href="/Health-tracker/"

Deploy to Vercel

npm install -g vercel vercel

Deploy to Netlify

npm install -g netlify-cli netlify deploy --prod --dir=dist/health-tracker

Running Tests

To run unit tests:

ng test

To generate a coverage report:

ng test --code-coverage

Folder Structure Health-tracker/ ├── src/ │ ├── app/ │ │ ├── components/ # Angular Components │ │ ├── services/ # API / Local Storage Services │ │ ├── models/ # Data Models │ │ ├── pages/ # Application Pages │ │ ├── app.module.ts # Main App Module │ │ ├── app.component.ts # Root Component │ ├── assets/ # Static Assets │ ├── styles/ # Global Styles ├── dist/ # Production Build Output ├── package.json # Project Dependencies ├── angular.json # Angular Configuration └── README.md # Project Documentation

For any queries, reach out at manishrajput6137m@gmail.com or open an issue in the repository.

🚀 Developed by Manish Kumar
