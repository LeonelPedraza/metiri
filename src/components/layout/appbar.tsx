import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ArrowForward, GroupsOutlined, GTranslate, LocationCity, Message, Settings, Star, Today } from '@mui/icons-material';
import { Divider, ListItemIcon } from '@mui/material';

import MetiriLogo from '../../assets/meitir.svg'
import { grey } from '@mui/material/colors';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const PrimarySearchAppBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            // keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{
                mt: 6,
                overflow: 'hidden',
                '& .MuiMenu-list': {
                    overflow: 'hidden'
                }

            }}
        >
            <MenuItem onClick={handleMenuClose} selected={true}>
                <ListItemIcon>
                    <Today fontSize='small' />
                </ListItemIcon>
                Última vez 17/11/22 12:53
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <Message fontSize='small' />
                </ListItemIcon>
                Historial
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <LocationCity fontSize='small' />
                </ListItemIcon>
                Perfil
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <GroupsOutlined fontSize='small' />
                </ListItemIcon>
                Familias
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <Settings fontSize='small' />
                </ListItemIcon>
                Privacidad
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <ArrowForward fontSize='small' />
                </ListItemIcon>
                Cerrar sesión
            </MenuItem>
            <Divider />
            <MenuItem>
                <Typography fontSize='small'>Version 11</Typography>
            </MenuItem>
            <Box
                sx={{
                    height: 100,
                    position: 'relative',
                }}
            >
                <Box sx={{
                    width: 400,
                    height: 180,
                    position: 'absolute',
                    bottom: -50,
                    left: -50,
                    backgroundColor: '#bed9e8',
                    zIndex: 100,
                    transform: 'rotateZ(-25deg)',
                    borderTop: '5px solid #056ca3'
                }}></Box>
            </Box>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#CEDCE4' }}>
                <Toolbar>
                    <img src={MetiriLogo} alt="Metiri logo" style={{ width: '5rem', height: '5rem' }} />
                    <Button
                        size="large"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ color: grey[700] }}
                    >
                        <MenuIcon />
                        <Typography sx={{ ml: 0.5 }}>Menu</Typography>
                    </Button>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: grey[400] }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar aquí"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ color: grey[600] }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '0px' }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Star sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <GTranslate sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Settings sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={2} color="primary">
                                <NotificationsIcon sx={{ fontSize: '1.5rem' }} />
                            </Badge>
                        </IconButton>
                        <Button
                            size="large"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle sx={{ fontSize: '1.5rem' }} />
                            <Typography sx={{ ml: 1, color: grey[700] }}>!Hola Gustavo!</Typography>
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}