/**
 * Options for exporting a document as a JPEG file, used with the {@link Document#exportFile} method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link antiAliasing}
 * ･ {@link artBoardClipping}
 * ･ {@link blurAmount}
 * ･ {@link horizontalScale}
 * ･ {@link matte}
 * ･ {@link matteColor}
 * ･ {@link optimization}
 * ･ {@link qualitySetting}
 * ･ {@link saveAsHTML}
 * ･ {@link typename}
 * ･ {@link verticalScale}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Exporting to JPEG format
 *     // Export the current document as a JPEG with specific options
 *     if (app.documents.length > 0) {
 *         var exportOptions = new ExportOptionsJPEG();
 *         var type = ExportType.JPEG;
 *         var fileSpec = new File("~/sample.jpg");
 *         exportOptions.antiAliasing = false;
 *         exportOptions.qualitySetting = 70;
 *         app.activeDocument.exportFile(fileSpec, type, exportOptions);
 *     }
 */
declare class ExportOptionsJPEG extends ExportOptions
{
	/**
	 * If <b>true</b>, the exported image should be anti-aliased. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	antiAliasing:Boolean;

	/**
	 * If <b>true</b>, the exported image should be clipped to the art board. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	artBoardClipping:Boolean;

	/**
	 * The amount of blur to apply to the exported image. Range: 0.0 to 2.0 Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	blurAmount:Number;

	/**
	 * The horizontal scaling factor to apply to the exported image, where 100.0 is 100%. Default: <b>100.0</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	horizontalScale:Number;

	/**
	 * If <b>true</b>, the art board should be matted with a color. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	matte:Boolean;

	/**
	 * The color to use when matting the art board. Default: <b>white</b>
	 * @type {RGBColor} {@link RGBColor} object
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	matteColor:RGBColor;

	/**
	 * If <b>true</b>, the exported image should be optimized for web viewing. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	optimization:Boolean;

	/**
	 * The quality of the exported image. Range: 0 to 100 Default: <b>30</b>
	 * @type {Number} long
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	qualitySetting:Number;

	/**
	 * If <b>true</b>, the exported image should be saved with an accompanying HTML file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	saveAsHTML:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The vertical scaling factor to apply to the exported image. Range: 0.0 to 776.19 Default: <b>100.0</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsJPEG}
	 * @since CS2
	 * @version CS2
	 */
	verticalScale:Number;
}