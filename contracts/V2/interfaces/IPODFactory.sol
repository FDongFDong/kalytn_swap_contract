// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

interface IPODFactory {
    function pairs(address, address) external view returns (address);

    function createPair(address, address) external returns (address);
}
