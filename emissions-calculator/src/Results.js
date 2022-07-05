import { Button, Row, Col } from 'antd';
import { useState } from 'react';
import { form_render } from './Objects';

const Results = (housingemissions, travelemissions, foodemissions, valuesChanged, setValuesChanged) => {
  // the calculated emissions value that returns from the api call
  const [calculatedEmissions, setCalculatedEmissions] = useState(0);

  // calls api with full emissions object
  // sets valid response to state var and sets valueschanged var to rerender the calculated value
  const GetResults = async () => { 
    await fetch('http://127.0.0.1:8000/calculations/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ... housingemissions, ... travelemissions, ... foodemissions })
    })
      .then(response => {
        if (response.status == 400) throw new Error("Bad Request")
        return response.json()
      })
      .then(data => {
        setCalculatedEmissions(data)
        setValuesChanged(false)
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div>
      {(!valuesChanged) ? <p style={{ fontSize: 50, textAlign: 'center'}}>{calculatedEmissions} kg CO2e / year</p> : <p></p>}
      <Row>
        <Col offset={2} span={6}>
          <p style={{ fontWeight: 'bold' }}>Housing Emissions</p>
          {form_render[1].map(field => {return <p>{`${field.label}: ${housingemissions[field.name]}`}</p>})}
        </Col>
        <Col offset={2} span={6}>
          <p style={{ fontWeight: 'bold' }}>Travel Emissions</p>
          {form_render[2].map(field => {return <p>{`${field.label}: ${travelemissions[field.name]}`}</p>})}
        </Col>
        <Col offset={2} span={6}>
          <p style={{ fontWeight: 'bold' }}>Food Emissions</p>
          {form_render[3].map(field => {return <p>{`${field.label}: ${foodemissions[field.name]}`}</p>})}
        </Col>
      </Row>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={GetResults}>
          Get results for above values
        </Button>
    </div>
</div>
)};

export default Results;