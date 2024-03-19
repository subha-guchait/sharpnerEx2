function printPatientDetails(event) {
  event.preventDefault();
  console.log(event.target.u_name.value);
  console.log(event.target.u_email.value);
  console.log(event.target.u_phone.value);
  console.log(event.target.u_date.value);
  console.log(event.target.u_time.value);
}
