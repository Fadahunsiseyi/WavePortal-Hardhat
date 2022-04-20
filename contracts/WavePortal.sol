// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    constructor() {
        console.log('Yo!!! i am writing smart contract');
    }
    function wave() public {
        totalWaves += 1;
        console.log('%s has waved', msg.sender);
    }
    function getTotalWaves() public view returns (uint256){
        console.log('We have %d total waves!', totalWaves, 'again');
        return totalWaves;
    }
}