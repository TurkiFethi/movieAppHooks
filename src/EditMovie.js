import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditMovie = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(props.el.title);
  const [image, setImage] = useState(props.el.image);
  const [description, setDescription] = useState(props.el.description);

  const toggle = () => setModal(!modal);

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

 const handleChangeImage = e => {
    setImage(e.target.value);
  };

 const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const setMovie=(id)=>{
     let movie={
         title:title,
         image:image,
         description:description
     }
     props.addMovieUpdate(movie,id)
  }

  return (
    <div>
      <Button  onClick={toggle}>
        Edit Movie 2
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <input
            placeholder="please type the title"
            onChange={e => handleChangeTitle(e)}
            value={title}
          />
          <input
            placeholder="please type the image"
            onChange={e => handleChangeImage(e)}
            value={image}
          />
          <input
            placeholder="please type the description"
            onChange={e => handleChangeDescription(e)}
            value={description}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary"  onClick={()=>{setMovie(props.id);toggle()}}>
            Save Movie 
          </Button>{" "}
          <Button color="secondary">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditMovie;
