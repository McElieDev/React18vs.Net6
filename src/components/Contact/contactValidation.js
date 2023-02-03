export default function validateForm({
  from_name,
  from_email,
  from_telephone,
  from_message,
}) {
  if (!from_name.trim()) {
    return "Username required";
  }

  if (!from_telephone.trim()) {
    return "Telephone Number required";
  }

  if (!from_message.trim()) {
    return "Write Message Required";
  }
  // else if (!/^[A-Za-z]+/.test(name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!from_email) {
    return "Email required";
  } else if (regex.test(from_email.toLocalLowerCase)) {
    return "Email address is invalid";
  }
  //   if (!password) {
  //     return "Password is required";
  //   } else if (password.length < 6) {
  //     return "Password needs to be 6 characters or more";
  //   }

  //   if (!confirmPass) {
  //     return "Enter Confirm password is required";
  //   } else if (confirmPass !== password) {
  //     return "Passwords do not match";
  //   }
  return null;
}
