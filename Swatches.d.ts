/**
 * A collection of {@link Swatch} objects in a document.
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
 * ➤ Finding and deleting a swatch
 *     This script illustrates how to first obtain a swatch by name and then how to delete that swatch.
 *       // Remove the swatch called "Red" in the frontmost document
 *
 *       if (app.documents.length > 0) {
 *           try {
 *               swatchToDelete = app.activeDocument.swatches["Red"];
 *               swatchToDelete.remove();
 *           } catch (e) {
 *               alert("The specified swatch doesn’t exist");
 *           }
 *       }
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