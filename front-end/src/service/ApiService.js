import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:9090/assets';

class ApiService {

	fetchAssets() {
		return axios.get(USER_API_BASE_URL);
	}

	fetchAssetById(id) {
		return axios.get(USER_API_BASE_URL + '/' + id);
	}

	deleteAsset(id) {
		return axios.delete(USER_API_BASE_URL + '/' + id);
	}

	addAsset(asset) {
		return axios.post("" + USER_API_BASE_URL, asset);
	}

	editAsset(asset) {
		return axios.put(USER_API_BASE_URL + '/' +asset.id, asset);
	}

}

export default new ApiService();