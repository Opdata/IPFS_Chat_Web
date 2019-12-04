pragma solidity >=0.4.25 <0.6.0;

contract Chat {
    uint256 numberOfLine;
    struct TextBody{
        string name;
        string Text;
    }
    
    TextBody[] public content;
    
    function pushText(string memory _name, string memory _text) public {
        content.push(TextBody(_name, _text));
        numberOfLine++;
    }
}
