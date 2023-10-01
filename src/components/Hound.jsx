import React, { useState } from 'react';

const Hound = (props) => {
  const apiUrl = 'https://api.jsonbin.io/v3/b/650d72590574da7622aeb069';

  const [selectedHound, setSelectedHound] = useState(null);

  const handleFetch = async e => {
    const button = document.getElementById('fetch');
    console.log('1. Clicked');

    const response = await fetch(apiUrl);
    console.log('2. Response:', response);

    const houndData = await response.json();
    console.log('3. Data:', houndData);

    const hounds = houndData.record;
    console.log('4. Hounds:', hounds);
    createHounds(hounds);


  };

  const handleHoundClick = (hound) => {
    setSelectedHound(hound);
    props.nextScreen(); // Navigate to InfoHound component when a hound is clicked
  };



const createHounds = (hounds) => {
    const questionContainer = document.getElementById('hounds');

    hounds.forEach(hound => {
        const houndElement = createHoundElement(hound);
        questionContainer.appendChild(houndElement);
        
    });

};

const createHoundElement = (hound) => {
    const houndElement = document.createElement('div');
    houndElement.classList.add('hound');

    const houndHeading = document.createElement('h2');
    houndHeading.textContent = hound.name;

    const houndImage = document.createElement('img');
    houndImage.src = hound.img;


    houndImage.addEventListener('click', () => handleHoundClick(hound));
    
    

    houndElement.appendChild(houndImage);
    houndElement.appendChild(houndHeading);
    


    return houndElement;

};

  

return (
    <main id='hounds'>
      <section>
        <h2>Välkommen till Hund-loggen</h2>
        <p>Ska vi se vilka hundar som finns?</p>
        <button id='fetch' onClick={handleFetch}>Fetch</button>
        <button onClick={props.nextScreen}>Ja!</button>
      </section>
      {selectedHound && (
        <div>
          <h2>{selectedHound.name}</h2>
          <img src={selectedHound.img} alt={selectedHound.name} />
          {/* Add additional information about the selected hound here */}
        </div>
      )}
    </main>
  );
};

export default Hound;













// import React, { useState } from 'react';

// const Hound = (props) => {
//   const [houndData, setHoundData] = useState(null);

//   const handleFetch = async () => {
//     const apiUrl = 'https://api.jsonbin.io/v3/b/650d72590574da7622aeb069';

//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const responseData = await response.json();
//       setHoundData(responseData.record);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Hounds</h2>
//       <button onClick={props.nextScreen}>Info</button>
//       <button id='fetch' onClick={handleFetch}>Fetch</button>
//       {houndData ? (
//         <div>
//           <ul>
//             {houndData.map((hound, index) => (
//               <li key={index}>
//                 <h3>Name: {hound.name}</h3>
//                 <p>Sex: {hound.sex}</p>
//                 <p>Breed: {hound.breed}</p>
//                 <img onClick={props.nextScreen} src={hound.img} alt={hound.name} />
//                 <p>Age: {hound.age}</p>
//                 <p>Chip Number: {hound.chipNumber}</p>
//                 <p>Owner: {hound.owner.name} {hound.owner.lastName}</p>
//                 <p>Phone Number: {hound.owner.phoneNumber}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No hound data available.</p>
//       )}
//     </div>
//   );
// };

// export default Hound;
