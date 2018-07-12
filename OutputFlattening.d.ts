/**
 * How transparency should be flattened when saving EPS and Illustrator file formats with compatibility set to versions of Illustrator earlier than Illustrator 10
 *
 * @since CS2
 * @version CS2
 *
 * <b>enum</b>
 * ･ {@link PRESERVEAPPEARANCE}
 * ･ {@link PRESERVEPATHS}
 */
declare class OutputFlattening
{
	/**
	 * @static
	 * @const
	 * @type {OutputFlattening}
	 * @see {@link OutputFlattening}
	 * @since CS2
	 * @version CS2
	 */
	static readonly PRESERVEAPPEARANCE:OutputFlattening;

	/**
	 * @static
	 * @const
	 * @type {OutputFlattening}
	 * @see {@link OutputFlattening}
	 * @since CS2
	 * @version CS2
	 */
	static readonly PRESERVEPATHS:OutputFlattening;
}