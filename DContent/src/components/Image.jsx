import { useEffect, useState } from "react";

const Image = ({ fileError, file, setFile }) => {
	const [inputFile, setInputFile] = useState(null);
	const [inDraggableArea, setInDraggableArea] = useState(false);
	const [fileExtensionError, setFileExtensionError] = useState(false);

	useEffect(() => {
		if (!fileError && !fileExtensionError) setFile(inputFile);
	}, [inputFile, fileError, fileExtensionError, setFile]);

	const handleFile = (file) => {

		setInputFile(file);
	};

	return (
		<>
			{(file === null || fileError || fileExtensionError) && (
				<div
					onDragOver={(e) => {
						e.preventDefault();
						setInDraggableArea(true);
					}}
					onDragLeave={(e) => {
						e.preventDefault();
						setInDraggableArea(false);
					}}
					onDrop={(e) => {
						e.preventDefault();
						handleFile(e.dataTransfer.files[0]);
					}}
					className={`flex h-40 flex-col items-center justify-center gap-3 border-2 ${fileExtensionError
						? `border-red-600`
						: `border-blue-600`
						} ${!inDraggableArea ? `border-dashed` : ``} rounded-md`}>
					{/* <DownloadIcon className="h-10 w-10 text-gray-400 lg:h-16 lg:w-16" /> */}
					<p className="text-gray-400 lg:text-lg">
						Drag 'n' drop some file here or{" "}
						<label htmlFor="fileInput">
							<span className="cursor-pointer text-blue-600 focus:outline-none">
								click here
							</span>
							<input
								type="file"
								id="fileInput"
								accept="image/* pdf/*"
								onChange={(e) => handleFile(e.target.files[0])}
								className="hidden"
							/>
						</label>
					</p>
					{fileExtensionError && (
						<p className="text-red-600">
							You can only upload single image
						</p>
					)}
				</div>
			)}
			{file && !fileExtensionError && !fileError && (
				<div className={`flex h-40 flex-col items-center justify-center gap-3 border-2  ${fileExtensionError
					? `border-red-600`
					: `border-blue-600`
					} ${!inDraggableArea ? `border-dashed` : ``} rounded-md`}>

					{file.name}
				</div>

			)}
		</>
	);
};

export default Image;
