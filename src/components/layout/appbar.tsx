import { Menu, Search, Star, GTranslate, Settings, Notifications } from "@mui/icons-material";
import { Paper, IconButton, InputBase, Avatar, Badge } from '@mui/material'

import Metiri from '../../assets/meitir.svg'

const username = 'Gustavo'

export const AppBar = () => {
    return (
        <div className="flex justify-between items-center w-full top-0 left-0 py-2 px-1 md:px-8 bg-appbar">
            <div className='flex items-center gap-0'>
                <img className="w-28" src={Metiri} alt="Metiri logo" />
                <button className="flex text-gray-500 font-semibold items-center mr-4" >
                    <Menu />
                    Menú
                </button>
                <Paper
                    component="form"
                    elevation={1}
                >
                    <IconButton sx={{ p: '8px' }} aria-label="menu">
                        <Search />
                    </IconButton>
                    <InputBase
                        size="small"
                        placeholder="Buscar aqui"
                        inputProps={{ 'aria-label': 'Buscar aqui' }}
                    />
                </Paper>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center">
                    <IconButton
                        sx={{ color: '#fff' }}
                    >
                        <Star />
                    </IconButton>
                    <IconButton
                        sx={{ color: '#fff' }}
                    >
                        <GTranslate />
                    </IconButton>
                    <IconButton
                        sx={{ color: '#fff' }}
                    >
                        <Settings />
                    </IconButton>
                    <IconButton
                        sx={{ color: '#fff' }}
                    >
                        <Badge badgeContent={2} color="primary">
                            <Notifications />
                        </Badge>
                    </IconButton>

                </div>
                <button className="flex items-center gap-2">
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                    />
                    <span>
                        !Hola {username}!
                    </span>
                </button>
                <h1>ROI</h1>
            </div>
        </div>
    );
}
