const fetch = require('isomorphic-fetch');

// todo: add mailchimp list credentials
const MAILCHIMP_INSTANCE = 'us15';
const MAILCHIMP_KEY = 'add_key_here';

async function sendContactForm(contents = {}) {
  const { listId = null, email = null, message = null } = contents;
  let status = false;

  if (!listId || !email || !message) {
    return {
      status: false,
    }
  }

  const url = 'https://' + MAILCHIMP_INSTANCE + '.api.mailchimp.com/3.0/lists/' + listId + '/members';

  const user = {
    email_address: email,
    message,
  };

  try {
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from('anystring:' + MAILCHIMP_KEY).toString('base64'), 
      },
      body: JSON.stringify(user),
    });

    if (req && !req.ok) {
      status = false;
    } else {
      status = true;
    }
  } catch (e) {
    console.warn(e);
    status = false;
  }

  return {
    status,
  }
}

module.exports = {
  sendContactForm
};