/**
 * A collection of {@link RasterItem} objects.
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
 * ➤ Finding and examining a raster item
 *     This script illustrates how to obtain the color space of a raster item.
 *       // Examine the color space of the first raster item in the document
 *
 *       if (app.documents.length > 0 && app.activeDocument.rasterItems.length > 0) {
 *           var rasterArt = app.activeDocument.rasterItems[0];
 *
 *           switch (rasterArt.imageColorSpace) {
 *               case ImageColorSpace.CMYK:
 *                   alert("The color space of the first raster item is CMYK");
 *                   break;
 *
 *               case ImageColorSpace.RGB:
 *                   alert("The color space of the first raster item is RGB");
 *                   break;
 *
 *               case ImageColorSpace.GRAYSCALE:
 *                   alert("The color space of the first raster item is GRAYSCALE");
 *                   break;
 *           }
 *       }
 */
declare class RasterItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link RasterItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link RasterItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link RasterItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new object.
	 * @return {RasterItem} {@link RasterItem} object
	 * @see {@link RasterItems}
	 * @since CS2
	 * @version CS2
	 */
	add():RasterItem;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {RasterItem} {@link RasterItem} object
	 * @see {@link RasterItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):RasterItem;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {RasterItem} {@link RasterItem} object
	 * @see {@link RasterItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):RasterItem;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link RasterItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}