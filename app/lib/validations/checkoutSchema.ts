import Joi from 'joi'

export const checkoutSchema = Joi.object({
    firstName: Joi.string().trim().required().label("First Name"),
    lastName: Joi.string().trim().required().label("Last Name"),
    email: Joi.string().email({ tlds: { allow: false } }).trim().required().label('Email Address'),
    phone: Joi.string().trim().required().label('Phone Number'),
    company: Joi.string().trim().required().label('Company'),
    country: Joi.string().trim().required().label('Country'),
    state: Joi.string().trim().required().label('State'),
    city: Joi.string().trim().required().label('City'),
    zipCode: Joi.string().trim().required().label('Zip Code'),
    address: Joi.string().trim().required().label('Address'),
})