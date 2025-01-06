import './App.css';
import animal from './assests/item-6.jpg'
import rrr from './assests/download.jpeg'
import Bhahubali from './assests/download.webp'


function Tables() {
  
  const tableStyles = {
    borderCollapse: "collapse"
  }
  const thStyles = {
    "background-color": "lightblue",
    "border" : "2px solid black"
  }
  const tdStyles = {
    "border" : "2px solid black",
  }

  
  return (

    <div className="App">
      <h1>Task - 2 </h1>
      <h1>Movie Tables</h1>
      <table style={tableStyles}>
        <tr>
            <th style={thStyles}>Movie Name</th>
            <th style={thStyles}>Hero</th>
            <th style={thStyles}>Director</th>
            <th style={thStyles}>Poster</th>
        </tr>
        <tr>
          <td style={tdStyles}>Bhahubali</td>
          <td style={tdStyles}>Prabhas</td>
          <td style={tdStyles}>Rajamouli</td>
          <td style={tdStyles}><img src={Bhahubali} style={{height:"100px"}} alt='bahbubali'></img></td>
        </tr>
        <tr>
          <td style={tdStyles}>RRR</td>
          <td style={tdStyles}>NTR</td>
          <td style={tdStyles}>Rajamouli</td>
          <td style={tdStyles}><img src={rrr} style={{height:"100px"}} alt='RRR'></img></td>
        </tr>
        <tr>
          <td style={tdStyles}>Animal</td>
          <td style={tdStyles}>Ranbir</td>
          <td style={tdStyles}>Sandeep Reddy Vanga</td>
          <td style={tdStyles}><img src={animal} style={{height:"100px"}} alt="animal" /></td>
        </tr>
      </table>
    </div>
  );
}

export default Tables;

