import mockApi from '../../data/mockApiResponse.json'

const extractData = () => mockApi.sentences.map((item) => item);

export default extractData;