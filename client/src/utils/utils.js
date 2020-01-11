export function copy(el) {
  let dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = el.target.lastChild.nodeValue;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
