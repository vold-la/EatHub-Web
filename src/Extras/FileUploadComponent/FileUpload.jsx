import React, { useRef, useState } from "react";
import { MdDeleteForever } from 'react-icons/md';
import {
    FileUploadContainer,
    FormField,
    DragDropText,
    UploadFileBtn,
    ImagePreview,
    PreviewContainer,
    PreviewList,
    InputLabel
} from "./FileUploadStyles";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
    Object.keys(nestedObj).map((key) => nestedObj[key]);

const FileUpload = ({
    label,
    updateFilesCb,
    cacheImages,
    cacheErrors,
    updateErrors,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps
}) => {
    //let fl = cacheImages.images.length > 0 ? cacheImages : {};
    //console.log(fl);
    const fileInputField = useRef(null);
    const [files, setFiles] = useState(cacheImages);
    const [errors, setErrors] = useState( cacheErrors );

    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    const addNewFiles = (newFiles) => {
        let err;
        for (let  file of newFiles) {
            if (file.size > maxFileSizeInBytes) {
                err=({ ...err ,  [file.name]: "Size must be less than " + maxFileSizeInBytes / 100000 + " MB" });
            }

            if (file.type.split("/")[1] !== undefined && !(otherProps.accept.split(',').indexOf(file.type.split("/")[1]))) {
                err({ ...err ,  [file.name] : "Invalid extension" });
            }

                if (!otherProps.multiple) {
                    return { file };
                }
                files[file.name] = file;
        }

        setErrors({ ...errors, ...err });
        callUpdateErrors({ ...errors, ...err });
        console.log(errors);
        return { ...files };
    };


    const callUpdateErrors = (b) => {
        updateErrors(b);
    };

    const callUpdateFilesCb = (files) => {
        updateFilesCb(files);
    };

    const handleNewFileUpload = (e) => {
        const { files: newFiles } = e.target;
        if (newFiles.length) {
            let updatedFiles = addNewFiles(newFiles);
            setFiles(updatedFiles);
            callUpdateFilesCb(updatedFiles);
        }
    };

    const removeFile = (fileName) => {
        if (fileName in errors) {
            delete errors[fileName];
            callUpdateErrors(errors);
        }
        
        delete files[fileName];
        setFiles({ ...files });
        callUpdateFilesCb({ ...files });
    };

    return (
        <div>
            <FileUploadContainer>
                <InputLabel>{label}</InputLabel>
                <DragDropText>Drag and drop your files anywhere or</DragDropText>
                <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
                    <i className="fas fa-file-upload" />
                    <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
                </UploadFileBtn>
                <FormField
                    type="file"
                    ref={fileInputField}
                    onChange={handleNewFileUpload}
                    title=""
                    value=""
                    {...otherProps}
                />
                <PreviewList>
                    { Object.keys(files).map((fileName, index) => {
                        let file = files[fileName];
                        let er = file.name in errors;
                        return (
                            <PreviewContainer style={{ border: er && '1px solid red'   }} key={fileName}>
                                <div>
                                    <ImagePreview
                                        style={{ opacity: er && 0.2 }}
                                        src={URL.createObjectURL(file)}
                                        alt={`file preview ${index}`} />

                                    {(er && <div style={{ position: 'absolute', top: '0', left: '1px', color: 'red', fontSize: '15px'}}>{errors[file.name]}</div>)}

                                    <div style={{ float: 'left', textDecoration: 'underline',  color: er ? 'red' : 'blue' , cursor: 'pointer', fontSize: '12px' }}>
                                        {er ? "Failed" : "Preview" }
                                    </div>
                                    <MdDeleteForever
                                        style={{ float: 'right' }}
                                        onClick={() => removeFile(fileName)}
                                    />

                                </div>

                            </PreviewContainer>
                        );
                    })}
                </PreviewList>
            </FileUploadContainer>
            <div style={{ visibility: Object.keys(errors).length ? 'visible' : 'hidden' , color :'red' }}>
                Error in image(s)
            </div>

        </div>
    );
};

export default FileUpload;
