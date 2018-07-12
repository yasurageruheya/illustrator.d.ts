/**
 * Options for saving a document as an Adobe PDF file, used with the {@link Document#saveAs} method. All properties are optional.
 *
 * @since CS2
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link acrobatLayers}
 * ･ {@link artboardRange}
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
 *     // Saves the current document as PDF to dest with specified options
 *     // dest contains the full path and file name to save to
 *
 *     function saveFileToPDF(dest) {
 *         var doc = app.activeDocument;
 *         if (app.documents.length > 0) {
 *             var saveName = new File(dest);
 *             saveOpts = new PDFSaveOptions();
 *             saveOpts.compatibility = PDFCompatibility.ACROBAT5;
 *             saveOpts.generateThumbnails = true;
 *             saveOpts.preserveEditability = true;
 *             doc.saveAs(saveName, saveOpts);
 *         }
 *     }
 */
declare class PDFSaveOptions extends SaveOptions
{
	/**
	 * Optional. Create Acrobat® layers from top-level layers. Acrobat 6 only. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	acrobatLayers:Boolean;

	/**
	 * Optional. This is considered for multi-asset extraction, which specifies the artboard range. An empty string extracts all the artboards. Default: empty string
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS4
	 * @version CS4
	 */
	artboardRange:String;

	/**
	 * Optional. Link 4 bleed values. Default: <b>true</b>
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
	 * Optional. Draw color bars. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorBars:Boolean;

	/**
	 * Optional. The type of color bitmap compression used. Default: {@link CompressionQuality.None}
	 * @type {CompressionQuality}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorCompression:CompressionQuality;

	/**
	 * Optional. The PDF color conversion policy. Default: {@link ColorConversion.None}
	 * @type {ColorConversion}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorConversionID:ColorConversion;

	/**
	 * Optional. The conversion target for color conversion. Default: {@link ColorDestination.None}
	 * @type {ColorDestination}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorDestinationID:ColorDestination;

	/**
	 * Optional. The color downsampling resolution in dots per inch (dpi). If 0, no downsampling is performed. Default: <b>150.0</b>
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorDownsampling:Number;

	/**
	 * Optional. Downsample if the image’s resolution is above this value. Default: <b>225.0</b>
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorDownsamplingImageThreshold:Number;

	/**
	 * Optional. How color bitmap images should be resampled. Default: {@link DownsampleMethod.NODOWNSAMPLE}
	 * @type {DownsampleMethod}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorDownsamplingMethod:DownsampleMethod;

	/**
	 * Optional. The color profile to include. Default: {@link ColorProfile.None}
	 * @type {ColorProfile}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorProfileID:ColorProfile;

	/**
	 * Optional. Tile size when compressing with JPEG2000. Default: <b>256</b>
	 * @type {Number} long
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	colorTileSize:Number;

	/**
	 * Optional. The version of the Acrobat file format to create. Default: {@link PDFCompatibility.ACROBAT5}
	 * @type {PDFCompatibility}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	compatibility:PDFCompatibility;

	/**
	 * Optional. If <b>true</b>, the line art and text should be compressed. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	compressArt:Boolean;

	/**
	 * Optional. A password string to open the document. Default: <b>no string</b>
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	documentPassword:String;

	/**
	 * Optional. If <b>true</b>, enable accessing 128-bit. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	enableAccess:Boolean;

	/**
	 * Optional. If <b>true</b>, enable copying of text 128-bit. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	enableCopy:Boolean;

	/**
	 * Optional. If <b>true</b>, enable copying and accessing 40-bit. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	enableCopyAccess:Boolean;

	/**
	 * Optional. If <b>true</b>, enable plaintext metadata 128-bit. Available only for Acrobat 6. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	enablePlainText:Boolean;

	/**
	 * Optional. The printing flattener options.
	 * @type {PrintFlattenerOptions}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	flattenerOptions:PrintFlattenerOptions;

	/**
	 * Optional. The transparency flattener preset name.
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	flattenerPreset:String;

	/**
	 * Optional. Include a subset of fonts when less than this percentage of characters is used in the document. Valid for Illustrator 9 file format. Range: <b>0.0 to 100.0</b>. Default: <b>100.0</b>
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	fontSubsetThreshold:Number;

	/**
	 * Optional. If <b>true</b>, thumbnail images are generated with the saved file. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	generateThumbnails:Boolean;

	/**
	 * Optional. Quality of grayscale bitmap compression. Default: {@link CompressionQuality.None}
	 * @type {CompressionQuality}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleCompression:CompressionQuality;

	/**
	 * Optional. Downsampling resolution in dots per inch (dpi). If 0, no downsampling is performed. Default: <b>150.0</b>
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleDownsampling:Number;

	/**
	 * Optional. Downsample if the image’s resolution is above this value. Default: <b>225.0</b>
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleDownsamplingImageThreshold:Number;

	/**
	 * Optional. How grayscale bitmap images should be resampled Default: {@link DownsampleMethod.NODOWNSAMPLE}
	 * @type {DownsampleMethod}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleDownsamplingMethod:DownsampleMethod;

	/**
	 * Optional. Tile size when compressing with JPEG2000. Default: <b>256</b>
	 * @type {Number} long
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	grayscaleTileSize:Number;

	/**
	 * Optional. Type of monochrome bitmap compression used. Default: {@link MonochromeCompression.None}
	 * @type {MonochromeCompression}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	monochromeCompression:MonochromeCompression;

	/**
	 * Optional. Downsampling resolution in dots per inch (dpi). If 0, no downsampling is performed. Default: <b>300</b>
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	monochromeDownsampling:Number;

	/**
	 * Optional. Downsample if the image’s resolution is above this value. Default: <b>450.0</b>
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	monochromeDownsamplingImageThreshold:Number;

	/**
	 * Optional. How monochrome bitmap images should be resampled. Default: {@link DownsampleMethod.NODOWNSAMPLE}
	 * @type {DownsampleMethod}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	monochromeDownsamplingMethod:DownsampleMethod;

	/**
	 * Optional. Custom offset in points for using the custom paper. Default: <b>0.0</b>
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	offset:Number;

	/**
	 * Optional. If <b>true</b>, the PDF document should be optimized for fast web viewing. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	optimization:Boolean;

	/**
	 * Optional. An optional comment to add to the PDF file, describing the intended printing condition. Default: <b>not included</b>
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	outputCondition:String;

	/**
	 * Optional. The name of a registered printing condition. Default: <b>not included</b>
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	outputConditionID:String;

	/**
	 * Optional. If <b>true</b>, raw page information. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pageInformation:Boolean;

	/**
	 * Optional. The page marks style. Default: {@link PageMarksTypes.Roman}
	 * @type {PageMarksTypes}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pageMarksType:PageMarksTypes;

	/**
	 * Optional. PDF security printing permission. Default: {@link PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION}
	 * @type {PDFPrintAllowedEnum}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFAllowPrinting:PDFPrintAllowedEnum;

	/**
	 * Optional. Security changes allowed. Default: {@link PDFChangesAllowedEnum.CHANGE128ANYCHANGES}
	 * @type {PDFChangesAllowedEnum}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFChangesAllowed:PDFChangesAllowedEnum;

	/**
	 * Optional. Name of PDF preset to use.
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFPreset:String;

	/**
	 * Optional. The PDF standard with which this document complies. Default: {@link PDFXStandard.PDFXNONE}
	 * @type {PDFXStandard}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFXStandard:PDFXStandard;

	/**
	 * Optional. A description of the PDF standard from the selected preset.
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	pDFXStandardDescription:String;

	/**
	 * Optional. A password string to restrict editing security settings. Default: <b>no string</b>
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	permissionPassword:String;

	/**
	 * Optional. If <b>true</b>, Illustrator editing capabilities should be preserved when saving the document. Default: <b>true</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	preserveEditability:Boolean;

	/**
	 * Optional. Flattening printer resolution. Default: <b>800.0</b>
	 * @type {Number} double
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	printerResolution:Number;

	/**
	 * Optional. If <b>true</b>, draw registration marks. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	registrationMarks:Boolean;

	/**
	 * Optional. Require a password to open the document. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	requireDocumentPassword:Boolean;

	/**
	 * Optional. Use a password to restrict editing security settings. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	requirePermissionPassword:Boolean;

	/**
	 * Optional. If <b>true</b>, manual trapping has been prepared for the document. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	trapped:Boolean;

	/**
	 * Optional. Draw trim marks. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	trimMarks:Boolean;

	/**
	 * Optional. The trim mark weight. Default: {@link PDFTrimMarkWeight.TRIMMARKWEIGHT0125}
	 * @type {PDFTrimMarkWeight}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	trimMarkWeight:PDFTrimMarkWeight;

	/**
	 * Optional. Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Optional. View PDF after saving. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link PDFSaveOptions}
	 * @since CS2
	 * @version CS2
	 */
	viewAfterSaving:Boolean;
}