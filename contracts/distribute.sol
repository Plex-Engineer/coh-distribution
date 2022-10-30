pragma solidity ^0.8.11;

contract Distribute {
    address payable longnecks = payable(0x0189402Fa964da3f5C59C81aF192CD4b2a29973B);
    address payable cns = payable(0x2bE8F7A8EfF738aFCD688Af4D3DD314164065760);
    address payable cantoswap = payable(0xF39eEe4F21359e78A30D992e0b2D7fEAAe5c97Ff);
    address payable magnet = payable(0x6dC370451ad0C5a6Bcb4F1618BbbbfF1DC40b42a);
    address payable kanto = payable(0x2e2407BF0220c2EB7D1F180A8eF43A8cC7939E4B);
    address payable prompt = payable(0x810be8A5C6b6b38A7c1530F9E0b81f47CEF92b25);
    address payable thoth = payable(0xA779fC675Db318dab004Ab8D538CB320D0013F42);
    address payable y2r = payable(0x73d9312A7C47a25C18E27E94160034ac7AE99576);

    uint256 public longnecks_amount = 100000000000000000000000;
    uint256 public cns_amount = 40000000000000000000000;
    uint256 public cantoswap_amount = 40000000000000000000000;
    uint256 public magnet_amount = 40000000000000000000000;
    uint256 public kanto_amount = 40000000000000000000000;
    uint256 public prompt_amount = 13333330000000000000000;
    uint256 public thoth_amount = 13333330000000000000000;
    uint256 public y2r_amount = 13333330000000000000000;

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function distributeUsingTransfer() public {
        longnecks.transfer(longnecks_amount);
        cns.transfer(cns_amount);
        cantoswap.transfer(cantoswap_amount);
        magnet.transfer(magnet_amount);
        kanto.transfer(kanto_amount);
        prompt.transfer(prompt_amount);
        thoth.transfer(thoth_amount);
        y2r.transfer(y2r_amount);
    }

    function distributeUsingCall() public {
        (bool sent1, bytes memory data1) = longnecks.call{value: longnecks_amount}("");
        (bool sent2, bytes memory data2) = cns.call{value: cns_amount}("");
        (bool sent3, bytes memory data3) = cantoswap.call{value: cantoswap_amount}("");
        (bool sent4, bytes memory data4) = magnet.call{value: magnet_amount}("");
        (bool sent5, bytes memory data5) = kanto.call{value: kanto_amount}("");
        (bool sent6, bytes memory data6) = prompt.call{value: prompt_amount}("");
        (bool sent7, bytes memory data7) = thoth.call{value: thoth_amount}("");
        (bool sent8, bytes memory data8) = y2r.call{value: y2r_amount}("");

        require(sent1, "failed to send to longnecks");
        require(sent2, "failed to send to cns");
        require(sent3, "failed to send to cantoswap");
        require(sent4, "failed to send to magnet");
        require(sent5, "failed to send to kanto");
        require(sent6, "failed to send to prompt");
        require(sent7, "failed to send to thoth");
        require(sent8, "failed to send to y2r");

    }

    receive() external payable {}

    fallback() external payable {}
}
