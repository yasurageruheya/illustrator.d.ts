/**
 * A collection of {@link TextRange} objects, with each {@link TextRange} representing a paragraph. The elements are not named; you must access them by index.
 *
 * @since CS2
 * @version CS5
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
 * ➤ Counting paragraphs
 *     // Counts all paragraphs in current doc and stores result in paragraphCount
 *
 *     if (app.documents.length > 0) {
 *         doc = app.activeDocument;
 *         paragraphCount = 0;
 *         for (i = 0; i < doc.textFrames.length; i++) {
 *             paragraphCount += doc.textFrames[i].paragraphs.length;
 *         }
 *     }
 */
declare class Paragraphs
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Paragraphs}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Paragraphs}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Paragraphs}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Adds a new paragraph with specified text contents at the specified location in the current document. If location is not specified, adds the new paragraph to the containing text frame after the current text selection or insertion point.
	 * @param {String} contents {@link String}
	 * @param {TextFrameItem} [relativeObject] {@link TextFrameItem} object
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link Paragraphs}
	 * @since CS2
	 * @version CS5
	 */
	add(contents:String, relativeObject?:TextFrameItem, insertionLocation?:ElementPlacement):TextRange;

	/**
	 * Adds a new paragraph with specified text contents before the current text selection or insertion point.
	 * @param {String} contents {@link String}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link Paragraphs}
	 * @since CS2
	 * @version CS2
	 */
	addBefore(contents:String):TextRange;

	/**
	 * Gets an element from the collection.
	 * @param {Number} itemKey {@link Number}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link Paragraphs}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):TextRange;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link Paragraphs}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}