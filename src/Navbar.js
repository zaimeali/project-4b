import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'

import './App.css'

export default function Navbar() {
    return (
        <AppBar className="Nav" position="static">
            <Toolbar>
                <IconButton className="NavLogo" edge="start">Zapare Technologies</IconButton>
            </Toolbar>
        </AppBar>
    )
}
