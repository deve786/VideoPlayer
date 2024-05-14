import React, { useState } from 'react'
import {
    Card,

    CardBody,
    Typography,

    Button,
    Dialog,

    CardFooter,

    Input,

} from "@material-tailwind/react";
import { addVideoApi } from '../services/allApi';
function Add({ update }) {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = React.useState(false);

    // const [addUpdate, setAddUpdate] = useState(false)
    const setDatas = (e) => {
        let { value, name } = e.target
        setVideoInputs({ ...videoInputs, [name]: value })
    }

    const [videoInputs, setVideoInputs] = useState({
        title: '',
        imageUrl: '',
        videoUrl: ''
    })

    const videoUrl = (e) => {
        // https://youtu.be/IqiTJK_uzUY
        // https://www.youtube.com/embed/IqiTJK_uzUY
        let { value, name } = e.target
        let newValue = `https://www.youtube.com/embed/${value.slice(-11,)}`
        // console.log(newValue);
        setVideoInputs({ ...videoInputs, [name]: newValue })
    }



    const sndVideo = async () => {

        const { title, coverImg, videoUrl } = videoInputs
        if (title == '' || coverImg == '' || videoUrl == '') {
            alert('please fill all datas')
        } else {
            const out = await addVideoApi(videoInputs)
            console.log(out);
            if (out.status >= 200 && out.status < 300) {
                alert('video add successfully')
                handleOpen()
                console.log(update);
                update(true)
                console.log(update);
            }
            else {
                console.log("failed video");
            }
        }

    }




    return (
        <div>
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
                className="bg-transparent shadow-none !min-w-[100%]  sm:!min-w-[95%] !max-w-[80%]"
            >
                <Card className="mx-auto w-full max-w-[24rem] sm:min-w-100 ">
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
                        <Input label="Caption" size="lg" name='title' onChange={(e) => { setDatas(e) }} />
                        <Typography className="-mb-2" variant="h6">
                            Cover Image URL
                        </Typography>
                        <Input label="Image URL" size="lg" name='imageUrl' onChange={(e) => { setDatas(e) }} />
                        <Typography className="-mb-2" variant="h6">
                            Youtube Video URL
                        </Typography>
                        <Input label="Video URL" size="lg" name='videoUrl' onChange={(e) => { videoUrl(e) }} />

                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth onClick={sndVideo}>
                            Add
                        </Button>

                    </CardFooter>
                </Card>
            </Dialog></div>
    )
}

export default Add