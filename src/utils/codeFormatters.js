export function formatPostAsCode(post, format) {
  const title = post.title || 'No Title'
  const subreddit = post.subreddit || 'unknown'
  const author = post.author || '[deleted]'
  const score = post.score || 0
  const comments = post.num_comments || 0
  const selftext = post.selftext || 'No content'
  const url = post.url || ''
  const isVideo = post.is_video || false

  switch (format) {
    case 'html':
      return formatAsHTML(subreddit, title, selftext, author, score, comments, url, isVideo)
    case 'java':
      return formatAsJava(subreddit, title, selftext, author, score, comments, url, isVideo)
    case 'csharp':
      return formatAsCSharp(subreddit, title, selftext, author, score, comments, url, isVideo)
    case 'dotnet':
      return formatAsDotNet(subreddit, title, selftext, author, score, comments, url, isVideo)
    default:
      return formatAsHTML(subreddit, title, selftext, author, score, comments, url, isVideo)
  }
}

function formatAsHTML(subreddit, title, content, author, score, comments, url, isVideo) {
  const limitedContent = content.length > 500 ? content.substring(0, 500) + '...' : content
  const link = !isVideo && url ? `\n<a href="${url}" target="_blank">View Full Post</a>` : ''

  return `<!-- Reddit Post from r/${subreddit} -->
<article class="reddit-post">
  <header>
    <h1>/r/${subreddit}</h1>
    <h2 class="post-title">${escapeHTML(title)}</h2>
    <div class="metadata">
      <span class="author">Author: ${author}</span>
      <span class="score">Score: ${score}</span>
      <span class="comments">Comments: ${comments}</span>
    </div>
  </header>

  <main>
    <div class="content">${escapeHTML(limitedContent)}</div>${link}
  </main>

  <footer>
    <time datetime="${new Date().toISOString()}">Just now</time>
  </footer>
</article>`
}

function formatAsJava(subreddit, title, content, author, score, comments, url, isVideo) {
  const limitedContent = content.length > 300 ? content.substring(0, 300) + '...' : content

  return `public class RedditPost {
    private String subreddit = "${subreddit}";
    private String title = "${escapeJava(title)}";
    private String author = "${author}";
    private int score = ${score};
    private int comments = ${comments};
    private String content = "${escapeJava(limitedContent)}";
    private boolean isVideo = ${isVideo};

    public RedditPost() {}

    public String getSubreddit() { return subreddit; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public int getScore() { return score; }
    public int getComments() { return comments; }
    public String getContent() { return content; }
    public boolean isVideo() { return isVideo; }

    @Override
    public String toString() {
        return "RedditPost{" +
                "subreddit='" + subreddit + '\'' +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", score=" + score +
                ", comments=" + comments +
                '}';
    }
}`
}

function formatAsCSharp(subreddit, title, content, author, score, comments, url, isVideo) {
  const limitedContent = content.length > 300 ? content.substring(0, 300) + '...' : content

  return `public class RedditPost
{
    public string Subreddit { get; set; } = "${subreddit}";
    public string Title { get; set; } = "${escapeCSharp(title)}";
    public string Author { get; set; } = "${author}";
    public int Score { get; set; } = ${score};
    public int Comments { get; set; } = ${comments};
    public string Content { get; set; } = "${escapeCSharp(limitedContent)}";
    public bool IsVideo { get; set; } = ${isVideo.toString()};

    public RedditPost() { }

    public override string ToString()
    {
        return $"RedditPost {{ " +
               $"Subreddit = {Subreddit}, " +
               $"Title = {Title}, " +
               $"Author = {Author}, " +
               $"Score = {Score}, " +
               $"Comments = {Comments} }}";
    }
}`
}

function formatAsDotNet(subreddit, title, content, author, score, comments, url, isVideo) {
  const limitedContent = content.length > 300 ? content.substring(0, 300) + '...' : content

  return `namespace RedditCodeDisplay.Models
{
    public record RedditPostModel(
        string Subreddit = "${subreddit}",
        string Title = "${escapeDotNet(title)}",
        string Author = "${author}",
        int Score = ${score},
        int Comments = ${comments},
        string Content = "${escapeDotNet(limitedContent)}",
        bool IsVideo = ${isVideo.toString()}
    )
    {
        public override string ToString()
        {
            return $"RedditPost from r/{Subreddit}: {Title}" +
                   $" by {Author} | Score: {Score}";
        }
    }
}`
}

function escapeHTML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeJava(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .substring(0, 100)
}

function escapeCSharp(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .substring(0, 100)
}

function escapeDotNet(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .substring(0, 100)
}