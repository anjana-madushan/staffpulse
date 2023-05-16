/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import '../assets/styles.css';
import { useNavigate } from 'react-router-dom';

function AddEmpForm({ inputs, handleSubmit, handleChange }) {
  const navigate = useNavigate();
  const formatDate = (date) => {
    if (!date) return '';

    return new Date(date).toISOString().split('T')[0];
  };

  return (
    <div className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="fullName">Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter fullName"
            value={inputs.fullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="nameInitials">Name With Initials</Form.Label>
            <Form.Control
              type="text"
              name="nameInitials"
              id="nameInitials"
              placeholder="Enter nameInitials"
              value={inputs.nameInitials}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label htmlFor="preferredName">Preferred Name</Form.Label>
            <Form.Control
              type="text"
              name="preferredName"
              id="preferredName"
              placeholder="Enter Preferred Name"
              value={inputs.preferredName}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="gender">Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              id="gender"
              value={inputs.gender}
              onChange={handleChange}
            >
              <option>Select the Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label htmlFor="dob">Date of birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              id="dob"
              placeholder="Enter dob"
              value={formatDate(inputs.dob)}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={inputs.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label htmlFor="mobile">Mobile</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter mobile"
              value={inputs.mobile}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="designation">Designation</Form.Label>
            <Form.Control
              type="text"
              name="designation"
              id="designation"
              placeholder="Enter designation"
              value={inputs.designation}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label htmlFor="type">Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              id="type"
              value={inputs.type}
              onChange={handleChange}
            >
              <option>Employee Type</option>
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Contract Basis">Contract Basis</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="joinDate">Joined Date</Form.Label>
            <Form.Control
              type="date"
              name="joinDate"
              id="joinDate"
              placeholder="Enter joinDate"
              value={formatDate(inputs.joinDate)}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label htmlFor="experience">Experience</Form.Label>
            <Form.Control
              type="number"
              name="experience"
              id="experience"
              placeholder="Enter experience"
              value={inputs.experience}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group>
          <Form.Label htmlFor="salary">Salary</Form.Label>
          <Form.Control
            type="number"
            name="Salary"
            id="salary"
            placeholder="Enter Salary"
            value={inputs.Salary}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="notes">Personal Notes</Form.Label>
          <Form.Control
            as="textarea"
            name="notes"
            id="notes"
            placeholder="Enter notes"
            value={inputs.notes}
            onChange={handleChange}
            style={{ height: '100px' }}
          />
        </Form.Group>

        <br />

        <div className="btn_select">
          <Button type="submit" id="btn_cancel" onClick={() => navigate('/')}>Cancel</Button>
          <Button type="submit" variant="primary">Submit</Button>
        </div>

      </Form>
    </div>

  );
}

export default AddEmpForm;
