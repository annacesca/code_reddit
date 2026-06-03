import { useState, useEffect } from 'react'
import axios from 'axios'
import RedditFeed from './components/RedditFeed'
import './App.css'

function App() {
  const [subreddit, setSubreddit] = useState('todayilearned')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [codeFormat, setCodeFormat] = useState('html')

  const fetchRedditPosts = async (subredditName) => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get(
        `https://www.reddit.com/r/${subredditName}/hot.json?limit=25`,
        {
          headers: {
            'User-Agent': 'CodeReddit/1.0 (by annacesca)'
          }
        }
      )
      const data = response.data.data.children.map(child => child.data)
      setPosts(data)
    } catch (err) {
      setError(`Failed to fetch from r/${subredditName}. Please check the subreddit name.`)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRedditPosts(subreddit)
  }, [])

  const handleSubredditChange = (e) => {
    e.preventDefault()
    const newSubreddit = e.target.subreddit.value.trim()
    if (newSubreddit) {
      setSubreddit(newSubreddit)
      fetchRedditPosts(newSubreddit)
    }
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1>🔗 Reddit Code Display</h1>
          <p>View Reddit posts as formatted code</p>
        </div>
      </header>

      <main className="main-content">
        <div className="controls">
          <form onSubmit={handleSubredditChange} className="search-form">
            <input
              type="text"
              name="subreddit"
              placeholder="Enter subreddit name (e.g., todayilearned)"
              defaultValue={subreddit}
              className="subreddit-input"
            />
            <button type="submit" className="search-btn">Search</button>
          </form>

          <div className="format-buttons">
            <label>Code Format:</label>
            <div className="button-group">
              {['html', 'java', 'csharp', 'dotnet'].map(format => (
                <button
                  key={format}
                  className={`format-btn ${codeFormat === format ? 'active' : ''}`}
                  onClick={() => setCodeFormat(format)}
                >
                  {format === 'csharp' ? 'C#' : format === 'dotnet' ? '.NET' : format.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading">Loading posts from r/{subreddit}...</div>}

        {!loading && posts.length > 0 && (
          <RedditFeed posts={posts} codeFormat={codeFormat} subreddit={subreddit} />
        )}
      </main>
    </div>
  )
}

export default App