const routes = (app) =>{

    app.route('/contact')
    .get((req,res)=>
    res.send('GET request succesfull!!'))

    .post((req,res)=>
    res.send('POST request succesfull!!'));


    app.route('/contact/:contactId')
    .put((req,res)=>
    res.send('PUT request succesfull!!'))

    .delete((req,res)=>
    res.send('DELETE request succesfull!!'));

}

export default routes;