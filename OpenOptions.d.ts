/**
 * Options for opening a document, used with the {@link Application#open} method.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link typename}
 * ･ {@link updateLegacyText}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Automatically updating legacy text on open
 *    // Open a file with legacy text (AI 10 or older)
 *    // Use OpenOptions to automatically update the legacy text.
 *
 *    var fileRef = File.openDialog("Select an Illlustrator file with legacy text.");
 *    if (fileRef != null) {
 *        var optRef = new OpenOptions();
 *        optRef.updateLegacyText = true;
 *        var docRef = open(fileRef, DocumentColorSpace.RGB, optRef);
 *    }
 */
declare class OpenOptions
{
	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link OpenOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Whether to update all legacy text items (from previous versions of Illustrator). Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link OpenOptions}
	 * @since CS2
	 * @version CS2
	 */
	updateLegacyText:Boolean;
}