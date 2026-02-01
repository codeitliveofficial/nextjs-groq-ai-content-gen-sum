# AI Content Generation & Summarizer App

A Next.js application with AI-powered content generation and summarization capabilities using Groq's models.

## Features

- **Blog Content Generator**: Generate structured blog posts from topics/notes
- **Content Summarizer**: Create concise summaries of existing content
- **Real-time Streaming**: See content generate in real-time
- **Markdown Preview**: Rendered output with syntax highlighting
- **Copy & Reset**: Easy content management actions

## Tech Stack

- **Framework**: Next.js 16.1.3
- **Language**: TypeScript
- **AI SDK**: Vercel AI SDK with Groq integration
- **Model**: Groq Llama model (You can update as per requirement)
- **Styling**: TailwindCSS v4
- **Markdown**: @uiw/react-markdown-preview with rehype-sanitize

## Project Structure

```
app/
├── (pages)/
│   └── content-summarizer/     # Content summarizer page
├── api/
│   ├── blog-creation/          # Blog generation API endpoint
│   └── content-summarizer/     # Summarization API endpoint
├── layout.tsx                  # Root layout with navbar
└── page.tsx                    # Blog generator homepage
components/
└── Navbar.tsx                  # Navigation component
```

## Setup

1. Clone the repository:

```bash
git clone https://github.com/codeitliveofficial/nextjs-groq-ai-content-gen-sum
cd nextjs-groq-ai-content-gen-sum
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Create .env.local file
GROQ_API_KEY=your_groq_api_key_here
```

4. Run development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## API Endpoints

### POST /api/blog-creation

Generates blog content based on provided topic/notes.

**Request:**

```json
{
  "prompt": "your blog topic or notes"
}
```

### POST /api/content-summarizer

Creates summaries of provided content.

**Request:**

```json
{
  "prompt": "content to summarize"
}
```

## Usage

1. **Blog Generator**: Enter topics/notes and click "Generate" to create blog posts
2. **Content Summarizer**: Paste content and click "Summarize" for concise summaries
3. Use "Copy" to copy generated content to clipboard
4. Use "Reset" to clear input and output fields

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dependencies

Key dependencies:

- `@ai-sdk/groq` - Groq AI provider
- `@ai-sdk/react` - React hooks for AI
- `ai` - Vercel AI SDK
- `@uiw/react-markdown-preview` - Markdown rendering
- `tailwindcss` - CSS framework


## 📺 YouTube Tutorial

This repository is part of a YouTube tutorial series where we build this AI content generator and summarizer from scratch.

**🔗 Watch the full tutorial:** [Your YouTube Video Link Here]

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Leave a comment on the YouTube video
- Reach out on social media

---

**⭐ If you find this project helpful, please give it a star on GitHub!**
