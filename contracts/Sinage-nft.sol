// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "base64-sol/base64.sol";
import "hardhat/console.sol";

contract Sinage_nft is ERC721{
  using Counters for Counters.Counter;
  Counters.Counter private _tokenId;
  
  struct Sinage{
    string image;
    string name;
    string description;
  }

  mapping(uint256 => Sinage) private sinages;

  constructor() ERC721("Sinage_nft", "SNG") {

  }
  function safeMint(address to, string memory _image, string memory _name, string memory _description) public{
    _safeMint(to, _tokenId.current());
    sinages[_tokenId.current()] = Sinage({
      image: _image,
      name: _name,
      description: _description
    });
    _tokenId.increment();
  }

  function tokenURI(uint256 _id) public view override(ERC721) returns (string memory) {
    return string(
      abi.encodePacked(
        "data:application/json;base64,",
        Base64.encode(
          bytes(
            abi.encodePacked(
            "{\"name\":\"", sinages[_id].name,
            "\",\"image\":\"", sinages[_id].image,
            "\",\"description\":\"", sinages[_id].description,
            "\"}"
            )
          )
        )
      )
    );
  }
}
