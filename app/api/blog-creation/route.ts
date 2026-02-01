import { groq } from "@ai-sdk/groq";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = streamText({
    model: groq("llama-3.1-8b-instant"),
    prompt,
    system:
      "You are a professional blog writer. Create high-quality, structured blog posts based on the user's topic / content provided.",
  });

  return result.toUIMessageStreamResponse();
}
