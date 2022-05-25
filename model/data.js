var data = {
  u: "http://localhost:8888",
  code: `
  function select(target) {
    return document.querySelector(target);
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
  
  window.op = {
    select,
    cat,
    fetc,
    box,
    div,
  };
  
  function create(type, content, attr) {
    var d = document.createElement(type);
    d.innerHTML = content;
    if (!isEmpty(attr)) {
      d.setAttribute(attr.k, attr.v);
    }
    return d;
  }
  
  function read(selector) {
    console.log(document.querySelector(selector));
  }
  
  function update(target, value) {
    return (document.querySelector(target).innerHTML = value);
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
  
  `,
  app: `
  import { timer } from "./util/timer.js";
import { data } from "./model/data.js";
var delay = 0.5;

// 1f
var a = st.create("div", "1f", {});
await timer.wait(delay);
op.cat(a, root);
await timer.wait(delay);

// 2f
var b = st.create("div", "2f", { k: "style", v: "color:red" });
await timer.wait(delay);
op.cat(b, root);
await timer.wait(delay);

// yale
var yale = st.create("div", "yale", { k: "id", v: "yale" });
await timer.wait(delay);
op.cat(yale, root);
await timer.wait(delay);
st.read(yale);
await timer.wait(delay);
st.update(yale, "node");
await timer.wait(delay);
st.deletee("#yale");
await timer.wait(delay);

// code
var code = st.create("div", "code content", { k: "id", v: "code" });
op.cat(code, root);
await timer.wait(delay);
st.update(code, data.code);
await timer.wait(delay);
op.setStyle(code, { style: "font-size:20px" });
await timer.wait(delay);
op.setStyle(code, { style: "color:grey;font-size:20px" });
await timer.wait(delay);
st.read(code);

// app
var app = st.create("div", "app content", { k: "id", v: "app" });
op.cat(app, root);
await timer.wait(delay);
st.update(app, data.app);
await timer.wait(delay);
op.setStyle(app, { style: "font-size:20px" });
await timer.wait(delay);
op.setStyle(app, { style: "color:grey;font-size:20px" });
await timer.wait(delay);
st.read(app);

  `,
};

export { data };
