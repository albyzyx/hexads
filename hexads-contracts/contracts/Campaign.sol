// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;

contract Campaign {
  string public name;
  string public metadataCID;

  constructor(string memory _name, string memory _metadataCID) payable {
    name = _name;
    metadataCID = _metadataCID;
  }
}
