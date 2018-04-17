var apiKey
window.avo = {}
avo.init = function init (key) {
  apiKey = key
  amplitude.getInstance(apiKey).init(apiKey)
}

avo.client = amplitude

avo.logEventWithUserProperties = function logEventWithUserProperties (
  eventName,
  eventProperties,
  userProperties
) {
  if (userProperties !== null && userProperties !== undefined) {
    amplitude.getInstance(apiKey).setUserProperties(userProperties)
  }
  amplitude.getInstance(apiKey).logEvent(eventName, eventProperties)
}

avo.logEvent = function logEvent (eventName, eventProperties) {
  amplitude.getInstance(apiKey).logEvent(eventName, eventProperties)
}

function _logRevenue (productId, quantity, price, revenueType, eventProperties) {
  var revenue = new amplitude.Revenue().setQuantity(quantity).setPrice(price)
  if (productId !== null && productId !== undefined && productId.length !== 0) {
    revenue.setProductId(productId)
  }
  if (
    revenueType !== null &&
    revenueType !== undefined &&
    revenueType.length !== 0
  ) {
    revenue.setRevenueType(revenueType)
  }
  if (eventProperties !== null && eventProperties !== undefined) {
    revenue.setEventProperties(eventProperties)
  }

  amplitude.logRevenueV2(revenue)
}

avo.logRevenueWithUserProperties = function logRevenueWithUserProperties (
  productId,
  quantity,
  price,
  revenueType,
  eventProperties,
  userProperties
) {
  if (userProperties !== null && userProperties !== undefined) {
    amplitude.getInstance(apiKey).setUserProperties(userProperties)
  }
  _logRevenue(productId, quantity, price, revenueType, eventProperties)
}

avo.logRevenue = _logRevenue

avo.setUserId = function setUserId (userId) {
  amplitude.getInstance(apiKey).setUserId(userId)
}

avo.setUserProperties = function setUserProperties (userProperties) {
  amplitude.getInstance(apiKey).setUserProperties(userProperties)
}
