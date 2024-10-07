// utils/markdownToHTML.ts
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHTML(markdown: string) {
  const p = await unified().use(remarkParse).use(remarkRehype)
    .use(rehypePrettyCode, {
      // Configure themes and options for syntax highlighting
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}