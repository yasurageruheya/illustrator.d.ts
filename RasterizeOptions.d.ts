/**
 * Specifies options that may be supplied when rasterizing artwork. All properties are optional.
 *
 * @since CS4
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link antiAliasingMethod}
 * ･ {@link backgroundBlack}
 * ･ {@link clippingMask}
 * ･ {@link colorModel}
 * ･ {@link convertSpotColors}
 * ･ {@link convertTextToOutlines}
 * ･ {@link includeLayers}
 * ･ {@link padding}
 * ･ {@link resolution}
 * ･ {@link transparency}
 *
 * <b>Methods</b>
 */
declare class RasterizeOptions
{
	/**
	 * The type of antialiasing method. Default: {@link AntiAliasingMethod.ARTOPTIMIZED}
	 * @type {AntiAliasingMethod}
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	antiAliasingMethod:AntiAliasingMethod;

	/**
	 * If <b>true</b>, the rasterization is done against a black background (instead of white). Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	backgroundBlack:Boolean;

	/**
	 * If <b>true</b>, a clipping mask should be created for the image. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	clippingMask:Boolean;

	/**
	 * The color model for the rasterization. Default: {@link RasterizationColorModel.DEFAULTCOLORMODEL}
	 * @type {RasterizationColorModel}
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	colorModel:RasterizationColorModel;

	/**
	 * If <b>true</b>, spot colors should be converted to process colors for the image. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	convertSpotColors:Boolean;

	/**
	 * If <b>true</b>, all text is converted to outlines before rasterization. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	convertTextToOutlines:Boolean;

	/**
	 * If <b>true</b>, the resulting image incorporates layer attributes (like opacity and blend mode). Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	includeLayers:Boolean;

	/**
	 * The amount of white space (in points) to be added around the object during rasterization. Default: <b>.0</b>
	 * @type {Number} double
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	padding:Number;

	/**
	 * The rasterization resolution in dots per inch (dpi). Range: <b>72.0 to 2400.0</b>. Default: <b>300.0</b>
	 * @type {Number} double
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	resolution:Number;

	/**
	 * If <b>true</b>, the image should use transparency. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link RasterizeOptions}
	 * @since CS4
	 * @version CS4
	 */
	transparency:Boolean;
}