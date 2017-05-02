import * as vscode from 'vscode';
import {configuration} from './schemeConfiguration';

export function activate(ctx: vscode.ExtensionContext) {
    ctx.subscriptions.push(vscode.languages.setLanguageConfiguration('scheme', configuration));
}

export function deactivate() {
}