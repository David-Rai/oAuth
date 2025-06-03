import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react';

const ReadmeReader = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch("http://localhost:5173/readme.md")
            .then((res) => res.text())
            .then((text) => setContent(text));

    }, []);

    useEffect(() => {
        console.log(content)
    }, [content])


    return (
        <div>

            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}

export default ReadmeReader