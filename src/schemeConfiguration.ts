import * as vscode from 'vscode';

export const configuration: vscode.LanguageConfiguration = {
    wordPattern: /[\w\-\.:<>\*][\w\d\.\\/\-\?<>\*!]+/,
    indentationRules: {
        decreaseIndentPattern: undefined,
        increaseIndentPattern: /^\s*\(.*[^)]\s*$/
    }
}