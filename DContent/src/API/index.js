//Declare IPFS
import { create } from "ipfs-http-client";

export const UploadImage = async (buffer) => {
	const ipfs = create({
		host: "127.0.0.1",
		port: 5001,
		protocol: "http",
	}); // leaving out the arguments will default to these values

	// const ipfs = create('https://ipfs.infura.io:5001/api/v0');

	const id = await ipfs.add(buffer);

	console.log(id);

	// ipfs.pin(id)


	return id;
};

export const listFiles = async () => {
	// const cid = 'Qmbgy8khQKS5pyVyChpxnFdUnbyppVDXVKgY9WPhC5Z2Hk'

	// const ipfs = create({
	// 	host: "127.0.0.1",
	// 	port: 5001,
	// 	protocol: "http",
	// });

	// for await (const file of ipfs.ls(cid)) {
	// 	console.log(file)
	// 	console.log(file.cid.toString())
	// }

	// console.log(await ipfs.ls("/"))

	// var myHeaders = new Headers();
	// myHeaders.append("Accept", "*/*");
	// myHeaders.append("Accept-Language", "en-US,en;q=0.9,gu;q=0.8");
	// myHeaders.append("Cache-Control", "no-cache");
	// myHeaders.append("Connection", "keep-alive");
	// myHeaders.append("Content-Length", "0");
	// myHeaders.append("Origin", "http://localhost:5001");
	// myHeaders.append("Pragma", "no-cache");
	// myHeaders.append("Referer", "http://localhost:5001/");
	// myHeaders.append("Sec-Fetch-Dest", "empty");
	// myHeaders.append("Sec-Fetch-Mode", "cors");
	// myHeaders.append("Sec-Fetch-Site", "cross-site");
	// myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36");
	// myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"");
	// myHeaders.append("sec-ch-ua-mobile", "?0");
	// myHeaders.append("sec-ch-ua-platform", "\"Windows\"");

	// var requestOptions = {
	// 	method: 'POST',
	// 	headers: myHeaders,
	// 	redirect: 'follow',
	// 	mode: 'no-cors'
	// };

	// fetch("http://127.0.0.1:5001/api/v0/files/stat?arg=%2F", requestOptions)
	// 	.then(response => response.text())
	// 	.then(result => console.log(result))
	// 	.catch(error => console.log('error', error));

	// console.log("log",await  ipfs.files.stat("QmdoYUpQ1HJSUZ5fop9BXz6GvewNJk7PqHfosYhWZcKkvd"))
	// console.log("log",await ipfs.files.ls("QmdoYUpQ1HJSUZ5fop9BXz6GvewNJk7PqHfosYhWZcKkvd"))


}
