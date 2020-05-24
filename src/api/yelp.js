import axios from 'axios';

export default axios.create({

    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 
        'Bearer kk2aAvhlv8do5sitfIRB3H_lWQqizQdC--BS_i_oeXgObU8lUTaBqOQsFVSLu4tEYQYMHQKJ0wb0HIBW7oRSEy3qH97U1SNVWKRQ4SDwSknkk8KO6q5Q254aDIjGXnYx'
    }
});
