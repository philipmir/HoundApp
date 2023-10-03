import React from 'react';

const InfoHound = (props) => {
  const handleGoBack = () => {
    props.goBack();
    props.setSelectedHound(HOUND);
    
  };

  const { name, img, breed, age, sex } = props.selectedHound;

  return (
    <div2>
     

     
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p><strong>Breed:</strong> {breed}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Sex:</strong> {sex}</p>
      <button onClick={handleGoBack}>Back</button>
      
    </div2>
  );
};

export default InfoHound;


