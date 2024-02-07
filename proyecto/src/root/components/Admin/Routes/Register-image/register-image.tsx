import React, { useState, ChangeEvent, useRef } from "react";
import { LayoutAdmin } from "@/Layout";
import { imageUpload, selectRouteToRegister } from "@/root/redux";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function RegisterImage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const routeToRegister = useSelector(selectRouteToRegister);
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            await resizeImage(selectedFile, 1024, 768);
        }
    };

    const handleLabelClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleChange = async () => {
        if (file) {
            dispatch(imageUpload(`images/${routeToRegister.startPlace}-${routeToRegister.destinationPlace}`, file));
            router.push("/private/admin/register-schedule");
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const droppedImage = event.dataTransfer.files[0];

        if (droppedImage && isImageFile(droppedImage)) {
            setFile(droppedImage);
            resizeImage(droppedImage, 1024, 768);
        }
    };

    const isImageFile = (file: File) => {
        const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];
        return file && acceptedFormats.includes(file.type);
    };

    const handleRemoveImage = () => {
        setFile(null);
    };

    const resizeImage = async (file: File, width: number, height: number) => {
        return new Promise<void>((resolve, reject) => {
            const imageElement = new window.Image();
            imageElement.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.drawImage(imageElement, 0, 0, width, height);
                    canvas.toBlob(
                        (blob) => {
                            if (blob) {
                                const resizedFile = new File([blob], file.name, {
                                    type: file.type,
                                    lastModified: Date.now(),
                                });
                                setFile(resizedFile);
                                resolve();
                            } else {
                                reject(new Error("Failed to resize image."));
                            }
                        },
                        file.type,
                        1
                    );
                } else {
                    reject(new Error("Failed to get canvas context."));
                }
            };
            imageElement.src = URL.createObjectURL(file);
        });
    };

    return (
        <LayoutAdmin>
            <div className="m-4 flex flex-col items-center w-1/2 h-[500px] mb-[50px]">
                <div className="flex flex-col items-center w-full h-full">
                    <div className="flex items-center">
                        <span className="text-indigo-600 font-bold text-lg">Image</span>
                    </div>
                    <div className="md:flex justify-center flex flex-col w-full h-full">
                        <div className="md:flex justify-center flex flex-col w-full h-full">
                            <div className="flex items-center justify-center w-full h-full" onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e)}>
                                <label htmlFor="dropzone-file" className="h-full flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" onClick={handleLabelClick}>
                                    {file ? (
                                        <>
                                            <Image src={URL.createObjectURL(file)} alt="Uploaded" width={200} height={200} />
                                            <button className="mt-4 text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5" onClick={handleRemoveImage}>
                                                Remove Image
                                            </button>
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">JPEG, PNG, JPG or GIF (MAX. 1024x768px)</p>
                                        </div>
                                    )}
                                </label>
                                <input ref={fileInputRef} id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center" onClick={handleChange}>
                            <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />
                            Save Image
                        </button>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
}
