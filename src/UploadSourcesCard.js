import React, { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

function UploadSourcesCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpload = () => {
    alert('Upload functionality coming soon!');
  };

  return (
    <div>
      {/* Upload Button to Trigger Modal */}
      <Button onClick={openModal} variant="outlined"
                  fullWidth
                  startIcon={<CloudUpload />}
                >
                  Add Source
      </Button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="modal-overlay" style={overlayStyle}>
          {/* Modal Container */}
          <div className="modal-container" style={containerStyle}>
            {/* Close Button */}
            <button className="close-button" onClick={closeModal} style={closeButtonStyle}>&times;</button>
            {/* Header */}
            <div className="modal-header" style={headerStyle}>Add Sources</div>
            {/* Instructions */}
            <div className="modal-instructions" style={instructionsStyle}>
              Sources let NotebookLM base its responses on the information that matters most to you. (Examples: marketing plans, course reading, research notes, meeting transcripts, sales documents, etc.)
            </div>
            {/* Upload Area */}
            <div className="upload-area" onClick={handleUpload} style={uploadAreaStyle}>
              <div className="upload-area-text" style={uploadTextStyle}>
                Upload Sources<br />
                Drag & drop or <span style={{ color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}>choose file</span> to upload
              </div>
            </div>
            {/* Supported Types */}
            <div className="supported-types" style={supportedTypesStyle}>
              Supported file types: PDF, .txt, Markdown, Audio (e.g., mp3)
            </div>
            {/* Source Buttons */}
            <div className="source-buttons" style={sourceButtonsStyle}>
              <button className="source-button" style={sourceButtonStyle}>Google Drive</button>
              <button className="source-button" style={sourceButtonStyle}>Google Docs</button>
              <button className="source-button" style={sourceButtonStyle}>Google Slides</button>
              <button className="source-button" style={sourceButtonStyle}>Website</button>
              <button className="source-button" style={sourceButtonStyle}>YouTube</button>
              <button className="source-button" style={sourceButtonStyle}>Copied Text</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Styles
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(94, 124, 152, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const containerStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  maxWidth: '600px',
  width: '90%',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  position: 'relative',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  color: '#888',
};

const headerStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const instructionsStyle = {
  fontSize: '14px',
  color: '#555',
  marginBottom: '20px',
};

const uploadAreaStyle = {
  border: '2px dashed #ccc',
  borderRadius: '8px',
  padding: '30px',
  backgroundColor: '#f9f9f9',
  marginBottom: '20px',
  cursor: 'pointer',
};

const uploadTextStyle = {
  color: '#666',
  fontSize: '16px',
};

const supportedTypesStyle = {
  fontSize: '12px',
  color: '#888',
  marginBottom: '20px',
};

const sourceButtonsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'center',
};

const sourceButtonStyle = {
  backgroundColor: '#eef3fc',
  color: '#007bff',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '14px',
  cursor: 'pointer',
};

export default UploadSourcesCard;
