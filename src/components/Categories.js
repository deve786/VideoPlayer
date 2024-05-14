import React, { useEffect, useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Card,
    CardBody,
    Typography,
    Button,
    Dialog,
    CardFooter,
    Input,

} from "@material-tailwind/react";
import { addCategoryApi, deleteCategoriesApi, getCategoryApi, getSingleVideoApi, updateCategoriesApi } from '../services/allApi';
function Categories({ }) {

    const handleOpen1 = () => setCategory((cur1) => !cur1);

    const [category, setCategory] = React.useState(false);
    const [categoryName, setCategoryName] = useState('')
    const [cat, setCat] = useState([])

    const sndCategory = async () => {
        let value = { categoryName, video: [] };
        console.log(categoryName);
        if (categoryName == '') {
            toast.warn('Enter the data!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            const result = await addCategoryApi(value)
            console.log(result);
            toast.success('Sucessss!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            handleOpen1()
            getCategory()

        }
    }


    const deleteCat = async (id) => {
        const result = await deleteCategoriesApi(id)
        console.log(result);
        getCategory()

    }

    const getCategory = async () => {
        const result = await getCategoryApi()
        setCat(result.data)
    }


    const draggingOver = (e, id) => {
        e.preventDefault()
        console.log("Dragging over " + id);
    }


    const dropped = async (e, id) => {
        console.log("dropped");
        var catId = id
        var videoId = e.dataTransfer.getData('card')
        console.log(videoId);


        //step 1
        var categoryy = cat.find(i => i.id == catId)
        console.log(categoryy);

        // access single video 
        const video = await getSingleVideoApi(videoId)
        var videoData = video.data

        categoryy.video.push(videoData)

        console.log(categoryy);
        const res = await updateCategoriesApi(catId, categoryy)
        console.log(res);
    }

    useEffect(() => {
        getCategory()
    }, [])
    // console.log(cat);
    return (
        <div>
            <CardBody className='xs:w-full items-start flex flex-col justify-center w-1/2 xs:items-center w-full'>
                <Button variant="gradient" className="flex items-center gap-3" onClick={handleOpen1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>


                    Add Categories
                </Button>
                <div className='flex justify-center flex-col align-center w-full'>
                    {

                        cat?.length > 0 ?
                            cat.map((i, index) =>
                                <div>
                                    <div droppable onDragOver={(e) => draggingOver(e, i.id)} onDrop={(e) => dropped(e, i.id)} key={index} className=' border p-3 mt-2 w-full flex flex-col justify-between w-100'>

                                        <div className='flex justify-between'>
                                            <h1 className='mt-3 '>{i.categoryName}</h1>
                                            <button onClick={() => deleteCat(i.id)}

                                                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center "
                                                type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>



                                            </button>
                                        </div>
                                        <div>
                                            
                                               
                                                   
                                            
                                        </div>

                                    </div>
                                    {
                                                        i.video?.length > 0 &&
                                                        i.video.map(video => {
                                                            <div>
                                                               {console.log(video.title)}
                                                               <img src={video.imageUrl} alt="" srcset="" />
                                                            </div>
                                                        })
                                                    }
                                                
                                </div>

                            )
                            :
                            <>No Category</>
                    }
                </div>
                {/* <h1>heading</h1> */}
            </CardBody>
            <Dialog
                size="xs"
                open={category}
                handler={handleOpen1}
                className="bg-transparent shadow-none !min-w-[95%]"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Add Category
                        </Typography>

                        <Typography className="-mb-2" variant="h6" >
                            Category Name
                        </Typography>
                        <Input label="Category Name" size="lg" onChange={(e) => setCategoryName(e.target.value)} />

                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth onClick={sndCategory}>
                            Add
                        </Button>

                    </CardFooter>
                </Card>
            </Dialog>
            <ToastContainer />
        </div>
    )
}

export default Categories