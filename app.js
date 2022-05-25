import { timer } from "./util/timer.js";

var delay = 0.5;

var a = st.create("div", "1f", {});
await timer.wait(delay);
op.cat(a, root);
await timer.wait(delay);
var b = st.create("div", "2f", { k: "style", v: "color:red" });
await timer.wait(delay);
op.cat(b, root);
await timer.wait(delay);
var c = st.create("div", "yale", { k: "id", v: "yale" });
await timer.wait(delay);
op.cat(c, root);
await timer.wait(delay);
st.read("#yale");
await timer.wait(delay);
st.update("#yale", "node");
await timer.wait(delay);
st.deletee("#yale");
