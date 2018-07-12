/**
 * A gradient color specification in a {@link Gradient} object. A script can create a new gradient color using a reference to an existing gradient in the document. If no existing {@link Gradient} object is referenced, a default gradient is supplied.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link angle}
 * ･ {@link gradient}
 * ･ {@link hiliteAngle}
 * ･ {@link hiliteLength}
 * ･ {@link length}
 * ･ {@link matrix}
 * ･ {@link origin}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Changing a gradient stop color
 *     // Creates a new RGB document, then changes the color
 *     // of the first gradient stop of an indexed gradient
 *
 *     app.documents.add(DocumentColorSpace.RGB);
 *
 *     // Get a reference to the gradient that you want to change
 *     var gradientRef = app.activeDocument.gradients[1];
 *     // Create the new color
 *     var startColor = new RGBColor();
 *     startColor.red = 255;
 *     startColor.green = 238;
 *     startColor.blue = 98;
 *     // apply new color to the first gradient stop
 *     gradientRef.gradientStops[0].color = startColor;
 */
declare class GradientColor extends Color
{
	/**
	 * The gradient vector angle in degrees. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link GradientColor}
	 * @since CS2
	 * @version CS2
	 */
	angle:Number;

	/**
	 * Reference to the object defining the gradient.
	 * @type {Gradient} {@link Gradient} object
	 * @see {@link GradientColor}
	 * @since CS2
	 * @version CS2
	 */
	gradient:Gradient;

	/**
	 * The gradient highlight vector angle in degrees.
	 * @type {Number} double
	 * @see {@link GradientColor}
	 * @since CS2
	 * @version CS2
	 */
	hiliteAngle:Number;

	/**
	 * The gradient highlight vector <b>length</b>.
	 * @type {Number} double
	 * @see {@link GradientColor}
	 * @since CS2
	 * @version CS2
	 */
	hiliteLength:Number;

	/**
	 * The gradient vector <b>length</b>.
	 * @type {Number} double
	 * @see {@link GradientColor}
	 * @since CS2
	 * @version CS2
	 */
	length:Number;

	/**
	 * An additional transformation matrix to manipulate the gradient path.
	 * @type {Matrix} {@link Matrix} object
	 * @see {@link GradientColor}
	 * @since CS2
	 * @version CS2
	 */
	matrix:Matrix;

	/**
	 * The gradient vector origin, the center point of the gradient in this color.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link GradientColor}
	 * @since CS2
	 * @version CS2
	 */
	origin:Number[];

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link GradientColor}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}