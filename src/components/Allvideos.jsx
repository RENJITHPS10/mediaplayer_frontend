import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { AddvideoToCategoryApi, getvideoApi } from '../services/allApi'
import { toast } from 'react-toastify'
import Category from './Category'


function Allvideos({ videoStatus, setvideoCStatus }) {
    const [allVideos, setAllVideos] = useState([])
    const [deleteVideoStatus, setdeleteVideoStatus] = useState([])

    const getAllvideos = async () => {
        const result = await getvideoApi()
        setAllVideos(result.data)

    }
    console.log(allVideos)

    const ondrop = (e) => {
        e.preventDefault()
    }
    const VideoDrop = async (e) => {
        const { category, video } = JSON.parse(e.dataTransfer.getData("dataShare"))
        console.log(category, video)

        const newArray = category.allvideos.filter(item => item.id != video.id)
        const newCategory = {
            Category: category.Category,
            allvideos: newArray,
            id: category.id
        }
        const result = await AddvideoToCategoryApi(category.id, newCategory)
        console.log(result)
        if (result.status >= 200 && result.status < 300) {
            toast.success('success')
            setvideoCStatus(result.data)

        }
    }
    
    useEffect(() => {
        getAllvideos()
    }, [videoStatus, deleteVideoStatus])
    return (
        <>
            <div droppable onDragOver={e => ondrop(e)} onDrop={e => VideoDrop(e)}>
                <h4 className='px-5'>All Videos</h4>
                {allVideos.length > 0 ?
                    <div className="container">
                        <div className="row">
                            {allVideos.map((item) => (
                                <div className="col-md-3">
                                    <Videocard items={item} setdeleteVideoStatus={setdeleteVideoStatus} />
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div className="container-fluid">
                        <div className="row mt-2">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <img src="https://yt3.googleusercontent.com/ytc/AIdro_nRr4G2hGChYeLGYVoJTAk3hxH8cZK8e9TqKWo2C42a-g=s900-c-k-c0x00ffffff-no-rj" className='rounded-5 w-100' alt="" />
                                <h4 className='text-center text-warning'>No Videos yet</h4>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Allvideos
