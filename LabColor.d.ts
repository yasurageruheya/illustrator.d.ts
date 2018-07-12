/**
 * A color specification in the CIE Lab color space, used where a {@link Color} object is required.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link a}
 * ･ {@link b}
 * ･ {@link l}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class LabColor extends Color
{
	/**
	 * The a (red-green) color value. Range: <b>-128.0–128.0</b>. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link LabColor}
	 * @since CS2
	 * @version CS2
	 */
	a:Number;

	/**
	 * The b (yellow-blue) color value. Range: <b>-128.0–128.0</b>. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link LabColor}
	 * @since CS2
	 * @version CS2
	 */
	b:Number;

	/**
	 * The l (lightness) color value. Range: <b>-128.0–128.0</b>. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link LabColor}
	 * @since CS2
	 * @version CS2
	 */
	l:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link LabColor}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}