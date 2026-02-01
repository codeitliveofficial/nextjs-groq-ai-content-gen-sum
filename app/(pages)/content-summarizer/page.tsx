"use client";

import { useCompletion } from "@ai-sdk/react";
import rehypeSanitize from "rehype-sanitize";
import MarkdownPreview from "@uiw/react-markdown-preview";

const Page = () => {
  const {
    input,
    handleInputChange,
    complete,
    completion,
    setCompletion,
    isLoading,
  } = useCompletion({
    api: "api/content-summarizer",
  });

  const handleContentSumarize = async () => {
    await complete(input);
  };

  return (
    <div className="flex flex-col h-screen max-h-[calc(100vh-64px)] bg-black text-white">
      <h1 className="text-xl font-bold text-center p-4">Content Summarizer</h1>

      <div className="flex flex-1 min-h-0 p-4 gap-4">
        {/* LEFT: Input Section */}
        <div className="w-1/2 bg-gray-800 rounded-lg p-4 flex flex-col gap-4">
          <p className="text-lg">Enter Content to Summarize</p>
          <textarea
            value={input}
            onChange={handleInputChange}
            className="border-2 border-gray-600 bg-gray-900 rounded-lg p-2 text-lg grow outline-none focus:border-blue-500"
            placeholder="Enter your topic"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg w-1/4 transition"
            onClick={handleContentSumarize}
            disabled={isLoading}
          >
            Summarize
          </button>
        </div>

        {/* RIGHT: Output Section */}
        <div className="w-1/2 bg-gray-800 rounded-lg p-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-lg">Generated Summary</p>
            <div className="flex gap-2">
              <button
                className="hover:scale-110 transition bg-green-500 text-white px-2 py-1 rounded-xs"
                onClick={() => {
                  navigator.clipboard.writeText(completion);
                  alert("Copied to clipboard");
                }}
              >
                Copy
              </button>
              <button
                className="hover:scale-110 transition bg-red-500 text-white px-2 py-1 rounded-xs"
                onClick={() => {
                  handleInputChange({ target: { value: "" } } as any);
                  setCompletion("");
                }}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="border border-gray-500 bg-gray-900 rounded-lg p-4 text-lg flex-1 min-h-0 overflow-hidden flex flex-col">
            <div className="overflow-y-auto flex-1 pr-2">
              {completion ? (
                <MarkdownPreview
                  source={completion}
                  rehypePlugins={[rehypeSanitize]}
                />
              ) : isLoading ? (
                <p>Loading...</p>
              ) : (
                <p className="text-gray-500 italic text-center mt-10">
                  Content will appear here as it generates...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
