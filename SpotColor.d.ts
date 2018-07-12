/**
 * Color class used to apply the color value of a spot at a specified tint value. Can be used in any property that takes a color object.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link spot}
 * ･ {@link tint}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class SpotColor extends Color
{
	/**
	 * A reference to the spot color object that defines the color.
	 * @type {Spot}
	 * @see {@link SpotColor}
	 * @since CS2
	 * @version CS2
	 */
	spot:Spot;

	/**
	 * The tint of the color. Range: 0.0 to 100.0
	 * @type {Number} double
	 * @see {@link SpotColor}
	 * @since CS2
	 * @version CS2
	 */
	tint:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link SpotColor}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}