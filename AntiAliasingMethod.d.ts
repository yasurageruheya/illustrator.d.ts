/**
 * The type of antialiasing method used in the rasterization.
 *
 * @since CS4
 * @version CS4
 *
 * <b>enum</b>
 * ･ {@link None} No antialiasing is allowed.
 * ･ {@link ARTOPTIMIZED} Optimize for the art object.
 * ･ {@link TYPEOPTIMIZED} Optimize for the type object.
 */
declare class AntiAliasingMethod
{
	/**
	 * No antialiasing is allowed.
	 * @static
	 * @const
	 * @type {AntiAliasingMethod}
	 * @see {@link AntiAliasingMethod}
	 * @since CS4
	 * @version CS4
	 */
	static readonly None:AntiAliasingMethod;

	/**
	 * Optimize for the art object.
	 * @static
	 * @const
	 * @type {AntiAliasingMethod}
	 * @see {@link AntiAliasingMethod}
	 * @since CS4
	 * @version CS4
	 */
	static readonly ARTOPTIMIZED:AntiAliasingMethod;

	/**
	 * Optimize for the type object.
	 * @static
	 * @const
	 * @type {AntiAliasingMethod}
	 * @see {@link AntiAliasingMethod}
	 * @since CS4
	 * @version CS4
	 */
	static readonly TYPEOPTIMIZED:AntiAliasingMethod;
}