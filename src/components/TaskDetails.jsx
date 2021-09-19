import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handlebackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handlebackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum. Praesentium rem similique natus sed numquam impedit blanditiis earum cum veniam maiores dolore tempore, perspiciatis omnis beatae magnam alias consequuntur?</p>
            </div>
        </>
     );
}
 
export default TaskDetails;