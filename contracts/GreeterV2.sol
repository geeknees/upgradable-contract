pragma solidity ^0.8.3;

import "hardhat/console.sol";
import "./Greeter.sol";

contract GreeterV2 is GreeterV1 {
  function helloV2() public view returns(string memory) {
    return "Hello, V2 World!";
  }

  function returnV1StateFromV2() public view returns(string memory) {
    return greetingV1;
  }
}
