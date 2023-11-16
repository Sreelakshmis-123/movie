import { Modal,show,Button } from "react-bootstrap";
import React, { useState } from "react";
import { ModalBody } from "react-bootstrap";
const API_IMG="https://image.tmdb.org/t/p/w500/"
const MovieBox =({title,poster_path,vote_average,release_data,overview})=>{
    const [show,setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false)
    
    return(
        <div className="card text-center bg-secondary mb-3"> 
        <div className="card-body">
            <img className="card-img-top" src={API_IMG+poster_path}/>
            <div className="card-body">
                <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <ModalBody>
                        <img className="card-img-top"style={{width:'14rem'}} src={API_IMG+poster_path}/>
                        <h3>{title}</h3>
                        <h4>IMDB:{vote_average}</h4>
                        <h5>Release Data:{release_data}</h5>
                        <br></br>
                        <h6>Overview</h6>
                        <p>{overview}</p>
                    </ModalBody>
                    <Modal.Footer>
                        <Button varient="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
       

        </div>
    )
}
export default MovieBox;