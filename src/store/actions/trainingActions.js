export const Types = {
    ON_READ_FILE: '@training/ON_READ_FILE'
}

export const Creators = {
    onReadFile: (fileName, columns) => ({
        type: Types.ON_READ_FILE,
        fileName,
        columns,
    }),
}