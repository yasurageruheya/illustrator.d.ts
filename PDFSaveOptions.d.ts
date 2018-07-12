/**
 * Options for saving a document as an Adobe PDF file, used with the {@link Document#saveAs} method. All properties are optional.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link acrobatLayers}
 * ･ {@link bleedLink}
 * ･ {@link bleedOffsetRect}
 * ･ {@link colorBars}
 * ･ {@link colorCompression}
 * ･ {@link colorConversionID}
 * ･ {@link colorDestinationID}
 * ･ {@link colorDownsampling}
 * ･ {@link colorDownsamplingImageThreshold}
 * ･ {@link colorDownsamplingMethod}
 * ･ {@link colorProfileID}
 * ･ {@link colorTileSize}
 * ･ {@link compatibility}
 * ･ {@link compressArt}
 * ･ {@link documentPassword}
 * ･ {@link enableAccess}
 * ･ {@link enableCopy}
 * ･ {@link enableCopyAccess}
 * ･ {@link enablePlainText}
 * ･ {@link flattenerOptions}
 * ･ {@link flattenerPreset}
 * ･ {@link fontSubsetThreshold}
 * ･ {@link generateThumbnails}
 * ･ {@link grayscaleCompression}
 * ･ {@link grayscaleDownsampling}
 * ･ {@link grayscaleDownsamplingImageThreshold}
 * ･ {@link grayscaleDownsamplingMethod}
 * ･ {@link grayscaleTileSize}
 * ･ {@link monochromeCompression}
 * ･ {@link monochromeDownsampling}
 * ･ {@link monochromeDownsamplingImageThreshold}
 * ･ {@link monochromeDownsamplingMethod}
 * ･ {@link offset}
 * ･ {@link optimization}
 * ･ {@link outputCondition}
 * ･ {@link outputConditionID}
 * ･ {@link pageInformation}
 * ･ {@link pageMarksType}
 * ･ {@link pDFAllowPrinting}
 * ･ {@link pDFChangesAllowed}
 * ･ {@link pDFPreset}
 * ･ {@link pDFXStandard}
 * ･ {@link pDFXStandardDescription}
 * ･ {@link permissionPassword}
 * ･ {@link preserveEditability}
 * ･ {@link printerResolution}
 * ･ {@link registrationMarks}
 * ･ {@link requireDocumentPassword}
 * ･ {@link requirePermissionPassword}
 * ･ {@link trapped}
 * ･ {@link trimMarks}
 * ･ {@link trimMarkWeight}
 * ･ {@link typename}
 * ･ {@link viewAfterSaving}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Saving to PDF format
 *     This script illustrates how to save the frontmost document as PDF.
 *       // Save the current document as PDF
 *       // (If the document has never been saved as an AI document
 *       // doc.path is null.)
 *       if (app.documents.length > 0) {
 *           doc = app.activeDocument;
 *           var saveName = new File(doc.path + "/" + doc.name);
 *           saveOpts = new PDFSaveOptions();
 *           saveOpts.compatibility = PDFCompatibility.ACROBAT5;
 *           saveOpts.generateThumbnails = true;
 *           saveOpts.preserveEditability = true;
 *           doc.saveAs(saveName, saveOpts);
 *       }
 */
