export const Types = {
    UPLOAD_FILE: '@training/UPLOAD_FILE',
    UPLOAD_FILE_SUCCESS: '@training/UPLOAD_FILE_SUCCESS',
    UPLOAD_FILE_FAILURE: '@training/UPLOAD_FILE_FAILURE',

    ON_UPLOAD_FILE_SUCCESS: '@training/ON_UPLOAD_FILE_SUCCESS',

    DROP_COLUMN_ON_PARAMETER: '@training/DROP_COLUMN_ON_PARAMETER',

    MODIFY_RESAMPLE_PARAMETER: '@training/MODIFY_RESAMPLE_PARAMETER'
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

    dropColumnOnParameter: (column, parameter) => ({
        type: Types.DROP_COLUMN_ON_PARAMETER,
        column,
        parameter
    }),

    modifyResambleParameter: (value) => ({
        type: Types.MODIFY_RESAMPLE_PARAMETER,
        value
    })
}