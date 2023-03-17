import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import AddNewServiceForm from './AddNewServiceForm'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface AddNewServiceProps {
  open: boolean
  setOpen: (value: boolean) => void
  update: () => void
}

export default function AddNewService({ open, setOpen, update }: AddNewServiceProps) {
  const handleClose = () => setOpen(false)
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddNewServiceForm update={update} />
        </Box>
      </Modal>
    </>
  )
}
