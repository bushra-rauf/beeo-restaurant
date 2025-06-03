'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { RecipeType } from '@/types/types';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard({name, image, category, area, instruction, video, ingredients }:RecipeType) {
const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }

  const embedVideo = (video:string):string => {
       return video.replace('watch?v=', '/embed')
  }

  return (
    <Card sx={{ maxWidth: 'sm', mt: 4 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            BR
          </Avatar>
        }
        title={name}
        subheader={`${category} - ${area}`}
      />
      <CardMedia
        component="img"
        image={image}
        alt={name}
      />
      <CardContent>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Ingredients" value="1" />
            <Tab label="Instructions" value="2" />
            <Tab label="Media" value="3" />
          </TabList>
        </Box>
          <TabPanel value="1" sx={{whiteSpace:'pre-wrap'}}>{ingredients?.map((item: string, index: number) => <p key= {index}>{item}</p>)}</TabPanel>
          <TabPanel value="2">{instruction}</TabPanel>
          <TabPanel value="3"><CardMedia height='400' component='iframe' src={video?.replace('watch?v=', 'embed/')}/></TabPanel>
      </TabContext>
        </Box>
      </CardContent>
    </Card>
  )
}