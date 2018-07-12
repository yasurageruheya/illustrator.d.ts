/**
 * A collection {@link GraphItems} objects, which gives you access to all the graph art items in an Illustrator document.
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
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Rotating graph items
 *     // Rotates each graph item in the current document 90 degrees.
 *
 *     // Verify a document with a graph item is open
 *     var ok = false;
 *     if (documents.length > 0) {
 *         var docRef = activeDocument
 *         var iCount = docRef.graphItems.length
 *         if (iCount > 0) {
 *             ok = true;
 *             for (var i = 0; i < iCount; i++) {
 *                 var graphRef = docRef.graphItems[i];
 *                 graphRef.selected = true;
 *                 graphRef.rotate(90); //rotate clockwise 90 degrees
 *             }
 *             redraw();
 *         }
 *     }
 */
declare class GraphItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link GraphItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link GraphItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link GraphItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {GraphItems} {@link GraphItems} object
	 * @see {@link GraphItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):GraphItems;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {GraphItems} {@link GraphItems} object
	 * @see {@link GraphItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):GraphItems;

	/**
	 * Deletes all elements in the collection.
	 * @see {@link GraphItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}