/**
 * A collection of {@link Document} objects.
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
 *
 * @example
 * ➤ Create a new document
 *     This examples demonstrates how to create a new document with a specific color space.
 *       // Create a document with RGB color space
 *
 *       app.documents.add(DocumentColorSpace.RGB);
 */
declare class Documents
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Documents}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Documents}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Documents}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new document using optional parameters and returns a reference to the new document.
	 * @param {DocumentColorSpace} [documentColorSpace] {@link DocumentColorSpace}
	 * @param {Number} [width] {@link Number} double
	 * @param {Number} [height] {@link Number} double
	 * @return {Document} {@link Document} object
	 * @see {@link Documents}
	 * @since CS2
	 * @version CS2
	 */
	add(documentColorSpace?:DocumentColorSpace, width?:Number, height?:Number):Document;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Document} {@link Document} object
	 * @see {@link Documents}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Document;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {Document} {@link Document} object
	 * @see {@link Documents}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Document;
}