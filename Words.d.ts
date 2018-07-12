/**
 * A collection of words in a text item, where each word is a {@link TextRange} object. The elements are not named; you must access them by index.
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
 * ➤ Counting words
 *     This script displays the total number of words contained in all of the text art items in the current document.
 *       // Count all words in current document and report total
 *
 *       if (app.documents.length > 0) {
 *           numWords = 0;
 *           for (i = 0; i < app.activeDocument.textFrames.length; i++) {
 *               numWords += app.activeDocument.textFrames[i].words.length;
 *           }
 *           alert("There are " + numWords + " words in the document.");
 *       }
 *
 * ➤ Applying attributes to words
 *     // Apply a color to certain words
 *
 *     if (app.documents.length > 0 && app.activeDocument.textFrames.length > 0) {
 *         // Create the color to apply to the words
 *         wordColor = new RGBColor();
 *         wordColor.red = 255;
 *         wordColor.green = 0;
 *         wordColor.blue = 255;
 *         // Set the value of the word to look for
 *         searchWord = "the";
 *         // Iterate through all words in the document
 *         // and color the words that match searchWord
 *         for (i = 0; i < app.activeDocument.textFrames.length; i++) {
 *             textArt = activeDocument.textFrames[i];
 *             for (j = 0; j < textArt.words.length; j++) {
 *                 word = textArt.words[j];
 *                 if (word.contents == searchWord) {
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
	 * @param {TextFrame} [relativeObject] {@link TextFrame} object
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link Words}
	 * @since CS2
	 * @version CS2
	 */
	add(contents:String, relativeObject?:TextFrame, insertionLocation?:ElementPlacement):TextRange;

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
	 * Deletes all elements in the collection.
	 * @see {@link Words}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}