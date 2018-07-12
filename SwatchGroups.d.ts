/**
 * A collection of SwatchGroup objects.
 *
 * @since CS4
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link length}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link add}
 * ･ {@link getByName}
 * ･ {@link removeAll}
 */
declare class SwatchGroups
{
	/**
	 * Read-only. The number of objects in the collection
	 * @const
	 * @type {Number}
	 * @see {@link SwatchGroups}
	 * @since CS4
	 * @version CS4
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link SwatchGroups}
	 * @since CS4
	 * @version CS4
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link SwatchGroups}
	 * @since CS4
	 * @version CS4
	 */
	readonly typename:String;

	/**
	 * Creates a swatch group.
	 * @return {SwatchGroup} {@link SwatchGroup} object
	 * @see {@link SwatchGroups}
	 * @since CS4
	 * @version CS4
	 */
	add():SwatchGroup;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {SwatchGroup} {@link SwatchGroup} object
	 * @see {@link SwatchGroups}
	 * @since CS4
	 * @version CS4
	 */
	getByName(name:String):SwatchGroup;

	/**
	 * Deletes all elements in the collection.
	 * @see {@link SwatchGroups}
	 * @since CS4
	 * @version CS4
	 */
	removeAll():void;
}