// src/components/FileUpload.jsx
import React from "react";

function FileUpload() {
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    // Add logic to upload the file to the server (backend handling needed)
    console.log("File uploaded:", uploadedFile.name);
  };

  return (
    <form>
      <input type="file" accept=".pdf" onChange={handleFileUpload} required />
      <button type="button">Upload PDF</button>
    </form>
  );
}

export default FileUpload;
