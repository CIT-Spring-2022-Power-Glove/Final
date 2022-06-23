import chai from 'chai'
import axios from 'axios'

chai.should()

describe('Index', () => {
    it('Should respond with 200', async () => {
        const response = await axios.get("http://34.145.101.133/")
        response.status.should.be.equal(200)
    })
})