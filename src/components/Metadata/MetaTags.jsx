// MetaTags.jsx: provider/server module @components directory

import React from 'react';
import Helmet from 'react-helmet';
import { func, shape, string, object, array } from 'prop-types';

const getDefault = {
    title: "Your Website", 
    description: "Your Website w/o Metadata",
    keywords: "Your Website, Metadata, React-Helmet",
    robots: "",
    canonicalUrl: "http://your-website.com"
};

export const getPageMetadata = metaData => {
    
    const { title, description, keywords, robots, canonicalUrl } = metaData;
    const defaultData = getDefault;
    
    return {
        title: title || defaultData.title,
        description: description || defaultData.description,
        keywords: keywords || defaultData.keywords,
        robots: canonicalUrl || defaultData.canonicalUrl,
        canonicalUrl: canonicalUrl || defaultData.canonicalUrl
    }
}

// const MetaTags = props => {
class MetaTags extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { metaData } = this.props;
        const meta = getPageMetadata(metaData);
        
        return (
            <div>
            <h2>Understanding Metadata with React Helmet NPM</h2>
            <p>title: {meta.title}</p>
            <p>description: {meta.description}</p>
            <p>keywords: {meta.keywords}</p>
            <p>robots: {meta.robots}</p>
            <p>cannonicalUrl: {meta.canonicalUrl}</p>

            <Helmet>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                {meta.robots && <meta name="robots" content={meta.robots} />}
                <link rel="canonical" href={meta.canonicalUrl} />
            </Helmet>
            </div>
        )
    }
};

export default MetaTags;

// eof

