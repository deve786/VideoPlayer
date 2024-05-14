import React from 'react'
import { format } from "date-fns";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,

} from "@material-tailwind/react";
import { addHistoryApi, deleteVideoApi } from '../services/allApi';
function VideoCard({ data, del }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = async() => {
        setOpen(true)
        let title = data.title
        let url = data.videoUrl
        let date = format(new Date(), "yyyy-MM-dd hh:mm:ss a");

        var bodyData={
            date,
            title,
            url
        }
       
       const result=await addHistoryApi(bodyData)
    //    console.log(result);
        
    };

    const handleClose=()=>{
        setOpen(false)
    }
    const deleteData = async (id) => {
        const out = await deleteVideoApi(id)
        if (out.status >= 200 && out.status < 300) {

            del(true)
        }

    }
  
     const startDragging=(e,id)=>{
        console.log(id);
        e.dataTransfer.setData("card",id)
     }


    return (


        <div draggable onDragStart={(e)=>startDragging(e,data.id)} class=" flex flex-col w-96  mt-6 p-4 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-full ">
            <div class="relative h-56  w-80 sm:w-full md:w-full  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 sm:h-1/2">
                <img draggable={false} onClick={handleOpen}
                    src={data.imageUrl}
                    alt="card-image" className="h-56 w-80  cursor-pointer sm:w-full " />
            </div>
            <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {data.title}
                </h5>

            </div>
            <div class="p-6 pt-0">

                <button onClick={() => deleteData(data.id)}

                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center "
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>


                </button>
            </div>
            <Dialog size='lg' open={open} handler={handleClose} className='text-center'>

                <DialogBody className='flex justify-center min-w-full'>
                    <iframe width="100%" height="514" src={data.videoUrl} title="Coolie Disco - #COOLIE | Superstar Rajinikanth | Sun Pictures | Lokesh Kanagaraj | Anirudh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </DialogBody>
                <DialogFooter className="justify-between">

                    <Button
                        size="sm"
                        variant="outlined"
                        color="blue-gray"
                        className="mr-5 flex items-center"
                    >
                        Share
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>




    )
}

export default VideoCard