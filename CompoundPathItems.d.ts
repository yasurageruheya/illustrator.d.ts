/**
 * A collection of {@link CompoundPathItem} objects.
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
 * ➤ Counting compound paths
 *     This example displays the total number of compound paths contained in the first layer of the current
 *     document.
 *       // Count all compound paths in layer 1 of current document
 *
 *       if (app.documents.length > 0) {
 *           doc = app.activeDocument;
 *           numCompoundPaths = doc.layers[0].compoundPathItems.length;
 *           alert("There are " + numCompoundPaths + " compound paths in the active document.");
 *       }
 */
declare class CompoundPathItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link CompoundPathItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this collection (either a {@link Layer} or a {@link GroupItem}).
	 * @const
	 * @type {Object}
	 * @see {@link CompoundPathItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link CompoundPathItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new {@link CompoundPathItem}.
	 * @return {CompoundPathItem} {@link CompoundPathItem} object
	 * @see {@link CompoundPathItems}
	 * @since CS2
	 * @version CS2
	 */
	add():CompoundPathItem;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {CompoundPathItem} {@link CompoundPathItem} object
	 * @see {@link CompoundPathItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):CompoundPathItem;

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} object or {@link Number} object
	 * @return {CompoundPathItem} {@link CompoundPathItem} object
	 * @see {@link CompoundPathItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):CompoundPathItem;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link CompoundPathItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}