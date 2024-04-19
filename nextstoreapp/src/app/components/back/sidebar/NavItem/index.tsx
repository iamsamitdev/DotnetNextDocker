import React from 'react'
import Link from 'next/link'

// mui imports
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

type NavGroup = {
  [x: string]: any
  id?: string
  navlabel?: boolean
  subheader?: string
  title?: string
  icon?: any
  href?: any
  children?: NavGroup[]
  chip?: string
  chipColor?: any
  variant?: string | any
  external?: boolean
  level?: number
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

interface ItemType {
  item: NavGroup
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  hideMenu?: any
  level?: number | any
  pathDirect: string
}

export default function NavItem  ({ item, level, pathDirect, hideMenu, onClick }: ItemType) {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"))
  const Icon = item?.icon
  const theme = useTheme()
  const itemIcon =
    level > 1 ? <Icon stroke={1.5} size="1rem" /> : <Icon stroke={1.5} size="1.3rem" />

  const ListItemStyled = styled(ListItemButton)(() => ({
    whiteSpace: 'nowrap',
    marginBottom: '2px',
    padding: '8px 10px',
    borderRadius: '4px',
    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
    color:
      level > 1 && pathDirect === item?.href
        ? `${theme.palette.primary.main}!important`
        : theme.palette.text.secondary,
    paddingLeft: hideMenu ? '10px' : level > 2 ? `${level * 15}px` : '10px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    '&.Mui-selected': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
  }))


  return (
    <List component="li" disablePadding key={item?.id && item.title}>
      <Link href={item.href}>
        <ListItemStyled
          disabled={item?.disabled}
          selected={pathDirect === item?.href}
          onClick={lgDown ? onClick : undefined}>

          <ListItemIcon
            sx={{
              minWidth: '36px',
              p: '3px 0',
              color:
                level > 1 && pathDirect === item?.href
                  ? `${theme.palette.primary.main}!important`
                  : 'inherit',
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText>
            {hideMenu ? '' : <>{`${item?.title}`}</>}
            <br />
            {item?.subtitle ? (
              <Typography variant="caption">{hideMenu ? '' : item?.subtitle}</Typography>
            ) : (
              ''
            )}
          </ListItemText>

          {!item?.chip || hideMenu ? null : (
            <Chip
              color={item?.chipColor}
              variant={item?.variant ? item?.variant : 'filled'}
              size="small"
              label={item?.chip}
            />
          )}
        </ListItemStyled>
      </Link>
    </List>
  )
}

