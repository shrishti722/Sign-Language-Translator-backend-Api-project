# Sign Language Translation Tool API

## Overview

This API allows users to submit text input in English and receive a simple response indicating successful translation. The translation process is simulated for demonstration purposes and does not integrate with external services or libraries.

## Base URL

```
http://localhost:5000
```
## Initialization Commands

To start the backend server, use the following command: node server.js

To start the frontend application, use the following command: npm run dev


## Endpoints

### 1. Translate Text

- **Endpoint:** `/translate`
- **Method:** `POST`
- **Content-Type:** `application/json`

#### Request

**Example Request Body:**
```json
{
  "text": "Hello, how are you?"
}
```

**Request Parameters:**
- `text` (string, required): The text input in English that needs to be translated.

#### Response

**Success Response:**
- **Status Code:** `200 OK`
- **Content:**
```json
{
  "message": "Translation successful",
  "translatedText": "Simulated translation of 'Hello, how are you?'"
}
```

**Error Response:**
- **Status Code:** `400 Bad Request`
- **Content:**
```json
{
  "error": "Text input is required."
}
```

#### Error Handling

- If the request body is missing the `text` parameter, the API will return a `400 Bad Request` status code with an error message.

## Example cURL Request

To test the API endpoint, you can use the following cURL command:

```bash
curl -X POST http://localhost:5000/translate \
-H "Content-Type: application/json" \
-d '{"text": "Hello, how are you?"}'
```

## Notes

- The translation process is currently simulated, and the API does not perform actual translations. The response contains a placeholder message indicating successful translation.

## Conclusion

This API provides a foundational service for a sign language translation tool. Future enhancements could include integrating real translation logic and expanding the API to handle additional features.
