import axios from 'axios'

import url from './url.js'

export default {
	auth: {
		login: async (data) => {
			return axios({
				method: 'POST',
				url: url.base_api + 'auth/login',
				data: data,
				// withCredentials: true,
			})
				.then((res) => res.data)
				.catch((err) => err.response.data)
		},
		register: async (data) => {
			return axios({
				method: 'POST',
				url: url.base_api + 'auth/register',
				data: data,
			})
				.then((res) => res.data)
				.catch((err) => err.response.data)
		},
		logout: async () => {
			return axios({
				method: 'GET',
				url: url.proxy_api + 'auth/logout',
			})
				.then((res) => res.data)
				.catch((err) => err.response.data)
		},
	},
	users: {
		getAllUsers: async () => {
			return axios({
				method: 'GET',
				url: url.base_api + 'users',
			})
				.then((res) => {
					res.data
				})
				.catch((err) => {
					console.log(err.response.data)
				})
		},
		getAllUser: async () => {
			return axios({
				method: 'GET',
				url: url.proxy_api + 'users',
			})
		},
		getSingleUser: async (userId) => {
			return axios({
				method: 'GET',
				url: url.base_api + 'users/' + userId,
			})
				.then((res) => {
					res.data
				})
				.catch((err) => {
					console.error(err)
				})
		},
		joinMerchant: async () => {
			return axios({
				method: 'PATCH',
				url: url.proxy_api + 'users/joinMerchant',
			})
		},
		showMe: async () => {
			return axios({
				method: 'GET',
				url: url.proxy_api + 'users/showMe',
			})
		},
	},
	products: {
		getAllProducts: async () => {
			return axios({
				method: 'GET',
				url: url.proxy_api + 'products',
			})
		},
		getAllProduct: async () => {
			return axios({
				method: 'GET',
				url: url.proxy_api + 'products',
			})
		},
		getSingleProduct: async (productId) => {
			// console.log(productId)
			return axios({
				method: 'GET',
				url: url.proxy_api + 'products/' + productId,
			})
		},
		deleteProduct: async (productId) => {
			return axios({
				method: 'DELETE',
				url: url.proxy_api + 'products/' + productId,
			})
		},
	},
	bid: {
		createBid: async () => {},
		addNew: async (data) => {
			return axios({
				method: 'POST',
				url: url.proxy_api + 'bids/',
				data: data,
				headers: {
					Authorization: `${localStorage.getItem('userToken')}`,
				},
			})
				.then((res) => res.data)
				.catch((err) => err.response.data)
		},
		getAllBids: async () => {
			return axios({
				method: 'GET',
				url: url.proxy_api + 'bids',
			})
		},
	},
}
