/**
 * A collection of {@link Tag} objects.
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
 * ➤ Setting tag values
 *     // Adds tags to all RasterItems and PlacedItems in the current document
 *
 *     if (app.documents.length > 0) {
 *         doc = app.activeDocument;
 *         if (doc.placedItems.length + doc.rasterItems.length > 0) {
 *             for (i = 0; i < doc.pageItems.length; i++) {
 *                 imageArt = doc.pageItems[i];
 *                 if (imageArt.typename == "PlacedItem" || imageArt.typename == "RasterItem") {
 *                     // Create a new Tag with the name AdobeURL and the
 *                     // value of the www link
 *                     urlTAG = imageArt.tags.add();
 *                     urlTAG.name = "AdobeWebSite";
 *                     urlTAG.value = "http://www.adobe.com/";
 *                 }
 *             }
 *         } else {
 *             alert("No placed or raster items in the document");
 *         }
 *     }
 */
declare class Tags
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Tags}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Tags}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Tags}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new {@link Tag} object.
	 * @return {Tag} {@link Tag} object
	 * @see {@link Tags}
	 * @since CS2
	 * @version CS2
	 */
	add():Tag;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Tag} {@link Tag} object
	 * @see {@link Tags}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Tag;

	/**
	 * Gets an element from the collection.
	 * @param {String|Number} itemKey {@link String} or {@link Number}
	 * @return {Tag} {@link Tag} object
	 * @see {@link Tags}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Tag;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link Tags}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}