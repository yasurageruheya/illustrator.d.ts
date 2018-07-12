/**
 * A collection of brush objects in a document.
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
 *
 * @example
 * ➤ Counting brushes
 *     This script displays the total number of available brushes in the current document.
 *       // Count all brushes in active document and display total
 *
 *       if (app.documents.length > 0) {
 *           numberOfBrushes = app.activeDocument.brushes.length;
 *           alert("There are " + numberOfBrushes + " brushes in the active document.");
 *       }
 */
declare class Brushes
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Brushes}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The document that contains this brushes collection.
	 * @const
	 * @type {Object}
	 * @see {@link Brushes}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Brushes}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Brush} {@link Brush} object
	 * @see {@link Brushes}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Brush;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @see {@link Brushes}
	 * @return {Brush} {@link Brush} object
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Brush;
}