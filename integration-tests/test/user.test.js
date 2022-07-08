import chai from 'chai'
import axios from 'axios'
import { faker } from '@faker-js/faker';

chai.should();

describe('User', () => {
    it('Should create a user', async () => {
        const response = await axios.post("http://34.145.101.133/user", {
            "userName": faker.internet.userName('test'),
            "email": faker.internet.email('test'),
            "password": "N7T5PpQz!",
            "verifyPassword": "N7T5PpQz!",
            "accountType": "Personal",
            "phone": faker.phone.number('###-###-#####')
        });
        response.status.should.be.equal(200);
    });

    it('Should login the user', async () => {
        const response = await axios.post("http://34.145.101.133/login", {
            "userName": "benjamin@gmail.com",
            "password": "N7T5PpQz!",
        });
        
        response.status.should.be.equal(200);
    });
});