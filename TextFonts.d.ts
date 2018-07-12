/**
 * A collection of {@link TextFont} objects.
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
 * ･ {@link getByName}
 * ･ {@link index}
 *
 * @example
 * ➤ Finding fonts
 *     // TextFont, TextFonts
 *     // Create a new document and display a list of all available fonts.
 *
 *     var docRef = documents.add();
 *     var sFontNames = "";
 *     var x = 30;
 *     var y = (docRef.height - 30);
 *
 *     var iCount = textFonts.length;
 *     for (var i = 0; i < iCount; i++) {
 *         sFontNames = textFonts[i].name;
 *         sFontNames += " ";
 *         sFontNames += textFonts[i].style;
 *
 *         var textRef = docRef.textFrames.add();
 *         textRef.textRange.characterAttributes.size = 8;
 *         textRef.contents = sFontNames;
 *         textRef.top = (y);
 *         textRef.left = x;
 *         redraw();
 *
 *         if ((y -= (textRef.height)) <= 30) {
 *             y = (docRef.height - 30);
 *             x += 150;
 *         }
 *     }
 */
declare class TextFonts
{
	/**
	 * Read-only. Number of elements in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link TextFonts}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link TextFonts}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link TextFonts}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Get an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {TextFont} {@link TextFont} object
	 * @see {@link TextFonts}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):TextFont;

	/**
	 * Get the first element in the collection with the provided name.
	 * @param {String} name {@link String}
	 * @return {TextFont} {@link TextFont} object
	 * @see {@link TextFonts}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):TextFont;
}