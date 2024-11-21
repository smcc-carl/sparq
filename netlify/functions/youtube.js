const fetch = require("node-fetch");

exports.handler = async function (event, context) {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const channelId = event.queryStringParameters.channelId;

    const response = await fetch (
        '`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`'
    );
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};