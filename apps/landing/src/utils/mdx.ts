import fs from "fs";
import path from "path";
import matter from "gray-matter";
export const getAllContentSlugs = () => {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "src/contents"));
  return fileNames.map((fileName) => {
    return fileName.replace(/\.mdx$/, "");
  });
};

export const getContentData = (slug: string) => {
  const fullPath = path.join(
    path.join(process.cwd(), "src/contents"),
    `${slug}.mdx`
  );
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title,
    description: data.description,
  };
};
