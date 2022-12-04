// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

contract HexadManager {
  using Counters for Counters.Counter;

  Counters.Counter private _campaignIDs;

  struct AdCampaign {
    string name;
    uint256 campaignBudget;
    string metadataCID;
    address advertizer;
  }

  address admin;
  address xatAddress;

  mapping(uint256 => AdCampaign) private _adCampaigns;

  constructor(address _admin, address _xatAddress) {
    admin = _admin;
    xatAddress = _xatAddress;
  }

  modifier onlyAdmin() {
    require(msg.sender == admin, "You are not authorized");
    _;
  }

  function createCampaign(
    string memory _name,
    uint256 _campaignBudget,
    string memory _metadataCID
  ) public returns (uint256) {
    uint256 newId = _campaignIDs.current();
    _campaignIDs.increment();
    _adCampaigns[newId] = AdCampaign({
      name: _name,
      campaignBudget: _campaignBudget,
      metadataCID: _metadataCID,
      advertizer: msg.sender
    });
    IERC20(xatAddress).transferFrom(msg.sender, address(this), _campaignBudget);
    return newId;
  }
}

// 0xFdd59E00fbAC168F8309aA6c569fc198bb1970DB