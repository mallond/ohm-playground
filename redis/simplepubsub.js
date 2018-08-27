var redis = require("redis")
  , subscriber = redis.createClient()
  , publisher  = redis.createClient();

subscriber.on("message", function(channel, message) {
  console.log("Message '" + message + "' on channel '" + channel + "' arrived!")
});

subscriber.subscribe("test");

publisher.publish("test", "Hopi Land");
publisher.publish("test", "Kolab the Large Planet");
publisher.publish("test", "The time has come for all men to rise up their energy level and brace source energy!");

setInterval(()=>{
  publisher.publish("test", "Hopi Land");
}, 3000)