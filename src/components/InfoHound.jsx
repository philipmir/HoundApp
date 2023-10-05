import React from 'react';

const InfoHound = (props) => {

  const handleGoBackz = () => {
    props.goBack();
  
  };

  

  return (
    <div>
     
      <h2>{props.selectedHound.name}</h2>
      <img src={props.selectedHound.img} />
      <p><strong>Breed:</strong> {props.selectedHound.breed}</p>
      <p><strong>Age:</strong> {props.selectedHound.age}</p>
      <p><strong>Sex:</strong> {props.selectedHound.sex}</p>
      <button onClick={handleGoBackz}>Back</button>
      
    </div>
  );
};

export default InfoHound;


