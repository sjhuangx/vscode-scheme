import * as vscode from 'vscode';

export const configuration: vscode.LanguageConfiguration = {
    wordPattern: /:?\w+[\.\w+]*/g, //? is this correct?
    indentationRules: {
        increaseIndentPattern: /^.*\(.*[^\)\"]$/,
        decreaseIndentPattern: /^.*\).*[^\(\"]$/
    },
}