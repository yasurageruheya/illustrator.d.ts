/**
 * Options for exporting a document as an Adobe Photoshop® file, used with the {@link Document#exportFile} method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link antiAliasing}
 * ･ {@link compatibility}
 * ･ {@link editableText}
 * ･ {@link embedICCProfile}
 * ･ {@link imageColorSpace}
 * ･ {@link maximumEditability}
 * ･ {@link resolution}
 * ･ {@link typename}
 * ･ {@link warnings}
 * ･ {@link writeLayers}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Export to Photoshop format
 *   This example exports the current document as a Photoshop file with specific options.
 *     // Export the current document as a Photoshop file with layers.
 *
 *     if (app.documents.length > 0) {
 *         var exportOptions = new ExportOptionsPhotoshop();
 *         var type = ExportType.PHOTOSHOP;
 *         var fileSpec = new File("~/sample.psd");
 *         exportOptions.resolution = 150;
 *         app.activeDocument.exportFile(fileSpec, type, exportOptions);
 *     }
 */
declare class ExportOptionsPhotoshop extends ExportOptions
{
	/**
	 * If <b>true</b>, the exported image should be anti-aliased. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	antiAliasing:Boolean;

	/**
	 * Specifies which Photoshop file format to create. Default: {@link PhotoshopCompatibility.PHOTOSHOP8}
	 * @type {PhotoshopCompatibility}
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	compatibility:PhotoshopCompatibility;

	/**
	 * If <b>true</b>, text objects should be exported as editable text layers. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	editableText:Boolean;

	/**
	 * If <b>true</b>, an ICC profile should be embedded in the exported file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	embedICCProfile:Boolean;

	/**
	 * The color space of the exported file. Default: {@link ImageColorSpace.RGB}
	 * @type {ImageColorSpace}
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	imageColorSpace:ImageColorSpace;

	/**
	 * Preserve as much of the original document’s structure as possible when exporting. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	maximumEditability:Boolean;

	/**
	 * Resolution of the exported file in dots per inch(dpi). Range: 72.0 to 2400.0 Default: <b>150.0</b>
	 * @type {Number} double
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	resolution:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {String}
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * If <b>true</b>, a warning dialog should be displayed in case of conflicts in the export settings. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	warnings:Boolean;

	/**
	 * If <b>true</b>, the document layers should be presented in the exported document. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsPhotoshop}
	 * @since CS2
	 * @version CS2
	 */
	writeLayers:Boolean;
}