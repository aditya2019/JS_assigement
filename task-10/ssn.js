function securitycheck(ssn){
var pattern = /^\d{3}-\d{2}-\d{4}$/;
if(ssn.match(pattern))
  return "OK";
else
  return "Not OK";
}
  console.log(securitycheck("444-55-3333"));
