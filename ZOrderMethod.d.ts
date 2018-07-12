/**
 * The method used to arrange an art item’s position in the stacking order of its parent group or layer, as specified with the <b>zOrder</b> method
 *
 * @since CS2
 * @version CS2
 *
 * <b>enum</b>
 * ･ {@link BRINGFORWARD}
 * ･ {@link BRINGTOFRONT}
 * ･ {@link SENDBACKWARD}
 * ･ {@link SENDTOBACK}
 */
declare class ZOrderMethod
{
	/**
	 * @static
	 * @const
	 * @type {ZOrderMethod}
	 * @see {@link ZOrderMethod}
	 * @since CS2
	 * @version CS2
	 */
	static readonly BRINGFORWARD:ZOrderMethod;

	/**
	 * @static
	 * @const
	 * @type {ZOrderMethod}
	 * @see {@link ZOrderMethod}
	 * @since CS2
	 * @version CS2
	 */
	static readonly BRINGTOFRONT:ZOrderMethod;

	/**
	 * @static
	 * @const
	 * @type {ZOrderMethod}
	 * @see {@link ZOrderMethod}
	 * @since CS2
	 * @version CS2
	 */
	static readonly SENDBACKWARD:ZOrderMethod;

	/**
	 * @static
	 * @const
	 * @type {ZOrderMethod}
	 * @see {@link ZOrderMethod}
	 * @since CS2
	 * @version CS2
	 */
	static readonly SENDTOBACK:ZOrderMethod;
}