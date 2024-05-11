import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,

} from "@material-tailwind/react";
import VideoCard from '../components/VideoCard';
import { Link } from 'react-router-dom';
import {  getVideoApi } from '../services/allApi';
import Add from '../components/Add';
import Categories from '../components/Categories';

function Home() {
    const [video, setVideo] = useState([])
    const [addUpdate, setAddUpdate] = useState(false)
    const [deleteUpdate, setDeleteUpdate] = useState(false)
    
    const getVideos = async () => {
        const result = await getVideoApi()
        if (result.status >= 200 && result.status < 300) {
            setVideo(result.data)
        }
    }

    useEffect(() => {
        getVideos()
    }, [addUpdate,deleteUpdate])

    return (
        <>
            <div className='p-8'>
                <Card className=" justify-around items-center flex flex-row sm:flex-col">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-1/3  rounded-r-none">
                        <img src="/hero_img.png"
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody className='xs:w-full items-start flex flex-col justify-center w-1/2 xs:items-center'>
                        <Typography variant="h6" color="gray" className="mb-4  text-4xl md:text-2xl text-center">
                            Video Upload
                        </Typography>
    
                        <div className='flex gap-4 justify-center items-center sm:flex-col  '>
                            <Add update={setAddUpdate}/>
    
    
                            <Link to={'/history'}>
                                <Button variant="gradient" className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
    
                                    Watch History
                                </Button>
                            </Link>
    
                        </div>
    
                    </CardBody>
                </Card>
    
                <div className='flex flex-row justify-between gap-2 sm:flex-wrap'>
                    <Card className=" justify-start  flex flex-row h-full  mt-5 p-5 gap-2 flex-wrap w-3/5 sm:w-full sm:justify-center md:justify-center">
                        {
                            video.length > 0 ? (
                                video.map((i,index) => (
                                    <VideoCard data={i} key={index} del={setDeleteUpdate} />
                                ))
                            ) : (
                                <Typography variant="paragraph" color="gray">No videos available.</Typography>
                            )
                        }
    
                    </Card>
    
                    <Card className="   mt-5 w-2/5 sm:w-full">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-full  rounded-r-none p-3 text-center"
                        >
                            <Typography variant="h4" color="blue-gray">
                                Categories
                            </Typography>
                        </CardHeader>
                        <Categories  />
                    </Card>
                </div>
    
    
            </div >
        </>
    )
}

export default Home