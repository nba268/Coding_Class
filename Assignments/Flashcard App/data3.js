

const topiclist = document.querySelector("#topiclist");

//create item

const item = document.createElement("div");
item.innerHTML = "hello";
topiclist.appendchild(item);

//create rule

const rule = document.createElement("hr");
topiclist.appendchild(rule);

//create label 
const rule = document.createElement("label");
item.appendchild(label);

//create 
const checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("name", "topic");
label.appendchild(checkbox);

//create lable text 
const labelText = document.createTextNode()