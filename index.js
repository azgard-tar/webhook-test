exports.handler = async (event, context) => {
  console.log("Method: " + event.httpMethod);
  console.log("Body: " + event.body);

  return {
    statusCode: 204
  }
};