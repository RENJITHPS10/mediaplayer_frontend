import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi';

function Watchhistory() {

  const [deletestatus, setdeletestatus] = useState(false)
  
  const [allHisVid, setallHisVid] = useState([])
  const getAllHistoryVideos = async () => {
    const result = await getAllVideoHistoryApi()
    setallHisVid(result.data)

  }
  const handleDel = async (id) => {
    const result = await deleteHistoryVideoApi(id)
    if (result.status >= 200 && result.status < 300) {
      setdeletestatus(true)
    }
  }
  console.log(allHisVid)
  useEffect(() => {
    getAllHistoryVideos()
    setdeletestatus(false)
  }, [deletestatus])


  return (
    <>
      <div className='p-4'>
        <div className='d-flex mt-5 '>
          <h4>Watch History</h4>
          <Link to={'/home'} style={{ textDecoration: 'none' }} className='ms-auto'> <h5> <FontAwesomeIcon icon={faHouse} className='me-2' />Back Home</h5></Link>
        </div>
      </div>
      <div className='container '>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 table-responsive">
            {allHisVid.length > 0 ?
              <Table striped bordered hover >
                <thead>
                  <tr>
                    <th>Si.no</th>
                    <th>Caption</th>
                    <th>Url</th>
                    <th>Timestamp</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allHisVid.map(item => (
                    <tr>

                      <td>{item.id}</td>
                      <td>{item.Caption}</td>
                      <td>{item.url}</td>
                      <td>{item.time}</td>
                      <td className='text-center'> <Button variant="danger" onClick={() => { handleDel(item.id) }} ><FontAwesomeIcon icon={faTrashCan} /></Button></td>

                    </tr>
                  ))}
                </tbody>
              </Table>
              :
              <h3 className='text-warning text-center'>NO watch history</h3>
            }
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

    </>
  )
}

export default Watchhistory
