/**
 * A collection of {@link Gradient} objects in a document.
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
 * ➤ Removing a gradient
 *    This example illustrates how you can remove a gradient from a document.
 *      // Delete the first gradient in the active document
 *
 *      if (app.documents.length > 0) {
 *          app.activeDocument.gradients[0].remove();
 *      }
 */
declare class Gradients
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Gradients}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Gradients}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Gradients}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new {@link Gradient} object.
	 * @return {Gradient} {@link Gradient} object
	 * @see {@link Gradients}
	 * @since CS2
	 * @version CS2
	 */
	add():Gradient;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Gradient} {@link Gradient} object
	 * @see {@link Gradients}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Gradient;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {Gradient} {@link Gradient} object
	 * @see {@link Gradients}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Gradient;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link Gradients}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}