/**
 * An RGB color specification, used to apply an RGB color to a layer or art item.
 * If the color space of a document is RGB and you specify the color value for a page item in that document using CMYK, Illustrator will translate the CMYK color specification into an RGB color specification. The same thing happens if the document’s color space is CMYK and you specify colors using RGB. Since this translation can lose information, you should specify colors using the class that matches the document’s actual color space.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link blue}
 * ･ {@link green}
 * ･ {@link red}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting an RGB color
 *     This script sets the default fill color of the frontmost document to yellow using an RGB object. If the color
 *     space of the frontmost document is CMYK, then Illustrator automatically translates the RGB fill color to a
 *     CMYK color.
 *       // Set the default fill color to yellow.
 *
 *       if (app.documents.length > 0) {
 *           // Define the new color
 *           var newRGBColor = new RGBColor();
 *
 *           newRGBColor.red = 255;
 *           newRGBColor.green = 255;
 *           newRGBColor.blue = 0;
 *           app.activeDocument.defaultFillColor = newRGBColor;
 *       }
 */
declare class RGBColor extends Color
{
	/**
	 * The blue color value. Range: 0.0 to 255.0
	 * @type {Number} double
	 * @see {@link RGBColor}
	 * @since CS6
	 */
	blue:Number;

	/**
	 * The green color value. Range: 0.0 to 255.0
	 * @type {Number} double
	 * @see {@link RGBColor}
	 * @since CS6
	 */
	green:Number;

	/**
	 * The red color value. Range: 0.0 to 255.0
	 * @type {Number} double
	 * @see {@link RGBColor}
	 * @since CS6
	 */
	red:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link RGBColor}
	 * @since CS6
	 */
	readonly typename:String;
}