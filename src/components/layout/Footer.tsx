import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import * as React from 'react'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" display="none">
        Buchanan Volleyball LLC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function Footer() {
  return (
    <>
      <Copyright sx={{ pt: 4 }} />
    </>
  )
}

export default Footer
