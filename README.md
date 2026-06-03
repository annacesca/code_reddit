# Reddit Code Display

A responsive web application that displays Reddit posts as formatted code. Convert Reddit content to HTML, Java, C#, or .NET syntax and view it in a beautiful, modern interface.

## Features

✨ **Code Display Formats**
- HTML
- Java
- C#
- .NET

📱 **Fully Responsive**
- Works on desktop, tablet, and mobile
- Optimized layouts for all screen sizes

🚀 **Easy to Use**
- Search any subreddit
- Click to expand post code
- Copy code to clipboard
- Open original Reddit post

## Live Demo

Visit: `https://annacesca.github.io/code_reddit/`

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with Grid & Flexbox
- **API**: Reddit API (unauthenticated)
- **Deployment**: GitHub Pages

## Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/annacesca/code_reddit.git
cd code_reddit
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open in browser: `http://localhost:5173/code_reddit/`

## Build & Deploy

### Build for production:
```bash
npm run build
```

### Deploy to GitHub Pages:
```bash
npm run deploy
```

## WordPress Integration

### Option 1: Embed as iframe
```html
<iframe 
  src="https://annacesca.github.io/code_reddit/" 
  width="100%" 
  height="800px" 
  style="border: none; border-radius: 8px;"
>
</iframe>
```

### Option 2: Link to standalone
Add a button or link in your WordPress site:
```html
<a href="https://annacesca.github.io/code_reddit/" target="_blank">
  View Reddit Code Display
</a>
```

## Usage

1. **Search Subreddit**: Enter a subreddit name (without r/)
2. **View Posts**: Scroll through hot posts from that subreddit
3. **Select Format**: Choose HTML, Java, C#, or .NET
4. **Expand Post**: Click "Show Code" to see formatted code
5. **Copy Code**: Click "Copy" to copy to clipboard
6. **Open Reddit**: Click "Open on Reddit" to view original post

## Project Structure

```
code_reddit/
├── src/
│   ├── components/
│   │   ├── RedditFeed.jsx
│   │   └── PostCard.jsx
│   ├── styles/
│   │   ├── PostCard.css
│   │   └── RedditFeed.css
│   ├── utils/
│   │   └── codeFormatters.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Code Formatter Details

### HTML Format
Generates semantic HTML with proper structure

### Java Format
Creates a Java class with properties and getters

### C# Format
Uses C# properties and auto-properties

### .NET Format
Uses .NET record types with modern syntax

## Performance

- **Fast Loading**: Vite's instant HMR
- **Optimized Build**: Minified and optimized for production
- **Lazy Loading**: Posts load on demand
- **Client-side API**: No backend required

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## API Information

This app uses the official Reddit API (unauthenticated access):
- Endpoint: `https://www.reddit.com/r/{subreddit}/hot.json`
- Rate Limit: 60 requests per minute (IP-based)
- No authentication required

## License

MIT

## Author

Anna Cesca - [@annacesca](https://github.com/annacesca)