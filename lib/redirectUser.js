import cookies from './cookies';

const redirectUser = async (ctx) => {
  if (ctx.req) {
    const isAccountPage = ctx.req.url.includes("/account");
    const isLoginPage = ctx.req.url.includes("/login");
    console.log('ctx.req', ctx.req.url, isAccountPage);
    const token = cookies.hasCookie(ctx) && cookies.getCookie('accessToken', cookies.hasCookie(ctx));

    if (isLoginPage && token) {
      ctx.res.writeHead(307, { Location: `/account/${token}` });
      ctx.res.end();
    }
    // denies all access to protected routes if access token is null
    if (
      isAccountPage && !token
    ) {
      ctx.res.writeHead(307, { Location: "/" });
      ctx.res.end();
    }
  }

  return;
};

export default redirectUser;