function select(dom) {
  return dom;
}

function div(content) {
  var d = document.createElement("div");
  d.innerHTML = content;
  cat(d, body);
  return d;
}

function box(item) {
  return item;
}

function isEmpty(target) {
  return Object.keys(target).length === 0 ? true : false;
}

function cat(d1, d2) {
  d2.appendChild(d1);
}

async function fetc(url, type) {
  fetch(url)
    .then((res) => (type == "text" ? res.text() : res.json()))
    .then((data) => console.log(data));
}

function setStyle(dom, attr) {
  console.log(dom);
  console.log(attr);
  Object.keys(attr).forEach((name) => {
    console.log("name: ", name);
    dom[name] = attr[name];
  });
}

function putBlank() {
  return create("br", "", {});
}

window.op = {
  select,
  cat,
  fetc,
  box,
  div,
  setStyle,
  putBlank,
};

function create(type, content, attr) {
  var d = document.createElement(type);
  d.innerHTML = content;
  if (!isEmpty(attr)) {
    d.setAttribute(attr.k, attr.v);
  }
  return d;
}

function read(dom) {
  console.log(dom);
}

function update(dom, value) {
  return (dom.innerHTML = value);
}

function deletee(target) {
  document.querySelector(target).remove();
}
window.st = {
  create,
  read,
  update,
  deletee,
};

window.onload = function init() {
  var body = op.box(document.body);

  window.root = create("div", "root", { k: "id", v: "root" });

  op.cat(root, body);
};
