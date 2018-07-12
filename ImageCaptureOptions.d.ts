/**
 * Options for image capture, used with the {@link Document#imageCapture} method. All properties are optional.
 *
 * @since CS3
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link antiAliasing}
 * ･ {@link matte}
 * ･ {@link matteColor}
 * ･ {@link resolution}
 * ･ {@link transparency}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class ImageCaptureOptions
{
	/**
	 * If <b>true</b>, the image result is anti-aliased. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ImageCaptureOptions}
	 * @since CS3
	 * @version CS3
	 */
	antiAliasing:Boolean;

	/**
	 * If <b>true</b>, the artboard is matted with a color. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ImageCaptureOptions}
	 * @since CS3
	 * @version CS3
	 */
	matte:Boolean;

	/**
	 * The color to use for the artboard matte. Default: <b>white</b>
	 * @type {RGBColor} {@link RGBColor} object
	 * @see {@link ImageCaptureOptions}
	 * @since CS3
	 * @version CS3
	 */
	matteColor:RGBColor;

	/**
	 * The resolution of the captured image file in points-per-inch (PPI), in the range [72.0..2400.0]. Default: <b>150</b>
	 * @type {Number} double
	 * @see {@link ImageCaptureOptions}
	 * @since CS3
	 * @version CS3
	 */
	resolution:Number;

	/**
	 * If <b>true</b>, the image result is tranparent. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ImageCaptureOptions}
	 * @since CS3
	 * @version CS3
	 */
	transparency:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link ImageCaptureOptions}
	 * @since CS3
	 * @version CS3
	 */
	typename:String;
}