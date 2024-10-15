import React, { useEffect } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { AddCategoryApi, AddvideoToCategoryApi, deleteCategoryApi, getAllCategoryApi, } from '../services/allApi';

import { toast } from 'react-toastify';

function Category({videoCStatus}) {
    const [show, setShow] = useState(false);
    const [categoryname, setcategoryname] = useState('')
    const [getCategoryStatus, setCategoryStatus] = useState([])
    const [AddCategoryStatus, setAddCategoryStatus] = useState([])
    const [deleteCstatus, setdeleteCstatus] = useState([])
    const [videoCategorystatus, setvideoCategorystatus] = useState({})

    const handleCancel = () => {
        setcategoryname('')


    }
    const handleClose = () => {
        setShow(false)
        handleCancel()
    }
    const handleShow = () => {
        setShow(true);
    }

    const handleAddCategory = async () => {
        if (categoryname) {
            const reqBody = {
                Category: categoryname,
                allvideos: []
            }
            const result = await AddCategoryApi(reqBody)
            console.log(result)
            if (result.status >= 200 && result.status < 300) {
                toast.success('category added successfully')
                handleClose()
                setAddCategoryStatus()
            } else {
                toast.error('something went wrong')
                handleClose()
            }
        } else {
            toast.info('please add category name')
        }

    }



    console.log(categoryname)

    const getCategory = async () => {
        const result = await getAllCategoryApi()
        setCategoryStatus(result.data)

    }
    console.log(getCategoryStatus)


    const handleCDelete = async (id) => {
        const result = await deleteCategoryApi(id)

        if (result.status >= 200 && result.status < 300) {
            setdeleteCstatus(result.data)
        }

    }

    const ondrag = (e) => {
        e.preventDefault()//prevent resfreshing
    }
    const videoDrop = async (e, categoryDetails) => {
        console.log(categoryDetails)
        const videoDetails = JSON.parse(e.dataTransfer.getData('videoDetails'))
        console.log(videoDetails)
        if (categoryDetails.allvideos.find(item => item.id == videoDetails.id)) {
            alert('video already in category')


        } else {

            categoryDetails.allvideos.push(videoDetails)
            console.log(categoryDetails)
            const result = await AddvideoToCategoryApi(categoryDetails.id, categoryDetails)
            if (result.status >= 200 && result.status < 300) {
                toast.success('video added')
                setvideoCategorystatus(result.data)
            } else {
                toast.error('something went wrong')
            }
        }
    }
    const videoDrag=(e,video,category)=>{
        console.log(video)
        console.log(category)
        const dataShare={
            category,
            video
        }
        e.dataTransfer.setData('datashare',JSON.stringify(dataShare))
    

    }
   

    useEffect(() => {
        getCategory()

    }, [AddCategoryStatus, deleteCstatus, videoCategorystatus,videoCStatus])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='border border-dark p-2 rounded-3'>
                        <form action="">
                            <input value={categoryname} type="text" className='form-control' placeholder='Add category' onChange={(e) => setcategoryname(e.target.value)} />
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleAddCategory}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>
            <h5>Category</h5>
            <button className='btn btn-warning w-100 mt-3' onClick={handleShow}>Add Category</button>
            {getCategoryStatus?.length > 0 &&
                getCategoryStatus.map(item => (
                    <div className='p-2'>




                        <div className='border border-dark  p-2 mt-2 rounded-3  ' droppable onDragOver={e => ondrag(e)} onDrop={e => videoDrop(e, item)}>
                       
                            <div className='d-flex justify-content-between'>
                            <p>{item?.Category}</p>
                                <Button variant="danger" onClick={() => handleCDelete(item?.id)} ><FontAwesomeIcon icon={faTrashCan} /></Button>
                               
                            </div>
                            {item?.allvideos?.length > 0 &&
                            
                                item?.allvideos?.map(video => (
                                    <div draggable onDragStart={e=>videoDrag(e,video,item)}>
                                        <Videocard items={video} ispresent={true} />
                                    </div>))


                            }



                        </div>


                    </div>
                ))}
        </>
    )
}

export default Category
