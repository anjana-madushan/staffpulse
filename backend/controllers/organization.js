/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable max-len */

import Organization from '../model/organizations.js';

export const createOrganization = async (req, res) => {
  try {
    const {
      name, description,
    } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' });
    }
    const organization = new Organization({
      name,
      description,
    });
    await organization.save();
    return res.status(201).json({ organization });
  } catch (error) {
    console.error('Error creating organization:', error);
    return res.status(500).json({ message: 'Server error. Unable to create organization' });
  }
};
