import * as vscode from 'vscode';
import { exists } from 'fs';

export function activate(context: vscode.ExtensionContext) {

	exists('.env',(exists)=>console.log("Something: "+exists));

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);

	const myName = vscode.window.showInputBox({
		placeHolder:"enter your name"
	});

	console.log("my name is :"+myName);

}

export function deactivate() {}
