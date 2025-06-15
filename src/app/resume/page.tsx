"use client"
import { useEffect, useState } from 'react';

const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const pdfPath = '/content/Resume.pdf';
    setPdfUrl(pdfPath);
  }, []);

  return (
    <div className='flex items-center justify-center'>
      {pdfUrl && (
        <object data={pdfUrl} type="application/pdf" width="100%" height="800px">
          <p>This browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>.</p>
        </object>
      )}
    </div>
  );
}

export default Resume;
