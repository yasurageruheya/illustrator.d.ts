/**
 * A collection of characters ({@link TextRange} objects of length 1). The elements are not named; you must access them by index.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link length}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link add}
 * ･ {@link addBefore}
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Counting characters
 *     // Counts all characters in the active document,
 *     // including whitespace, and stores in numChars
 *
 *     if (app.documents.length > 0) {
 *         var doc = app.activeDocument;
 *         var numChars = 0;
 *         for (i = 0; i < doc.textFrames.length; i++) {
 *             textArtRange = doc.textFrames[i].contents;
 *             numChars += textArtRange.length;
 *         }
 *     }
 */
declare class Characters
{
	/**
	 * Read-only. The number of characters in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Characters}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The text art item that contains this character.
	 * @const
	 * @type {Object}
	 * @see {@link Characters}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Characters}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Adds a new character with specified text contents at the specified location in the current document. If a location is not specified, adds the new character to the containing text frame after the current text selection or insertion point.
	 * @param {String} contents {@link String}
	 * @param {TextFrame} [relativeObject] {@link TextFrame} object
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange}
	 * @see {@link Characters}
	 * @since CS2
	 * @version CS2
	 */
	add(contents:String, relativeObject?:TextFrame, insertionLocation?:ElementPlacement):TextRange;

	/**
	 * Adds a character before the specified text selection.
	 * @param {String} contents {@link String}
	 * @return {TextRange} {@link TextRange}
	 * @see {@link Characters}
	 * @since CS2
	 * @version CS2
	 */
	addBefore(contents:String):TextRange;

	/**
	 * Gets an element from the collection.
	 * @param {Number} itemKey {@link Number}
	 * @return {TextRange} {@link TextRange}
	 * @see {@link Characters}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:Number):TextRange;

	/**
	 * Deletes all elements in the collection.
	 * @see {@link Characters}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}