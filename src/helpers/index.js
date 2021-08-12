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

// const lastItems = [pages - 2, pages - 1, pages];

// for (let i = active; i <= pages; i++) {
//   if (arr.length < shownPageNumbers) {
//     arr.push(i);
//   } else {
//     const included = lastItems.filter((el) => arr.includes(el));
//     const nonIncluded = lastItems.filter((el) => !arr.includes(el));
//     if (included) {
//       arr.push(...nonIncluded);
//     } else {
//       arr.push('...');
//       arr.push(...lastItems);
//     }
//     break;
//   }
// }

export const paginationList = (currentPage, pageCount) => {
  let delta = 2,
    left = currentPage - delta,
    right = currentPage + delta + 1,
    result = [];

  result = Array.from({ length: pageCount }, (v, k) => k + 1).filter(
    (i) => i && i >= left && i < right
  );

  if (result.length > 1) {
    // Add first page and dots
    if (result[0] > 1) {
      if (result[0] > 2) {
        result.unshift('...');
      }
      result.unshift(1);
    }

    // Add dots and last page
    if (result[result.length - 1] < pageCount) {
      if (result[result.length - 1] !== pageCount - 1) {
        result.push('...');
      }
      result.push(pageCount);
    }
  }

  return result;
};
