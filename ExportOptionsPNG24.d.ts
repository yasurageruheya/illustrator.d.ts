/**
 * Options for exporting a document as a 24-bit PNG file, used with the {@link Document#exportFile} method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link antiAliasing}
 * ･ {@link artBoardClipping}
 * ･ {@link horizontalScale}
 * ･ {@link matte}
 * ･ {@link matteColor}
 * ･ {@link saveAsHTML}
 * ･ {@link transparency}
 * ･ {@link typename}
 * ･ {@link verticalScale}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Export to PNG24 format
 *   This example exports the current document as a PNG24 file.
 *     // Export the current document as a PNG24 with specific options
 *
 *     if (app.documents.length > 0) {
 *         var exportOptions = new ExportOptionsPNG24();
 *         var type = ExportType.PNG24;
 *         var fileSpec = new File("~/sample.png");
 *         exportOptions.antiAliasing = false;
 *         exportOptions.transparency = false;
 *         exportOptions.saveAsHTML = true;
 *
 *         app.activeDocument.exportFile(fileSpec, type, exportOptions);
 *     }
 */
declare class ExportOptionsPNG24 extends ExportOptions
{
	/**
	 * If <b>true</b>, the exported image be anti-aliased. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPNG24}
	 * @since CS2
	 * @version CS2
	 */
	antiAliasing:Boolean;

	/**
	 * If <b>true</b>, the exported image be clipped to the art board. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPNG24}
	 * @since CS2
	 * @version CS2
	 */
	artBoardClipping:Boolean;

	/**
	 * The horizontal scaling factor to apply to the exported image, where 100.0 is 100%. Default: <b>100.0</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsPNG24}
	 * @since CS2
	 * @version CS2
	 */
	horizontalScale:Number;

	/**
	 * If <b>true</b>, the art board be matted with a color. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPNG24}
	 * @since CS2
	 * @version CS2
	 */
	matte:Boolean;

	/**
	 * The color to use when matting the art board. Default: <b>white</b>
	 * @type {RGBColor} {@link RGBColor} object
	 * @see {@link ExportOptionsPNG24}
	 * @since CS2
	 * @version CS2
	 */
	matteColor:RGBColor;

	/**
	 * If <b>true</b>, the exported image be saved with an accompanying HTML file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPNG24}
	 * @since CS2
	 * @version CS2
	 */
	saveAsHTML:Boolean;

	/**
	 * If <b>true</b>, the exported image use transparency. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPNG24}
	 * @since CS2
	 * @version CS2
	 */
	transparency:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {String}
	 * @see {@link ExportOptionsPNG24}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The vertical scaling factor to apply to the exported image, where 100.0 is 100. Default: <b>100.0</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsPNG24}
	 * @since CS2
	 * @version CS2
	 */
	verticalScale:Number;
}