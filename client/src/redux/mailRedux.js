import { config } from '../../../client/src/clientConfig';

/* SELECTORS */

/* ACTIONS */
const createActionName = (actionName) => `mail/${actionName}`;
const SEND_MAIL = createActionName('SEND_MAIL');

/* ACTION CREATORS */
export const sendMail = (payload) => ({ type: SEND_MAIL, payload });

/* THUNKS */

export const postMailRequest = (mail) => {
  return async (dispatch) => {
    const recaptchaToken = await window.grecaptcha?.enterprise.execute(
      config.reCaptchaSiteKey,
      { action: 'SUBMIT' }
    );
    const mailToken = { ...mail, token: recaptchaToken };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailToken),
    };

    fetch(`http://localhost:8000/mail`, options).then((res) => {
      if (res.status === 200) {
        dispatch(sendMail(mail));
      }
    });
  };
};

/* INITIAL STATE */

const initialState = {
  data: [{ test: 'works' }],
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SEND_MAIL:
      return { ...statePart, data: [action.payload] };
    default:
      return statePart;
  }
}
