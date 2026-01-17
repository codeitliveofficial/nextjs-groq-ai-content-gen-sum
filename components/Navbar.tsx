"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <div className="text-xl font-bold">AI Content Generator</div>
      <div className="flex gap-4">
        <Link href="/" className={currentPath === "/" ? "text-blue-500" : ""}>
          Blog_Generator
        </Link>
        <Link
          href="/content-summarizer"
          className={
            currentPath === "/content-summarizer" ? "text-blue-500" : ""
          }
        >
          Content_Summarizer
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
