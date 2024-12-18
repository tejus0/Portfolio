import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      {/* Project Image */}
      <Card.Img variant="top" src={props.imgPath} alt={`${props.title} image`} />
      <Card.Body>
        {/* Project Title */}
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          {props.title}
        </Card.Title>

        {/* Project Description */}
        <Card.Text style={{ textAlign: "justify", fontSize: "1rem" }}>
          {props.description}
        </Card.Text>

        {/* Key Features */}
        {props.features && (
          <div>
            <h6 style={{ fontWeight: "bold", marginTop: "10px" }}>
              Key Features:
            </h6>
            <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
              {props.features.map((feature, index) => (
                <li key={index} style={{ marginBottom: "5px" }}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons for GitHub and Demo */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* GitHub Link */}
          {props.ghLink && (
            <Button variant="dark" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {/* Demo Link */}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
