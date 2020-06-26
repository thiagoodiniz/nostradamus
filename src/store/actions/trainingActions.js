export const Types = {
    ON_READ_FILE: '@training/ON_READ_FILE'
}

export const Creators = {
    onReadFile: (file, columns) => ({
        type: Types.ON_READ_FILE,
        file,
        columns,
    }),
}