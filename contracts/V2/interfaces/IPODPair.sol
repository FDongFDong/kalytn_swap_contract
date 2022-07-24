// SPDX-License-Identifier: MIT
pragma solidity ^0.5.6;

interface IPODPair {
    function initialize(address, address) external;

    function getReserves()
        external
        view
        returns (
            uint112,
            uint112,
            uint32
        );

    function mint(address) external returns (uint256);

    function burn(address) external returns (uint256, uint256);

    function swap(
        uint256 amount0Out,
        uint256,
        address,
        bytes calldata
    ) external;

    function transferFrom(
        address,
        address,
        uint256
    ) external returns (bool);
}
