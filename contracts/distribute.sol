pragma solidity ^0.8.11;

contract Distribute {
    address payable canto_messenger = payable(0x61720DAF21641487e7CC3C71dd3583b8cE2B8d0A);
    address payable bamboo = payable(0xCA0Ef5A0AC9323E7f9ba5D417F9Bb173470B495C);
    address payable canto_tools = payable(0xeDa724Ad752BDa46117a4Fb0558D537910fC71f3);
    address payable cantillionaires = payable(0x9e884f11F96b0dd527a6e267B344927338acE6d9);
    address payable canto_sh = payable(0x264217b2B74C1B3d85c199226c93Dd341377443c);
    address payable carbon = payable(0x2e2407BF0220c2EB7D1F180A8eF43A8cC7939E4B);

    uint256 public canto_messenger_amount = 100000000000000000000000;
    uint256 public bamboo_amount = 40000000000000000000000;
    uint256 public canto_tools_amount = 40000000000000000000000;
    uint256 public cantillionaires_amount = 40000000000000000000000;
    uint256 public canto_sh_amount = 40000000000000000000000;
    uint256 public carbon_amount = 40000000000000000000000;

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function distributeUsingTransfer() public {
        canto_messenger.transfer(canto_messenger_amount);
        bamboo.transfer(bamboo_amount);
        canto_tools.transfer(canto_tools_amount);
        cantillionaires.transfer(cantillionaires_amount);
        canto_sh.transfer(canto_sh_amount);
        carbon.transfer(carbon_amount);
    }

    function distributeUsingCall() public {
        (bool sent1, bytes memory data1) = canto_messenger.call{value: canto_messenger_amount}("");
        (bool sent2, bytes memory data2) = bamboo.call{value: bamboo_amount}("");
        (bool sent3, bytes memory data3) = canto_tools.call{value: canto_tools_amount}("");
        (bool sent4, bytes memory data4) = cantillionaires.call{value: cantillionaires_amount}("");
        (bool sent5, bytes memory data5) = canto_sh.call{value: canto_sh_amount}("");
        (bool sent6, bytes memory data6) = carbon.call{value: carbon_amount}("");

        require(sent1, "failed to send to canto_messenger");
        require(sent2, "failed to send to bamboo");
        require(sent3, "failed to send to canto_tools");
        require(sent4, "failed to send to cantillionaires");
        require(sent5, "failed to send to canto_sh");
        require(sent6, "failed to send to carbon");
    }

    receive() external payable {}

    fallback() external payable {}
}
