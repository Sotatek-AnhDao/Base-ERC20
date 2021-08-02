//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is AccessControl, ERC20 {
    bytes32 constant public MINTER_ROLE = keccak256(abi.encodePacked("MINTER_ROLE"));

    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _setupRole(MINTER_ROLE, _msgSender());
    }

    function mint(address _account, uint256 _amount) public onlyRole(MINTER_ROLE) {
        super._mint(_account, _amount);
    }
}
