//Declare IPFS
import { create } from "ipfs-http-client";

export const UploadImage = async (buffer) => {
	const ipfs = create({
		host: "127.0.0.1",
		port: 5001,
		protocol: "http",
	}); // leaving out the arguments will default to these values

	const id = await ipfs.add(buffer);

	console.log(id);

	return id;
};
