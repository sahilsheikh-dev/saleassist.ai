const validateEmail = (email) => {
    var pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(email);
  }
  const validateNumber = (number) => {
    var pattern = /^[0-9\b]+$/;     
    return pattern.test(number)
  }
  const CountryCode = (countryCode) => {
    var pattern =  /^(\+?\d{0,3}|\d{1,4})$/;     
    return pattern.test(countryCode)
  }
  const validatePanCard = (panCard) => {
    var pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    return pattern.test(panCard);
  }
  const validateCharNumber = (str) => {
    var pattern = /^[A-Za-z0-9\b]+$/;     
    return pattern.test(str);
  }
  const validateChar = (str) => {
    var pattern = /^[A-Za-z \b]+$/;     
    return pattern.test(str);
  }
  const ValidateDecimal = (str) => {
    var pattern = /(?=[^\0])(?=^([0-9]+){0,1}(\.[0-9]{1,2}){0,1}$)/;
    return pattern.test(str)
  }
  const validateText = (str) => {
    var pattern = /^[A-Za-z0-9 @%()_\-.,\b]+$/;     
    return pattern.test(str);
  }
  const validateAddress = (str)=>{
    var pattern = /^[^<>"'&]+$/
    return pattern.test(str);
}
  
const validateListingLeadForm = (props) => {
    let ERROR = false
    let errors = {};
    if (props.hasOwnProperty('name') && props.fullName === '') {
      ERROR = true
      errors.fullName = "Please enter full name";
    }
    if (props.hasOwnProperty('mobile_number') && (props.mobile === '' || (props.mobile && props.mobile.length < 10 && props.mobile !== '') || !validateNumber(props.mobile))) {
      ERROR = true
      errors.mobile = "Please enter valid mobile number";
    }else{
        if (props.hasOwnProperty('otpVerified') && !props.otpVerified) {
            ERROR = true
            errors.otpVerified = "Please verify your mobile";
        }
    }
    if (props.hasOwnProperty('email') && (props.email === '' || !validateEmail(props.email))) {
      ERROR = true
      errors.email = "Please enter valid email";
    }
    if (props.hasOwnProperty('companyName') && (props.companyName === '' || !validateEmail(props.companyName))) {
      ERROR = true
      errors.email = "Please enter your company name";
    }
    if (props.hasOwnProperty('websiteName') && (props.websiteName === '' || !validateEmail(props.websiteName))) {
      ERROR = true
      errors.email = "Please enter your website name";
    }
    
    return {ERROR, errors}; 
}

  
  
  
  
  export default { 
    validateNumber,
    validateEmail,
    validatePanCard,
    validateCharNumber,
    validateChar,
    ValidateDecimal,
    validateText,
  validateAddress,
  CountryCode
  }
  