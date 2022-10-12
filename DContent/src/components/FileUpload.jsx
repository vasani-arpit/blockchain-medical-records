import Image from "./Image";
import { useState } from "react";
import { UploadImage } from "../API";
import { QRCodeCanvas } from "qrcode.react";

const UpdatePost = () => {

	const [file, setFile] = useState(null);
	const [fileError, setFileError] = useState(false);
	const [files, setFiles] = useState([]);

	const handleSubmit = () => {
		console.log("call");
		const captureFile = () => {
			let hash;
			const reader = new window.FileReader();
			reader.readAsArrayBuffer(file);
			reader.onloadend = async () => {
				hash = await UploadImage(Buffer(reader.result));
				console.log(hash);
				setFiles([{ hash: hash, fileName: file.name }, ...files])
				setFile(null);
				// sendData(hash.path);
				//https://ipfs.infura.io/ipfs/hash
			};
		};

		captureFile();
	};

	return (
		<>
			<main className="container grid grid-cols-1 gap-10 lg:grid-cols-2 h-full">
				<div className="flex flex-col gap-10">
					<div className="w-full space-y-3">
						<Image
							file={file}
							setFile={setFile}
							fileError={fileError}
						/>
					</div>
					<button onClick={handleSubmit}>
						Upload
					</button>
				</div>

				<div className="flex flex-col gap-4 overflow-auto">
					<h1 className="text-2xl">File List</h1>

					{
						files.map((data) => {
							return (
								<a key={data.hash} href={`http://localhost:8080/ipfs/${data.hash.path}?filename=${data.fileName}`} target="_blank" rel="noreferrer">

									{data.fileName}

								</a>
							)
						})
					}
				</div>

				<div className="flex flex-col gap-4 overflow-auto">
					<h1 className="text-2xl">QR Code</h1>

					{
						files.map((data, i) => {
							return (
								<span>
									<QRCodeCanvas
										id="qrCode"
										key={i}
										value={`https://ipfs.io/ipfs/${data.hash.path}?filename=${data.hash.fileName}`}
										size={300}
										level={"H"}
									/>
									<p>{data.fileName}</p>
								</span>

							)
						})
					}
				</div>

			</main>
		</>
	);
};

export default UpdatePost;
