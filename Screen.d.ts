/**
 * Associates a color separation screen with information to be used for printing.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link screenInfo}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class Screen
{
	/**
	 * The color separation screen name.
	 * @type {String}
	 * @see {@link Screen}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The color separation screen information.
	 * @type {ScreenInfo} {@link ScreenInfo} object
	 * @see {@link Screen}
	 * @since CS2
	 * @version CS2
	 */
	screenInfo:ScreenInfo;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link Screen}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}