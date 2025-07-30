# Running the JMC Group Website Locally

This guide explains how to run the JMC Group website on your local machine for development or testing purposes.

## Simple Method (No Server Required)

The website is built with static HTML, CSS, and JavaScript, so it can be opened directly in a browser:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vaibhavgabani/jmc.git
   cd jmc
   ```

2. **Open in browser**:
   - Simply double-click on `index.html` to open it in your default browser
   - Or drag the `index.html` file into an open browser window

## Using a Local Development Server (Recommended)

For the best development experience, it's recommended to use a local development server:

### Using Python's built-in server

If you have Python installed:

1. Navigate to the project directory:
   ```bash
   cd /path/to/jmc
   ```

2. Start a simple HTTP server:
   - Python 3:
     ```bash
     python -m http.server 8000
     ```
   - Python 2:
     ```bash
     python -m SimpleHTTPServer 8000
     ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### Using Node.js with http-server

If you have Node.js installed:

1. Install http-server globally:
   ```bash
   npm install -g http-server
   ```

2. Navigate to the project directory:
   ```bash
   cd /path/to/jmc
   ```

3. Start the server:
   ```bash
   http-server -p 8000
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### Using VS Code Live Server Extension

If you're using Visual Studio Code:

1. Install the "Live Server" extension by Ritwick Dey
2. Open the project folder in VS Code
3. Right-click on `index.html` in the file explorer
4. Select "Open with Live Server"
5. The website will open automatically in your default browser

## Development Tips

- Use browser developer tools (F12) to inspect elements and debug
- Clear browser cache (Ctrl+F5) if changes aren't showing up
- Check the JavaScript console for any errors
- Test on different browsers and device sizes for responsive design testing
