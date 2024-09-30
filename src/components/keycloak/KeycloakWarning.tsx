import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

interface KeycloakWarningProps {
  logoSrc: string;
  backgroundVideoSrc: string;
  backgroundTheme: 'dark-blue' | 'dark-orange' | 'light';
  noticeText: string;
  warningText: string;
  buttonText: string;
  onAgree: () => void;
}

export const KeycloakWarning: React.FC<KeycloakWarningProps> = ({
  logoSrc,
  backgroundVideoSrc,
  backgroundTheme,
  noticeText,
  warningText,
  buttonText,
  onAgree,
}) => {
  return (
    <Box sx={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={backgroundVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box sx={{
        width: '90%',
        maxWidth: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        borderRadius: 2,
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <img src={logoSrc} alt="Guardian One Logo" style={{ width: '161.2px', height: '80.6px', objectFit: 'contain', marginBottom: '41.3px' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '24px' }}>
            <WarningIcon color="error" sx={{ mr: 1, fontSize: '24px' }} />
            <Typography variant="h6" component="h2" sx={{ fontSize: '24px', fontWeight: 'bold' }}>
              {noticeText}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '16px', mb: '24px' }}>
            {warningText}
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 2, fontSize: '14px' }}>
            By using this IS (which includes any device attached to this IS), you consent to the following conditions:
          </Typography>
          <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px' }}>
            <li>The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations.</li>
            <li>At any time, the USG may inspect and seize data stored on this IS.</li>
            <li>Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed or used for any USG-authorized purpose.</li>
            <li>This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy.</li>
            <li>Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants. Such communications and work product are private and confidential. See User Agreement for details.</li>
          </ul>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={onAgree}
            sx={{
              backgroundColor: '#D32F2F',
              color: 'white',
              fontSize: '16px',
              padding: '12px 24px',
              '&:hover': {
                backgroundColor: '#B71C1C',
              }
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default KeycloakWarning;
