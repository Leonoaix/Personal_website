import ComputerIcon from '@mui/icons-material/Computer';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StayCurrentLandscapeIcon from '@mui/icons-material/StayCurrentLandscape';

const APP_CONSTANTS = {
    DEVICE_SWITCH: {
        COMPUTER:{
            ICON: <ComputerIcon/>,
            LABEL: 'Computer',
        },
        SMARTPHONE:{
            ICON: <SmartphoneIcon/>,
            LABEL: 'Smartphone',
        },
        LANDSCAPE:{
            ICON: <StayCurrentLandscapeIcon/>,
            LABEL: 'Landscape',
        },
        STYLE: {
            minWidth: "50px",
        }
    },
    LOGO: {
        SRC: "src/assert/Logo.png",
        ALT: "Logo",
        STYLE: {
            width: 120,
            height: 'auto',
            objectFit: 'contain'
        }
    }
}

export default APP_CONSTANTS;