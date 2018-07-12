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
 *     // Creates a new A3 sized document and display a list of available fonts until the
 *     document is full.
 *
 *     var edgeSpacing = 10;
 *     var columnSpacing = 230;
 *     var docPreset = new DocumentPreset;
 *     docPreset.width = 1191.0;
 *     docPreset.height = 842.0
 *
 *     var docRef = documents.addDocument(DocumentColorSpace.CMYK, docPreset);
 *     var sFontNames = "";
 *     var x = edgeSpacing;
 *     var y = (docRef.height - edgeSpacing);
 *
 *     var iCount = textFonts.length;
 *     for (var i = 0; i < iCount; i++) {
 *         sFontName = textFonts[i].name;
 *         sFontName += " ";
 *         sFontNames = sFontName + textFonts[i].style;
 *
 *         var textRef = docRef.textFrames.add();
 *         textRef.textRange.characterAttributes.size = 10;
 *         textRef.contents = sFontNames;
 *         textRef.top = y;
 *         textRef.left = x;
 *
 *         // check wether the text frame will go off the edge of the document
 *         if ((x + textRef.width) > docRef.width) {
 *             textRef.remove();
 *             iCount = i;
 *             break;
 *         } else {
 *             // display text frame
 *             textRef.textRange.characterAttributes.textFont = textFonts.getByName(textFonts[i].name);
 *             redraw();
 *
 *             if ((y -= (textRef.height)) <= 20) {
 *                 y = (docRef.height - edgeSpacing);
 *                 x += columnSpacing;
 *             }
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