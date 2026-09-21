import { ReactElement } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CustomMDX } from "~/components/CustomMDX";
import { getAllContentSlugs, getContentData } from "~/utils/mdx";

export function generateStaticParams(): { slug: string }[] {
  return getAllContentSlugs().map((slug) => ({ slug: slug.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<{
  title?: string;
  description?: string;
}> {
  const { slug } = await params;
  const post = getContentData(slug);
  if (!post) return {};
  return {
    title: typeof post.title === "string" ? post.title : undefined,
    description:
      typeof post.description === "string" ? post.description : undefined,
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<ReactElement> {
  const { slug } = await params;
  const post = getContentData(slug);

  if (!post) {
    notFound();
  }

  const title = typeof post.title === "string" ? post.title : "Note";

  return (
    <article className="relative mx-auto mt-28 flex w-full max-w-3xl flex-col px-6 pb-24 text-white">
      <Link
        href="/"
        className="mb-8 w-fit text-sm text-secondary-100 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      >
        Home
      </Link>
      <h1 className="mb-8 text-balance font-heading text-4xl font-bold text-primary-500 sm:text-5xl">
        {title}
      </h1>
      <CustomMDX source={post.content} />
    </article>
  );
}
