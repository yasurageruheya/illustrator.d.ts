/**
 * A collection of {@link RasterItem} objects.
 *
 * @since CS2
 * @version CS3
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
 * ➤ Creating a raster item
 *     // Creates a new raster item in a new document from a raster file
 *     // jpgFilePath contains the full path and file name of a jpg file
 *
 *     function createRasterItem(jpgFilePath) {
 *         var rasterFile = File(jpgFilePath);
 *         var myDoc = app.documents.add();
 *         var myPlacedItem = myDoc.placedItems.add();
 *         myPlacedItem.file = rasterFile;
 *         myPlacedItem.position = Array(0, myDoc.height);
 *         myPlacedItem.embed();
 *     }
 *
 * @example
 * ➤ Finding and examining a raster item
 *     // Examines the color space of the first raster item in the document and displays
 *     // result in ESTK console
 *
 *     if (app.documents.length > 0 && app.activeDocument.rasterItems.length > 0) {
 *         var rasterArt = app.activeDocument.rasterItems[0];
 *
 *         switch (rasterArt.imageColorSpace) {
 *             case ImageColorSpace.CMYK:
 *                 $.writeln("The color space of the first raster item is CMYK");
 *                 break;
 *
 *             case ImageColorSpace.RGB:
 *                 $.writeln("The color space of the first raster item is RGB");
 *                 break;
 *
 *             case ImageColorSpace.GRAYSCALE:
 *                 $.writeln("The color space of the first raster item is GRAYSCALE");
 *                 break;
 *         }
 *     }
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