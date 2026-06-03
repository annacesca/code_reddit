import { useState } from 'react'
import { formatPostAsCode } from '../utils/codeFormatters'
import '../styles/PostCard.css'

function PostCard({ post, codeFormat, isExpanded, onToggleExpand }) {
  const [copied, setCopied] = useState(false)

  const codeContent = formatPostAsCode(post, codeFormat)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openReddit = () => {
    window.open(`https://reddit.com${post.permalink}`, '_blank')
  }

  return (
    <div className={`post-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="post-header">
        <div className="post-info">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-meta">
            <span className="author">u/{post.author}</span>
            <span className="separator">•</span>
            <span className="subreddit">r/{post.subreddit}</span>
            <span className="separator">•</span>
            <span className="score">⬆ {post.score.toLocaleString()}</span>
          </p>
        </div>
      </div>

      {isExpanded && (
        <div className="post-code-container">
          <pre className="code-block">
            <code>{codeContent}</code>
          </pre>
        </div>
      )}

      <div className="post-footer">
        <button className="action-btn expand-btn" onClick={onToggleExpand}>
          {isExpanded ? '▼ Hide Code' : '▶ Show Code'}
        </button>
        {isExpanded && (
          <>
            <button className="action-btn copy-btn" onClick={copyToClipboard}>
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
            <button className="action-btn reddit-btn" onClick={openReddit}>
              🔗 Open on Reddit
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default PostCard