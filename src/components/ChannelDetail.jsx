import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const {id} = useParams();

  console.log(channelDetail,videos);

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items))
  },[id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'rgb(238,174,225)',
background: 'linear-gradient(90deg, rgba(238,174,225,1) 28%, rgba(148,187,233,1) 56%, rgba(8,151,217,1) 85%)',
zIndex: 10,
height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: {sm: '100px'}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail