📜 Random Quote Generator

A simple and modern Random Quote Generator built using HTML, CSS, and JavaScript. This project fetches random quotes from a free public API and displays them dynamically on the page without reloading. It features a clean UI with gradient backgrounds, custom fonts, and a stylish button. The website is deployed using GitHub Pages.

🚀 Features

Fetches random quotes from a public API

Uses fetch with async/await for API handling

Displays quote and author dynamically

Clean and modern UI with gradients and custom fonts

Responsive design (works on mobile & desktop)

Error handling for failed API requests

One-click button to generate a new quote

🛠️ Technologies Used

HTML – Structure of the website

CSS – Styling, layout, gradients, and button design

JavaScript – API calls, DOM manipulation, logic

Public Quote API – For fetching random quotes

GitHub Pages – For free hosting and deployment

📂 Project Structure
quote-generator/
│── index.html
│── style.css
│── app.js
└── README.md

⚙️ How It Works

The page loads and selects DOM elements using JavaScript.

When the user clicks the button, a function is triggered.

The function sends a request to a public quote API using fetch.

The response is converted to JSON using await response.json().

The quote and author are extracted from the data.

The UI is updated dynamically without reloading the page.

If an error occurs, a fallback message is shown.
