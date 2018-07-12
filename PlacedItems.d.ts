/**
 * A collection of {@link PlacedItem} objects in the document.
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
 */
declare class PlacedItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link PlacedItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link PlacedItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PlacedItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new object. Use to place new art in a document. Use the file property of the resulting {@link PlacedItem} object to link the file containing the artwork. See {@link PlacedItem}.
	 * @return {PlacedItem} {@link PlacedItem} object
	 * @see {@link PlacedItems}
	 * @since CS2
	 * @version CS2
	 */
	add():PlacedItem;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {PlacedItem} {@link PlacedItem} object
	 * @see {@link PlacedItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):PlacedItem;

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {PlacedItem} {@link PlacedItem} object
	 * @see {@link PlacedItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):PlacedItem;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link PlacedItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}