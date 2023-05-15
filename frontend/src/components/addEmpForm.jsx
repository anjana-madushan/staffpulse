import React from 'react';

function AddEmpForm({ inputs, handleSubmit, handleChange }) {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name
          <input
            value={inputs.fullName}
            type="text"
            name="fullName"
            className="form-control"
            id="fullName"
            placeholder="Enter fullName"
            onChange={handleChange}
          />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="nameInitials">
            Name With Initials
            <input
              value={inputs.nameInitials}
              type="text"
              name="nameInitials"
              className="form-control"
              id="nameInitials"
              placeholder="Enter nameInitials"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="preferredName">
            Preferred Name
            <input
              value={inputs.preferredName}
              type="text"
              name="preferredName"
              className="form-control"
              id="preferredName"
              placeholder="Enter Preferred Name"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender

          <select name="gender" value={inputs.gender} onChange={handleChange}>
            <option>Select the Gender</option>
            <option value="male">Male</option>
            <option value="female">Femal</option>
          </select>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email
          <input
            value={inputs.email}
            type="email"
            name="email"
            min={100}
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of birth
          <input
            type="date"
            value={inputs.dob}
            className="form-control"
            name="dob"
            id="dob"
            placeholder="Enter dob"
            onChange={handleChange}
          />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="mobile">mobile
          <input
            type="text"
            value={inputs.mobile}
            className="form-control"
            name="mobile"
            id="mobile"
            placeholder="Enter mobile"
            onChange={handleChange}
          />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation
          <input
            type="text"
            value={inputs.designation}
            className="form-control"
            name="designation"
            id="designation"
            placeholder="Enter designation"
            onChange={handleChange}
          />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="type">Type

          <select name="type" value={inputs.type} onChange={handleChange}>
            <option>Employee Type</option>
            <option value="fulltime">Full time</option>
            <option value="parttime">Part time</option>
            <option value="ContractBasis ">Contract Basis </option>
            <option value="other">Other</option>
          </select>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="experince">Experince
          <input
            type="number"
            value={inputs.experience}
            className="form-control"
            name="experience"
            id="experince"
            placeholder="Enter experince"
            onChange={handleChange}
          />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="joinDate">Joined Date
          <input
            type="date"
            value={inputs.joinDate}
            className="form-control"
            name="joinDate"
            id="joinDate"
            placeholder="Enter joinDate"
            onChange={handleChange}
          />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="Salary">Salary
          <input
            type="text"
            value={inputs.Salary}
            className="form-control"
            name="Salary"
            id="Salary"
            placeholder="Enter Salary"
            onChange={handleChange}
          />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="note">Personal Notes
          <input
            type="text"
            value={inputs.notes}
            className="form-control"
            name="notes"
            id="note"
            placeholder="Enter note"
            onChange={handleChange}
          />
          </label>
        </div>

        <br />

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddEmpForm;
