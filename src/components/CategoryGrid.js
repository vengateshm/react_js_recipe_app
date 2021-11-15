import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { maxHeight } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CategoryGrid = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {props.categories.map(category => {
                    return (
                        <Grid item xs={2}>
                            <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={category.strCategoryThumb}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {category.strCategory}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {category.strCategoryDescription}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default CategoryGrid;