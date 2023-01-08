export const withAuth = (gssp: any) => {
  return async (context: any) => {
    const { req, res } = context;

    const token = req.cookies["@emorio.token"];

    if (!token) {
      return {
        redirect: {
          destination: "/",
          statusCode: 302,
        },
      };
    }

    const gsspData = await gssp(context);

    return {
      props: {
        ...gsspData.props,
      },
    };
  };
};

export const noAuth = (gssp: any) => {
  return async (context: any) => {
    const { req, res } = context;

    const token = req.cookies["@emorio.token"];

    if (token) {
      return {
        redirect: {
          destination: "/",
          statusCode: 302,
        },
      };
    }

    const gsspData = await gssp(context);

    return {
      props: {
        ...gsspData.props,
      },
    };
  };
};
