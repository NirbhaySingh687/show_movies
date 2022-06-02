import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from "./card";

export default function BasicGrid({ movies }) {
    return (
        <div style={{ padding: "10px"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {
                        movies.map((movie, index) => (
                            <Grid item xs={2}>
                                <MediaCard key={index} movie={movie} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    );
}
