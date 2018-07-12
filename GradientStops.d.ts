/**
 * A collection of {@link GradientStop} objects in a specific gradient. The elements are not named; you must access them by index.
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
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Adding a new gradient stop
 *     // Adds a new gradient stop to a gradient, color of new stop is 70% gray
 *
 *     if (app.documents.length > 0 && app.activeDocument.gradients.length > 0) {
 *         // Get a reference to the gradient to change
 *         var changeGradient = app.activeDocument.gradients[0];
 *         // Get a reference to the last gradient stop
 *         var origCount = changeGradient.gradientStops.length;
 *         var lastStop = changeGradient.gradientStops[origCount - 1];
 *         // add the new gradient stop
 *         var newStop = changeGradient.gradientStops.add();
 *
 *         // Set the values of the new gradient stop.
 *         // Move the original last gradient stop a bit to the left and
 *         // insert the new gradient stop at the old position
 *         newStop.rampPoint = lastStop.rampPoint;
 *         lastStop.rampPoint = lastStop.rampPoint - 10;
 *         // Create a new color to apply to the newly created gradient stop
 *         // --a Gray tint value of 70%
 *         var newStopColor = new GrayColor();
 *         newStopColor.gray = 70.0;
 *         newStop.color = newStopColor;
 *     }
 */
declare class GradientStops
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link GradientStops}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link GradientStops}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link GradientStops}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new object.
	 * @return {GradientStop} {@link GradientStop} object
	 * @see {@link GradientStops}
	 * @since CS2
	 * @version CS2
	 */
	add():GradientStop;

	/**
	 * Gets an element from the collection.
	 * @param {Number} itemKey {@link Number}
	 * @return {GradientStop} {@link GradientStop} object
	 * @see {@link GradientStops}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:Number):GradientStop;

	/**
	 * Deletes all objects in this collection.
	 * @see {@link GradientStops}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}