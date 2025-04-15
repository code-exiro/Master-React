import { 
    Stack, 
    Button, 
    IconButton, 
    ButtonGroup, 
    ToggleButtonGroup, 
    ToggleButton
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


export const MuiButton = () => {
    return (
        <Stack spacing={4}>

            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://www.youtube.com/'>
                    Text
                </Button>
                <Button variant='contained'>
                    contained
                </Button>
                <Button variant='outlined'>
                    outlined
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>
                    Primary
                </Button>
                <Button variant='contained' color='secondary'>
                    Secondary
                </Button>
                <Button variant='contained' color='error'>
                    Error
                </Button>
                <Button variant='contained' color='warning'>
                    Warning
                </Button>
                <Button variant='contained' color='info'>
                    Info
                </Button>
                <Button variant='contained' color='success'>
                    Success
                </Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>
                    Small
                </Button>
                <Button variant='contained' size='medium'>
                    Medium
                </Button>
                <Button variant='contained' size='large' disableTouchRipple>
                    Large
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon></SendIcon>} disableRipple>
                    Send
                </Button>
                <Button variant='contained' endIcon={<SendIcon></SendIcon>} disableElevation>
                    Send
                </Button>
                <IconButton aria-label='send' color='success' size='medium'>
                    <SendIcon></SendIcon>
                </IconButton>               
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
                    <Button onClick={() => alert('Left clicked')}>Left</Button>
                    <Button disableTouchRipple>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting'>
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBoldIcon></FormatBoldIcon> 
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalicIcon></FormatItalicIcon> 
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underline'>
                        <FormatUnderlinedIcon></FormatUnderlinedIcon> 
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Stack>           
        
    )
}
