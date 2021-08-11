import * as dayjs from 'dayjs';

export const isBrowser = () => typeof window !== 'undefined';

export const placeholders = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
];

export const deleteInvitation = (data) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: data.email }),
  };
  fetch('/delete-invite', requestOptions);
};
export const formatDate = (date) => dayjs(date).format('MMM DD, YYYY');
