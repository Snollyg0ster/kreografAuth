import {authCall} from './_call';

function Auth() {}

Auth.login = async (mail, pass) =>
  await authCall({
    mail,
    pass,
  });

export default Auth;
