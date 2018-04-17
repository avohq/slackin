window.avoAssertJs = {}
avoAssertJs.assertString = function assertString (propName, str) {
  if (typeof str !== 'string') {
    console.warn(
      propName +
        ' should be of type string but you provided type ' +
        typeof str +
        ' with value ' +
        JSON.stringify(str)
    )
  }
}

avoAssertJs.assertInt = function assertInt (propName, int) {
  if (typeof int === 'number' && int !== Math.round(int)) {
    console.warn(
      propName +
        ' should be of type int but you provided type float with value ' +
        JSON.stringify(int)
    )
  } else if (typeof int !== 'number') {
    console.warn(
      propName +
        ' should be of type int but you provided type ' +
        typeof int +
        ' with value ' +
        JSON.stringify(int)
    )
  }
}

avoAssertJs.assertFloat = function assertFloat (propName, float) {
  if (typeof float !== 'number') {
    console.warn(
      propName +
        ' should be of type float but you provided type ' +
        typeof float +
        ' with value ' +
        JSON.stringify(float)
    )
  }
}

avoAssertJs.assertBool = function assertBool (propName, bool) {
  if (typeof bool !== 'boolean') {
    console.warn(
      propName +
        ' should be of type boolean but you provided type ' +
        typeof bool +
        ' with value ' +
        JSON.stringify(bool)
    )
  }
}

avoAssertJs.assertMax = function assertMax (propName, max, value) {
  if (value > max) {
    console.warn(
      propName,
      'has a maximum value of',
      max,
      'but you provided the value',
      JSON.stringify(value)
    )
  }
}

avoAssertJs.assertMin = function assertMin (propName, min, value) {
  if (value < min) {
    console.warn(
      propName,
      'has a minimum value of',
      min,
      'but you provided the value',
      JSON.stringify(value)
    )
  }
}
