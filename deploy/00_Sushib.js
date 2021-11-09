module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const { address } = await deploy("Sushib", {
    from: deployer,
  });

  console.log(`Sushib deployed to ${address}`);
};
