import * as vscode from 'vscode';

export const configuration: vscode.LanguageConfiguration = {
    wordPattern: /[\w\-\.:<>\*][\w\d\.\\/\-\?<>\*!]+/,
    indentationRules: {
        decreaseIndentPattern: /$a/, // match nothing: https://stackoverflow.com/questions/1723182/a-regex-that-will-never-be-matched-by-anything
        increaseIndentPattern: /^\s*\(.*[^)]\s*$/
    }
}