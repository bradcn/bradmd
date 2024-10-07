import React from 'react';
import ReactMarkdown from 'react-markdown';
import { mdx } from './mdx'; // Import your custom components

const MarkdownRenderer = ({ markdownContent }: { markdownContent: string }) => {
  return (
    <div className='mx-10 py-4 w-1/2 mx-auto'>
    <div className='prose'>
    <ReactMarkdown>
      {markdownContent}
    </ReactMarkdown>
      </div>
      </div>
  );
};

export default MarkdownRenderer;