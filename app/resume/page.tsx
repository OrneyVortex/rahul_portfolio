<<<<<<< HEAD
'use client';
=======
'use client'
>>>>>>> 623c572380647e26c9c4571c77ad9a07f5c51a53

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

// Use a stable CDN link for the pdf.worker.min.js
const pdfWorkerUrl = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'; // Ensure this matches the pdfjs-dist version

const ResumeViewer = () => {
    const pdfUrl = 'https://raw.githubusercontent.com/OrneyVortex/rahul_portfolio/6a40eb1a334d9944325f83a087c154d9cac775b2/public/RahulSharmaResume.pdf';

    const handleDownload = () => {
        window.open(pdfUrl, '_blank');
    };

    // Stylish button with dropped shadow
    const buttonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'background-color 0.3s, box-shadow 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>My Resume</h1>
            <div style={{ margin: '20px auto', width: '600px', height: '800px', border: '1px solid #ccc' }}>
                <Worker workerUrl={pdfWorkerUrl}>
                    <Viewer fileUrl={pdfUrl} />
                </Worker>
            </div>
            <button
                onClick={handleDownload}
                style={buttonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            >
                Download Resume
            </button>
        </div>
    );
};

export default ResumeViewer;
