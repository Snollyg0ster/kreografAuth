import {authCall, signupCall} from './_call';

function Auth() {}

Auth.login = async (mail, pass) =>
  await authCall({
    mail,
    pass,
  });

Auth.signup = async (mail, pass) =>
  await signupCall({
    mail,
    pass,
  });

export default Auth;
