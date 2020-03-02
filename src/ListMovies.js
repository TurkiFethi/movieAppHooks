import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import EditMovie from "./EditMovie";

export default function ListMovies(props) {




  return (
    <div>
      {props.listmovies.map((el, i) => (
        <div>
          <Card>
            <CardImg
              top
              width="20%"
              src={el.image}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{el.title}</CardTitle>
              <CardText> {el.description}</CardText>
              <Button onClick={()=> props.deleteMovie(i)} >Delete</Button>
              <EditMovie el={el} addMovieUpdate={props.addMovieUpdate} id={i}/>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
