export const Types = {
    UPLOAD_FILE: '@training/UPLOAD_FILE',
    UPLOAD_FILE_SUCCESS: '@training/UPLOAD_FILE_SUCCESS',
    UPLOAD_FILE_FAILURE: '@training/UPLOAD_FILE_FAILURE',

    ON_UPLOAD_FILE_SUCCESS: '@training/ON_UPLOAD_FILE_SUCCESS',
}

export const Creators = {
    uploadFile: (file) => ({
        type: Types.UPLOAD_FILE,
        file,
    }),

    uploadFileSuccess: (processId) => ({
        type: Types.UPLOAD_FILE_SUCCESS,
        processId,
    }),

    uploadFileFailure: () => ({
        type: Types.UPLOAD_FILE_FAILURE,
    }),

    onUploadFileSuccess: (fileName, columns) => ({
        type: Types.ON_UPLOAD_FILE_SUCCESS,
        fileName,
        columns,
    }),
}