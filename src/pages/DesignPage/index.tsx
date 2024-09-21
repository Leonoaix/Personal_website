import { AppBar } from '@mui/material';
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import APP_CONSTANTS from './constant';

export default function DesignPage() {
    const [selectedTab, setSelectedTab] = useState(0);
    function handleChange(event: React.SyntheticEvent, newValue: number) {
        setSelectedTab(newValue);
    }
  return (
    <AppBar sx={{backgroundColor: "white"}} >
        <Box display="flex" alignItems="center">
            <img src={APP_CONSTANTS.LOGO.SRC} alt={APP_CONSTANTS.LOGO.ALT} style={APP_CONSTANTS.LOGO.STYLE} />
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
            >
                <Tab icon={APP_CONSTANTS.DEVICE_SWITCH.COMPUTER.ICON} sx={APP_CONSTANTS.DEVICE_SWITCH.STYLE}></Tab>
                <Tab icon={APP_CONSTANTS.DEVICE_SWITCH.SMARTPHONE.ICON} sx={APP_CONSTANTS.DEVICE_SWITCH.STYLE}></Tab>
                <Tab icon={APP_CONSTANTS.DEVICE_SWITCH.LANDSCAPE.ICON} sx={APP_CONSTANTS.DEVICE_SWITCH.STYLE}></Tab>
            </Tabs>
        </Box>
    </AppBar>
  );
}