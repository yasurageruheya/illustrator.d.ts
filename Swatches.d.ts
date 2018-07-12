/**
 * A collection of {@link Swatch} objects in a document.
 *
 * @since CS2
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
 * ･ {@link getSelected}
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Finding and deleting a swatch
 *     // Deletes swatch 4 from the current document
 *
 *     if (app.documents.length > 0) {
 *         if (app.activeDocument.swatches.length > 4) {
 *             swatchToDelete = app.activeDocument.swatches[3];
 *             swatchToDelete.remove();
 *         }
 *     }
 */
declare class Swatches
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Swatches}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Swatches}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Swatches}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new {@link Swatch} object.
	 * @return {Swatch} {@link Swatch} object
	 * @see {@link Swatches}
	 * @since CS2
	 * @version CS2
	 */
	add():Swatch;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Swatch} {@link Swatch} object
	 * @see {@link Swatches}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Swatch;

	/**
	 * Gets selected swatches in the document.
	 * @return {Swatch[]} List of {@link Swatch} object
	 * @see {@link Swatches}
	 * @since CS4
	 * @version CS4
	 */
	getSelected():Swatch[];

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {Swatch} {@link Swatch} object
	 * @see {@link Swatches}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Swatch;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link Swatches}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}