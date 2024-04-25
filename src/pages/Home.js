import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,

    Button,
    Dialog,

    CardFooter,

    Input,
    Checkbox,
} from "@material-tailwind/react";
import VideoCard from '../components/VideoCard';
import { Link } from 'react-router-dom';
function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [category, setCategory] = React.useState(false);
    const handleOpen1 = () => setCategory((cur1) => !cur1);

    return (
        <div className='p-8'>
            <Card className=" justify-around items-center flex flex-row sm:flex-col">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-1/3  rounded-r-none"
                >
                    <img
                        src="/hero_img.png"
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className='xs:w-full items-start flex flex-col justify-center w-1/2 xs:items-center'>
                    <Typography variant="h6" color="gray" className="mb-4  text-4xl md:text-2xl text-center">
                        Video Upload
                    </Typography>

                    <div className='flex gap-4 justify-center items-center sm:flex-col  '>
                        <Button onClick={handleOpen} variant="gradient" className="flex items-center gap-3 " data-dialog-target="sign-in-dialog">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                            </svg>
                            Upload Files
                        </Button>
                        {/* <Button onClick={handleOpen}>Sign In</Button> */}
                        <Dialog
                            size="xs"
                            open={open}
                            handler={handleOpen}
                            className="bg-transparent shadow-none sm:max-w-100"
                        >
                            <Card className="mx-auto w-full max-w-[24rem]">
                                <CardBody className="flex flex-col gap-4">
                                    <Typography variant="h4" color="blue-gray">
                                        Video Upload
                                    </Typography>
                                    <Typography
                                        className="mb-3 font-normal"
                                        variant="paragraph"
                                        color="gray"
                                    >

                                    </Typography>
                                    <Typography className="-mb-2" variant="h6">
                                        Video Caption
                                    </Typography>
                                    <Input label="Caption" size="lg" />
                                    <Typography className="-mb-2" variant="h6">
                                        Cover Image URL
                                    </Typography>
                                    <Input label="Image URL" size="lg" />
                                    <Typography className="-mb-2" variant="h6">
                                        Youtube Video URL
                                    </Typography>
                                    <Input label="Video URL" size="lg" />

                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button variant="gradient" onClick={handleOpen} fullWidth>
                                        Add
                                    </Button>

                                </CardFooter>
                            </Card>
                        </Dialog>


                        <Link to={'/history'}>
                            <Button variant="gradient" className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
    
                                Watch History
                            </Button>
                        </Link>

                    </div>

                </CardBody>
            </Card>

            <div className='flex flex-row justify-between gap-2 sm:flex-wrap'>
                <Card className=" justify-around items-center flex flex-row  mt-5 p-5 gap-2 flex-wrap w-3/5">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </Card>

                <Card className="   mt-5 w-2/5">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-full  rounded-r-none p-3 text-center"
                    >
                        <Typography variant="h4" color="blue-gray">
                            Categories
                        </Typography>
                    </CardHeader>
                    <CardBody className='xs:w-full items-start flex flex-col justify-center w-1/2 xs:items-center'>
                        <Button variant="gradient" className="flex items-center gap-3" onClick={handleOpen1}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>


                            Add Categories
                        </Button>

                    </CardBody>
                    <Dialog
                        size="xs"
                        open={category}
                        handler={handleOpen1}
                        className="bg-transparent shadow-none"
                    >
                        <Card className="mx-auto w-full max-w-[24rem]">
                            <CardBody className="flex flex-col gap-4">
                                <Typography variant="h4" color="blue-gray">
                                    Sign In
                                </Typography>
                                <Typography
                                    className="mb-3 font-normal"
                                    variant="paragraph"
                                    color="gray"
                                >
                                    Enter your email and password to Sign In.
                                </Typography>
                                <Typography className="-mb-2" variant="h6">
                                    Your Email
                                </Typography>
                                <Input label="Email" size="lg" />
                                <Typography className="-mb-2" variant="h6">
                                    Your Password
                                </Typography>
                                <Input label="Password" size="lg" />
                                <div className="-ml-2.5 -mt-3">
                                    <Checkbox label="Remember Me" />
                                </div>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button variant="gradient" onClick={handleOpen1} fullWidth>
                                    Sign In
                                </Button>
                                <Typography variant="small" className="mt-4 flex justify-center">
                                    Don&apos;t have an account?
                                    <Typography
                                        as="a"
                                        href="#signup"
                                        variant="small"
                                        color="blue-gray"
                                        className="ml-1 font-bold"
                                        onClick={handleOpen1}
                                    >
                                        Sign up
                                    </Typography>
                                </Typography>
                            </CardFooter>
                        </Card>
                    </Dialog>
                </Card>
            </div>


        </div >
    )
}

export default Home