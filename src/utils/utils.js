export const addCustomScript = src => {
  let recaptchaScript = document.createElement('script');
  recaptchaScript.setAttribute('src', src);
  recaptchaScript.async = true;
  document.head.appendChild(recaptchaScript);
};

import { isPast, format } from 'date-fns';
import store from '@/store';

// export let msToTime = (duration) => {
//   //   var milliseconds = parseInt((duration % 1000) / 100),
//   (seconds = Math.floor((duration / 1000) % 60)),
//     (minutes = Math.floor((duration / (1000 * 60)) % 60)),
//     (hours = Math.floor((duration / (1000 * 60 * 60)) % 24));

//   return (
//     (hours > 0 ? (hours != 1 ? hours + " horas " : hours + " hora ") : "") +
//     (minutes > 0 ? minutes + " minutos" : "") +
//     (seconds > 0 ? seconds + " segundos" : "")
//   );
//   // seconds +
//   // " segundos"
// };

// export const isLogged = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post("/api/users/logged")
//       .then((res) => {
//         if (res.data.ok) {
//           resolve(res.data.payload);
//         } else {
//           resolve(false);
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         reject(err);
//       });
//   });
// };

// const localesDateFns = {
//     en: require('date-fns/locale/en'),
//     es: require('date-fns/locale/es')
// }

export const getFormat = (date, formatStr) => {
  // return format(date, formatStr, {
  //     locale: localesDateFns[window.__localeId__]
  // })
  return format(date, formatStr);
};

export const formatErrorMessages = (translationParent, msg) => {
  const errorArray = [];
  // Check for error msgs
  if (msg !== null) {
    const json = JSON.parse(JSON.stringify(msg));
    // If error message is an array, then we have mutiple errors
    if (Array.isArray(json)) {
      json.map(error => {
        errorArray.push(`${error.msg}`);
      });
    } else {
      // Single error
      errorArray.push(`${msg}`);
    }
    return errorArray;
  }
  // all good, return null
  return null;
};

export const buildPayloadPagination = (pagination, search) => {
  const { page, itemsPerPage } = pagination;
  let { sortDesc, sortBy } = pagination;

  // When sorting you always get both values
  if (sortBy && sortDesc)
    if (sortBy.length === 1 && sortDesc.length === 1) {
      // Gets order
      sortDesc = sortDesc[0] === true ? -1 : 1;
      // Gets column to sort on
      sortBy = sortBy ? sortBy[0] : '';
    }

  let query = {};

  // If search and fields are defined
  if (search) {
    query = {
      sort: sortBy,
      order: sortDesc,
      page,
      limit: itemsPerPage,
      filter: search.query,
      fields: search.fields,
    };
  } else if (sortBy && sortDesc) {
    // Pagination with no filters
    query = {
      sort: sortBy,
      order: sortDesc,
      page,
      limit: itemsPerPage,
    };
  } else {
    query = {
      page,
      limit: itemsPerPage,
    };
  }
  return query;
};

// Catches error connection or any other error (checks if error.response exists)
export const handleError = (error, commit, reject) => {
  let errMsg = '';
  // Resets errors in store
  commit('loadingModule/showLoading', false, { root: true });
  commit('errorModule/error', null, { root: true });
  console.log('sucedio un error....');
  console.log('el error: ', error);
  // Checks if unauthorized
  if (error.response.status === 401) {
    store.dispatch('authModule/logout', { root: true });
  } else {
    // Any other error
    errMsg = error.response
      ? error.response.data.errors.msg
      : 'SERVER_TIMEOUT_CONNECTION_ERROR';
    setTimeout(() => {
      return errMsg
        ? commit('errorModule/error', errMsg, { root: true })
        : commit('errorModule/showError', false, { root: true });
    }, 0);
  }
  reject(error);
};

export const buildSuccess = (msg, commit) => {
  commit('loadingModule/showLoading', false, { root: true });
  commit('successModule/success', null, {
    root: true,
  });
  setTimeout(() => {
    return msg
      ? commit('successModule/success', msg, { root: true })
      : commit('successModule/showSuccess', false, { root: true });
  }, 0);
  commit('errorModule/error', null, { root: true });
};

// Checks if tokenExpiration in localstorage date is past, if so then trigger an update
export const checkIfTokenNeedsRefresh = () => {
  // Checks if time set in localstorage is past to check for refresh token
  if (
    window.localStorage.getItem('token') !== null &&
    window.localStorage.getItem('tokenExpiration') !== null
  ) {
    if (
      isPast(
        new Date(
          JSON.parse(window.localStorage.getItem('tokenExpiration')) * 1000,
        ),
      )
    ) {
      store.dispatch('refreshToken');
    }
  }
};
