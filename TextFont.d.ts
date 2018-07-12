/**
 * Information about a font in the document, found in a {@link CharacterAttributes} object.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link family}
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link style}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting the font of text
 *     // Set the font of all the text in the document to the first font
 *
 *     if (app.documents.length > 0) {
 *         // Iterate through all text art and apply font 0
 *         for (i = 0; i < app.activeDocument.textFrames.length; i++) {
 *             textArtRange = app.activeDocument.textFrames[i].textRange;
 *             textArtRange.characterAttributes.textFont = app.textFonts[0];
 *         }
 *     }
 */
declare class TextFont
{
	/**
	 * Read-only. The font’s family name.
	 * @const
	 * @type {String}
	 * @see {@link TextFont}
	 * @since CS2
	 * @version CS2
	 */
	readonly family:String;

	/**
	 * Read-only. The font’s full name.
	 * @const
	 * @type {String}
	 * @see {@link TextFont}
	 * @since CS2
	 * @version CS2
	 */
	readonly name:String;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link TextFont}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The font’s style name.
	 * @const
	 * @type {String}
	 * @see {@link TextFont}
	 * @since CS2
	 * @version CS2
	 */
	readonly style:String;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link TextFont}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}