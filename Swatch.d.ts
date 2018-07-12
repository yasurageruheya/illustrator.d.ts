/**
 * A color swatch definition contained in a document. The swatches correspond to the swatch palette in the Illustrator user interface. A script can create a new swatch. The swatch can hold all types of color data, such as pattern, gradient, CMYK, RGB, gray, and spot.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link color}
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link remove}
 *
 * @example
 * ➤ Modifying a swatch
 *     This script illustrates how to change the name of the fifth swatch.
 *       // Change the name of the last swatch
 *
 *       if (app.documents.length > 0 && app.activeDocument.swatches.length > 0) {
 *           var lastIndex = app.activeDocument.swatches.length - 1;
 *           var lastSwatch = app.activeDocument.swatches[lastIndex];
 *           lastSwatch.name = "TheLastSwatch";
 *       }
 */
declare class Swatch
{
	/**
	 * The color information for this swatch.
	 * @type {Color} {@link Color} object
	 * @see {@link Swatch}
	 * @since CS2
	 * @version CS2
	 */
	color:Color;

	/**
	 * The swatch’s name.
	 * @type {String}
	 * @see {@link Swatch}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The document that contains this swatch.
	 * @const
	 * @type {Document} {@link Document} object
	 * @see {@link Swatch}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Swatch}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Deletes this object.
	 * @see {@link Swatch}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}