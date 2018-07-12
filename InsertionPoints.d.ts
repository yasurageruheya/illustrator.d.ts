/**
 * A collection of {@link InsertionPoint} objects.
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
 * ･ {@link index}
 *
 * @example
 * ➤ Using insertion points to add spaces
 *    // create a new document and simple text frame
 *    var docRef = documents.add();
 *    var textRef = docRef.textFrames.add();
 *    textRef.contents = "Wouldn't you rather be scripting?";
 *    textRef.top = 400;
 *    textRef.left = 100;
 *    textRef.textRange.characterAttributes.size = 20;
 *    redraw();
 *
 *    // Add a space between each character using insertion points.
 *    var ip;
 *    for (var i = 0; i < (textRef.insertionPoints.length); i += 2) {
 *        ip = textRef.insertionPoints[i];
 *        ip.characters.add(" ");
 *    }
 */
declare class InsertionPoints
{
	/**
	 * Read-only. Number of elements in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link InsertionPoints}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link InsertionPoints}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link InsertionPoints}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Gets an element from the collection,
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {InsertionPoint} {@link InsertionPoint} object
	 * @see {@link InsertionPoints}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):InsertionPoint;
}