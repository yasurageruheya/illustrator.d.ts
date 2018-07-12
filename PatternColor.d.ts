/**
 * A pattern color specification. You can create a new pattern color by modifying an existing pattern in the document. Any modification you make to a pattern affects that pattern in the Palette.
 * {@link PatternColor} objects can be used in any property that takes a color object, such as <b>fillColor</b> or <b>strokeColor</b>.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link matrix}
 * ･ {@link pattern}
 * ･ {@link reflect}
 * ･ {@link reflectAngle}
 * ･ {@link rotation}
 * ･ {@link scaleFactor}
 * ･ {@link shearAngle}
 * ･ {@link shearAxis}
 * ･ {@link shiftAngle}
 * ･ {@link shiftDistance}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Modifying and applying pattern colors
 *    This script illustrates how to modify the first pattern in a document.
 *      // Change patterns used as swatch colors in the frontmost document
 *      // (This also changes the patterns in the palette)
 *      if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
 *          doc = app.activeDocument;
 *          swatchIndex = 0;
 *          for (i = 0; i < doc.swatches.length; i++) {
 *              // Get the generic color object of the swatch
 *              currentSwatch = doc.swatches[i];
 *              swatchColor = currentSwatch.color;
 *              // Only operate on patterns
 *              if (currentSwatch.color.typename == "PatternColor") {
 *                  // Change a pattern property
 *                  currentSwatch.color.rotation = 10;
 *                  swatchIndex = i;
 *              }
 *          }
 *          // Apply the last pattern color swatch to the frontmost path
 *          firstPath = app.activeDocument.pathItems[0];
 *          firstPath.filled = true;
 *          firstPath.fillColor = doc.swatches[swatchIndex].color;
 *      }
 */
declare class PatternColor extends Color
{
	/**
	 * Additional transformation arising from manipulating the path.
	 * @type {Matrix} {@link Matrix} object
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	matrix:Matrix;

	/**
	 * A reference to the pattern object that defines the pattern to use in this color definition.
	 * @type {Pattern} {@link Pattern} object
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	pattern:Pattern;

	/**
	 * If <b>true</b>, the prototype should be reflected before filling. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	reflect:Boolean;

	/**
	 * The axis around which to reflect, in points. Default: 0.0
	 * @type {Number} double
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	reflectAngle:Number;

	/**
	 * The angle in radians to rotate the prototype pattern before filling. Default: 0.0
	 * @type {Number} double
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	rotation:Number;

	/**
	 * The fraction to which to scale the prototype pattern before filling, represented as a point containing horizontal and vertical scaling percentages.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	scaleFactor:Number[];

	/**
	 * The angle in radians by which to slant the shear. Default: 0.0
	 * @type {Number} double
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	shearAngle:Number;

	/**
	 * The axis to shear with respect to, in points. Default: 0.0
	 * @type {Number} double
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	shearAxis:Number;

	/**
	 * The angle in radians to which to translate the unscaled prototype pattern before filling. Default: 0.0
	 * @type {Number} double
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	shiftAngle:Number;

	/**
	 * The distance in points to which to translate the unscaled prototype pattern before filling. Default: 0.0
	 * @type {Number} double
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	shiftDistance:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PatternColor}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}