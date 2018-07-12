/**
 * A collection of words in a text item, where each word is a {@link TextRange} object. The elements are not named; you must access them by index.
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
 * ➤ Counting words
 *     // Counts all words in current document and stores total in numWords
 *
 *     if (app.documents.length > 0) {
 *         numWords = 0;
 *         for (i = 0; i < app.activeDocument.textFrames.length; i++) {
 *             numWords += app.activeDocument.textFrames[i].words.length;
 *         }
 *     }
 *
 * @example
 * ➤ Applying attributes to words
 *     // Creates a new magenta color and applies the color to all words meeting a specific criteria
 *
 *     if (app.documents.length > 0 && app.activeDocument.textFrames.length > 0) {
 *         // Create the color to apply to the words
 *         wordColor = new RGBColor();
 *         wordColor.red = 255;
 *         wordColor.green = 0;
 *         wordColor.blue = 255;
 *         // Set the value of the word to look for
 *         searchWord1 = "the";
 *         searchWord2 = "The";
 *         searchWord3 = "THE";
 *         // Iterate through all words in the document
 *         // and color the words that match searchWord
 *         for (i = 0; i < app.activeDocument.textFrames.length; i++) {
 *             textArt = activeDocument.textFrames[i];
 *             for (j = 0; j < textArt.words.length; j++) {
 *                 word = textArt.words[j];
 *                 if (word.contents == searchWord1 || word.contents == searchWord2 || word.contents == searchWord3) {
 *                     word.filled = true;
 *                     word.fillColor = wordColor;
 *                 }
 *             }
 *         }
 *     }
 */
declare class Words
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Words}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Words}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Words}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Adds a word to the current document at the specified location. If no location is specified, adds it to the containing text frame after the current word selection or insertion point.
	 * @param {String} contents {@link String}
	 * @param {TextFrameItem} [relativeObject] {@link TextFrameItem} object
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link Words}
	 * @since CS2
	 * @version CS5
	 */
	add(contents:String, relativeObject?:TextFrameItem, insertionLocation?:ElementPlacement):TextRange;

	/**
	 * Adds a word before the current word selection or insertion point.
	 * @param {String} contents {@link String}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link Words}
	 * @since CS2
	 * @version CS2
	 */
	addBefore(contents:String):TextRange;

	/**
	 * Gets an element from the collection.
	 * @param {Number} itemKey {@link Number}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link Words}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):TextRange;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link Words}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}