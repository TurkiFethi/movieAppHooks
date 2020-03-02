import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AddMovie = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

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

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
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
          <Button color="primary" onClick={()=>{props.addMovie({image,title,description});toggle()}}>
            Add Movie
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddMovie;
