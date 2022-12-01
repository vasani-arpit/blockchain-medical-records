export const handler = async (event) => {
    console.log(event);
    if (!event.queryStringParameters.fhash) {
        return {
            statusCode: 200,
            body: "No pain no gain!!",
        };
    }
    else {
        const response = {
            statusCode: 200,
            body: JSON.stringify('Hello from GH Lambda!'),
        };
        return response;
    }
};
