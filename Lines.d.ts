/**
 * A collection of {@link TextRange} objects representing lines of text in a text frame. The elements are not named;
 * you must access them by index.
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
 * ･ {@link removeAll}
 */
declare class Lines
{
	/**
	 * Read-only. Number of elements in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Lines}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link Lines}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link Lines}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Gets an element from the collection.
	 * @param {Number} itemKey {@link Number}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link Lines}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):TextRange;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link Lines}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}