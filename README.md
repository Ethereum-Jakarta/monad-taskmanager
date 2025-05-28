# TaskManager Smart Contract

A simple task management smart contract deployed on Monad Testnet with automated deployment scripts and airdrop functionality.

## 🌟 Features

- **Task Management**: Create and track tasks on-chain
- **Fee Calculation**: Built-in 2% fee calculation system
- **Owner Management**: Contract ownership with access controls
- **User Task Tracking**: Individual task counters per user
- **Gas Optimized**: Optimized for efficient gas usage
- **Monad Testnet**: Deployed on high-performance Monad blockchain

## 📋 Contract Overview

The TaskManager contract provides:
- Task creation and counting functionality
- Per-user task tracking
- Fee calculation utilities
- Owner-based access control
- Activity status management

### Key Functions

- `addTask()` - Add a new task for the caller
- `calculateFee(uint256 amount)` - Calculate 2% fee for given amount
- `getOwner()` - Get contract owner address
- `userTaskCount(address)` - Get task count for specific user
- `taskCount` - Global task counter

## 🚀 Quick Start

### Prerequisites

- Node.js v16+ 
- npm or yarn
- Hardhat development environment
- MON tokens for Monad Testnet deployment

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd taskmanager-contract

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Add your PRIVATE_KEY to .env file
```

### Environment Setup

Create a `.env` file with:
```env
PRIVATE_KEY=your_private_key_here
```

Or use Hardhat's built-in vars system:
```bash
npx hardhat vars set PRIVATE_KEY
```

## 🔧 Development

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy to Monad Testnet

```bash
npx hardhat run scripts/deploy-taskmanager.ts --network monadTestnet
```

The deployment script will:
- ✅ Check deployer balance
- ✅ Estimate gas costs
- ✅ Deploy with optimized gas settings
- ✅ Verify contract deployment
- ✅ Save deployment info to JSON file
- ✅ Provide next steps guide

## 🎁 Airdrop Script

Bulk send MON tokens to multiple addresses:

### Setup Recipients

Edit `scripts/airdrop.ts` and add recipient addresses:

```typescript
const RECIPIENTS: string[] = [
  "0xB1a716695dec1425a44570c419295d0F25316Dde",
  "0xA8067C449EE8683dDF32375F6BfB4E24257b7a5a",
  // Add more addresses...
];
```

### Run Airdrop

```bash
npx hardhat run scripts/airdrop.ts --network monadTestnet
```

Features:
- 🔄 Automatic nonce management
- 🚫 Duplicate address filtering
- ⏱️ Configurable delay between transactions
- 📊 Transaction status reporting
- 💰 Configurable amount per recipient

## 🌐 Network Configuration

### Monad Testnet
- **Chain ID**: 10143
- **RPC URL**: https://testnet-rpc.monad.xyz/
- **Explorer**: https://testnet.monadexplorer.com
- **Currency**: MON

### Local Development
- **Chain ID**: 31337 (Hardhat Network)
- **For testing and development**

## 📁 Project Structure

```
├── contracts/           # Solidity smart contracts
│   └── TaskManager.sol  # Main contract
├── scripts/            # Deployment and utility scripts
│   ├── deploy.ts       # Contract deployment script
│   └── airdrop.ts      # Bulk token distribution
├── test/               # Contract tests
├── deployments/        # Deployment artifacts
├── hardhat.config.ts   # Hardhat configuration
└── README.md          # This file
```

## 🔍 Contract Details

### TaskManager.sol

```solidity
contract TaskManager {
    address public owner;
    uint256 public taskCount;
    mapping(address => uint256) public userTaskCount;
    
    function addTask() public;
    function calculateFee(uint256 amount) public pure returns(uint256);
    function getOwner() public view returns(address);
}
```

### Gas Optimization

- Solidity 0.8.28 with optimizer enabled
- 200 optimization runs for balanced gas/size
- Efficient storage patterns
- Minimal external calls

## 📊 Deployment Info

After deployment, find contract details in:
```
deployments/taskmanager-monad-testnet.json
```

Contains:
- Contract address
- Deployer address
- Network information
- Block explorer links
- Deployment timestamp
- Transaction hash

## 🧪 Testing

Run the test suite:
```bash
# Run all tests
npx hardhat test

# Run with gas reporting
npx hardhat test --gas-reporter

# Run with coverage
npx hardhat coverage
```

## 🔗 Useful Links

- [Monad Testnet Explorer](https://testnet.monadexplorer.com)
- [Monad Documentation](https://docs.monad.xyz)
- [Hardhat Documentation](https://hardhat.org/docs)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## ⚠️ Disclaimer

This is a testnet deployment for development and testing purposes. Do not use in production without proper auditing and security reviews.

## 📞 Support

For questions and support:
- Create an issue in this repository
- Check Monad community channels
- Review Hardhat documentation

---

**Happy Building! 🚀**