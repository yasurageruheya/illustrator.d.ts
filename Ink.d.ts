/**
 * Associates a document ink name with ink information.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link inkInfo}
 * ･ {@link name}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class Ink
{
	/**
	 * The ink information
	 * @type {InkInfo} {@link InkInfo} object
	 * @see {@link Ink}
	 * @since CS2
	 * @version CS2
	 */
	inkInfo:InkInfo;

	/**
	 * The ink’s name
	 * @type {String}
	 * @see {@link Ink}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The class name of the object
	 * @const
	 * @type {String}
	 * @see {@link Ink}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}