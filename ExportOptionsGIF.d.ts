/**
 * Options for exporting a document as a GIF file, used with the {@link Document#exportFile} method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link antiAliasing}
 * ･ {@link artBoardClipping}
 * ･ {@link colorCount}
 * ･ {@link colorDither}
 * ･ {@link colorReduction}
 * ･ {@link ditherPercent}
 * ･ {@link horizontalScale}
 * ･ {@link infoLossPercent}
 * ･ {@link interlaced}
 * ･ {@link matte}
 * ･ {@link matteColor}
 * ･ {@link saveAsHTML}
 * ･ {@link transparency}
 * ･ {@link typename}
 * ･ {@link verticalScale}
 * ･ {@link webSnap}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Exporting to GIF format
 *     // Exports current document to dest as a GIF file with specified
 *     // options, dest contains the full path including the file name
 *
 *     function exportToGIFFile(dest) {
 *         if (app.documents.length > 0) {
 *             var exportOptions = new ExportOptionsGIF();
 *             var type = ExportType.GIF;
 *             var fileSpec = new File(dest);
 *
 *             exportOptions.antiAliasing = false;
 *             exportOptions.colorCount = 64;
 *             exportOptions.colorDither = ColorDitherMethod.DIFFUSION;
 *
 *             app.activeDocument.exportFile(fileSpec, type, exportOptions);
 *         }
 *     }
 */
declare class ExportOptionsGIF extends ExportOptions
{
	/**
	 * If <b>true</b>, the exported image should be anti-aliased. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	antiAliasing:Boolean;

	/**
	 * If <b>true</b>, the exported image should be clipped to the art board. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	artBoardClipping:Boolean;

	/**
	 * The number of colors in the exported image’s color table. Range: 2 to 256. Default: 128
	 * @type {Number} long
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	colorCount:Number;

	/**
	 * The method used to dither colors in the exported image. Default: {@link ColorDitherMethod.DIFFUSION}
	 * @type {ColorDitherMethod}
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	colorDither:ColorDitherMethod;

	/**
	 * The method used to reduce the number of colors in the exported image. Default: {@link ColorReductionMethod.SELECTIVE}
	 * @type {ColorReductionMethod}
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	colorReduction:ColorReductionMethod;

	/**
	 * How much should the colors of the exported image be dithered, where 100.0 is 100%.
	 * @type {Number} long
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	ditherPercent:Number;

	/**
	 * The horizontal scaling factor to apply to the exported image, where 100.0 is 100%. Default: 100.0
	 * @type {Number} double
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	horizontalScale:Number;

	/**
	 * The level of information loss allowed during compression, where 100.0 is 100%.
	 * @type {Number} long
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	infoLossPercent:Number;

	/**
	 * If <b>true</b>, the exported image should be interlaced. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	interlaced:Boolean;

	/**
	 * If <b>true</b>, the art board should be matted with a color. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	matte:Boolean;

	/**
	 * The color to use when matting the art board. Default: <b>White</b>
	 * @type {RGBColor} {@link RGBColor} object
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	matteColor:RGBColor;

	/**
	 * If <b>true</b>, the exported image should be saved with an accompanying HTML file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	saveAsHTML:Boolean;

	/**
	 * If <b>true</b>, the exported image should use transparency. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	transparency:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {String}
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The vertical scaling factor to apply to the exported image, where 100.0 is 100%. Default: 100.0
	 * @type {Number} double
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	verticalScale:Number;

	/**
	 * How much should the color table be changed to match the web palette, where 100 is maximum. Default: 0
	 * @type {Number} long
	 * @see {@link ExportOptionsGIF}
	 * @since CS2
	 * @version CS2
	 */
	webSnap:Number;
}