/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
export const validateEmail = (email) => {
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return emailRegex.test(email);
};

export const validateNotFutureDate = (date) => {
  const currentDate = new Date();
  return date <= currentDate;
};

export const validateMobileNumber = (mobile) => {
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
};

const validGenders = ['Male', 'Female'];

export const validateGender = (gender) => {
  return validGenders.includes(gender);
};

// eslint-disable-next-line no-restricted-globals
export const validateExperience = (experience) => { return !isNaN(experience); };

const validTypes = ['Full time', 'Part time', 'Contract Basis', 'Other'];

export const validateType = (type) => { return validTypes.includes(type); };

export const validateSalary = (salary) => {
  const salaryRegex = /^\d+(\.\d{1,2})?$/;
  return salaryRegex.test(salary);
};

const maxNotesLength = 500;
export const validateNotesLength = (notes) => { return notes.length <= maxNotesLength; };
