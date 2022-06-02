import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({ movie }) {
    console.log(`###########`,movie)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={movie["Poster"]}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie["Title"]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Release Date:-${movie["Year"]}
                </Typography>
            </CardContent>
        </Card>
    );
}
