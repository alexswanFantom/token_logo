import Web3 from 'web3'
import { toBN, BN, isBN } from 'web3-utils'
import { BigNumber } from 'bignumber.js'
BigNumber.set({ DECIMAL_PLACES: 18, ROUNDING_MODE: 1 })
import config from  '~/config'

const COW_ABI = require('./abis/cow.json');

import Erc20 from './erc20'

export class Cow {
	constructor(address, stakeToken, yieldToken) {
		this.web3 = new Web3(window.detectProvider);
		this.web3Reader = new Web3(new Web3.providers.HttpProvider(config.web3Provider));
		this.address = address;
		this.contract = new this.web3.eth.Contract(COW_ABI, address);
		this.contractReader = new this.web3Reader.eth.Contract(COW_ABI, address);

		this.stakeToken = stakeToken;
		this.yieldToken = yieldToken;
		this.defaultGasPrice = 50000000000;
		this.stakePrecision = BigNumber(10).pow(BigNumber(this.stakeToken.decimals))
		this.yieldPrecision = BigNumber(10).pow(BigNumber(this.yieldToken.decimals))
	}

	setProvider(provider) {
		this.web3.setProvider(provider)
	}
  async rewardRate(){
    let rewards = await this.contract.methods.rewardRate().call();
    return rewards / 1e18
  }
  async totalStaked(){
    let staked  = await this.contract.methods.totalStaked().call();
    return BigNumber(staked).div(this.stakePrecision);
  }
  async userStaked(address){
    let user    = await this.contract.methods.userStaked(address).call();
    return BigNumber(user).div(this.stakePrecision);
  }
  async Unclaimed(address){
    let user    = await this.contract.methods.earned(address).call();
    return BigNumber(user).div(this.yieldPrecision);
  }
}

export default Cow;
