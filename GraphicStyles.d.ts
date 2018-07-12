/**
 * A collection of {@link GraphicStyle} objects in a document.
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
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Counting graphics styles
 *     //Counts the number of graphic styles in the active document
 *     // and stores result in numberOfStyles
 *
 *     if (app.documents.length > 0) {
 *         var numberOfStyles = app.activeDocument.graphicStyles.length;
 *     }
 */
declare class GraphicStyles
{
	/**
	 * Read-only. The number of graphic styles in the document.
	 * @const
	 * @type {Number}
	 * @see {@link GraphicStyles}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The document that contains this graphic styles collection.
	 * @const
	 * @type {Object}
	 * @see {@link GraphicStyles}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link GraphicStyles}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link GraphicStyles}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):GroupItem;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link GraphicStyles}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):GroupItem;

	/**
	 * Removes all elements in the referenced collection.
	 * @see {@link GraphicStyles}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}