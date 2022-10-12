document.addEventListener('DOMContentLoaded', async () => {
  const insertAfter = (referenceNode, newNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  const node = await Ipfs.create({ repo: 'ipfs-' + Math.random() })
  window.node = node

  const status = node.isOnline() ? '✅ Online' : '🛑'
  const id = await node.id()

  console.log(`Node status: ${status}`)

  const statusDOM = document.getElementById('status')
  statusDOM.innerHTML = `Node status: ${status}`

  const newDiv = document.createElement("div");
  newDiv.id = "node"
  const newContent = document.createTextNode(`ID: ${id.id}`);
  newDiv.appendChild(newContent);

  insertAfter(statusDOM, newDiv);

  // You can write more code here to use it. Use methods like
  // node.add, node.get. See the API docs here:
  // https://github.com/ipfs/js-ipfs/tree/master/packages/interface-ipfs-core

})
console.log(globalThis)
globalThis.storeData = async () => {
  // function storeData() {
  const content = document.querySelector('#contents').value
  if (content == "") {
    alert("Please enter contents.")
    return
  }

  const results = await node.add(content)
  document.querySelector("#message").innerHTML = `Successfully added. Here is your id: ${results.path}`
}

globalThis.readFile = async () => {

  const bid = document.querySelector("#bid").value

  if (!bid) {
    alert("Please enter the id")
    return
  }

  for await (const data of node.cat(bid)) {
    var enc = new TextDecoder("utf-8");
    alert(enc.decode(data))
  }


}
