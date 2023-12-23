"use client";
import { createRouteLoader } from "next/dist/client/route-loader";
import { supabase } from "../supabasekeys";
import { useRouter } from "next/navigation";

// prettier-ignore
let passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");

async function signUpNewUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    console.log(error.error_description || error.message);
  }
}

function signUpChecker(passwordOne, passwordTwo) {
  if (passwordOne === passwordTwo) {
    // prettier-ignore
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(passwordOne);
  } else return "passwordMismatch";
}

export default signUpChecker;
export { signUpNewUser };
