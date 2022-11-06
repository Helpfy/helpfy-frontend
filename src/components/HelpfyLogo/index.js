import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Logo } from './icon.svg';

export default function HelpfyLogo() {
  return (
    <SvgIcon 
      component={Logo} 
      viewBox="0 0 250 250" 
      fontSize="large"
    />
  )
}
