// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

say.call(helloMessage, "John");
say.call(heyThereMessage, "Michael");

// reference a function, then follow with 'call' method and pass in an object and arguments