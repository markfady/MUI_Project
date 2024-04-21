import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Add = () => {
    const [open,setOpen]=useState(false)

    const CustomBox = styled(Box)({
        width:'400px',
        height:'280px',
        background:'white',
        padding:50,
        borderRadius:5
      });
      const CustomModal=styled(Modal)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      })
      const UserBox=styled(Box)({
        display:'flex',
        alignItems:'center',
        gap:"10px",
        marginBottom:"20px"

      })
  return (
    <>
    <Tooltip onClick={()=>setOpen(true)} title="Add Post" sx={{position:"fixed",bottom:20,margin:2,left:{xs:"calc(50% - 25px)",md:30}} }>
    <Fab color="primary" aria-label="Add Post">
  <AddIcon />
</Fab>
</Tooltip>
<CustomModal
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <CustomBox>
    <Typography id="modal-modal-description" sx={{fontWeight:'bold',textAlign:'center' }} variant='h6' color={'grey'}>
    Create Post
    </Typography>
    <UserBox>
    <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Typography fontWeight={500} variant='overline'>
            Trevor
          </Typography>
    </UserBox>
    <TextField sx={{width:"100%"}} rows={3} id="standard-multiline-static" multiline placeholder="What's on your mind" variant='standard' />
    <Stack direction={'row'} gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color='primary'/>
        <InsertPhotoIcon color='secondary'/>
        <VideoCameraFrontIcon color='success'/>
        <PersonAddIcon color='error'/>
    </Stack>
    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"20%"}}><DateRangeIcon/></Button>
</ButtonGroup>
  </CustomBox>
</CustomModal>
    </>
  )
}

export default Add