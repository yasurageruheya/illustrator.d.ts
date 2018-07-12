/**
 * A collection of {@link TextRange} objects.
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
declare class TextRanges
{
	/**
	 * Read-only. Number of elements in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link TextRanges}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link TextRanges}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link TextRanges}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Get an element from the collection
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link TextRanges}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):TextRange;

	/**
	 * Deletes all elements in the object.
	 * @see {@link TextRanges}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}