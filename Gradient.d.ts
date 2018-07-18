/**
 * A gradient definition contained in a document. Scripts can create new gradients.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link gradientStops}
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link type}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link remove}
 *
 * @example
 * ➤ Creating and applying a gradient
 *   This example shows how you can create a new gradient and apply it as a fill pattern to the frontmost path item.
 *     // Create and apply a gradient as a fill color
 *     if (app.documents.length > 0) {
 *         // Create a color for both ends of the gradient
 *         var startColor = new RGBColor();
 *         var endColor = new RGBColor();
 *
 *         startColor.red = 0;
 *         startColor.green = 100;
 *         startColor.blue = 255;
 *         endColor.red = 220;
 *         endColor.green = 0;
 *         endColor.blue = 100;
 *
 *         // Create a new gradient
 *         // A new gradient always has 2 stops
 *         var newGradient = app.activeDocument.gradients.add();
 *         newGradient.name = "NewGradient";
 *         newGradient.type = GradientType.LINEAR;
 *
 *         // Modify the first gradient stop
 *         newGradient.gradientStops[0].rampPoint = 30;
 *         newGradient.gradientStops[0].midPoint = 60;
 *         newGradient.gradientStops[0].color = startColor;
 *
 *         // Modify the last gradient stop
 *         newGradient.gradientStops[1].rampPoint = 80;
 *         newGradient.gradientStops[1].color = endColor;
 *
 *         // construct an Illustrator.GradientColor object referring to the
 *         // newly created gradient
 *         var colorOfGradient = new GradientColor();
 *         colorOfGradient.gradient = newGradient;
 *
 *         // get first path item, apply new gradient as its fill
 *         var topPath = app.activeDocument.pathItems[0];
 *         topPath.filled = true;
 *         topPath.fillColor = colorOfGradient;
 *     }
 */
declare class Gradient
{
	/**
	 * Read-only. The gradient stops contained in this gradient.
	 * @const
	 * @type {GradientStops|GradientStop[]} {@link GradientStops} collection object
	 * @see {@link Gradient}
	 * @since CS2
	 * @version CS2
	 */
	readonly gradientStops:GradientStops|GradientStop[];

	/**
	 * The gradient’s name.
	 * @type {String}
	 * @see {@link Gradient}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The document that contains this gradient.
	 * @const
	 * @type {Document} {@link Document} object
	 * @see {@link Gradient}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document;

	/**
	 * The kind of the gradient, either radial or linear.
	 * @type {GradientType}
	 * @see {@link Gradient}
	 * @since CS2
	 * @version CS2
	 */
	type:GradientType;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Gradient}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Removes the referenced object from the document.
	 * @see {@link Gradient}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}