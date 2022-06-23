import chai from 'chai'
import axios from 'axios'

chai.should()

describe('Index', () => {
    it('Should respond with 200', async () => {
        const response = await axios.get("https://dev.stedi.me/")
        response.status.should.be.equal(200)
    })
})