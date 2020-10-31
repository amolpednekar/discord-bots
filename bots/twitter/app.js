const needle = require('needle');

const token = process.env.BEARER_TOKEN; 

const endpointURL = "https://api.twitter.com/2/tweets?ids="

async function getRequest() {

    const params = {
        "ids": "1278747501642657792,1255542774432063488", // Edit Tweet IDs to look up
        "tweet.fields": "lang,author_id", // Edit optional query parameters here
        "user.fields": "created_at" // Edit optional query parameters here
    }

    const res = await needle('get', endpointURL, params, { headers: {
        "authorization": `Bearer ${token}`
    }})

    if(res.body) {
        return res.body;
    } else {
        throw new Error ('Unsuccessful request')
    }
}