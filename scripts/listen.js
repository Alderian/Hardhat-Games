require("dotenv").config();
const GAME_ADDRESS = process.env.GAME_ADDRESS || "";

async function main() {
  const game = await hre.ethers.getContractAt("IGame", GAME_ADDRESS);

  game.on("Winner", (addr) => {
    console.log(addr + " won!");
  });
}

main();
