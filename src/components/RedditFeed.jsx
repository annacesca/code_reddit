import { useState } from 'react'
import PostCard from './PostCard'
import '../styles/RedditFeed.css'

function RedditFeed({ posts, codeFormat, subreddit }) {
  const [expandedPost, setExpandedPost] = useState(null)

  const toggleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId)
  }

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h2>r/{subreddit}</h2>
        <p>{posts.length} posts loaded</p>
      </div>

      <div className="posts-grid">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            codeFormat={codeFormat}
            isExpanded={expandedPost === post.id}
            onToggleExpand={() => toggleExpand(post.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default RedditFeed