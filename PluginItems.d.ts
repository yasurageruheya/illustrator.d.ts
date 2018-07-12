/**
 * A collection of PluginItem objects in a document. See <a href="psi_element://PluginItem">Copying a plugin item</a>.
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
 */
declare class PluginItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link PluginItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link PluginItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PluginItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {PluginItem} {@link PluginItem} object
	 * @see {@link PluginItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):PluginItem;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {PluginItem} {@link PluginItem} object
	 * @see {@link PluginItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):PluginItem;

	/**
	 * Deletes all objects in this collection.
	 * @see {@link PluginItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}