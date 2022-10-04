export const obj_to_map = ( obj => {
  const mp = new Map;
  Object.keys ( obj ). forEach (k => { mp.set(k, obj[k]) });
  return mp;
});

export function objectLength(object) {
  var count = 0;
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      // If the key is found, add it to the total length
      count++;
    }
  }
  return count;
}

export function is_array(object) {
  // Only implement if no native implementation is available
  if (typeof Array.isArray === 'undefined') {
    Array.isArray = function(object) {
      return Object.prototype.toString.call(object) === '[object Array]';
    }
  } else {
    return Array.isArray(object);
  }
}

export function is_dictionary(object) {
  return object.constructor == Object
}