console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log('Received event: ',
        JSON.stringify(event, null, 2));
    console.log('name = ', event.name);
    var name='';
    if ('name' in event) {
        name = event['name'];
    } else {
        name = 'Lambda';
    }
    var greetings = 'Hello ' + name + ' :-)';
    console.log(greetings)
    callback(null, greetings);
};
