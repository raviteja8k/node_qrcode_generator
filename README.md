# QR Code Generator

This project is a simple QR code generator that takes a URL as input and generates a QR code image. The generated QR code is saved as a PNG file, and the URL is also appended to a text file for record-keeping.

## Features

- Prompts the user to enter a URL.
- Generates a QR code from the provided URL.
- Saves the QR code as a PNG file.
- Appends the URL to a `URL.txt` file.

## Requirements

- Node.js
- npm (Node package manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required packages:
   ```bash
   npm install inquirer qr-image fs
   ```

## Usage

1. Run the application:
   ```bash
   node index.js
   ```

2. When prompted, enter the URL you want to generate a QR code for.

3. The QR code will be saved as a PNG file named after the URL (with dots replaced by underscores), and the URL will be appended to `URL.txt`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.