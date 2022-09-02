'use strict'
module.exports = {
	chainId: 56,
	//chainId: 42161,
	cows: [
		{
			id: 1,
			name: "LFI STAKING POOL",
			image: "https://tokens.bscswap.com/images/0x7661C7714A2AE18Bd224d2bFa7619d6aB7b8f640.png",
			desc: "Halving every 1 year, 5% fee on staked tokens for every harvest & unstake",
			initialized: true,
			staking: true,
			harvest: true,
			address: "0xbF56Ed686F70b8e82300E0D85D87f0aFD5737a78",
			stakeToken: {
				address: "0x7661C7714A2AE18Bd224d2bFa7619d6aB7b8f640",
				decimals: 18,
				symbol: "LFI"
			},
			yieldToken: {
				address: "0x7661C7714A2AE18Bd224d2bFa7619d6aB7b8f640",
				decimals: 18,
				symbol: "LFI"
			}
		},
		{
			id: 2,
			name: "LFI LFI/BNB LP POOL",
			image: "https://tokens.bscswap.com/images/0x7661C7714A2AE18Bd224d2bFa7619d6aB7b8f640.png",
			desc: "Halving every 14 days, 5% fee on staked tokens for every harvest & unstake",
			initialized: true,
			staking: true,
			harvest: true,
			address: "0x15c67F69F0b99684e44d7E00fe64141B0b90fA5c",
			stakeToken: {
				address: "0x506f458FCFD60a49eb688842D49269305392367C",
				decimals: 18,
				symbol: "LFI/BNB LP Token"
			},
			yieldToken: {
				address: "0x7661C7714A2AE18Bd224d2bFa7619d6aB7b8f640",
				decimals: 18,
				symbol: "LFI"
			}
		},
		{
			id: 3,
			name: "LFI BUSD/BNB LP POOL",
			image: "https://tokens.bscswap.com/images/0x7661C7714A2AE18Bd224d2bFa7619d6aB7b8f640.png",
			desc: "Halving every 14 days, 5% fee on staked tokens for every harvest & unstake",
			initialized: true,
			staking: true,
			harvest: true,
			address: "0x8d2e3FDeaC84831EfEaEfD4c81B2397254fdAB12",
			stakeToken: {
				address: "0x1EbF0eE99971c6269062C3b480e8e23B7A74756B",
				decimals: 18,
				symbol: "BUSD/BNB LP Token"
			},
			yieldToken: {
				address: "0x7661C7714A2AE18Bd224d2bFa7619d6aB7b8f640",
				decimals: 18,
				symbol: "LFI"
			}
		}
		
	],
	tokens: [
		{
			symbol: "bnb",
			address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
			decimal: 18
		},
		{
			symbol: "USDT",
			address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
			decimals: 18,
		},
		{
			symbol: "WETH",
			address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
			decimals: 18,
		}
	],
	ETH : "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
	web3Provider: "https://speedy-nodes-nyc.moralis.io/35727d58315e1673026e4b26/bsc/mainnet"//https://arb1.arbitrum.io/rpc"
}
