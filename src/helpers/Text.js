export function isEmail(text) {
  return RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(text);
}

export function isPhoneNumber(text) {
  text = text.replace(/[.\s-]/g,'');
  return RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,16}$/i).test(text);
}

export function isName(text){
  return RegExp(/^[a-zA-Z]+[-'\s]?[a-zA-Z ]+$/i).test(text);
}

export function underscore_to_camel(text) {
  return text.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export function underscoreToSpacedCamel(text){
  if(!text) {return text;}
  return text.replace(/_([a-z])/g, function (g) { return " " + g[1].toUpperCase(); });
}

export function underscoreToSpacedCapCamel(text){
  if(!text) {return text;}
  text = text.replace(/_([a-z])/g, function (g) { return " " + g[1].toUpperCase(); });
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function underscore_to_hyphen(text) {
  return text && text.replace(/_/g, "-")
}

export function matches_pattern(value, pattern) {
  if(pattern === "*") {
    return true
  }
  return value.includes(pattern);
}

export const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

export const validateFields = (lead_data) => {
  const validations = [];
  Object.keys(lead_data).forEach(key => {
    if(key.toLowerCase().includes("email")) {
      if(!isEmail(lead_data[key])) {
        validations.push("Please enter a valid email address.");
      }
    } else if(key.toLowerCase().includes("phone") || key.toLowerCase().includes("mobile")) {
      if(!isPhoneNumber(lead_data[key])) {
        validations.push("Please enter a valid phone number.");
      }
    } else if(key.toLowerCase().includes("name")) {
      if(lead_data[key].trim().length === 0) {
        validations.push("Please enter the " + underscoreToSpacedCapCamel(key));
      }
    }
  });
  return validations;
}