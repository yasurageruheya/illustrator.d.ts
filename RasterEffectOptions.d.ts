/**
 * Specifies raster effects settings for the document. All properties are optional.
 *
 * @since CS4
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link antiAliasing}
 * ･ {@link clippingMask}
 * ･ {@link colorModel}
 * ･ {@link convertSpotColors}
 * ･ {@link padding}
 * ･ {@link resolution}
 * ･ {@link transparency}
 *
 * <b>Methods</b>
 */
declare class RasterEffectOptions
{
	/**
	 * If <b>true</b>, the image should be antialiased. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterEffectOptions}
	 * @since CS4
	 * @version CS4
	 */
	antiAliasing:Boolean;

	/**
	 * If <b>true</b>, a clipping mask is created for the image. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterEffectOptions}
	 * @since CS4
	 * @version CS4
	 */
	clippingMask:Boolean;

	/**
	 * The color model for the rasterization. Default: {@link RasterizationColorModel.DEFAULTCOLORMODEL}
	 * @type {RasterizationColorModel}
	 * @see {@link RasterEffectOptions}
	 * @since CS4
	 * @version CS4
	 */
	colorModel:RasterizationColorModel;

	/**
	 * If <b>true</b>, all spot colors are converted to process colors for the image. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterEffectOptions}
	 * @since CS4
	 * @version CS4
	 */
	convertSpotColors:Boolean;

	/**
	 * The amount of white space (in points) to be added around the object during rasterization. Default: <b>.0</b>
	 * @type {Number} double
	 * @see {@link RasterEffectOptions}
	 * @since CS4
	 * @version CS4
	 */
	padding:Number;

	/**
	 * The rasterization resolution in dots per inch (dpi). Range: <b>72.0 to 2400.0</b>. Default: <b>300.0</b>
	 * @type {Number} double
	 * @see {@link RasterEffectOptions}
	 * @since CS4
	 * @version CS4
	 */
	resolution:Number;

	/**
	 * If <b>true</b>, the image should use transparency. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterEffectOptions}
	 * @since CS4
	 * @version CS4
	 */
	transparency:Boolean;
}