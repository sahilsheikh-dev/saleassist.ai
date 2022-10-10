// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'https://platform.saleassist.ai';
// const BASE_URL = 'https://platform-stg.saleassist.ai';

const url = { 
  BASE: BASE_URL,
  BILLING: BASE_URL + '/billing',
  CLIENT_USER_MAPPINGS: BASE_URL + '/client_user_mappings',
  CLIENTS: BASE_URL + '/clients',
  CONSUMPTION_LOGS: BASE_URL + '/consumption_logs',
  EVENTS: BASE_URL + '/events',
  FORMS: BASE_URL + '/forms',
  FORM: BASE_URL + '/form',
  SOURCES: BASE_URL + '/sources',
  SOURCE: BASE_URL + '/source',
  MEETING_TOKENS: BASE_URL + '/meeting_tokens',
  MEETINGS: BASE_URL + '/meetings',
  MISSED_CALLS: BASE_URL + '/missed_calls',
  PAYMENT_PLANS: BASE_URL + '/payment_plans',
  PAYMENTS: BASE_URL + '/payments',
  STORAGE: BASE_URL + '/storage',
  USERS: BASE_URL + '/users',
  WEBHOOKS: BASE_URL + '/webhooks',
  INCOMING_WEBHOOKS: BASE_URL + '/incoming_webhooks'
};

const dev = {
  url: url,
}

const prod = {
  url: url,
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;