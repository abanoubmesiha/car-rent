import React from 'react'
import {AppBar, Toolbar, Button } from '@material-ui/core/';

export default function Header() {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Button color="inherit">Nav 1</Button>
                    <Button color="inherit">Nav 2</Button>
                    <Button color="inherit">Nav 3</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
