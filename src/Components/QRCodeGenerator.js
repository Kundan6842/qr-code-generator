import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';


const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');

  const generateRandomUrl = () => {
    const randomUrls = [
      'https://www.technoinfra.in/',
      
    ];
    const randomIndex = Math.floor(Math.random() * randomUrls.length);
    setUrl(randomUrls[randomIndex]);
  };

  const downloadQRCode = () => {
    const qrCodeContainer = document.getElementById('qrcode-container');

    toPng(qrCodeContainer)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qrcode.png';
        link.click();
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };

  return (
    <div>
    <button onClick={generateRandomUrl}>Generate Random URL</button>
    <div id="qrcode-container">
      {url && <QRCode value={url} size={450} />}
    </div>
    {url && (
      <button onClick={downloadQRCode}>Download QR Code</button>
    )}
  </div>
  );
};

export default QRCodeGenerator;
