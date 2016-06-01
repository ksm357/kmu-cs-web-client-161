function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}
function answer_2() {
  document.getElementById("q2-answer").innerHTML = "<ol><li>Javascript can add or remove existing elements and attributes.</li><li>Javascript can react to events happening in a page.(ex.Button click)</li></ol>";
}
function answer_3() {
  document.getElementsByClassName("q34-answer")[0].innerHTML = "<ul><li>Parent : A	node directly	above	a	node</li><li>Child : Nodes one level directly below</li><li>Sibling : Nodes at the same level(same parent node)</li><li>Descendant : A set of nodes any number of levels below another node</li><li>Ancenstor : A set of nodes above a node in a tree</li></ul>"
}
function answer_4() {
  document.getElementsByClassName("q34-answer")[1].innerHTML = "<ul><li>document.getElementById('ID_NAME') : Returns	an element with	a	given	ID_NAME. Duplicate ID is not allowed in the HTML specification. <strong>One</strong></li><li>document.getElementsByClassName : Get a list of elements based on the class name. <strong>Many</strong></li><li>document.getElementsByName : Get	a	list of elements based on the name. Name is generally used with input tag. <strong>Many</strong></li><li>document.getElementsByTagName : Get a list of elements with the input tag name. <strong>Many</strong></li></ul>"
}

$('a').click(function() {
  $(this).text("Answer5");
})  
$('.item').click(function() {
  $(this).css('font-size', '3em');
})
$('div.demo').dblclick(function() {
  $(this).css('color', 'blue');
})
