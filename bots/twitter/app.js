const needle = require('needle');

const token = process.env.BEARER_TOKEN; 

const endpointURL = "https://api.twitter.com/2/tweets?ids="

async function getRequest() {

    const params = {
        "ids": "1278747501642657792,1255542774432063488,1321126194633412608", // Edit Tweet IDs to look up
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

(async () => {

    try {
        // Make request
        const response = await getRequest();
        console.log(response)

    } catch(e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
  })();