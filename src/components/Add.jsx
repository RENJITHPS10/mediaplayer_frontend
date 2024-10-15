import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddvideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setVideoStatus}) {
    const [videoDetails, setVideoDetails] = useState({
        caption: "",
        imageUrl: "",
        embedLinks: ""
    })
    const [show, setShow] = useState(false);
    console.log(videoDetails)
    const handleClose = () => {
        setShow(false);
        handleCancel()
    }

    const handleShow = () => setShow(true);
    // const getLink = (e) => {
    //     const str = e.target.value
    //     if (str.startsWith('https://youtu.be/')){
    //         const embedl=`https://www.youtube.com/embed/${str.slice(17,28)}`
    //         setVideoDetails({...videoDetails,embedLinks:embedl})
    //     }else{
    //          const embedl=`https://www.youtube.com/embed/${str.slice(-11)}`
    //          setVideoDetails({...videoDetails,embedLinks:embedl})
    //     }
    const handleCancel = () => {
        setVideoDetails({
            caption: "",
            imageUrl: "",
            embedLinks: ""

        })

    }
    const handleAdd = async () => {
       const {caption,imageUrl,embedLinks}=videoDetails

       if(!caption||!imageUrl||!embedLinks){
        toast.info('Please fill the form completely')
       }else{
        let embedl = "";

       
        if (videoDetails.embedLinks.startsWith('https://youtu.be/')) {
            embedl = `https://www.youtube.com/embed/${videoDetails.embedLinks.slice(17, 28)}`;
        } else {
            embedl = `https://www.youtube.com/embed/${videoDetails.embedLinks.slice(-11)}`;
        }

   
        const updatedDetails = { ...videoDetails, embedLinks: embedl };

      
        setVideoDetails(updatedDetails);

      
        const result = await AddvideoApi(updatedDetails);

        console.log(result);
          

        if (result.status >= 200 && result.status < 300) {
            toast.success('Video added succesfully')
            handleClose()
            setVideoStatus(result.data)
        } else {
           toast.danger('some thing went wrong')
        }
        handleClose()
       }

    };




    // }
    return (
        <>
            <div className='d-flex align-items-center'>
                <h5 className='px-5 d-none d-md-inline'>Upload New Video</h5>
                <button className='btn' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5' /></button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} /> Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details</p>
                    <div className='border border-dark p-3 mt-3 rounded-3'>
                        <form action="" className='p-1'>
                            <input type="text" className='form-control' value={videoDetails.caption} placeholder='Video caption' onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
                            <input type="text" className='form-control mt-3' value={videoDetails.imageUrl} placeholder='Video Image' onChange={(e) => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} />
                            <input type="text" className='form-control mt-3' value={videoDetails.embedLinks} placeholder='Video Url' onChange={(e) => setVideoDetails({ ...videoDetails, embedLinks: e.target.value })} />
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleAdd}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' autoClose={2000} theme='colored' />
        </>
    )
}

export default Add
