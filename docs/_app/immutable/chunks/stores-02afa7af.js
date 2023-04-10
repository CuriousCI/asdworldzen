import { C as writable } from "./index-f8a70087.js";
const imageViewer = writable({ src: "", open: false });
function view(src) {
  imageViewer.set({ src, open: true });
}
export {
  imageViewer as i,
  view as v
};
