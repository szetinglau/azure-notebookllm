import React, { useState } from 'react';
import UploadSourcesCard from './UploadSourcesCard';
import { Box, Grid, Paper, Typography, Button, IconButton, Divider, TextField } from '@mui/material';
import { CloudUpload, Share, Settings, Menu } from '@mui/icons-material';

function NotebookLM() {
  const [notebookTitle, setNotebookTitle] = useState('Untitled Notebook');
  const [isSourcesExpanded, setIsSourcesExpanded] = useState(true);
  const [isStudioExpanded, setIsStudioExpanded] = useState(true);

  const handleAddSource = () => {
    console.log('Add Source button clicked!');
    alert('Add Source button clicked!');
  };

  const handleUploadSource = () => {
    console.log('Upload a source button clicked!');
    alert('Upload a source button clicked!');
  };

  const toggleSourcesPanel = () => {
    console.log('Toggling Sources panel');
    setIsSourcesExpanded(!isSourcesExpanded);
  };

  const toggleStudioPanel = () => {
    console.log('Toggling Studio panel');
    setIsStudioExpanded(!isStudioExpanded);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: '#f9f9f9', height: '100vh' }}>
      {/* Top Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.jpg" // Replace with your logo path
            alt="Logo"
            style={{ width: 32, height: 32, marginRight: 8 }}
          />
          <TextField
            value={notebookTitle}
            onChange={(e) => setNotebookTitle(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ maxWidth: 400, fontSize: '1.5rem' }}
            InputProps={{ style: { fontSize: '1.5rem' } }}
          />
        </Box>
        <Box>
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </Box>
      </Box>

      {/* Grid Layout */}
      <Grid container spacing={2} sx={{ height: 'calc(100% - 64px)' }}>
        {/* Sources Section */}
        <Grid item xs={isSourcesExpanded ? 3 : 0.5} sx={{ height: '100%' }}>
        <Paper
          sx={{
            padding: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Align top
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {isSourcesExpanded && <Typography variant="subtitle1">Sources</Typography>}
            <IconButton onClick={toggleSourcesPanel}>
              <Menu />
            </IconButton>
          </Box>

          {/* Expandable content, only visible when expanded */}
          <Box sx={{ display: isSourcesExpanded ? 'block' : 'none', flexGrow: 1 }}>
            {isSourcesExpanded && (
              <>
                <Divider sx={{ marginBottom: 2 }} />
                <UploadSourcesCard />
              </>
            )}
          </Box>
        </Paper>
      </Grid>


        {/* Chat Section */}
        <Grid item xs={isSourcesExpanded && isStudioExpanded ? 6 : isSourcesExpanded || isStudioExpanded ? 6 : 11} sx={{ height: '100%' }}>
          <Paper sx={{ padding: 2, height: '100%' }}>
            <Typography variant="subtitle1" gutterBottom>
              Chat
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Button
                variant="contained"
                startIcon={<CloudUpload />}
                onClick={handleUploadSource}
              >
                Upload a source
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Studio Section */}
        <Grid item xs={isStudioExpanded ? 3 : 0.5} sx={{ height: '100%' }}>
        <Paper
          sx={{
            padding: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column', // Changed here
            justifyContent: 'flex-start', // Changed here
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {isStudioExpanded && <Typography variant="subtitle1">Studio</Typography>}
            <IconButton onClick={toggleStudioPanel}>
              <Menu />
            </IconButton>
          </Box>

          {/* Expandable content, only visible when expanded */}
          <Box sx={{ display: isStudioExpanded ? 'block' : 'none', flexGrow: 1 }}> {/* Changed here */}
            {isStudioExpanded && (
              <>
                <Divider sx={{ marginBottom: 2 }} />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography variant="body1">Audio Overview</Typography>
                    <Button variant="outlined" fullWidth>
                      Customize
                    </Button>
                    <Button variant="contained" fullWidth>
                      Generate
                    </Button>
                  </Box>
                  <Box>
                    <Typography variant="body1">Notes</Typography>
                    <Button variant="outlined" fullWidth>
                      Add Note
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Paper>
      </Grid>

      </Grid>
    </Box>
  );
}

export default NotebookLM;
