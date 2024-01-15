// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  console.log("Method: " + event.httpMethod);
  console.log("Body: " + event.body);
  try {
    return {
      statusCode: 204,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
