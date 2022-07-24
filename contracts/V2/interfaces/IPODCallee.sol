// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

interface IPODCallee {
    function PODCall(
        address sender,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) external;
}
