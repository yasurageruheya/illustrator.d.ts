/**
 * How the art should be clipped during output.
 *
 * @since CS3
 * @version CS3
 *
 * <b>enum</b>
 * ･ {@link OUTPUTARTBOUNDS} Output size is the size of the artwork.
 * ･ {@link OUTPUTARTBOARDBOUNDS} Output size is the size of the artboard.
 * ･ {@link OUTPUTCROPRECTBOUNDS} Output size is the size of the crop area.
 */
declare class ArtClippingOption
{
	/**
	 * Output size is the size of the artwork.
	 * @static
	 * @const
	 * @type {ArtClippingOption}
	 * @see {@link ArtClippingOption}
	 * @since CS3
	 * @version CS3
	 */
	static readonly OUTPUTARTBOUNDS:ArtClippingOption;

	/**
	 * Output size is the size of the artboard.
	 * @static
	 * @const
	 * @type {ArtClippingOption}
	 * @see {@link ArtClippingOption}
	 * @since CS3
	 * @version CS3
	 */
	static readonly OUTPUTARTBOARDBOUNDS:ArtClippingOption;

	/**
	 * Output size is the size of the crop area.
	 * @static
	 * @const
	 * @type {ArtClippingOption}
	 * @see {@link ArtClippingOption}
	 * @since CS3
	 * @version CS3
	 */
	static readonly OUTPUTCROPRECTBOUNDS:ArtClippingOption;
}