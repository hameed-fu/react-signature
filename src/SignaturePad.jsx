import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
 

const SignaturePad = () => {
  const sigCanvas = useRef(null);

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const saveSignature = () => {
    const dataURL = sigCanvas.current.toDataURL(); // Get the signature as a Base64 URL
    console.log(dataURL);
    alert('Signature saved! Check the console for the Base64 URL.');
  };

  return (
    <div className="signature-container">
      <h2>Signature Pad</h2>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 500,
          height: 200,
          className: 'signature-canvas',
        }}
      />
      <div className="button-group">
        <button onClick={clearSignature}>Clear</button>
        <button onClick={saveSignature}>Save</button>
      </div>
    </div>
  );
};

export default SignaturePad;
