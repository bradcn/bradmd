// metadata.tsx

import React from 'react';

interface MetaData {
    title: string;
    description: string;
    faviconUrl?: string; // Optional favicon URL
    ogTitle?: string;    // Open Graph title
    ogDescription?: string; // Open Graph description
    ogImage?: string;    // Open Graph image
}

export const useMetaData = ({ title, description, faviconUrl, ogTitle, ogDescription, ogImage }: MetaData) => {
    React.useEffect(() => {
        // Set the document title
        document.title = title;

        // Set the meta description
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // Set favicon if provided
        if (faviconUrl) {
            let favicon = document.querySelector("link[rel='icon']");
            if (favicon) {
                favicon.setAttribute("href", faviconUrl);
            } else {
                favicon = document.createElement("link");
                favicon.setAttribute("rel", "icon");
                favicon.setAttribute("href", faviconUrl);
                document.head.appendChild(favicon);
            }
        }

        // Set Open Graph metadata
        if (ogTitle) {
            let ogTitleMeta = document.querySelector("meta[property='og:title']");
            if (ogTitleMeta) {
                ogTitleMeta.setAttribute("content", ogTitle);
            } else {
                ogTitleMeta = document.createElement("meta");
                ogTitleMeta.setAttribute("property", "og:title");
                ogTitleMeta.setAttribute("content", ogTitle);
                document.head.appendChild(ogTitleMeta);
            }
        }

        if (ogDescription) {
            let ogDescriptionMeta = document.querySelector("meta[property='og:description']");
            if (ogDescriptionMeta) {
                ogDescriptionMeta.setAttribute("content", ogDescription);
            } else {
                ogDescriptionMeta = document.createElement("meta");
                ogDescriptionMeta.setAttribute("property", "og:description");
                ogDescriptionMeta.setAttribute("content", ogDescription);
                document.head.appendChild(ogDescriptionMeta);
            }
        }

        if (ogImage) {
            let ogImageMeta = document.querySelector("meta[property='og:image']");
            if (ogImageMeta) {
                ogImageMeta.setAttribute("content", ogImage);
            } else {
                ogImageMeta = document.createElement("meta");
                ogImageMeta.setAttribute("property", "og:image");
                ogImageMeta.setAttribute("content", ogImage);
                document.head.appendChild(ogImageMeta);
            }
        }
    }, [title, description, faviconUrl, ogTitle, ogDescription, ogImage]);
};