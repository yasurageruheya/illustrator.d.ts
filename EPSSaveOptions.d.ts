/**
 * Options for saving a document as an Illustrator EPS file, used with the {@link Document#saveAs} method. All properties are optional.
 *
 * @since CS2
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link artboardRange}
 * ･ {@link cmykPostScript}
 * ･ {@link compatibility}
 * ･ {@link compatibleGradientPrinting}
 * ･ {@link embedAllFonts}
 * ･ {@link embedLinkedFiles}
 * ･ {@link flattenOutput}
 * ･ {@link includeDocumentThumbnails}
 * ･ {@link overprint}
 * ･ {@link postScript}
 * ･ {@link preview}
 * ･ {@link saveMultipleArtboards}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Exporting to EPS format
 *     // Exports current document to destFile as an EPS file with specified
 *     // options, destFile contains the full path including the file name
 *
 *     function exportFileAsEPS(destFile) {
 *         var newFile = new File(destFile);
 *         var saveDoc;
 *
 *         if (app.documents.length == 0) saveDoc = app.documents.add();
 *         else saveDoc = app.activeDocument;
 *
 *         var saveOpts = new EPSSaveOptions();
 *         saveOpts.cmykPostScript = true;
 *         saveOpts.embedAllFonts = true;
 *         saveDoc.saveAs(newFile, saveOpts);
 *     }
 */
declare class EPSSaveOptions extends SaveOptions
{
	/**
	 * If {@link saveMultipleArtboards} is <b>true</b>, this is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: empty string
	 * @type {String}
	 * @see {@link EPSSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	artboardRange:String;

	/**
	 * If <b>true</b>, use CMYK PostScript.
	 * @type {Boolean}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	cmykPostScript:Boolean;

	/**
	 * Specifies the version of the EPS file format to save. Default: {@link Compatibility.ILLUSTRATOR14}
	 * @type {Compatibility}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS4
	 */
	compatibility:Compatibility;

	/**
	 * If <b>true</b>, create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	compatibleGradientPrinting:Boolean;

	/**
	 * If <b>true</b>, all fonts used by the document should be embedded in the saved file (version 7 or later). Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	embedAllFonts:Boolean;

	/**
	 * If <b>true</b>, linked image files are to be included in the saved document.
	 * @type {Boolean}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	embedLinkedFiles:Boolean;

	/**
	 * How should transparency be flattened for file formats older than Illustrator 9.
	 * @type {OutputFlattening}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	flattenOutput:OutputFlattening;

	/**
	 * If <b>true</b>, thumbnail image of the EPS artwork should be included.
	 * @type {Boolean}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	includeDocumentThumbnails:Boolean;

	/**
	 * Whether to preserve, discard, or simulate the overprint. Default: {@link PDFOverprint.PRESERVEPDFOVERPRINT}
	 * @type {PDFOverprint}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	overprint:PDFOverprint;

	/**
	 * PostScript Language Level to use (Level 1 valid for file format version 8 or older). Default: {@link EPSPostScriptLevelEnum.LEVEL2}
	 * @type {EPSPostScriptLevelEnum}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	postScript:EPSPostScriptLevelEnum;

	/**
	 * The format for the EPS preview image.
	 * @type {EPSPreview}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	preview:EPSPreview;

	/**
	 * If <b>true</b>, all artboards or range of artboards are saved. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link EPSSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	saveMultipleArtboards:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}