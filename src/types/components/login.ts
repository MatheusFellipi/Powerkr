type Login = {
  email: string;
  password: string;
};

type LoginDataReturn = {
  user: {
    email: string;
    department: string;
    name: string;
    company: string;
    urlImg: string;
  };
  token: string;
};
