/**
 * A CMYK color specification, used where a {@link Color} object is required.
 * If the color space of a document is RGB and you specify the color value for a page item in that document using CMYK, Illustrator will translate the CMYK color specification into an RGB color specification. The same thing happens if the document’s color space is CMYK and you specify colors using RGB. Since this translation can lose information, you should specify colors using the class that matches the document’s actual color space.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link black}
 * ･ {@link cyan}
 * ･ {@link magenta}
 * ･ {@link typename}
 * ･ {@link yellow}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting a CMYK color
 *     // Sets the fill color of the frontmost path item in
 *     // the current document to a light purple CMYK color
 *
 *     if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
 *         frontPath = app.activeDocument.pathItems[0];
 *         // Set color values for the CMYK object
 *         newCMYKColor = new CMYKColor();
 *         newCMYKColor.black = 0;
 *         newCMYKColor.cyan = 30.4;
 *         newCMYKColor.magenta = 32;
 *         newCMYKColor.yellow = 0;
 *         // Use the color object in the path item
 *         frontPath.filled = true;
 *         frontPath.fillColor = newCMYKColor;
 *     }
 */
declare class CMYKColor extends Color
{
	/**
	 * The black color value. Range <b>0.0–100.0</b>. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link CMYKColor}
	 * @since CS2
	 * @version CS2
	 */
	black:Number;

	/**
	 * The cyan color value. Range <b>0.0–100.0</b>. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link CMYKColor}
	 * @since CS2
	 * @version CS2
	 */
	cyan:Number;

	/**
	 * The magenta color value. Range <b>0.0–100.0</b>. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link CMYKColor}
	 * @since CS2
	 * @version CS2
	 */
	magenta:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link CMYKColor}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The yellow color value. Range <b>0.0–100.0</b>. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link CMYKColor}
	 * @since CS2
	 * @version CS2
	 */
	yellow:Number;
}