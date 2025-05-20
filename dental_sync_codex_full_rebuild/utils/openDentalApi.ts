import axios from 'axios';

const OPEN_DENTAL_API_KEY = process.env.OPENDENTAL_API_KEY || '';
const API_BASE = 'https://api.opendental.com/api/v1/';

export const getPatients = async () => {
  return axios.get(`${API_BASE}patients`, {
    headers: {
      Authorization: `ODFHIR ${OPEN_DENTAL_API_KEY}`
    }
  }).then(res => res.data);
};

export const createAppointment = async (data) => {
  return axios.post(`${API_BASE}appointments`, data, {
    headers: {
      Authorization: `ODFHIR ${OPEN_DENTAL_API_KEY}`
    }
  }).then(res => res.data);
};
