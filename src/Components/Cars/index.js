import React from 'react'
import {Grid,Paper } from '@material-ui/core/'

const style = {
    Paper: {padding:20,margin: '10px'}
}

export default function Cars() {
    return (
        <React.Fragment>
            <Grid container>
                <Grid item sm>
                    <Paper style={style.Paper}>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                    </Paper>
                </Grid> 
                <Grid item sm>
                    <Paper style={style.Paper}>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                        <h1>helloooo</h1>
                    </Paper>
                </Grid> 
            </Grid>
        </React.Fragment>
    )
}
