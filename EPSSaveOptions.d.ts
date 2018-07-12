/**
 * Options for saving a document as an Illustrator EPS file, used with the {@link Document#saveAs} method. All properties are optional.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
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
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Saving to EPS format
 *     This example demonstrates how to save the current document as an Illustrator 8-compatible EPS file using
 *     CMYK PostScript with all fonts embedded.
 *       // Save a document to the home folder of the current user
 *       // as EPS with specific options
 *
 *       var newFile = new File("~/sample.eps");
 *       var saveDoc;
 *
 *       if (app.documents.length == 0) saveDoc = app.documents.add();
 *       else saveDoc = app.activeDocument;
 *
 *       var saveOpts = new EPSSaveOptions();
 *       saveOpts.cmykPostScript = true;
 *       saveOpts.compatibility = Compatibility.ILLUSTRATOR8;
 *       saveOpts.embedAllFonts = true;
 *
 *       saveDoc.saveAs(newFile, saveOpts);
 */
declare class EPSSaveOptions extends SaveOptions
{
	/**
	 * If <b>true</b>, use CMYK PostScript.
	 * @type {Boolean}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	cmykPostScript:Boolean;

	/**
	 * Specifies the version of the EPS file format to save. Default: {@link Compatibility.ILLUSTRATORCS}
	 * @type {Compatibility}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
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
	 * Whether to preserve, discard, or simulate the overprint. Default: {@link PDFOverprint.PRESERVEPDFOVER-PRINT}
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
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link EPSSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}