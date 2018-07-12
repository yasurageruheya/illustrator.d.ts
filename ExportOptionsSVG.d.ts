/**
 * Options for exporting a document as a SVG file, used with the {@link Document#exportFile} method. All properties are optional.
 * When you export a document, the appropriate file extension is appended automatically. You should not include any file extension in the file specification.
 *
 * @since CS2
 * @version CC
 *
 * <b>Properties</b>
 * ･ {@link artboardRange}
 * ･ {@link compressed}
 * ･ {@link coordinatePrecision}
 * ･ {@link cssProperties}
 * ･ {@link documentEncoding}
 * ･ {@link DTD}
 * ･ {@link embedRasterImages}
 * ･ {@link fontSubsetting}
 * ･ {@link fontType}
 * ･ {@link includeFileInfo}
 * ･ {@link includeUnusedStyles}
 * ･ {@link includeVariablesAndDatasets}
 * ･ {@link optimizeForSVGViewer}
 * ･ {@link preserveEditability}
 * ･ {@link saveMultipleArtboards}
 * ･ {@link slices}
 * ･ {@link sVGAutoKerning}
 * ･ {@link sVGTextOnPath}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Exporting to SVG format
 *     // Exports current document to dest as an SVG file with specified
 *     // options, dest contains the full path including the file name
 *
 *     function exportFileToSVG(dest) {
 *         if (app.documents.length > 0) {
 *             var exportOptions = new ExportOptionsSVG();
 *             var type = ExportType.SVG;
 *             var fileSpec = new File(dest);
 *             exportOptions.embedRasterImages = true;
 *             exportOptions.embedAllFonts = false;
 *             exportOptions.fontSubsetting = SVGFontSubsetting.GLYPHSUSED;
 *             app.activeDocument.exportFile(fileSpec, type, exportOptions);
 *         }
 *     }
 */
declare class ExportOptionsSVG extends ExportOptions
{
	/**
	 * A range of artboards to save, if {@link saveMultipleArtboards} is <b>true</b>. A comma-delimited list of artboard names., or the empty string to save all artboards. Default: <b>empty string</b>
	 * @type {String}
	 * @see {@link ExportOptionsSVG}
	 * @since CC
	 * @version CC
	 */
	artboardRange:String;

	/**
	 * If <b>true</b>, the exported file should be compressed. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	compressed:Boolean;

	/**
	 * The decimal precision for element coordinate values. Range: <b>1 to 7</b>. Default: <b>3</b>
	 * @type {Number} long
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	coordinatePrecision:Number;

	/**
	 * How the CSS properties of the document should be included in the exported file. Default: {@link SVGCSSPropertyLocation.STYLEATTRIBUTES}
	 * @type {SVGCSSPropertyLocation}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	cssProperties:SVGCSSPropertyLocation;

	/**
	 * How the text in the document should be encoded. Default: {@link SVGDocumentEncoding.ASCII}
	 * @type {SVGDocumentEncoding}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	documentEncoding:SVGDocumentEncoding;

	/**
	 * The SVG version to which the file should conform. Default: {@link SVGDTDVersion.SVG1_1}
	 * @type {SVGDTDVersion}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	DTD:SVGDTDVersion;

	/**
	 * If <b>true</b>, the raster images contained in the document should be embedded in the exported file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	embedRasterImages:Boolean;

	/**
	 * Which font glyphs should be included in the exported file. Default: {@link SVGFontSubsetting.ALLGLYPHS}
	 * @type {SVGFontSubsetting}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	fontSubsetting:SVGFontSubsetting;

	/**
	 * The type of font to included in the exported file. Default: {@link SVGFontType.CEFFONT}
	 * @type {SVGFontType}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	fontType:SVGFontType;

	/**
	 * If <b>true</b>, file information should be saved in the exported file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	includeFileInfo:Boolean;

	/**
	 * If <b>true</b>, save unused styles in the exported file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CC
	 * @version CC
	 */
	includeUnusedStyles:Boolean;

	/**
	 * If <b>true</b>, variables and datasets should be saved in the exported file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	includeVariablesAndDatasets:Boolean;

	/**
	 * If <b>true</b>, the exported file should be optimized for the SVG Viewer. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	optimizeForSVGViewer:Boolean;

	/**
	 * If <b>true</b>, Illustrator editing capabilities should be preserved when exporting the document. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	preserveEditability:Boolean;

	/**
	 * If <b>true</b>, save the artboards specified by artboardRange in the exported file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CC
	 * @version CC
	 */
	saveMultipleArtboards:Boolean;

	/**
	 * If <b>true</b>, slice data should be exported with the file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	slices:Boolean;

	/**
	 * If <b>true</b>, SVG automatic kerning is allowed in the file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	sVGAutoKerning:Boolean;

	/**
	 * If <b>true</b>, the SVG <b>text-on-path</b> construct is allowed in the file. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	sVGTextOnPath:Boolean;

	/**
	 * Read-only. The class name of the referenced object.
	 * @type {Boolean}
	 * @see {@link ExportOptionsSVG}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}