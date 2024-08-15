URL Shortener Microservice
==========================

This is a simple URL shortener microservice built with Node.js, utilizing the [Simple CSS](https://simplecss.org/) library for styling its documentation. The microservice allows users to shorten long URLs and retrieve the original URLs using a shortened URL ID.

Table of Contents
-----------------

*   [Live Preview](#live-preview) 
*   [Installation](#installation)
*   [Usage](#usage)
*   [API Documentation](#api-documentation)
*   [Contributing](#contributing)

Published project
------------

See this project live [here](https://url-shortener-ms.vercel.app/).

Installation
------------

To run this project locally, follow these steps:

1.  **Clone the repository:**
    
        > git clone https://github.com/yourusername/url-shortener-microservice.git
        > cd url-shortener-microservice
    
2.  **Install dependencies:**
    
        > npm i

3.  Install **Vercel CLI** following the instructions [here](https://vercel.com/docs/cli)

4.  Rename **.env.example** to **.env**
    
4.  **Start the server:**
    
        > node index.js
    
Usage
-----

You can interact with the API using an HTTP client like Postman or Curl (for POST requests), or through the browser (GET requests). You can shorten URLs and retrieve the original URLs by following the API documentation below.

API Documentation
-----------------

### POST /api/shorten

This endpoint allows you to shorten a URL.

#### Parameters:

*   **originUrl** (required) - The original URL that you want to shorten.

#### Example Request:

    POST /api/shorten
    Content-Type: application/json
    
    {
        "originUrl": "https://www.example.com"
    }

#### Response:

**201 Created**  
Returns a JSON object containing the shortened URL ID.

#### Example Response:

    {
        "id": "1234",
        "shortUrl": "http://example.com/1234"
    }

### GET /api/:id

This endpoint retrieves the original URL associated with a shortened URL ID and redirects to it.

#### Path Parameters:

*   **id** (required) - The unique ID of the shortened URL.

#### Example Request:

    > GET http://example.com/api/1234

#### Response:

**302 Found**  
Redirects the client to the original URL.

Contributing
------------

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.