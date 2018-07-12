/**
 * The method used to dither colors in exported GIF and PNG8 images.
 *
 * @since CS2
 * @version CS2
 *
 * <b>enum</b>
 * ･ {@link DIFFUSION}
 * ･ {@link NOISE}
 * ･ {@link NOREDUCTION}
 * ･ {@link PATTERNDITHER}
 */
declare class ColorDitherMethod
{
	/**
	 * @static
	 * @const
	 * @type {ColorDitherMethod}
	 * @see {@link ColorDitherMethod}
	 * @since CS2
	 * @version CS2
	 */
	static readonly DIFFUSION:ColorDitherMethod;

	/**
	 * @static
	 * @const
	 * @type {ColorDitherMethod}
	 * @see {@link ColorDitherMethod}
	 * @since CS2
	 * @version CS2
	 */
	static readonly NOISE:ColorDitherMethod;

	/**
	 * @static
	 * @const
	 * @type {ColorDitherMethod}
	 * @see {@link ColorDitherMethod}
	 * @since CS2
	 * @version CS2
	 */
	static readonly NOREDUCTION:ColorDitherMethod;

	/**
	 * @static
	 * @const
	 * @type {ColorDitherMethod}
	 * @see {@link ColorDitherMethod}
	 * @since CS2
	 * @version CS2
	 */
	static readonly PATTERNDITHER:ColorDitherMethod;
}