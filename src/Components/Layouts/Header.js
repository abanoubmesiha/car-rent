import React from 'react'
import {AppBar, Toolbar, Button } from '@material-ui/core/';

export default function Header() {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">Car Management</Button>
                    <Button color="inherit">Car Registration</Button>
                    <Button color="inherit">Contact Management</Button>
                    <Button color="inherit">Contract</Button>
                    <Button color="inherit">Employee Management</Button>
                    <Button color="inherit">Employee Registration</Button>
                    <Button color="inherit">Ivoices</Button>
                </Toolbar>
            </AppBar>
    )
}
