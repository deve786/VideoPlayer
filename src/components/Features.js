import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
function Features() {
  return (
    <Card className='mt-10 p-5 w-full flex md:flex-col flex '>
                <h1 className='text-center text-3xl font-bold'>Features</h1>
                <div className="sm:flex-col justify-around items-center flex flex-row ">
                <CardBody className='xs:w-full items-start flex flex-col justify-center w-1/2 border rounded-2xl justify-center flex items-center mx-2 transition-all duration-200 hover:shadow-md hover:shadow-grey-700'>
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/2  rounded-r-none "
                        >
                            <img
                                src="https://i.postimg.cc/TPZGvfww/tiny-people-family-with-kids-watching-smart-television-content-smart-tv-content-smart-tv-interactive.jpg"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <Typography variant="h6" color="gray" className="mb-4  text-3xl lg:text-2xl mt-2">
                            Managing Videos
                        </Typography>

                        <Typography color="gray" className="mb-8 font-normal text-justify">
                            Easily upload, edit, and organize your videos with our intuitive platform. Drag and drop files, enhance video quality with simple editing tools, and distribute your content across various channels with just a few clicks.
                        </Typography>
                        <a href="#" className="inline-block">
                            <Button variant="text" className="flex items-center gap-2">
                                Get Started
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardBody>


                    <CardBody className='xs:w-full items-start flex flex-col justify-center w-1/2 border rounded-2xl justify-center flex items-center mx-2 transition-all duration-200 hover:shadow-md hover:shadow-grey-700'>
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-1/2  rounded-r-none "
                        >
                            <img
                                src="https://i.postimg.cc/Sx0G99Hx/51000.jpg"
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <Typography variant="h6" color="gray" className="mb-4  text-3xl lg:text-2xl mt-2">
                            Categories Videos
                        </Typography>

                        <Typography color="gray" className="mb-8 font-normal text-justify">
                        Keep your video library organized and easy to navigate by categorizing your content. Our platform allows you to create custom categories and assign tags to each video, enabling you to sort and retrieve them quickly. 
                        </Typography>
                        <a href="#" className="inline-block">
                            <Button variant="text" className="flex items-center gap-2">
                                Get Started
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardBody>
                    <CardBody className='xs:w-full items-start flex flex-col justify-center w-1/2 border rounded-2xl justify-center flex items-center mx-2 transition-all duration-200 hover:shadow-md hover:shadow-grey-700'>
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-1/2  rounded-r-none "
                        >
                            <img
                                src="https://i.postimg.cc/QxBD6FS7/mini-people-with-computer-clock-24877-56158.jpg"
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <Typography variant="h6" color="gray" className="mb-4  text-3xl lg:text-2xl mt-2">
                            Watch History
                        </Typography>

                        <Typography color="gray" className="mb-8 font-normal text-justify">
                        Revisit your previously watched videos effortlessly with our watch history feature. Our platform automatically records every video you watch, allowing you to easily find and re-watch your favorite content. 
                        </Typography>
                        <a href="#" className="inline-block">
                            <Link to={'/history'}>
                                <Button variant="text" className="flex items-center gap-2">
                                    History
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </Link>
                        </a>
                    </CardBody>


                    {/* <CardBody className='xs:w-full items-start flex flex-col justify-center w-1/2 '>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase text-4xl lg:text-2xl">
                            MotionDrop
                        </Typography>

                        <Typography color="gray" className="mb-8 font-normal">
                            Ready to take your content to the next level? With MotionDrop, you get the fastest, most reliable video uploading experience ever. Whether you're a creator, marketer, or just love sharing videos, our tool ensures your media is live and ready to impress in seconds.
                        </Typography>
                        <a href="#" className="inline-block">
                            <Button variant="text" className="flex items-center gap-2">
                                Get Started
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardBody>
                    <CardBody className='xs:w-full items-start flex flex-col justify-center w-1/2 '>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase text-4xl lg:text-2xl">
                            MotionDrop
                        </Typography>

                        <Typography color="gray" className="mb-8 font-normal">
                            Ready to take your content to the next level? With MotionDrop, you get the fastest, most reliable video uploading experience ever. Whether you're a creator, marketer, or just love sharing videos, our tool ensures your media is live and ready to impress in seconds.
                        </Typography>
                        <a href="#" className="inline-block">
                            <Button variant="text" className="flex items-center gap-2">
                                Get Started
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardBody> */}
                </div>
            </Card>
  )
}

export default Features