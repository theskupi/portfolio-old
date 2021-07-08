import * as yup from 'yup';
import { cContactForm } from './constants';

export const Schema = yup
  .object({
    [cContactForm.name]: yup.string().required(),
    [cContactForm.email]: yup.string().email().required(),
    [cContactForm.message]: yup.string().required(),
    [cContactForm.captcha]: yup.string().required(),
  })
  .required();
