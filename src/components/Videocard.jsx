import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { AddhistoryApi, deleteVideoApi } from '../services/allApi';

function Videocard({ items, setdeleteVideoStatus,ispresent }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true)
        const time = new Date()
        let formatedData = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: "2-digit", hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time)
        console.log(formatedData)
        const reqBody = {
            Caption: items.caption,
            url: items.embedLinks,
            time: formatedData
        }
        const result = await AddhistoryApi(reqBody)
        console.log(result)
    };

    const handleDelete = async (id) => {
        const result = await deleteVideoApi(id)
        if (result.status >= 200 && result.status < 300) {
            setdeleteVideoStatus(result.data)
        }
    }
    const  videodrag=(e,items)=>{
        console.log(items)
        e.dataTransfer.setData('videoDetails',JSON.stringify(items))
    }

    return (
        <>

            <Card style={{ width: '100%' }} draggable onDragStart={e=>videodrag(e,items)}>
             { !ispresent &&  <Card.Img variant="top" src={items?.imageUrl} className='w-100' onClick={handleShow} />}
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title style={{ fontSize: '20px' }}>{items.caption}</Card.Title>

                {  !ispresent &&    <Button variant="danger" onClick={() => handleDelete(items?.id)} ><FontAwesomeIcon icon={faTrashCan} /></Button>}
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{items?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="438" src={`${items?.embedLinks}?autoplay=1`} title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Videocard
