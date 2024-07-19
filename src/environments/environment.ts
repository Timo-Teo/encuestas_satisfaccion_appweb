const API_BASE_URL = 'http://localhost:8080/encuestas-satisfaccion/api';
const API_VERSION = 'v1';

export const environment = {
  API_BASE_URL,
  API_VERSION,
  API_URL: `${API_BASE_URL}/${API_VERSION}`,
  APP_VERSION: 'v1.0.0.20240719',
  PRODUCTION: false,
};