declare class PDFSaveOptions extends SaveOptions
{
	/**
	 * Create Acrobat® layers from top-level layers. Acrobat 6 only. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	acrobatLayers:Boolean;

	/**
	 * Link 4 bleed values. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	bleedLink:Boolean;

	/**
	 * The bleed offset rectangle.
	 * @type {Number[]} array of 4 numbers
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	bleedOffsetRect:Number[];

	/**
	 * Draw color bars. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorBars:Boolean;

	/**
	 * The type of color bitmap compression used. Default: {@link CompressionQuality.None}
	 * @type {CompressionQuality}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorCompression:CompressionQuality;

	/**
	 * The PDF color conversion policy. Default: {@link ColorConversion.None}
	 * @type {ColorConversion}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorConversionID:ColorConversion;

	/**
	 * The conversion target for color conversion. Default: {@link ColorDestination.None}
	 * @type {ColorDestination}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorDestinationID:ColorDestination;

	/**
	 * The color downsampling resolution in dots per inch (dpi). If 0, no downsampling is performed. Default: 150.0
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorDownsampling:Number;

	/**
	 * Downsample if the image’s resolution is above this value. Default: 225.0
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorDownsamplingImageThreshold:Number;

	/**
	 * How color bitmap images should be resampled. Default: {@link DownsampleMethod.NODOWNSAMPLE}
	 * @type {DownsampleMethod}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorDownsamplingMethod:DownsampleMethod;

	/**
	 * The color profile to include. Default: {@link ColorProfile.None}
	 * @type {ColorProfile}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorProfileID:ColorProfile;

	/**
	 * Tile size when compressing with JPEG2000. Default: 256
	 * @type {Number} long
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorTileSize:Number;

	/**
	 * The version of the Acrobat file format to create. Default: {@link PDFCompatibility.ACROBAT6}
	 * @type {PDFCompatibility}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	compatibility:PDFCompatibility;

	/**
	 * If <b>true</b>, the line art and text should be compressed. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	compressArt:Boolean;

	/**
	 * A password string to open the document. Default: no string
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	documentPassword:String;

	/**
	 * If <b>true</b>, enable accessing 128-bit. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	enableAccess:Boolean;

	/**
	 * If <b>true</b>, enable copying of text 128-bit. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	enableCopy:Boolean;

	/**
	 * If <b>true</b>, enable copying and accessing 40-bit. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	enableCopyAccess:Boolean;

	/**
	 * If <b>true</b>, enable plaintext metadata 128-bit. Available only for Acrobat 6. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	enablePlainText:Boolean;

	/**
	 * The printing flattener options.
	 * @type {PrintFlattenerOptions}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	flattenerOptions:PrintFlattenerOptions;

	/**
	 * The transparency flattener preset name.
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	flattenerPreset:String;

	/**
	 * Include a subset of fonts when less than this percentage of characters is used in the document. Valid for Illustrator 9 file format. Range: 0.0 to 100.0 Default: 100.0
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	fontSubsetThreshold:Number;

	/**
	 * If <b>true</b>, thumbnail images are generated with the saved file. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	generateThumbnails:Boolean;

	/**
	 * Quality of grayscale bitmap compression. Default: {@link CompressionQuality.None}
	 * @type {CompressionQuality}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleCompression:CompressionQuality;

	/**
	 * Downsampling resolution in dots per inch (dpi). If 0, no downsampling is performed. Default: 150.0
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleDownsampling:Number;

	/**
	 * Downsample if the image’s resolution is above this value. Default: 225.0
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleDownsamplingImageThreshold:Number;

	/**
	 * How grayscale bitmap images should be resampled Default: {@link DownsampleMethod.NODOWNSAMPLE}
	 * @type {DownsampleMethod}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleDownsamplingMethod:DownsampleMethod;

	/**
	 * Tile size when compressing with JPEG2000. Default: 256
	 * @type {Number} long
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleTileSize:Number;

	/**
	 * Type of monochrome bitmap compression used. Default: {@link MonochromeCompression.None}
	 * @type {MonochromeCompression}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	monochromeCompression:MonochromeCompression;

	/**
	 * Downsampling resolution in dots per inch (dpi). If 0, no downsampling is performed. Default: 300
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	monochromeDownsampling:Number;

	/**
	 * Downsample if the image’s resolution is above this value. Default: 450.0
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	monochromeDownsamplingImageThreshold:Number;

	/**
	 * How monochrome bitmap images should be resampled. Default: {@link DownsampleMethod.NODOWNSAMPLE}
	 * @type {DownsampleMethod}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	monochromeDownsamplingMethod:DownsampleMethod;

	/**
	 * Custom offset in points for using the custom paper. Default: 0.0
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	offset:Number;

	/**
	 * If <b>true</b>, the PDF document should be optimized for fast web viewing. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	optimization:Boolean;

	/**
	 * An optional comment to add to the PDF file, describing the intended printing condition. Default: not included
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	outputCondition:String;

	/**
	 * The name of a registered printing condition. Default: not included
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	outputConditionID:String;

	/**
	 * If <b>true</b>, raw page information. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pageInformation:Boolean;

	/**
	 * The page marks style. Default: {@link PageMarksTypes.Roman}
	 * @type {PageMarksTypes}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pageMarksType:PageMarksTypes;

	/**
	 * PDF security printing permission. Default: {@link PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION}
	 * @type {PDFPrintAllowedEnum}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFAllowPrinting:PDFPrintAllowedEnum;

	/**
	 * Security changes allowed. Default: {@link PDFChangesAllowedEnum.CHANGE128ANYCHANGES}
	 * @type {PDFChangesAllowedEnum}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFChangesAllowed:PDFChangesAllowedEnum;

	/**
	 * Name of PDF preset to use.
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFPreset:String;

	/**
	 * The PDF standard with which this document complies. Default: {@link PDFXStandard.PDFXNONE}
	 * @type {PDFXStandard}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFXStandard:PDFXStandard;

	/**
	 * A description of the PDF standard from the selected preset.
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFXStandardDescription:String;

	/**
	 * A password string to restrict editing security settings. Default: no string
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	permissionPassword:String;

	/**
	 * If <b>true</b>, Illustrator editing capabilities should be preserved when saving the document. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	preserveEditability:Boolean;

	/**
	 * Flattening printer resolution. Default: 800.0
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	printerResolution:Number;

	/**
	 * If <b>true</b>, draw registration marks. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	registrationMarks:Boolean;

	/**
	 * Require a password to open the document. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	requireDocumentPassword:Boolean;

	/**
	 * Use a password to restrict editing security settings. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	requirePermissionPassword:Boolean;

	/**
	 * If <b>true</b>, manual trapping has been prepared for the document. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	trapped:Boolean;

	/**
	 * Draw trim marks. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	trimMarks:Boolean;

	/**
	 * The trim mark weight. Default: {@link PDFTrimMarkWeight.TRIMMARKWEIGHT0125}
	 * @type {PDFTrimMarkWeight}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	trimMarkWeight:PDFTrimMarkWeight;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * View PDF after saving. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	viewAfterSaving:Boolean;
}