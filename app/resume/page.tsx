'use client'
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

const Resume = () => {
    // Use the direct link format
    const pdfUrl = 'https://raw.githubusercontent.com/OrneyVortex/rahul_portfolio/978a7c6fee8338bf9387011e5b7d1bc5441efd26/public/Rahul%20Sharma's%20Resume.pdf';

    const handleDownload = () => {
        window.open('https://raw.githubusercontent.com/OrneyVortex/rahul_portfolio/978a7c6fee8338bf9387011e5b7d1bc5441efd26/public/Rahul%20Sharma's%20Resume.pdf', '_blank');
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>My Resume</h1>
            <div style={{ margin: '20px auto', width: '600px', height: '800px', border: '1px solid #ccc' }}>
                <Worker workerUrl={pdfjsWorker}>
                    <Viewer fileUrl={pdfUrl} />
                </Worker>
            </div>
            <button onClick={handleDownload} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
                Download Resume
            </button>
        </div>
    );
};

export default Resume;
