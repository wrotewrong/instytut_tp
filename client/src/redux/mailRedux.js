/* SELECTORS */

/* ACTIONS */
const createActionName = (actionName) => `mail/${actionName}`;
const SEND_MAIL = createActionName('SEND_MAIL');

/* ACTION CREATORS */
export const sendMail = (payload) => ({ type: SEND_MAIL, payload });

/* THUNKS */

export const postMailRequest = (mail) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mail),
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
