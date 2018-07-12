/**
 * Associates paper information with a paper name. {@link Paper} objects are used by {@link Printer} objects.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link paperInfo}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class Paper
{
	/**
	 * The paper name.
	 * @type {String}
	 * @see {@link Paper}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The paper information.
	 * @type {PaperInfo} {@link PaperInfo} object
	 * @see {@link Paper}
	 * @since CS2
	 * @version CS2
	 */
	paperInfo:PaperInfo;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Paper}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}