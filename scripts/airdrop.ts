/**
 * Bulk-send 1 MON to every address in `RECIPIENTS`.
 * Network: Monad Testnet  (chainId 10143)
 *
 * Usage:
 *   npx hardhat run scripts/airdrop.ts --network monadTestnet
 *   (make sure RPC_URL & PRIVATE_KEY are in .env or hardhat.config.ts)
 */

import { ethers } from "hardhat";
import { BigNumberish } from "ethers";

////////////////////  🔑 CONFIG  ////////////////////

// 1. Inline **raw JSON** array of recipient addresses
const RECIPIENTS: string[] = [
 "0x",
]

// 2. How much MON to send (1 MON = 1 * 10^18 wei)
const AMOUNT: BigNumberish = ethers.parseEther("1");

// 3. Optional: throttle (in ms) to avoid nonce/rate issues
const PAUSE_MS = 200;

////////////////////////////////////////////////////

async function main() {
  const [signer] = await ethers.getSigners();
  const sender   = await signer.getAddress();

  // De-duplicate & normalise
  const toList = [...new Set(RECIPIENTS.map(a => a.toLowerCase()))];

  console.log(`\n👤 Sender        : ${sender}`);
  console.log(`🎯 Recipients    : ${toList.length}`);
  console.log(`💸 Amount each  : ${ethers.formatEther(AMOUNT)} MON\n`);

  let nonce = await signer.getNonce();

  for (const to of toList) {
    try {
      const tx = await signer.sendTransaction({
        to,
        value: AMOUNT,
        nonce: nonce++
      });
      console.log(`✅  Sent to ${to} | tx: ${tx.hash}`);
    } catch (err) {
      console.error(`❌  Failed for ${to}:`, (err as Error).message);
    }
    if (PAUSE_MS) await new Promise(r => setTimeout(r, PAUSE_MS));
  }

  console.log("\n🚀  All transactions submitted.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
