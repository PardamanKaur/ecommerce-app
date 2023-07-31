import redis, { createClient } from 'redis';

const connectRedis = async () => {
  const client = createClient({
    url: "rediss://default:5394f820619c4735a1d6ab9ebe1a0633@us1-hardy-reindeer-38829.upstash.io:38829"
  });

  client.on("error", function (err) {
    throw err;
  });
  await client.connect();

  if (!client.get('customer_name', redis.print)) { // Fix variable name here
    //create a new record
    client.set('customer_name', 'John Doe', redis.print); // Fix variable name here
    console.log('Writing Property : customer_name');
  } else {
    let val = client.get('customer_name', redis.print); // Fix variable name here
    console.log(`Reading property : customer_name - ${val}`);
  }
};

export default connectRedis;
