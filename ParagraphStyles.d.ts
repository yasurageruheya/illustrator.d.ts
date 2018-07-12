/**
 * A collection of {@link ParagraphStyle} objects.
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
 * ➤ Creating and applying a paragraph style
 *     // Creates a new document with 1 text frame and 3 paragraphs
 *     // gives each paragraph a different justification, then creates
 *     // a paragraph style and applies it to all paragraphs
 *
 *     var docRef = documents.add();
 *     var pathRef = docRef.pathItems.rectangle(600, 200, 200, 400);
 *     var textRef = docRef.textFrames.areaText(pathRef);
 *     textRef.paragraphs.add("Left justified paragraph.");
 *     textRef.paragraphs.add("Center justified paragraph.");
 *     textRef.paragraphs.add("Right justified paragraph.");
 *     textRef.textRange.characterAttributes.size = 28;
 *
 *     // change the justification of each paragraph
 *     // using the paragraph attributes object
 *     var paraAttr_0 = textRef.paragraphs[0].paragraphAttributes;
 *     paraAttr_0.justification = Justification.RIGHT;
 *     var paraAttr_1 = textRef.paragraphs[1].paragraphAttributes;
 *     paraAttr_1.justification = Justification.CENTER;
 *     var paraAttr_2 = textRef.paragraphs[2].paragraphAttributes;
 *     paraAttr_2.justification = Justification.LEFT;
 *
 *     // create a new paragraph style
 *     var paraStyle = docRef.paragraphStyles.add("LeftIndent");
 *
 *     // add some paragraph attributes
 *     var paraAttr = paraStyle.paragraphAttributes;
 *     paraAttr.justification = Justification.LEFT;
 *     paraAttr.firstLineIndent = 10;
 *
 *     // apply the style to each item in the document
 *     var iCount = textRef.paragraphs.length;
 *     for (var i = 0; i < iCount; i++) {
 *         paraStyle.applyTo(textRef.paragraphs[i], true);
 *     }
 *     redraw();
 */
declare class ParagraphStyles
{
	/**
	 * Read-only. Number of elements in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link ParagraphStyles}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link ParagraphStyles}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link ParagraphStyles}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a named paragraph style.
	 * @param {String} name {@link String}
	 * @return {ParagraphStyle} {@link ParagraphStyle} object
	 * @see {@link ParagraphStyles}
	 * @since CS2
	 * @version CS2
	 */
	add(name:String):CharacterStyle;

	/**
	 * Get the first element in the collection with the provided name.
	 * @param {String} name {@link String}
	 * @return {ParagraphStyle} {@link ParagraphStyle} object
	 * @see {@link ParagraphStyles}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):CharacterStyle;

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {ParagraphStyle} {@link ParagraphStyle} object
	 * @see {@link ParagraphStyles}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):ParagraphStyle;

	/**
	 * Deletes all elements in the collection.
	 * @see {@link ParagraphStyles}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}