/**
 * A collection of {@link CharacterStyle} objects.
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
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Using characters styles
 *     // Creates 3 text frames in a new document then creates
 *     // a character style and applies it to each text frame.
 *
 *     var docRef = documents.add();
 *     var textRef1 = docRef.textFrames.add();
 *     textRef1.contents = "Scripting is fun!";
 *     textRef1.top = 700;
 *     textRef1.left = 50;
 *
 *     var textRef2 = docRef.textFrames.add();
 *     textRef2.contents = "Scripting is easy!";
 *     textRef2.top = 625;
 *     textRef2.left = 100;
 *
 *     var textRef3 = docRef.textFrames.add();
 *     textRef3.contents = "Everyone should script!";
 *     textRef3.top = 550;
 *     textRef3.left = 150;
 *     redraw();
 *
 *     // Create a new character style
 *     var charStyle = docRef.characterStyles.add("BigRed");
 *
 *     // set character attributes
 *     var charAttr = charStyle.characterAttributes;
 *     charAttr.size = 40;
 *     charAttr.tracking = -50;
 *     charAttr.capitalization = FontCapsOption.ALLCAPS;
 *     var redColor = new RGBColor();
 *     redColor.red = 255;
 *     redColor.green = 0;
 *     redColor.blue = 0;
 *     charAttr.fillColor = redColor;
 *
 *     // apply to each textFrame in the document
 *     charStyle.applyTo(textRef1.textRange);
 *     charStyle.applyTo(textRef2.textRange);
 *     charStyle.applyTo(textRef3.textRange);
 */
declare class CharacterStyles
{
	/**
	 * Read-only. Number of elements in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link CharacterStyles}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link CharacterStyles}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link CharacterStyles}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a named character style.
	 * @param {String} name {@link String}
	 * @return {CharacterStyle} {@link CharacterStyle} object
	 * @see {@link CharacterStyles}
	 * @since CS2
	 * @version CS2
	 */
	add(name:String):CharacterStyle;

	/**
	 * Gets the first element in the collection with the provided name.
	 * @param {String} name {@link String}
	 * @return {CharacterStyle} {@link CharacterStyle} object
	 * @see {@link CharacterStyles}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):CharacterStyle;

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {CharacterStyle} {@link CharacterStyle} object
	 * @see {@link CharacterStyles}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):CharacterStyle;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link CharacterStyles}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}