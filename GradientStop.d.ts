/**
 * A gradient stop definition that represents a point on a specific gradient defined in the document. Each gradient stop specifies a color change in the containing gradient. See <a href="psi_element://GradientColor">Changing a gradient stop color</b> for an example.
 *
 * @since CS2
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link color}
 * ･ {@link midPoint}
 * ･ {@link opacity}
 * ･ {@link parent}
 * ･ {@link rampPoint}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link remove}
 */
declare class GradientStop
{
	/**
	 * The color linked to this gradient stop.
	 * @type {Color} {@link Color} object
	 * @see {@link GradientStop}
	 * @since CS2
	 * @version CS2
	 */
	color:Color;

	/**
	 * The midpoint key value, specified as a percentage from <b>13.0 to 87.0</b>.
	 * @type {Number} double
	 * @see {@link GradientStop}
	 * @since CS2
	 * @version CS2
	 */
	midPoint:Number;

	/**
	 * The opacity value for the gradient stop. Range: <b>0.0 to 100.0</b>
	 * @type {Number} double
	 * @see {@link GradientStop}
	 * @since CS4
	 * @version CS4
	 */
	opacity:Number;

	/**
	 * Read-only. The gradient that contains this gradient stop.
	 * @const
	 * @type {Gradient} {@link Gradient} object
	 * @see {@link GradientStop}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Gradient;

	/**
	 * The location of the color in the blend in a range from <b>0.0 to 100.0</b>, where <b>100.0 is 100%</b>.
	 * @type {Number} double
	 * @see {@link GradientStop}
	 * @since CS2
	 * @version CS2
	 */
	rampPoint:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link GradientStop}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Deletes this object.
	 * @see {@link GradientStop}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}