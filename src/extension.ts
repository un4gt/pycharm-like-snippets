import * as vscode from 'vscode';

export function activate(ctx: vscode.ExtensionContext) {

	console.log("Congralations...."); 

    const disposable = vscode.commands.registerTextEditorCommand("pycharm-like-snippets.printExpression",
        async (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit, _: any) => {
			const currentLine = textEditor.selection.active.line;
			const currentCharacter = textEditor.selection.active.character;
			let { text } = textEditor.document.lineAt(currentLine);
			text = text.trim();

			const startCharacter = currentCharacter - text.length;
			const range = new vscode.Range(new vscode.Position(currentLine, startCharacter), new vscode.Position(currentLine,currentCharacter + 1));
			
            const dstText = `print(${text})`;
			await textEditor.edit(editBuilder => {
				editBuilder.replace(range, dstText);
			});
        }
    );

    ctx.subscriptions.push(disposable);
}