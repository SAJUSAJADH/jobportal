'use client';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({selectedFile, setSelectedFile}) => {
  
  const [fileData, setFileData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setFileData(new Uint8Array(reader.result));
    };
    reader.readAsArrayBuffer(file);
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <input type="file" onChange={onFileChange} accept=".pdf" />
      {fileData && (
        <div>
          <Document
            file={{ data: fileData }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
