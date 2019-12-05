pragma solidity ^0.5.11;

contract Chat {
    uint256 numberOfLine;
	// Add Name Version
    // struct TextBody{
    //     string name;
    //     string Text;
    // }
	struct TextBody{
        string Text;
    }
    
    TextBody[] public content;
    
    // function pushText(string memory _name, string memory _text) public {
    //     content.push(TextBody(_name, _text));
    //     numberOfLine++;
    // }

	// function getText(uint256 _index) public view returns(string memory, string memory){
	// 	return (content[_index].name, content[_index].Text);
	// }

	function pushText(string memory _text) public {
        content.push(TextBody(_text))-1;
        numberOfLine++;
    }

	function getText(uint256 _index) public view returns(string memory){
		return (content[_index].Text);
	}

	function getLine() public view returns(uint256){
		return numberOfLine;
	}
}
