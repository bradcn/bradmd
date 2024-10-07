// DynamicMarkdownPage.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchmdfiles } from './fetchmdfiles'; 
import { markdownToHTML as mdrender } from './mdtohtml'; 
import MarkdownRenderer from './mdrender';
import { useMetaData } from './metadata'; 
import { bradmdConfig } from '../../bradmd.config'; // Import your config

const DynamicMarkdownPage = () => {
    const { page } = useParams();
    const [markdownContent, setMarkdownContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
                const markdown = await fetchmdfiles(page || 'home' || 'index' || bradmdConfig.mainPage );

                const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
                const match = markdown.match(frontMatterRegex);

                if (match) {
                    const frontMatter = match[1];
                    const frontMatterLines = frontMatter.split('\n');
                    
                    frontMatterLines.forEach(line => {
                        const [key, value] = line.split(':').map(item => item.trim());
                        if (key === 'title') setTitle(value);
                        if (key === 'description') setDescription(value);
                    });

                    const contentWithoutFrontMatter = markdown.replace(frontMatterRegex, '').trim();
                    setMarkdownContent(contentWithoutFrontMatter);
                } else {
                    setMarkdownContent(markdown);
                }

                setError(false);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadMarkdown();
    }, [page]);

    useMetaData({
        title: title || bradmdConfig.defaultTitle || "Bradmd Site",
        description: description || bradmdConfig.defaultDescription || `This Site Was Made using Bradmd Site Generator`,
        faviconUrl: bradmdConfig.siteLogoUrl, // Use favicon URL from config
        ogTitle: title || bradmdConfig.siteName, // Use title or siteName for OG title
        ogDescription: description || bradmdConfig.siteDescription, // Use description or siteDescription for OG description
        ogImage: bradmdConfig.ogImg // Use siteLogo as OG image
    });

    if (loading) {
        return <div className='w-1/2 mx-auto font-bold px-6 py-6 text-3xl'>Loading...</div>;
    }

    if (error) {
        return <div>404: Page Not Found</div>;
    }

    return (
        <MarkdownRenderer markdownContent={markdownContent} />
    );
};

export default DynamicMarkdownPage;