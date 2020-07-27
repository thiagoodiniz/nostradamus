export const Types = {
    SHOW_MESSAGE: '@alert/SHOW_MESSAGE',
    REMOVE_MESSAGE: '@alert/REMOVE_MESSAGE',
}

export const Creators = {
    showMessage: (messageText, messageType ) => ({
        type: Types.SHOW_MESSAGE,
        messageText,
        messageType,
    }),

    removeMessage: () => ({
        type: Types.REMOVE_MESSAGE,
    }),
}