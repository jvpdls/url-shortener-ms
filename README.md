URL Shortener Microservice
==========================

This is a simple URL shortener microservice built with Node.js, utilizing the [Simple CSS](https://simplecss.org/) library for styling its documentation. The microservice allows users to shorten long URLs and retrieve the original URLs using a shortened URL ID.

All the URLs are being stored through a [Supabase Postgres database](https://supabase.com/).

Table of Contents
-----------------
*   [Live preview](#live-preview)
*   [Requirements](#requirements)
*   [Database schema](#database-schema)
*   [Installation](#installation)
*   [Usage](#usage)
*   [API Documentation](#api-documentation)
*   [Contributing](#contributing)

Live preview
------------

A deployed version of this project can be found [here](https://url-shortener-ms.vercel.app/).

Requirements
------------

- [Node.js](https://nodejs.org/)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Supabase](https://supabase.com/)

Database schema
---------------

**Table: shortlinks**

| Field         | Type     | Constraints      |
|---------------|----------|------------------|
| id            | integer  | primary key      |
| original_url  | varchar  |                  |

Installation
------------

To run this project locally, follow these steps:

1.  **Clone the repository:**
    
        > git clone https://github.com/jvpdls/url-shortener-ms.git
        > cd url-shortener-ms
    
2.  **Install dependencies:**
    
        > npm i

3.  Set up a **Supabase project** and create the **shortlinks** table

4.  Rename **.env.example** to **.env** and set its variables
    
5.  **Start the server:**
    
        > vercel dev
    
Usage
-----

You can either acess the [microservice live](https://url-shortener-ms.vercel.app/) or run it locally, which will be available at http://localhost:3000/.

Interact with the API using an HTTP client like Postman or Curl (for POST requests), or through the browser (GET requests). You can shorten URLs and retrieve the original URLs by following the API documentation below.

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
        "shortUrl": "http://localhost:3000/1234"
    }

### GET /api/:id

This endpoint retrieves the original URL associated with a shortened URL ID and redirects to it.

#### Path Parameters:

*   **id** (required) - The unique ID of the shortened URL.

#### Example Request:

    > GET http://localhost:3000/api/get/1234

#### Response:

**302 Found**  
Redirects the client to the original URL.

Contributing
------------

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.
