import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const privateKey = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    // Todo: 원하는 네트워크를 선택하여 설정합니다.
  },
};

export default config;
