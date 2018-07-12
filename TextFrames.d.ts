/**
 * A collection of {@link TextFrame} objects.
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
 * ･ {@link areaText}
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link pathText}
 * ･ {@link pointText}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Creating and modifying text frames
 *     // Creates a document with text frames displaying path, area and point
 *     // text, changes the content of each frame then deletes the 2nd frame
 *
 *     // create a new document
 *     var docRef = documents.add();
 *     // create 3 new textFrames (area, line, point)
 *     // Area Text
 *     var rectRef = docRef.pathItems.rectangle(700, 50, 100, 100);
 *     var areaTextRef = docRef.textFrames.areaText(rectRef);
 *     areaTextRef.contents = "TextFrame #1";
 *     areaTextRef.selected = true;
 *
 *     // Line Text
 *     var lineRef = docRef.pathItems.add();
 *     lineRef.setEntirePath(Array(Array(200, 700), Array(300, 550)));
 *     var pathTextRef = docRef.textFrames.pathText(lineRef);
 *     pathTextRef.contents = "TextFrame #2";
 *     pathTextRef.selected = true;
 *
 *     // Point Text
 *     var pointTextRef = docRef.textFrames.add();
 *     pointTextRef.contents = "TextFrame #3";
 *     pointTextRef.top = 700;
 *     pointTextRef.left = 400;
 *     pointTextRef.selected = true;
 *     redraw();
 *
 *     // count the TextFrames
 *     var iCount = docRef.textFrames.length;
 *     var sText = "There are " + iCount + " TextFrames.\r"
 *     sText += "Changing contents of each TextFrame.";
 *
 *     // change the content of each
 *     docRef.textFrames[0].contents = "Area TextFrame.";
 *     docRef.textFrames[1].contents = "Path TextFrame.";
 *     docRef.textFrames[2].contents = "Point TextFrame.";
 *     redraw();
 *
 *     docRef.textFrames[1].remove();
 *     redraw();
 *
 *     // count again
 *     var iCount = docRef.textFrames.length;
 */
declare class TextFrames
{
	/**
	 * Read-only. Number of elements in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a point text frame item.
	 * @return {TextFrame} {@link TextFrame} object
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	add():TextFrame;

	/**
	 * Creates an area text frame item.
	 * @param {PathItem} textPath {@link PathItem} object
	 * @param {TextOrientation} [orientation] {@link TextOrientation}
	 * @param {TextFrame} [baseFrame] {@link TextFrame} object
	 * @param {Boolean} [postFix] {@link Boolean}
	 * @return {TextFrame} {@link TextFrame} object
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	areaText(textPath:PathItem, orientation?:TextOrientation, baseFrame?:TextFrame, postFix?:Boolean):TextFrame;

	/**
	 * Gets the first element in the collection with the provided name.
	 * @param {String} name {@link String}
	 * @return {TextFrame} {@link TextFrame} object
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):TextFrame;

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {TextFrame} {@link TextFrame} object
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):TextFrame;

	/**
	 * Creates an on-path text frame item.
	 * @param {PathItem} textPath {@link PathItem} object
	 * @param {Number} [startTValue] {@link Number} double
	 * @param {Number} [endTValue] {@link Number} double
	 * @param {TextOrientation} [orientation] {@link TextOrientation}
	 * @param {TextFrame} [baseFrame] {@link TextFrame} object
	 * @param {Boolean} [postFix] {@link Boolean}
	 * @return {TextFrame} {@link TextFrame} object
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	pathText(textPath:PathItem, startTValue?:Number, endTValue?:Number, orientation?:TextOrientation, baseFrame?:TextFrame, postFix?:Boolean):TextFrame

	/**
	 * Creates a point text frame item.
	 * @param {Number[]} anchor array of 2 numbers
	 * @param {TextOrientation} [orientation] {@link TextOrientation}
	 * @return {TextFrame} {@link TextFrame} object
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	pointText(anchor:Number[], orientation?:TextOrientation):TextFrame;

	/**
	 * Deletes all elements in the object.
	 * @see {@link TextFrames}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}