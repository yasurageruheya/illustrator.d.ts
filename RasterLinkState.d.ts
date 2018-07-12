/**
 * The status of a raster item’s linked image if the image is stored externally
 *
 * @since CS2
 * @version CS2
 *
 * <b>enum</b>
 * ･ {@link DATAFROMFILE}
 * ･ {@link DATAMODIFIED}
 * ･ {@link NODATA}
 */
declare class RasterLinkState
{
	/**
	 * @static
	 * @const
	 * @type {RasterLinkState}
	 * @see {@link RasterLinkState}
	 * @since CS2
	 * @version CS2
	 */
	static readonly DATAFROMFILE:RasterLinkState;

	/**
	 * @static
	 * @const
	 * @type {RasterLinkState}
	 * @see {@link RasterLinkState}
	 * @since CS2
	 * @version CS2
	 */
	static readonly DATAMODIFIED:RasterLinkState;

	/**
	 * @static
	 * @const
	 * @type {RasterLinkState}
	 * @see {@link RasterLinkState}
	 * @since CS2
	 * @version CS2
	 */
	static readonly NODATA:RasterLinkState;
}