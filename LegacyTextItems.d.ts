/**
 * A collection of {@link LegacyTextItem} objects.
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
 * ･ {@link convertToNative}
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link removeAll}
 */
declare class LegacyTextItems
{
	/**
	 * Read-only. Number of elements in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link LegacyTextItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link LegacyTextItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link LegacyTextItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates text frames from all legacy text items; the original legacy text items are deleted. Returns <b>true</b> on success.
	 * @return {Boolean} {@link Boolean}
	 * @see {@link LegacyTextItems}
	 * @since CS2
	 * @version CS2
	 */
	convertToNative():Boolean;

	/**
	 * Get the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {LegacyTextItem} {@link LegacyTextItem} object
	 * @see {@link LegacyTextItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):LegacyTextItem;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {LegacyTextItem} {@link LegacyTextItem} object
	 * @see {@link LegacyTextItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):LegacyTextItem;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link LegacyTextItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}