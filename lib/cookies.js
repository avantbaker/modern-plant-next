import isServer from "./isServer";

const setCookie = (name, value, days) => {
  if (!isServer) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value || ""} ${expires}; path=/`;
  }
};

const getCookie = (name, cookieList) => {
  console.log(isServer);
  if (!isServer) {
    const nameEQ = `${name}=`;
    console.log('ca', document.cookie);

    return null;
    const ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
  } else {
    const nameEQ = `${name}=`;
    const ca = cookieList.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
  }
  return null;
};

const eraseCookie = (name) => {
  if (!isServer) {
    document.cookie = `${name}=; Max-Age=-99999999;`;
  }
};

const hasCookie = (context) => {
  if (isServer) {
    return context && context.req && context.req.headers && context.req.headers.cookie;
  }

  return window && window.document && window.document.cookie;
}


export default { setCookie, getCookie, eraseCookie, hasCookie };