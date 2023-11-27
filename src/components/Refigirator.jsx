import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';

const FridgeForm = () => {
  const [formData, setFormData] = useState({
    location: null,
    address: '',
    brandName: null,
    modelName: '',
    complaint: '',
    phoneNumber: '',
    date: '',
  });

  const locationOptions = [
    {label: 'Coimbatore' },
    {label: 'Chennai' },
    {label: 'Salem' },
    {label: 'Tuticorin'},
    {label: 'Madurai'},
    {label: 'Thirunelveli'}
  ];

  const brandOptions = [
    {label: 'LG' },
    {label: 'Samsung' },
    {label: 'Whirpool' },
    {label: 'Godrej' },
    {label: 'BlueStar' },
    {label: 'Kent' },
  ];

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div style = {{display : 'flex', justifyContent : 'flex-start',backgroundColor : '#c0fad0'}}>

      <Box style = {{marginTop: '40px', width : '1000px'}}>
      <Typography
            variant="h1"
            fontFamily={"Poppins"}
            style={{ padding: "80px" }}
          >
            Fill out the form and get your Refrigirator Repaired{" "}
          </Typography>
      </Box>
    <FormContainer style = {{marginTop : '20px'}}>
      <FormTitle>Refrigerator Repair Form</FormTitle>
      <Stack align={'flex-start'}>
        
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputLabel htmlFor="location">Location:</InputLabel>
          <Autocomplete
            fullWidth
            id="location"
            options={locationOptions}
            getOptionLabel={(option) => option.label}
            onChange={(_, value) => handleChange('location', value)}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="address">Address:</InputLabel>
          <br></br>
          <TextField
            fullWidth
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="brandName">Brand Name:</InputLabel>
          <Autocomplete
            fullWidth
            id="brandName"
            options={brandOptions}
            getOptionLabel={(option) => option.label}
            onChange={(_, value) => handleChange('brandName', value)}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="modelName">Model Name:</InputLabel>
          <br></br>
          <TextField
            fullWidth
            id="modelName"
            name="modelName"
            value={formData.modelName}
            onChange={(e) => handleChange('modelName', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="complaint">Complaint:</InputLabel>
          <br></br>
          <TextField
            fullWidth
            id="complaint"
            name="complaint"
            multiline
            rows={4}
            value={formData.complaint}
            onChange={(e) => handleChange('complaint', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="phoneNumber">Phone Number:</InputLabel>
          <br></br>
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="date">Service Date:</InputLabel>
          <br></br>
          <TextField
            fullWidth
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      </Stack>

    </FormContainer>
    </div>
  );
};

const FormContainer = styled.div`
  width: 600px;
  padding: 60px;
  background-color: #f0f0f0;
  border-radius: 8px;
  font-family: 'Poppins'
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;   

export default FridgeForm;
