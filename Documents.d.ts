/**
 * A collection of {@link Document} objects.
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
 * ･ {@link addDocument}
 * ･ {@link getByName}
 * ･ {@link index}
 *
 * @example
 * ➤ Creating a new document
 *     // Creates a new document with an RGB color space
 *
 *     app.documents.add(DocumentColorSpace.RGB);
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
	 * @param {Number} [numArtBoards] {@link Number} long
	 * @param {DocumentArtboardLayout} [artboardLayout] {@link DocumentArtboardLayout}
	 * @param {Number} [artboardSpacing] {@link Number} double
	 * @param {Number} [artboardRowsOrCols] {@link Number} long
	 * @return {Document} {@link Document} object
	 * @see {@link Documents}
	 * @since CS2
	 * @version CS4
	 */
	add(documentColorSpace?:DocumentColorSpace, width?:Number, height?:Number, numArtBoards?:Number, artboardLayout?:DocumentArtboardLayout, artboardSpacing?:Number, artboardRowsOrCols?:Number):Document;

	/**
	 * Creates a document from the preset, and returns a reference to the new document.
	 * @param {String} startupPreset {@link String}
	 * @param {DocumentPreset} presetSettings {@link DocumentPreset} object
	 * @return {Document} {@link Document} object
	 * @see {@link Documents}
	 * @since CS3
	 * @version CS4
	 */
	addDocument(startupPreset:String, presetSettings:DocumentPreset):Document;

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