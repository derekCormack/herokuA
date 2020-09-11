import functions from './fetch.js'

test('test that the fetch works?', async () => {
const url = 'http://localhost:5000/json/customer';
    
    // Check that the server is running and clear any data
    // let data = await functions.postData(url + 'clear');
    console.log("hi from testv2");
    let data = await functions.postData(url);
    console.log(data);
    for(const d in data) {
        console.log(d, data[d])
    };      
   
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(0);

    // data = await functions.postData(url + 'add', clients[0]);
    // expect(data.status).toEqual(200);

    // data = await functions.postData(url + 'all');
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("Larry");

    // // add a second with the same key which should be an error
    // data = await functions.postData(url + 'add', clients[0]);
    // expect(data.status).toEqual(400);

    // // add a second which should be ok
    // data = await functions.postData(url + 'add', clients[1]);
    // expect(data.status).toEqual(200);

    // data = await functions.postData(url + 'all');
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(2);
    // expect(data[1].name).toBe("Lorraine");

    // data = await functions.postData(url + 'read', {key:1});
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("Larry");

    // data = await functions.postData(url + 'update', {key:1, name:"George"});
    // expect(data.status).toEqual(200);

    // data = await functions.postData(url + 'read', {key:1});
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("George");

    // data = await functions.postData(url + 'delete', {key:1});
    // expect(data.status).toEqual(200);

    // data = await functions.postData(url + 'read', {key:1});
    // expect(data.status).toEqual(400);
});
