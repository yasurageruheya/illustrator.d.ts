/**
 * A collection of {@link Pattern} objects in a document.
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
 * ➤ Removing a pattern
 *     // Deletes the last pattern from the current document.
 *
 *     if (app.documents.length > 0) {
 *         var lastIndex = app.activeDocument.patterns.length - 1;
 *         var patternToRemove = app.activeDocument.patterns[lastIndex];
 *         var patternName = patternToRemove.name;
 *         patternToRemove.remove();
 *         // Note after removing Illustrator objects, set the variable that
 *         // referenced the removed object to null, since it is now invalid.
 *         patternToRemove = null;
 *     }
 */
declare class Patterns
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Patterns}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Patterns}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Patterns}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new object.
	 * @return {Pattern} {@link Pattern} object
	 * @see {@link Patterns}
	 * @since CS2
	 * @version CS2
	 */
	add():Pattern;

	/**
	 * Gets the first element in the collection with the provided name.
	 * @param {String} name {@link String}
	 * @return {Pattern} {@link Pattern} object
	 * @see {@link Patterns}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Pattern;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {Pattern} {@link Pattern} object
	 * @see {@link Patterns}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Pattern;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link Patterns}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}