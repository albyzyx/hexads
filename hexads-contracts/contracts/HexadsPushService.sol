// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;


interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}

contract HexadsPushService {
  using Counters for Counters.Counter;

  Counters.Counter private _campaignIDs;

  address public channel;

  address private epnsComm;

  struct AdCampaign {
    string name;
    uint256 campaignBudget;
    string metadataCID;
    address advertizer;
  }

  address admin;
  address xatAddress;

  mapping(uint256 => AdCampaign) private _adCampaigns;

  constructor(address _admin, address _xatAddress,address _channel, address _epnsComm ) {
    admin = _admin;
    xatAddress = _xatAddress;
    channel = _channel;
    epnsComm = _epnsComm;
  }

  modifier onlyAdmin() {
    require(msg.sender == admin, "You are not authorized");
    _;
  }

   IPUSHCommInterface(epnsComm).sendNotification(
    channel, 
    to, 
    bytes(
        string(
            
            abi.encodePacked(
                "0", "+", "3", "+", "Title", "+", "Body" 
            )
        )
    )
);

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
