'use client'

import Link from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AuthLogin from '@/app/(auth)/_authForms/AuthLogin'
import Image from 'next/image'

type Props = {}

export default function LoginPage({}: Props) {
  return (
    <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={7}
        xl={8}
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Box position="relative">
          <Box px={4} py={4}>
            <Link href='/'>
              <Image
                    src={"/images/logos/NextStoreLogo.svg"}
                    alt="logo"
                    height={40}
                    width={174}
                    priority
                />
            </Link>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            height={'calc(100vh - 75px)'}
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
              },
            }}
          >
            <Image
              src={"/images/front/background/login-bg.svg"}
              alt="bg" width={500} height={500}
              style={{
                width: '100%',
                maxWidth: '500px',
                maxHeight: '500px',
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={5}
        xl={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box p={4}>
          <AuthLogin
            title="Login"
            subtext={
              <Typography variant="h1" color="textSecondary" mb={1} fontSize={16}>
                To Your Dashboard
              </Typography>
            }
            subtitle={
              <Stack direction="row" spacing={1} mt={3}>
                <Typography color="textSecondary" variant="h1" fontSize={14} lineHeight='20px'>
                  Dont have an account ?
                </Typography>
                <Typography
                  component={Link}
                  href="/register"
                  fontWeight="500"
                  sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                  }}
                >
                  Register
                </Typography>
              </Stack>
            }
          />
        </Box>
      </Grid>
    </Grid>
  )
}