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

var bk1 = op.putBlank();
op.cat(bk1, root);

// code
op.cat(st.create("div", "code: ", {}), root);
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

var bk2 = op.putBlank();
op.cat(bk2, root);

// app
op.cat(st.create("div", "app: ", {}), root);
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
