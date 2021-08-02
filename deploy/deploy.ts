
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployERC20Token: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const deployArgs = ["My Token", "MTK"];

    const { address: contractAddress } = await deploy('ERC20Token', {
      from: deployer,
      args: deployArgs,
      log: true,
      deterministicDeployment: false,
    });

    await new Promise((res, rej) => {
      setTimeout(async () => {
        res(
          await hre.run("verify:verify", {
            address: contractAddress,
            constructorArguments: deployArgs,
          })
        )
      }, 13000);
    })
  };

export default deployERC20Token;