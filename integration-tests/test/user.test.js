import chai from 'chai'
import axios from 'axios'
import { faker } from '@faker-js/faker';

chai.should();

describe('User', () => {
    it('Should create a user', async () => {
        const user = {
            "userName": faker.internet.userName('test'),
            "email": faker.internet.email('test'),
            "password": "N7T5PpQz!",
            "verifyPassword": "N7T5PpQz!",
            "accountType": "Personal",
            "phone": faker.phone.number('###-###-#####')
        };
        const response = await axios.post("http://34.145.101.133/user", user);
        response.status.should.be.equal(200);

        const login = await axios.post("http://34.145.101.133/login", {
            "userName": user.userName,
            "password": user.password
        });
        
        const deleteResponse = await axios.delete("http://34.145.101.133/user/" + user.userName, {
            "headers": { "suresteps.session.token": login.data }
        });
        deleteResponse.data.should.be.equal('deleted user');
    });

    it('Should login the user', async () => {
        // Ensure the user we're tying to login exists
        try {
            await axios.post("http://34.145.101.133/user", {
                "userName": "benjamin@gmail.com",
                "email": "benjamin@gmail.com",
                "password": "N7T5PpQz!",
                "verifyPassword": "N7T5PpQz!",
                "accountType": "Personal",
                "phone": faker.phone.number('###-###-#####')
            });
        } catch (e) { }
        // Login the user
        const response = await axios.post("http://34.145.101.133/login", {
            "userName": "benjamin@gmail.com",
            "password": "N7T5PpQz!",
        });
        response.status.should.be.equal(200);
    });

});