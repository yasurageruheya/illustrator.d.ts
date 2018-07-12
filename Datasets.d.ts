/**
 * A collection of {@link Dataset} objects.
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
declare class Datasets
{
	/**
	 * Read-only. The number of datasets in the collection
	 * @const
	 * @type {Number}
	 * @see {@link Datasets}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The name of the object that contains this dataset
	 * @const
	 * @type {Document} {@link Document} object
	 * @see {@link Datasets}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Datasets}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new {@link Dataset} object.
	 * @return {Dataset} {@link Dataset} object
	 * @see {@link Datasets}
	 * @since CS2
	 * @version CS2
	 */
	add():Dataset;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Dataset} {@link Dataset} object
	 * @see {@link Datasets}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Dataset;

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} object or {@link Number} object
	 * @return {Dataset} {@link Dataset} object
	 * @see {@link Datasets}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Dataset;

	/**
	 * Removes all elements in the collection.
	 * @see {@link Datasets}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}