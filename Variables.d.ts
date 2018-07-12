/**
 * The collection of Variable objects in the document. For an example of how to create variables, see <a href="psi_element://Dataset">Using variables and datasets</a>.
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
declare class Variables
{
	/**
	 * Read-only. The number of variables in the document
	 * @const
	 * @type {Number}
	 * @see {@link Variables}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The object that contains the collection of variables.
	 * @const
	 * @type {Object}
	 * @see {@link Variables}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Variables}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Adds a new variable to the collection.
	 * @return {Variable} {@link Variable} object
	 * @see {@link Variables}
	 * @since CS2
	 * @version CS2
	 */
	add():Variable;

	/**
	 * Get the first element in the collection with the provided name.
	 * @param {String} name {@link String}
	 * @return {Variable} {@link Variable} object
	 * @see {@link Variables}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Variable;

	/**
	 * Get an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {Variable} {@link Variable} object
	 * @see {@link Variables}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Variable;

	/**
	 * Deletes all elements in the collection.
	 * @see {@link Variables}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}