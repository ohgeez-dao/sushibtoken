module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const { address } = await deploy("xSushib", {
    from: deployer,
  });

  console.log(`xSushib deployed to ${address}`);
};
